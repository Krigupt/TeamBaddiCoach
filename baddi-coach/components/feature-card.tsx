import React from 'react'

interface FeatureCardProps {
  title: string
  children: React.ReactNode
}

export function FeatureCard({ title, children }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  )
}

