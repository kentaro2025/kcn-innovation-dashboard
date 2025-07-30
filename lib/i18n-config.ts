export type Locale = "en" | "zh" | "ja"

export const locales: Locale[] = ["en", "zh", "ja"]

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
}

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  zh: "🇨🇳",
  ja: "🇯🇵",
}
