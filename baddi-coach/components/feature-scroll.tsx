"use client"

import { useRef } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
}

const features: Feature[] = [
  {
    title: "Feature 1",
    description: "Advanced motion tracking and analysis for precise feedback on your technique",
  },
  {
    title: "Feature 2",
    description: "Real-time performance metrics and personalized improvement suggestions",
  },
  {
    title: "Feature 3",
    description: "Comprehensive shot analysis and pattern recognition",
  },
  {
    title: "Feature 4",
    description: "Custom training programs based on your playing style",
  },
]

export function FeatureScroll() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
      <div className="flex w-max space-x-4 p-4">
        {features.map((feature, index) => (
          <Card key={index} className="w-[300px] shrink-0">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground whitespace-normal">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

