import { NavBar } from "@/components/nav-bar"
import { FeatureScroll } from "@/components/feature-scroll"
import { ImageScroll } from "@/components/image-scroll"
import { Button } from "@/components/ui/button"
import { Play, MessageCircle } from 'lucide-react'
import Image from "next/image"
import { FeatureBox } from "@/components/feature-box"
import { ChatButton } from "@/components/chat-button"
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <NavBar />

      {/* Hero Section */}
      <section className="bg-[#FDF8F5] pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 items-center">
            {/* Left side content */}
            <div className="flex flex-col items-start text-left">
              <h1 className="text-6xl font-bold leading-tight">
                <span className="text-[#2B3674]">Baddi</span>
                <span className="text-[#2D2D2D]">Coach</span>
              </h1>
              
              <p className="text-xl text-gray-600 mt-3 font-poppins">
                You're number One Badminton Coach
              </p>

              <div className="flex items-center gap-4 mt-8">
                <Button className="bg-[#557A95] hover:bg-[#456980] text-white rounded-full px-8 py-6 text-lg">
                  Learn more
                </Button>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 text-lg bg-white rounded-full px-8 py-6 border-2 hover:bg-gray-50"
                >
                  <Play className="w-6 h-6" /> Watch Video
                </Button>
              </div>
            </div>

            {/* Right side - placeholder for 3D graphic */}
            <div className="flex items-center justify-center">
              {/* Add your 3D graphic here */}
              {/* <Image src="/3d-graphic.png" alt="3D Badminton" width={500} height={500} /> */}
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 space-y-16">
        {/* Features Section */}
        <section className="space-y-12 py-16">
          <h2 className="text-6xl font-bold text-center text-[#2B3674] font-poppins">
            Features
          </h2>
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            <FeatureBox number={1} title="Feature" />
            <FeatureBox number={2} title="Feature" />
            {/* Add more feature boxes as needed */}
          </div>
        </section>

        {/* Elevate Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Elevate your Game to the next Level</h2>
          <div className="grid grid-cols-4 gap-6">
            {/* AI Technology Card */}
            <div className="relative overflow-hidden rounded-3xl bg-black text-white">
              <Image
                src="/ai-tech.png"
                alt="AI Technology"
                width={400}
                height={500}
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-b from-black/20 to-black/80">
                <div>
                  <h3 className="text-sm font-medium">AI Technology</h3>
                  <p className="text-2xl font-bold mt-2">
                    Advanced AI Analysis
                  </p>
                </div>
              </div>
            </div>

            {/* Player Card */}
            <div className="relative overflow-hidden rounded-3xl bg-black text-white">
              <Image
                src="/player.png"
                alt="Player"
                width={400}
                height={500}
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-b from-black/20 to-black/80">
                <div>
                  <h3 className="text-sm font-medium">Training</h3>
                  <p className="text-2xl font-bold mt-2">
                    Professional Techniques
                  </p>
                </div>
              </div>
            </div>

            {/* Equipment Card */}
            <div className="relative overflow-hidden rounded-3xl bg-black text-white">
              <Image
                src="/equipment.png"
                alt="Equipment"
                width={400}
                height={500}
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-b from-black/20 to-black/80">
                <div>
                  <h3 className="text-sm font-medium">Equipment</h3>
                  <p className="text-2xl font-bold mt-2">
                    Professional Techniques to improve your game
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Play Card */}
            <div className="relative overflow-hidden rounded-3xl bg-black text-white">
              <Image
                src="/dynamic.png"
                alt="Dynamic Play"
                width={400}
                height={500}
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-b from-black/20 to-black/80">
                <div>
                  <h3 className="text-sm font-medium">Dynamic Play</h3>
                  <p className="text-2xl font-bold mt-2">
                    Real-time Feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Using Industry level Tech Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge technology to analyze and improve your badminton performance
          </p>
        </section>

        {/* Dreams Section */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-[#b78846]">Making Players Achieve their DREAMS</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transform your passion into excellence with personalized coaching and advanced analytics
          </p>
        </section>
      </main>

      <ChatButton />
    </div>
  )
}

