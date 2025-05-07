import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PricingCardProps {
  title: string
  price: string
  duration: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  popular: boolean
}

export default function PricingCard({
  title,
  price,
  duration,
  description,
  features,
  buttonText,
  buttonLink,
  popular,
}: PricingCardProps) {
  return (
    <Card className={`overflow-hidden border-none ${popular ? "shadow-xl ring-2 ring-primary" : "shadow-lg"}`}>
      <CardHeader className="p-6 pb-0">
        {popular && <Badge className="w-fit mb-2">Most Popular</Badge>}
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground"> {duration}</span>
        </div>
        <p className="text-muted-foreground mt-2">{description}</p>
      </CardHeader>
      <CardContent className="p-6">
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
        <Link href={buttonLink} className="w-full">
          <Button variant={popular ? "default" : "outline"} className="w-full">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
