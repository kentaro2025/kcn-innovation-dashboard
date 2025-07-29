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
import Link from "next/link";

const teamMembers = [
  {
    name: "Kentaro Namba",
    role: "Chief Executive Officer",
    bio: "Visionary leader with extensive experience in technology innovation and business strategy. Kentaro has been driving KNC Innovation's growth since its founding in 2018, focusing on emerging technologies and market expansion.",
    expertise: [
      "Strategic Planning",
      "Business Development",
      "Technology Vision",
      "Team Leadership",
    ],
  },
  {
    name: "Chanthai Sihabouth",
    role: "Chief Technology Officer",
    bio: "Technical architect and engineering leader with deep expertise across blockchain, AI, and cloud technologies. Chanthai oversees all technical development and ensures our solutions meet the highest standards.",
    expertise: [
      "Blockchain Development",
      "AI/ML Engineering",
      "Cloud Architecture",
      "Technical Leadership",
    ],
  },
];

const companyValues = [
  {
    icon: Target,
    title: "Innovation First",
    description:
      "We constantly push the boundaries of what's possible with technology, staying ahead of industry trends and emerging solutions.",
  },
  {
    icon: Users,
    title: "Client Success",
    description:
      "Our clients' success is our success. We build long-term partnerships and deliver solutions that drive real business value.",
  },
  {
    icon: Heart,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in everything we do, from code quality to customer service and project delivery.",
  },
];

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description:
      "KNC Innovation established with focus on automation and bot development",
    achievements: [
      "First automation tools launched",
      "Initial client base established",
    ],
  },
  {
    year: "2020",
    title: "Blockchain Expansion",
    description: "Pivoted to blockchain technology and DeFi solutions",
    achievements: [
      "DeFi dApps development",
      "NFT marketplace creation",
      "Smart contract auditing services",
    ],
  },
  {
    year: "2022",
    title: "Cloud Infrastructure",
    description: "Added comprehensive cloud services to our portfolio",
    achievements: [
      "AWS & Azure partnerships",
      "Full-stack engineering team expansion",
      "Enterprise client acquisition",
    ],
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Integrated AI and machine learning capabilities",
    achievements: [
      "TensorFlow & PyTorch implementations",
      "AI-powered product launches",
      "ML consulting services",
    ],
  },
  {
    year: "2025",
    title: "Trading Innovation",
    description: "Focus on advanced trading platforms and automation",
    achievements: [
      "Crypto trading bot development",
      "Advanced trading algorithms",
      "Platform integrations",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Building the Future of Technology
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Since 2018, we've been at the forefront of technological
              innovation, delivering cutting-edge solutions in software
              development, blockchain engineering, and artificial intelligence.
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
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To empower businesses and individuals with innovative
                  technology solutions that solve real-world problems. We strive
                  to make advanced technologies accessible, practical, and
                  transformative for our clients across all industries.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the leading technology partner for businesses seeking to
                  leverage the power of software, blockchain, and AI. We
                  envision a future where technology seamlessly integrates with
                  human needs to create unprecedented value and opportunities.
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Meet the visionaries behind KNC Innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
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
                      Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
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

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Seven years of innovation and growth
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
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
                      (achievement, achievementIndex) => (
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
            Join Our Innovation Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking for cutting-edge solutions or want to be part
            of our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
