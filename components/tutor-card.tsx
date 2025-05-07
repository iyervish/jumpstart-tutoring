import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface TutorCardProps {
  name: string
  title: string
  imageSrc: string
  subjects: string[]
  experience: string
  bio: string
}

export default function TutorCard({ name, title, imageSrc, subjects, experience, bio }: TutorCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg bg-white">
      <div className="relative h-72">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1 text-navy">{name}</h3>
        <p className="text-muted-foreground mb-3">{title}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {subjects.map((subject, index) => (
            <Badge key={index} variant="secondary" className="bg-cream text-navy">
              {subject}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="font-normal text-coral border-coral">
            {experience} experience
          </Badge>
        </div>
        <p className="text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  )
}
