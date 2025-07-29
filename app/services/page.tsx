import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Cpu, Zap, Shield, TrendingUp, CheckCircle } from "lucide-react";
import Link from "next/link";
import { EnhancedCard } from "@/components/enhanced-card";
import { GradientText } from "@/components/gradient-text";

const services = [
  {
    title: "Blockchain Engineering",
    description:
      "Comprehensive blockchain solutions from smart contracts to full dApp development",
    icon: Code,
    color: "blue",
    features: [
      "DeFi dApp Development",
      "NFT Games & Marketplaces",
      "Solana dApp Creation",
      "Smart Contract Development",
      "Smart Contract Auditing",
      "Tokenomics Design",
      "Cross-chain Solutions",
      "Blockchain Consulting",
    ],
    technologies: [
      "Solidity",
      "Rust",
      "Web3.js",
      "Ethers.js",
      "Hardhat",
      "Truffle",
      "Solana",
      "Ethereum",
    ],
    projects: [
      "DeFi Trading Platform",
      "NFT Marketplace",
      "Gaming Token Economy",
      "Cross-chain Bridge",
    ],
  },
  {
    title: "AI/ML Solutions",
    description:
      "Advanced artificial intelligence and machine learning implementations",
    icon: Cpu,
    color: "purple",
    features: [
      "Custom AI Model Development",
      "Computer Vision Solutions",
      "Natural Language Processing",
      "Predictive Analytics",
      "AI-Powered Automation",
      "Machine Learning Consulting",
      "Model Training & Optimization",
      "AI Integration Services",
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "YOLO",
      "OpenCV",
      "scikit-learn",
      "Keras",
      "Hugging Face",
      "OpenAI",
    ],
    projects: [
      "AI Movie Generator",
      "CleverChat GPT Bot",
      "Computer Vision System",
      "Predictive Trading Models",
    ],
  },
  {
    title: "Full Stack & Cloud Engineering",
    description: "Scalable web applications and cloud infrastructure solutions",
    icon: Zap,
    color: "green",
    features: [
      "Full Stack Web Development",
      "Cloud Architecture Design",
      "AWS & Azure Implementation",
      "Microservices Architecture",
      "API Development & Integration",
      "Database Design & Optimization",
      "DevOps & CI/CD Pipelines",
      "Performance Optimization",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
    ],
    projects: [
      "ModernShop eCommerce",
      "OnMeet Video Platform",
      "Cloud Migration Project",
      "Enterprise API Gateway",
    ],
  },
  {
    title: "Smart Contract Audits",
    description: "Comprehensive security audits and vulnerability assessments",
    icon: Shield,
    color: "red",
    features: [
      "Security Vulnerability Assessment",
      "Code Review & Analysis",
      "Gas Optimization",
      "Compliance Verification",
      "Penetration Testing",
      "Risk Assessment Reports",
      "Remediation Guidance",
      "Ongoing Security Monitoring",
    ],
    technologies: [
      "Mythril",
      "Slither",
      "Echidna",
      "Manticore",
      "Foundry",
      "Hardhat",
      "Remix",
      "OpenZeppelin",
    ],
    projects: [
      "DeFi Protocol Audit",
      "NFT Contract Review",
      "DAO Governance Audit",
      "Token Contract Analysis",
    ],
  },
  {
    title: "Trading Bots & Platforms",
    description: "Automated trading solutions and platform development",
    icon: TrendingUp,
    color: "yellow",
    features: [
      "Crypto Trading Bot Development",
      "Algorithmic Trading Strategies",
      "Portfolio Management Systems",
      "Risk Management Tools",
      "Market Data Integration",
      "Backtesting Frameworks",
      "Exchange API Integration",
      "Trading Platform Development",
    ],
    technologies: [
      "Python",
      "ccxt",
      "pandas",
      "NumPy",
      "WebSocket",
      "REST APIs",
      "PostgreSQL",
      "Redis",
    ],
    projects: [
      "BasisTradingBot",
      "SolSniper NFT Bot",
      "Multi-Exchange Arbitrage",
      "Portfolio Analytics Dashboard",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, define project scope, and create a detailed roadmap.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "Our team designs the system architecture and creates technical specifications.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We build your solution using best practices with continuous testing and quality assurance.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "We deploy your solution and provide ongoing support and maintenance.",
  },
];

const whyChooseUs = [
  {
    title: "7+ Years Experience",
    description:
      "Proven track record since 2018 across multiple technology domains",
  },
  {
    title: "Full-Stack Expertise",
    description:
      "End-to-end solutions from frontend to blockchain and AI integration",
  },
  {
    title: "Quality Assurance",
    description:
      "Rigorous testing and security audits for all our deliverables",
  },
  {
    title: "Ongoing Support",
    description: "Continuous maintenance and support for all our solutions",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <GradientText>Comprehensive Technology</GradientText> Solutions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From blockchain engineering to AI implementation, we provide
              end-to-end technology solutions that drive innovation and business
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } lg:flex lg:items-center lg:gap-12`}
              >
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <Card className="h-full border-0 shadow-xl">
                    <CardHeader className="pb-6">
                      <div
                        className={`w-16 h-16 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-xl flex items-center justify-center mb-4`}
                      >
                        <service.icon
                          className={`h-8 w-8 text-${service.color}-600 dark:text-${service.color}-400`}
                        />
                      </div>
                      <CardTitle className="text-2xl">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Services:
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {feature}
                              </span>
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
                      Technologies We Use
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Recent Projects
                    </h3>
                    <div className="space-y-3">
                      {service.projects.map((project, projectIndex) => (
                        <div
                          key={projectIndex}
                          className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">
                            {project}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <EnhancedCard
                key={index}
                title={step.title}
                description={step.description}
                className="text-center p-6 relative"
                gradient={`from-blue-${500 + index * 100} to-purple-${
                  500 + index * 100
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                  {step.step}
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
              Why Choose KNC Innovation?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              What sets us apart in the technology landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center p-6">
                <CardTitle className="text-lg mb-2 text-blue-600 dark:text-blue-400">
                  {reason.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {reason.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help bring your technology
            vision to life. Contact us for a free consultation and project
            assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/products">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
