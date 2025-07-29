import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import Link from "next/link";
import { GradientText } from "@/components/gradient-text";
import { AnimatedCounter } from "@/components/animated-counter";

const products = [
  {
    name: "LoveConnect",
    description:
      "Modern dating app with advanced matching algorithms and real-time messaging features",
    category: "Mobile App",
    icon: Heart,
    features: [
      "AI-powered matching",
      "Real-time chat",
      "Video calls",
      "Profile verification",
    ],
    tech: ["React Native", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/kncinnovation/loveconnect",
    demo: "https://loveconnect.demo.com",
    docs: "https://docs.loveconnect.com",
  },
  {
    name: "AI Movie Generator",
    description:
      "AI-powered tool for creating movies and video content with automated editing and effects",
    category: "AI/ML",
    icon: Film,
    features: [
      "AI video generation",
      "Automated editing",
      "Custom effects",
      "Script analysis",
    ],
    tech: ["Python", "TensorFlow", "OpenCV", "FFmpeg"],
    github: "https://github.com/kncinnovation/ai-movie-generator",
    demo: "https://aimovie.demo.com",
    docs: "https://docs.aimovie.com",
  },
  {
    name: "CleverChat",
    description:
      "GPT-based smart chatbot for customer service with natural language processing",
    category: "AI/ML",
    icon: MessageCircle,
    features: [
      "Natural language processing",
      "Multi-language support",
      "Integration APIs",
      "Analytics dashboard",
    ],
    tech: ["Python", "OpenAI GPT", "FastAPI", "Redis"],
    github: "https://github.com/kncinnovation/cleverchat",
    demo: "https://cleverchat.demo.com",
    docs: "https://docs.cleverchat.com",
  },
  {
    name: "ModernShop",
    description:
      "Full-featured eCommerce platform with modern UI and comprehensive management tools",
    category: "Web Platform",
    icon: ShoppingCart,
    features: [
      "Product management",
      "Payment processing",
      "Inventory tracking",
      "Analytics",
    ],
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/kncinnovation/modernshop",
    demo: "https://modernshop.demo.com",
    docs: "https://docs.modernshop.com",
  },
  {
    name: "BasisTradingBot",
    description:
      "Automated crypto trading bot with advanced strategies and risk management",
    category: "Blockchain",
    icon: TrendingUp,
    features: [
      "Automated trading",
      "Risk management",
      "Multiple exchanges",
      "Strategy backtesting",
    ],
    tech: ["Python", "ccxt", "pandas", "WebSocket"],
    github: "https://github.com/kncinnovation/basis-trading-bot",
    demo: "https://basisbot.demo.com",
    docs: "https://docs.basisbot.com",
  },
  {
    name: "OnMeet",
    description:
      "Online meeting and video conferencing platform with screen sharing and recording",
    category: "Communication",
    icon: Video,
    features: [
      "HD video calls",
      "Screen sharing",
      "Meeting recording",
      "Chat integration",
    ],
    tech: ["WebRTC", "Node.js", "React", "Socket.io"],
    github: "https://github.com/kncinnovation/onmeet",
    demo: "https://onmeet.demo.com",
    docs: "https://docs.onmeet.com",
  },
  {
    name: "PokerCorePlugins",
    description:
      "Advanced poker platform plugins with tournament management and analytics",
    category: "Gaming",
    icon: Gamepad2,
    features: [
      "Tournament management",
      "Player analytics",
      "Custom game modes",
      "Real-time updates",
    ],
    tech: ["C#", ".NET Core", "SignalR", "SQL Server"],
    github: "https://github.com/kncinnovation/poker-core-plugins",
    demo: "https://pokercore.demo.com",
    docs: "https://docs.pokercore.com",
  },
  {
    name: "SolSniper",
    description:
      "Solana sniper bot for NFT minting and trading with advanced monitoring",
    category: "Blockchain",
    icon: TrendingUp,
    features: [
      "NFT sniping",
      "Real-time monitoring",
      "Auto-bidding",
      "Portfolio tracking",
    ],
    tech: ["Rust", "Solana Web3.js", "React", "WebSocket"],
    github: "https://github.com/kncinnovation/solsniper",
    demo: "https://solsniper.demo.com",
    docs: "https://docs.solsniper.com",
  },
  {
    name: "MicroSIP",
    description:
      "Lightweight VoIP softphone system with HD audio and call management",
    category: "Communication",
    icon: Phone,
    features: [
      "HD audio calls",
      "Call management",
      "Contact integration",
      "Multi-account support",
    ],
    tech: ["C++", "SIP Protocol", "Qt", "PortAudio"],
    github: "https://github.com/kncinnovation/microsip",
    demo: "https://microsip.demo.com",
    docs: "https://docs.microsip.com",
  },
  {
    name: "WowsaMeet",
    description:
      "Video and audio streaming conference platform with broadcasting capabilities",
    category: "Communication",
    icon: Users,
    features: [
      "Live streaming",
      "Conference hosting",
      "Broadcasting",
      "Interactive features",
    ],
    tech: ["WebRTC", "Wowza", "React", "Node.js"],
    github: "https://github.com/kncinnovation/wowsameet",
    demo: "https://wowsameet.demo.com",
    docs: "https://docs.wowsameet.com",
  },
];

const categories = [
  "All",
  "AI/ML",
  "Blockchain",
  "Web Platform",
  "Mobile App",
  "Communication",
  "Gaming",
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <GradientText>Product Showcase</GradientText>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of innovative software
              solutions across AI/ML, blockchain, web platforms, and
              communication technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {product.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 bg-transparent"
                    >
                      <Link href={product.github} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 bg-transparent"
                    >
                      <Link href={product.demo} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 bg-transparent"
                    >
                      <Link href={product.docs} target="_blank">
                        <FileText className="h-4 w-4 mr-2" />
                        Docs
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <AnimatedCounter end={10} />
              <div className="text-gray-600 dark:text-gray-300">
                Products Built
              </div>
            </div>
            <div>
              <AnimatedCounter end={6} />
              <div className="text-gray-600 dark:text-gray-300">Categories</div>
            </div>
            <div>
              <AnimatedCounter end={20} suffix="+" />
              <div className="text-gray-600 dark:text-gray-300">
                Technologies
              </div>
            </div>
            <div>
              <AnimatedCounter end={100} suffix="%" />
              <div className="text-gray-600 dark:text-gray-300">
                Open Source
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our products showcase our capabilities, but we specialize in
            building custom solutions tailored to your specific needs and
            requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
