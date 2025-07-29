import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Cpu,
  Zap,
  Calendar,
  ExternalLink,
  Github,
} from "lucide-react";
import Link from "next/link";
import { EnhancedCard } from "@/components/enhanced-card";
import { AnimatedCounter } from "@/components/animated-counter";
import { GradientText } from "@/components/gradient-text";
import { FloatingElements } from "@/components/floating-elements";

const milestones = [
  {
    year: "2018",
    title: "Foundation & Automation",
    description:
      "Built website bots and automation tools for ticketing, betting, gaming, and eCommerce purchasing.",
  },
  {
    year: "2020",
    title: "Blockchain Specialization",
    description:
      "Specialized in blockchain engineering — DeFi dApps, NFT games and marketplaces, Solana dApps, and smart contract audits.",
  },
  {
    year: "2022",
    title: "Cloud Infrastructure",
    description:
      "Offered AWS & Azure cloud infrastructure services with full-stack engineering solutions.",
  },
  {
    year: "2024",
    title: "AI Integration",
    description:
      "Expanded into AI programming with frameworks like TensorFlow, PyTorch, YOLO, and more.",
  },
  {
    year: "2025",
    title: "Trading Innovation",
    description:
      "Focused on blockchain-based crypto trading bots and trading platforms.",
  },
];

const featuredProducts = [
  {
    name: "LoveConnect",
    description: "Modern dating app with advanced matching algorithms",
    category: "Mobile App",
    github: "https://github.com/kncinnovation/loveconnect",
    demo: "https://loveconnect.demo.com",
  },
  {
    name: "AI Movie Generator",
    description: "AI-powered tool for creating movies and video content",
    category: "AI/ML",
    github: "https://github.com/kncinnovation/ai-movie-generator",
    demo: "https://aimovie.demo.com",
  },
  {
    name: "CleverChat",
    description: "GPT-based smart chatbot for customer service",
    category: "AI/ML",
    github: "https://github.com/kncinnovation/cleverchat",
    demo: "https://cleverchat.demo.com",
  },
  {
    name: "BasisTradingBot",
    description: "Automated crypto trading bot with advanced strategies",
    category: "Blockchain",
    github: "https://github.com/kncinnovation/basis-trading-bot",
    demo: "https://basisbot.demo.com",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 lg:py-32">
        <FloatingElements />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Innovating Software, Blockchain,{" "}
              <GradientText>and AI</GradientText> for a Smarter Future
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              KNC Innovation delivers cutting-edge technology solutions across
              software development, blockchain engineering, and artificial
              intelligence to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent"
              >
                <Link href="/contact">Get In Touch</Link>
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
              <div className="text-gray-600 dark:text-gray-300">
                Years Experience
              </div>
            </div>
            <div>
              <AnimatedCounter end={10} suffix="+" />
              <div className="text-gray-600 dark:text-gray-300">
                Products Built
              </div>
            </div>
            <div>
              <AnimatedCounter end={3} />
              <div className="text-gray-600 dark:text-gray-300">
                Core Technologies
              </div>
            </div>
            <div>
              <AnimatedCounter end={100} suffix="+" />
              <div className="text-gray-600 dark:text-gray-300">
                Projects Delivered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              From automation tools to AI innovation
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600 dark:bg-blue-400"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "pr-8" : "pl-8"
                    }`}
                  >
                    <EnhancedCard
                      title={milestone.title}
                      description={milestone.description}
                      icon={Calendar}
                      badge={milestone.year}
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
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Innovative solutions across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <Card
                key={product.name}
                className="group hover:shadow-lg transition-shadow"
              >
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
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Comprehensive technology solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <CardTitle className="mb-2">Blockchain Engineering</CardTitle>
              <CardDescription>
                DeFi dApps, NFT platforms, smart contracts, and comprehensive
                blockchain solutions
              </CardDescription>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <CardTitle className="mb-2">AI/ML Solutions</CardTitle>
              <CardDescription>
                TensorFlow, PyTorch, YOLO implementations and custom AI-powered
                applications
              </CardDescription>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle className="mb-2">Full Stack Engineering</CardTitle>
              <CardDescription>
                AWS & Azure cloud infrastructure, full-stack development, and
                scalable solutions
              </CardDescription>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Innovate Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how KNC Innovation can help transform your business
            with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
