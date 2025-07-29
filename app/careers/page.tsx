import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Heart, Zap, Globe, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Globe,
    title: "Remote-First Culture",
    description:
      "Work from anywhere in the world with flexible hours and async collaboration",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Projects",
    description:
      "Work on innovative blockchain, AI, and full-stack projects that push boundaries",
  },
  {
    icon: Users,
    title: "Learning & Growth",
    description:
      "Continuous learning opportunities, conference attendance, and skill development",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "Flexible schedules, unlimited PTO, and focus on results over hours",
  },
];

const openRoles = [
  {
    title: "Senior Blockchain Developer",
    type: "Full-time",
    location: "Remote",
    description:
      "Lead blockchain development projects, smart contract architecture, and DeFi solutions",
    requirements: [
      "5+ years blockchain experience",
      "Solidity expertise",
      "DeFi protocol knowledge",
      "Smart contract security",
    ],
    skills: ["Solidity", "Web3.js", "Hardhat", "DeFi", "Smart Contracts"],
  },
  {
    title: "AI/ML Engineer",
    type: "Full-time",
    location: "Remote",
    description:
      "Develop and deploy machine learning models, computer vision systems, and AI-powered applications",
    requirements: [
      "3+ years ML experience",
      "Python expertise",
      "Deep learning frameworks",
      "Model deployment",
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP"],
  },
  {
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Remote",
    description:
      "Build scalable web applications, APIs, and cloud infrastructure solutions",
    requirements: [
      "4+ years full-stack experience",
      "React/Node.js",
      "Cloud platforms",
      "Database design",
    ],
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    title: "DevOps Engineer",
    type: "Contract",
    location: "Remote",
    description:
      "Manage cloud infrastructure, CI/CD pipelines, and deployment automation",
    requirements: [
      "3+ years DevOps experience",
      "AWS/Azure",
      "Docker/Kubernetes",
      "Infrastructure as Code",
    ],
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
];

const companyValues = [
  {
    title: "Innovation First",
    description:
      "We constantly explore new technologies and push the boundaries of what's possible",
  },
  {
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in code quality, security, and user experience",
  },
  {
    title: "Collaborative Spirit",
    description:
      "We believe in open communication, knowledge sharing, and team success",
  },
  {
    title: "Client Impact",
    description:
      "We focus on delivering real value and transformative solutions for our clients",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Build the Future with KNC Innovation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join a team of passionate innovators working on cutting-edge
              blockchain, AI, and full-stack solutions. We're always looking for
              talented individuals who share our vision for technological
              excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              More than just a job - it's a career in innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg mb-2">{benefit.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide our work and culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
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
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Current opportunities to join our team
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              >
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
                      <Link
                        href={`mailto:careers@kncinnovation.com?subject=Application for ${role.title}`}
                      >
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <CardDescription className="text-base leading-relaxed mt-4">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Requirements:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {role.requirements.map((req, reqIndex) => (
                        <div key={reqIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {req}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
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
              Application Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Simple and transparent hiring process
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <CardTitle className="text-lg mb-2">Apply</CardTitle>
              <CardDescription>
                Send your resume and cover letter for the position you're
                interested in
              </CardDescription>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <CardTitle className="text-lg mb-2">Screen</CardTitle>
              <CardDescription>
                Initial phone/video call to discuss your background and the role
              </CardDescription>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <CardTitle className="text-lg mb-2">Technical</CardTitle>
              <CardDescription>
                Technical interview and/or coding challenge relevant to the
                position
              </CardDescription>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                4
              </div>
              <CardTitle className="text-lg mb-2">Final</CardTitle>
              <CardDescription>
                Meet the team and discuss culture fit, compensation, and next
                steps
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See the Perfect Role?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. If you're passionate
            about innovation and want to work with cutting-edge technologies,
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="mailto:careers@kncinnovation.com?subject=General Interest">
                <Mail className="mr-2 h-5 w-5" />
                Send Us Your Resume
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
