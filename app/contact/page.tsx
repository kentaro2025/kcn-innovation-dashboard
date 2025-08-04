"use client";

import type React from "react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n";

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/kncinnovation",
    color:
      "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/company/kncinnovation",
    color:
      "text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
  },
  {
    icon: Twitter,
    name: "Twitter",
    url: "https://twitter.com/kncinnovation",
    color:
      "text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200",
  },
];

const infoIcons: { [key: string]: React.ElementType } = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  "business-hours": Clock,
};

const serviceTypes = [
  "Blockchain Engineering",
  "AI/ML Solutions",
  "Full Stack Development",
  "Smart Contract Audit",
  "Trading Bot Development",
  "Cloud Infrastructure",
  "Consulting",
  "Other",
];

const budgetOptions = [
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "over-100k", label: "Over $100,000" },
  { value: "discuss", label: "Let's discuss" },
];

export default function ContactPage() {
  const { t, isLoading } = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg animate-pulse">{t("common.loading")}</div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    });
    setIsSubmitting(false);
    alert(t("contact_page.form.alert_success"));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = t("contact_page.info.items", []);
  const faqItems = t("contact_page.faq.items", []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t("contact_page.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("contact_page.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {t("contact_page.form.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("contact_page.form.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {t("contact_page.form.name")} *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder={t("contact_page.form.name_placeholder")}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {t("contact_page.form.email")} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder={t("contact_page.form.email_placeholder")}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">
                          {t("contact_page.form.company")}
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          placeholder={t(
                            "contact_page.form.company_placeholder"
                          )}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">
                          {t("contact_page.form.service")}
                        </Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleInputChange("service", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue
                              placeholder={t(
                                "contact_page.form.service_placeholder"
                              )}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceTypes.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">
                        {t("contact_page.form.budget")}
                      </Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t(
                              "contact_page.form.budget_placeholder"
                            )}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {t("contact_page.form.message")} *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder={t("contact_page.form.message_placeholder")}
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          {t("contact_page.form.button_sending")}
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          {t("contact_page.form.button_send")}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {t("contact_page.info.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("contact_page.info.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info: any, index: number) => {
                    const Icon = infoIcons[info.id] || Mail;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {info.title}
                          </h3>
                          <p className="text-gray-900 dark:text-white font-medium">
                            {info.value}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">
                    {t("contact_page.social.title")}
                  </CardTitle>
                  <CardDescription>
                    {t("contact_page.social.subtitle")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <Button key={index} variant="outline" size="sm" asChild>
                        <Link
                          href={social.url}
                          target="_blank"
                          className={social.color}
                        >
                          <social.icon className="h-4 w-4 mr-2" />
                          {social.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response */}
              <Card className="border-0 shadow-xl bg-blue-50 dark:bg-blue-900/20">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900 dark:text-blue-100">
                    {t("contact_page.immediate_help.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 dark:text-blue-200 mb-4">
                    {t("contact_page.immediate_help.description")}
                  </p>
                  <Button asChild className="w-full">
                    <Link href="mailto:info@kncinnovations.com">
                      <Mail className="h-4 w-4 mr-2" />
                      {t("contact_page.immediate_help.button")}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("contact_page.faq.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t("contact_page.faq.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((faq: any, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
