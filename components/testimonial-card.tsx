import { Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg bg-white">
      <CardContent className="p-8">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-navy mb-1">{author}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <div className="relative">
          <Quote className="absolute -top-2 -left-2 h-8 w-8 text-coral/30" />
          <p className="pt-4 text-lg leading-relaxed text-navy/90">{quote}</p>
        </div>
      </CardContent>
    </Card>
  )
}
