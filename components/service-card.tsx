import type React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  href: string
}

export default function ServiceCard({ icon, title, description, features, href }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 rounded-full bg-primary/10">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
        <p className="text-muted-foreground text-center mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Link href={href} className="w-full">
          <Button variant="outline" className="w-full">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
