import Image from "next/image"

interface TutorProfileProps {
  name: string
  title: string
  imageSrc: string
  experience: string[]
  education: string[]
  strengths: string[]
}

export default function TutorProfile({ name, title, imageSrc, experience, education, strengths }: TutorProfileProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-12 items-start">
      <div className="mx-auto lg:mx-0">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="rounded-lg object-cover aspect-square"
        />
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-500">{title}</p>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Professional Experience</h3>
            <ul className="space-y-1 text-gray-500">
              {experience.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Education & Certifications</h3>
            <ul className="space-y-1 text-gray-500">
              {education.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Strengths</h3>
            <ul className="space-y-1 text-gray-500">
              {strengths.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
