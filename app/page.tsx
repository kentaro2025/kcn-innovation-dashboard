"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Cpu, Zap, Calendar, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { EnhancedCard } from "@/components/enhanced-card"
import { AnimatedCounter } from "@/components/animated-counter"
import { GradientText } from "@/components/gradient-text"
import { FloatingElements } from "@/components/floating-elements"
import { useLocale } from "@/lib/i18n"

const featuredProducts = [
  {
    name: "LoveConnect",
    descriptionKey: "featuredProducts.loveConnect.description",
    category: "Mobile App",
    github: "https://github.com/kncinnovation/loveconnect",
    demo: "https://loveconnect.demo.com",
  },
  {
    name: "AI Movie Generator",
    descriptionKey: "featuredProducts.aiMovie.description",
    category: "AI/ML",
    github: "https://github.com/kncinnovation/ai-movie-generator",
    demo: "https://aimovie.demo.com",
  },
  {
    name: "CleverChat",
    descriptionKey: "featuredProducts.cleverChat.description",
    category: "AI/ML",
    github: "https://github.com/kncinnovation/cleverchat",
    demo: "https://cleverchat.demo.com",
  },
  {
    name: "BasisTradingBot",
    descriptionKey: "featuredProducts.basisBot.description",
    category: "Blockchain",
    github: "https://github.com/kncinnovation/basis-trading-bot",
    demo: "https://basisbot.demo.com",
  },
]

export default function HomePage() {
  const { t, isLoading } = useLocale()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg animate-pulse">{t("common.loading")}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32">
        <FloatingElements />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t("hero.title")
                .split("and AI")
                .map((part, index) =>
                  index === 0 ? (
                    <span key={index}>
                      {part}
                      <GradientText>and AI</GradientText>
                    </span>
                  ) : (
                    <span key={index}>{part}</span>
                  ),
                )}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">{t("hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/products">
                  {t("hero.exploreProducts")} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Link href="/contact">{t("hero.getInTouch")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <AnimatedCounter end={7} suffix="+" />
              <div className="text-gray-600 dark:text-gray-300">{t("stats.yearsExperience")}</div>
            </div>
            <div>
              <AnimatedCounter end={10} suffix="+" />
              <div className="text-gray-600 dark:text-gray-300">{t("stats.productsBuilt")}</div>
            </div>
            <div>
              <AnimatedCounter end={3} />
              <div className="text-gray-600 dark:text-gray-300">{t("stats.coreTechnologies")}</div>
            </div>
            <div>
              <AnimatedCounter end={100} suffix="+" />
              <div className="text-gray-600 dark:text-gray-300">{t("stats.projectsDelivered")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("journey.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("journey.subtitle")}</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600 dark:bg-blue-400"></div>
            <div className="space-y-12">
              {["2018", "2020", "2022", "2024", "2025"].map((year, index) => (
                <div
                  key={year}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                    <EnhancedCard
                      title={t(`journey.milestones.${year}.title`)}
                      description={t(`journey.milestones.${year}.description`)}
                      icon={Calendar}
                      badge={year}
                      gradient="from-blue-500 to-purple-600"
                      hover={true}
                    />
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("featuredProducts.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("featuredProducts.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <Card key={product.name} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{product.category}</Badge>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={product.github} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={product.demo} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {product.name === "LoveConnect" && "Modern dating app with advanced matching algorithms"}
                    {product.name === "AI Movie Generator" && "AI-powered tool for creating movies and video content"}
                    {product.name === "CleverChat" && "GPT-based smart chatbot for customer service"}
                    {product.name === "BasisTradingBot" && "Automated crypto trading bot with advanced strategies"}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/products">
                {t("featuredProducts.viewAll")} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t("services.title")}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("services.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="mb-2">{t("services.blockchain.title")}</CardTitle>
              <CardDescription>{t("services.blockchain.description")}</CardDescription>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="mb-2">{t("services.ai.title")}</CardTitle>
              <CardDescription>{t("services.ai.description")}</CardDescription>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="mb-2">{t("services.fullstack.title")}</CardTitle>
              <CardDescription>{t("services.fullstack.description")}</CardDescription>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">{t("services.learnMore")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("cta.title")}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">{t("cta.startProject")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/about">{t("cta.learnAbout")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
