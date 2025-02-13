'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { ChatDialog } from './chat-dialog'

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button 
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#557A95] hover:bg-[#456980] text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      <ChatDialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  )
} 