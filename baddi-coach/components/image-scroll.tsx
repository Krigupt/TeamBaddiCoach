"use client"

import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2e9b62b6dc81a8556e22edd96affba23.jpg-c9USpvIq1VZehUxOof2iCxmLB0fsQw.jpeg",
    alt: "Professional badminton racket with shuttlecock",
    title: "Professional Equipment",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UIC-MENG-AI-Graphic-1090x1090-jIEeAcj9cQ3pIqJnjfJqKqzMIdRaml.webp",
    alt: "AI technology visualization",
    title: "AI-Powered Analysis",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/badminton-game-16014673-Hdv2Fpthm0ydurBKhYEFXhKuxlft8T.webp",
    alt: "Dynamic shuttlecock and racket shot",
    title: "Motion Analysis",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1094296236-612x612.jpg-kTHlWe2GR535hOmhKP2aNFJG0w5Zig.jpeg",
    alt: "Player in action on court",
    title: "Performance Tracking",
  },
]

export function ImageScroll() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-lg border">
      <div className="flex w-max space-x-4 p-4">
        {images.map((image, index) => (
          <Card key={index} className="w-[300px] shrink-0 bg-black/5">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{image.title}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

