"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface EnhancedCardProps {
  title: string
  description: string
  icon?: LucideIcon
  badge?: string
  gradient?: string
  hover?: boolean
  className?: string
  children?: React.ReactNode
}

export function EnhancedCard({
  title,
  description,
  icon: Icon,
  badge,
  gradient = "from-blue-500 to-purple-600",
  hover = false,
  className,
  children,
}: EnhancedCardProps) {
  return (
    <Card
      className={cn(
        "bg-white dark:bg-gray-800 shadow-lg border-0",
        hover && "hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <CardHeader>
        {badge && (
          <Badge variant="outline" className="w-fit mb-2">
            {badge}
          </Badge>
        )}
        {Icon && (
          <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center mb-4`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  )
}
