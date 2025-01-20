"use client"

import { Button } from "./ui/button";
import { Upload, User, Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from 'react'

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/70 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 max-w-5xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image 
              src="/baddi-logo.png" 
              alt="BaddiCoach Logo" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
            <span className="text-xl font-bold font-poppins">Baddi Coach</span>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="font-poppins flex items-center gap-8">
              <a 
                href="#" 
                className="hover:bg-gray-100 px-4 py-2 rounded-full transition-all duration-200"
              >
                Home
              </a>
              <a 
                href="#" 
                className="hover:bg-gray-100 px-4 py-2 rounded-full transition-all duration-200"
              >
                Analysis
              </a>
              <a 
                href="#" 
                className="hover:bg-gray-100 px-4 py-2 rounded-full transition-all duration-200"
              >
                Detection
              </a>
              <Button variant="outline" className="rounded-full px-6 py-2 border-2 flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 rounded-full border bg-transparent w-40 font-poppins"
                />
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
              <Button 
                variant="ghost" 
                className="rounded-full p-2 hover:bg-gray-100"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

