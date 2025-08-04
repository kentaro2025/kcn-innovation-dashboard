"use client"

import { useState, useEffect, createContext, useContext, type ReactNode } from "react"
import { type Locale, locales } from "./i18n-config"

// Pre-import all translations synchronously
import enTranslations from "../locales/en.json"
import zhTranslations from "../locales/zh.json"
import jaTranslations from "../locales/ja.json"
import frTranslations from "../locales/fr.json"
import viTranslations from "../locales/vi.json"

const translations: Record<Locale, any> = {
  en: enTranslations,
  zh: zhTranslations,
  ja: jaTranslations,
  fr: frTranslations,
  vi: viTranslations,
}

interface I18nContextType {
  locale: Locale
  changeLocale: (newLocale: Locale) => void
  t: (key: string, fallback?: any) => any
  isLoading: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get locale from localStorage or browser language
    const savedLocale = localStorage.getItem("locale") as Locale
    const browserLocale = navigator.language.split("-")[0] as Locale

    const initialLocale = savedLocale || (locales.includes(browserLocale) ? browserLocale : "en")

    setLocale(initialLocale)
    setIsLoading(false)

    // Update document language
    document.documentElement.lang = initialLocale
  }, [])

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)

    // Update document language
    document.documentElement.lang = newLocale
  }

  const t = (key: string, fallback?: any): any => {
    const keys = key.split(".")
    let value = translations[locale]

    try {
      for (const k of keys) {
        if (value === undefined) {
          break
        }
        value = value[k]
      }
    } catch (e) {
      return fallback || key
    }

    return value !== undefined ? value : fallback || key
  }

  const contextValue: I18nContextType = {
    locale,
    changeLocale,
    t,
    isLoading,
  }

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}

export const useLocale = () => {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within an I18nProvider")
  }
  return context
}
