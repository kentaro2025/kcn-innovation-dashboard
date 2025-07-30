"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Cpu, Zap, Shield, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import { EnhancedCard } from "@/components/enhanced-card"
import { GradientText } from "@/components/gradient-text"
import { useLocale } from "@/lib/i18n"

const serviceIcons: { [key: string]: React.ElementType } = {
  "Blockchain Engineering": Code,
  "AI/ML Solutions": Cpu,
  "Full Stack & Cloud Engineering": Zap,
  "Smart Contract Audits": Shield,
  "Trading Bots & Platforms": TrendingUp,
  区块链工程: Code,
  "AI/ML解决方案": Cpu,
  全栈和云工程: Zap,
  智能合约审计: Shield,
  交易机器人和平台: TrendingUp,
  ブロックチェーンエンジニアリング: Code,
  "AI/MLソリューション": Cpu,
  "フルスタック＆クラウドエンジニアリング": Zap,
  スマートコントラクト監査: Shield,
  "取引ボット＆プラットフォーム": TrendingUp,
}

const colorClasses: { [key: string]: { bg: string; text: string; darkBg: string; darkText: string } } = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    darkBg: "dark:bg-blue-900",
    darkText: "dark:text-blue-400",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    darkBg: "dark:bg-purple-900",
    darkText: "dark:text-purple-400",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    darkBg: "dark:bg-green-900",
    darkText: "dark:text-green-400",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
    darkBg: "dark:bg-red-900",
    darkText: "dark:text-red-400",
  },
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
    darkBg: "dark:bg-yellow-900",
    darkText: "dark:text-yellow-400",
  },
}

export default function ServicesPage() {
  const { t, isLoading } = useLocale()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg animate-pulse">{t("common.loading")}</div>
      </div>
    )
  }

  const services = t("services_page.services", [])
  const processSteps = t("services_page.process.steps", [])
  const whyChooseUs = t("services_page.why_choose_us.reasons", [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <GradientText>{t("services_page.hero.title")}</GradientText>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("services_page.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service: any, index: number) => {
              const Icon = serviceIcons[service.title] || Code
              const colors = colorClasses[service.color] || colorClasses.blue
              return (
                <div
                  key={index}
                  className={`${index % 2 === 1 ? "lg:flex-row-reverse" : ""} lg:flex lg:items-center lg:gap-12`}
                >
                  <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <Card className="h-full border-0 shadow-xl">
                      <CardHeader className="pb-6">
                        <div
                          className={`w-16 h-16 ${colors.bg} ${colors.darkBg} rounded-xl flex items-center justify-center mb-4`}
                        >
                          <Icon className={`h-8 w-8 ${colors.text} ${colors.darkText}`} />
                        </div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            {t("common.key_services")}
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {service.features.map((feature: string, featureIndex: number) => (
                              <div key={featureIndex} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                                <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="lg:w-1/2 space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {t("common.technologies")}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {(service.technologies || []).map((tech: string, techIndex: number) => (
                          <Badge key={techIndex} variant="outline" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        {t("common.recent_projects")}
                      </h3>
                      <div className="space-y-3">
                        {service.projects.map((project: string, projectIndex: number) => (
                          <div
                            key={projectIndex}
                            className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-300">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("services_page.process.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("services_page.process.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step: any, index: number) => (
              <EnhancedCard
                key={index}
                title={step.title}
                description={step.description}
                className="text-center p-6 relative"
                gradient={`from-blue-${500 + index * 100} to-purple-${500 + index * 100}`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                  {`0${index + 1}`}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800"></div>
                )}
              </EnhancedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("services_page.why_choose_us.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("services_page.why_choose_us.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason: any, index: number) => (
              <Card key={index} className="text-center p-6">
                <CardTitle className="text-lg mb-2 text-blue-600 dark:text-blue-400">{reason.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{reason.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("services_page.cta.title")}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t("services_page.cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">{t("services_page.cta.button1")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/products">{t("services_page.cta.button2")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
