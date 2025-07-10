"use client"

import { ScrollReveal } from "./scroll-reveal"
import type { ReactNode } from "react"

interface StaggeredRevealProps {
  children: ReactNode[]
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  className?: string
}

export function StaggeredReveal({
  children,
  staggerDelay = 100,
  direction = "up",
  className = "",
}: StaggeredRevealProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollReveal key={index} delay={index * staggerDelay} direction={direction} duration={600}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}
