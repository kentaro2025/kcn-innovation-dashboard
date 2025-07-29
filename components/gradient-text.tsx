import type React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  gradient?: string
}

export function GradientText({
  children,
  className,
  gradient = "from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300",
}: GradientTextProps) {
  return (
    <span className={cn("bg-gradient-to-r bg-clip-text text-transparent font-bold", gradient, className)}>
      {children}
    </span>
  )
}
