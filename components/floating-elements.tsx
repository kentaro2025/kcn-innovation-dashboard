"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 dark:bg-blue-400/10 rounded-full animate-pulse" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 dark:bg-purple-400/10 rounded-lg rotate-45 animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-green-500/10 dark:bg-green-400/10 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-40 w-24 h-24 bg-yellow-500/10 dark:bg-yellow-400/10 rounded-lg animate-bounce"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
    </div>
  )
}
