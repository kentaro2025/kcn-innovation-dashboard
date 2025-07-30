"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useLocale } from "@/lib/i18n"
import { locales, localeNames } from "@/lib/i18n-config"

export function LanguageSwitcher() {
  const { locale, changeLocale, isLoading } = useLocale()

  if (isLoading) {
    return (
      <Button variant="ghost" size="sm" className="h-8 px-2 gap-1" disabled>
        <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
        <div className="hidden sm:inline w-12 h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
        <ChevronDown className="h-3 w-3 opacity-50" />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 px-2 gap-1">
          <span className="hidden sm:inline text-sm">{localeNames[locale]}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => changeLocale(loc)}
            className={`flex items-center gap-2 cursor-pointer ${locale === loc ? "bg-accent" : ""}`}
          >
            <span className="text-sm">{localeNames[loc]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
