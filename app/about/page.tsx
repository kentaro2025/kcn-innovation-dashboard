"use client";

import type React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";

const valueIcons: { [key: string]: React.ElementType } = {
  innovation: Target,
  "client-success": Users,
  quality: Heart,
};

export default function AboutPage() {
  const { t, isLoading } = useLocale();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg animate-pulse">{t("common.loading")}</div>
      </div>
    );
  }

  const teamMembers = t("about_page.leadership.members", []);
  const companyValues = t("about_page.values.items", []);
  const milestones = t("about_page.timeline.milestones", []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t("about_page.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("about_page.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl">
                  {t("about_page.mission_vision.mission.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t("about_page.mission_vision.mission.description")}
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-2xl">
                  {t("about_page.mission_vision.vision.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t("about_page.mission_vision.vision.description")}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("about_page.values.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("about_page.values.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value: any, index: number) => {
              const Icon = valueIcons[value.id] || Heart;
              return (
                <Card key={index} className="text-center p-6">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("about_page.leadership.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("about_page.leadership.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {teamMembers.map((member: any, index: number) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`Portrait of ${member.name}`}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
                        {member.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {t("common.expertise")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map(
                        (skill: string, skillIndex: number) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("about_page.timeline.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("about_page.timeline.subtitle")}
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone: any, index: number) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="text-lg px-3 py-1">
                      {milestone.year}
                    </Badge>
                    <CardTitle className="text-xl">{milestone.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {milestone.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {milestone.achievements.map(
                      (achievement: string, achievementIndex: number) => (
                        <div
                          key={achievementIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {achievement}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("about_page.cta.title")}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("about_page.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">{t("about_page.cta.button1")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/careers">{t("about_page.cta.button2")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
