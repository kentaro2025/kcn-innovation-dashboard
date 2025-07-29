import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface EnhancedCardProps {
  title: string
  description?: string
  icon?: LucideIcon
  iconColor?: string
  gradient?: string
  children?: React.ReactNode
  className?: string
  hover?: boolean
  badge?: string
}

export function EnhancedCard({
  title,
  description,
  icon: Icon,
  iconColor = "text-blue-600 dark:text-blue-400",
  gradient = "from-blue-500 to-purple-600",
  children,
  className,
  hover = true,
  badge,
}: EnhancedCardProps) {
  return (
    <Card
      className={cn(
        "relative overflow-hidden border-0 shadow-lg transition-all duration-300",
        hover && "hover:shadow-xl hover:-translate-y-1",
        "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm",
        className,
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 dark:to-blue-900/10" />

      <CardHeader className="relative">
        <div className="flex items-center justify-between mb-4">
          {Icon && (
            <div
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center",
                "bg-gradient-to-br shadow-lg",
                `bg-gradient-to-br ${gradient}`,
              )}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>
          )}
          {badge && (
            <Badge variant="outline" className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              {badge}
            </Badge>
          )}
        </div>
        <CardTitle
          className={cn(
            "text-xl font-semibold",
            hover && "group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
          )}
        >
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {description}
          </CardDescription>
        )}
      </CardHeader>

      {children && <CardContent className="relative">{children}</CardContent>}
    </Card>
  )
}
