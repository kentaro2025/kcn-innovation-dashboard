"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Heart, Zap, Globe, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/lib/i18n"

const benefitIcons: { [key: string]: React.ElementType } = {
  "Remote-First Culture": Globe,
  "Cutting-Edge Projects": Zap,
  "Learning & Growth": Users,
  "Work-Life Balance": Heart,
  远程优先文化: Globe,
  前沿项目: Zap,
  学习与成长: Users,
  工作与生活平衡: Heart,
  リモートファースト文化: Globe,
  最先端のプロジェクト: Zap,
  学習と成長: Users,
  ワークライフバランス: Heart,
}

export default function CareersPage() {
  const { t, isLoading } = useLocale()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg animate-pulse">{t("common.loading")}</div>
      </div>
    )
  }

  const benefits = t("careers_page.why_work_with_us.benefits", [])
  const companyValues = t("careers_page.values.items", [])
  const openRoles = t("careers_page.open_roles.roles", [])
  const applicationSteps = t("careers_page.application_process.steps", [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t("careers_page.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("careers_page.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("careers_page.why_work_with_us.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("careers_page.why_work_with_us.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit: any, index: number) => {
              const Icon = benefitIcons[benefit.title] || Heart
              return (
                <Card key={index} className="text-center p-6 border-0 shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{benefit.description}</CardDescription>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("careers_page.values.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("careers_page.values.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value: any, index: number) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-blue-600 dark:text-blue-400">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("careers_page.open_roles.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("careers_page.open_roles.subtitle")}</p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role: any, index: number) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{role.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline">{role.type}</Badge>
                        <Badge variant="outline">{role.location}</Badge>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href={`mailto:careers@kncinnovation.com?subject=Application for ${role.title}`}>
                        {t("careers_page.open_roles.button_apply")} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <CardDescription className="text-base leading-relaxed mt-4">{role.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{t("common.requirements")}</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {role.requirements.map((req: string, reqIndex: number) => (
                        <div key={reqIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{t("common.key_skills")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill: string, skillIndex: number) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("careers_page.application_process.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("careers_page.application_process.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {applicationSteps.map((step: any, index: number) => (
              <Card key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {index + 1}
                </div>
                <CardTitle className="text-lg mb-2">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("careers_page.cta.title")}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t("careers_page.cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="mailto:careers@kncinnovation.com?subject=General Interest">
                <Mail className="mr-2 h-5 w-5" />
                {t("careers_page.cta.button1")}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">{t("careers_page.cta.button2")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
