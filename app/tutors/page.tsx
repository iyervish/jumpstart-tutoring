import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import TutorProfile from "@/components/tutor-profile"

export default function TutorsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Tutors</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of experienced, Virginia-certified teachers is dedicated to helping your child succeed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutor Profiles */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* Michelle Ward */}
            <TutorProfile
              name="Michelle Ward"
              title="Experienced Educator | CEO | Student-Centered Instruction"
              imageSrc="/placeholder.svg?height=400&width=400"
              experience={[
                "Current ESOL Teacher (Grades 4-6)",
                "6th Grade Teacher | 21 Years at Fairfax County Public Schools",
                "5th Grade Teacher & Dean of Student Services | 5 Years at New York City Public Schools",
                "Founder & CEO of Jump Start Advanced Academic LLC (2013-Present)",
              ]}
              education={[
                "BA in Psychology",
                "MS in Elementary Education",
                "ESOL Endorsement",
                "English Endorsement",
                "Virginia Licensed Teacher",
              ]}
              strengths={[
                "Passionate about student growth and development",
                "Experienced in supporting multilingual learners",
                "Dedicated mentor and advocate for students",
                "Entrepreneurial leader in education",
              ]}
            />

            {/* Kayla Graham */}
            <TutorProfile
              name="Kayla Graham"
              title="Experienced Educator | Co-Chair | Student Engagement & Instruction"
              imageSrc="/placeholder.svg?height=400&width=400"
              experience={[
                "Current 6th grade reading & writing teacher at Fairfax County Public Schools (2020-Present)",
                "Co-Chair and Tutor at Jump Start Advanced Academic LLC (2023-Present)",
                "Teacher at Duval County Public School, Jacksonville, FL (2 years)",
              ]}
              education={["B.S. in Teacher Preparation", "M.S.Ed in Elementary Education", "Virginia Licensed Teacher"]}
              strengths={[
                "Excellent at building positive relationships with students and families",
                "Empowers students to build confidence in their abilities",
                "Use of web-based learning resources to keep students engaged",
                "Support students overall executive functioning skills",
              ]}
            />

            {/* Mia Wallace */}
            <TutorProfile
              name="Mia Wallace"
              title="Experienced Educator | Mathematics & Spanish Specialist"
              imageSrc="/placeholder.svg?height=400&width=400"
              experience={[
                "Five years of teaching experience",
                "Specializes in mathematics up to calculus",
                "Essay writing and SAT preparation expert",
                "Fluent in Spanish",
              ]}
              education={[
                "Undergraduate degree from the University of Virginia",
                "Master's in Education from George Washington University",
              ]}
              strengths={[
                "Strong academic background and diverse skill set",
                "Excellent in mathematics up to calculus",
                "Expert in essay writing and SAT preparation",
                "Bilingual in English and Spanish",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Our Tutors */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Our Tutors Stand Out</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Jump Start with Us Advanced Academics, we pride ourselves on our exceptional team of educators who
                bring classroom experience and specialized knowledge to every tutoring session.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>All Virginia-certified teachers with classroom experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Specialized training in various learning approaches</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Experience with diverse learning needs and styles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Ongoing professional development to stay current with educational best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Passionate about helping students achieve their full potential</span>
                </li>
              </ul>
            </div>
            <div className="mx-auto lg:mx-0">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Our tutors"
                width={550}
                height={550}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Work With Our Expert Tutors</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to match your child with the perfect tutor for their learning needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button
                  variant="secondary"
                  className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow"
                >
                  Request a Tutor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
