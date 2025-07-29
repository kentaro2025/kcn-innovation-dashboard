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

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@kncinnovation.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (201) 555-0123",
    description: "Call us during business hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Little Ferry, NJ",
    description: "Remote-first with East Coast presence",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri 9AM-6PM EST",
    description: "We respond within 24 hours",
  },
];

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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    });

    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Build Something Amazing Together
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to transform your ideas into reality? Contact us to discuss
              your project and discover how KNC Innovation can help you achieve
              your technology goals.
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
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) =>
                            handleInputChange("service", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
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
                      <Label htmlFor="budget">Project Budget</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          handleInputChange("budget", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">
                            Under $10,000
                          </SelectItem>
                          <SelectItem value="10k-25k">
                            $10,000 - $25,000
                          </SelectItem>
                          <SelectItem value="25k-50k">
                            $25,000 - $50,000
                          </SelectItem>
                          <SelectItem value="50k-100k">
                            $50,000 - $100,000
                          </SelectItem>
                          <SelectItem value="over-100k">
                            Over $100,000
                          </SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us about your project, requirements, timeline, and any specific technologies you'd like us to use..."
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
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
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
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
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
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                  <CardDescription>
                    Stay updated with our latest projects
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
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 dark:text-blue-200 mb-4">
                    For urgent inquiries or quick questions, reach out directly:
                  </p>
                  <Button asChild className="w-full">
                    <Link href="mailto:info@kncinnovation.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Us Directly
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What's your typical project timeline?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Project timelines vary based on complexity. Simple
                  applications take 4-8 weeks, while complex blockchain or AI
                  solutions may take 3-6 months. We provide detailed timelines
                  during our initial consultation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you work with startups?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We love working with startups and have flexible engagement
                  models. We can work with equity arrangements, phased
                  development, or MVP-focused approaches to fit your budget and
                  timeline.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What technologies do you specialize in?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We specialize in blockchain (Solidity, Rust, Solana), AI/ML
                  (TensorFlow, PyTorch), full-stack development (React, Node.js,
                  Python), and cloud infrastructure (AWS, Azure). Check our
                  services page for the complete list.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you provide ongoing support?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes, we offer comprehensive support and maintenance packages.
                  This includes bug fixes, security updates, performance
                  optimization, and feature enhancements based on your needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
