"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  FileText,
  Heart,
  Film,
  MessageCircle,
  ShoppingCart,
  TrendingUp,
  Video,
  Gamepad2,
  Phone,
  Users,
} from "lucide-react"
import Link from "next/link"
import { GradientText } from "@/components/gradient-text"
import { AnimatedCounter } from "@/components/animated-counter"
import { useLocale } from "@/lib/i18n"

const productIcons: { [key: string]: React.ElementType } = {
  LoveConnect: Heart,
  "AI Movie Generator": Film,
  CleverChat: MessageCircle,
  ModernShop: ShoppingCart,
  BasisTradingBot: TrendingUp,
  OnMeet: Video,
  PokerCorePlugins: Gamepad2,
  SolSniper: TrendingUp,
  MicroSIP: Phone,
  WowsaMeet: Users,
}

export default function ProductsPage() {
  const { t, isLoading } = useLocale()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg animate-pulse">{t("common.loading")}</div>
      </div>
    )
  }

  const products = t("products_page.products", [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <GradientText>{t("products_page.hero.title")}</GradientText>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("products_page.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product: any, index: number) => {
              const Icon = productIcons[product.name] || Users
              const githubUrl = `https://github.com/kncinnovation/${product.name.toLowerCase().replace(/\s/g, "-")}`
              const demoUrl = `https://${product.name.toLowerCase().replace(/\s/g, "")}.demo.com`
              const docsUrl = `https://docs.${product.name.toLowerCase().replace(/\s/g, "")}.com`

              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t("common.key_features")}</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {product.features.map((feature: string, featureIndex: number) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                        <Link href={githubUrl} target="_blank">
                          <Github className="h-4 w-4 mr-2" />
                          {t("common.code")}
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                        <Link href={demoUrl} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {t("common.demo")}
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                        <Link href={docsUrl} target="_blank">
                          <FileText className="h-4 w-4 mr-2" />
                          {t("common.docs")}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <AnimatedCounter end={10} />
              <div className="text-gray-600 dark:text-gray-300">{t("products_page.stats.products")}</div>
            </div>
            <div>
              <AnimatedCounter end={6} />
              <div className="text-gray-600 dark:text-gray-300">{t("products_page.stats.categories")}</div>
            </div>
            <div>
              <AnimatedCounter end={20} suffix="+" />
              <div className="text-gray-600 dark:text-gray-300">{t("products_page.stats.technologies")}</div>
            </div>
            <div>
              <AnimatedCounter end={100} suffix="%" />
              <div className="text-gray-600 dark:text-gray-300">{t("products_page.stats.openSource")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("products_page.cta.title")}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t("products_page.cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">{t("products_page.cta.button1")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/services">{t("products_page.cta.button2")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
