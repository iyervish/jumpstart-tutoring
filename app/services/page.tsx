import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, BookOpen, GraduationCap, Users, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PricingCard from "@/components/pricing-card"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  href: string
}

function ServiceCard({ icon, title, description, features, href }: ServiceCardProps) {
  return (
    <Card className="border-none shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href={href} className="mt-4 block">
          <Button variant="link" className="gap-2">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge className="mb-2">Our Services</Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Personalized Tutoring Services
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Comprehensive academic support tailored to your child's unique learning needs
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Service Categories */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="One-on-One Tutoring"
              description="Personalized instruction with Virginia-certified teachers tailored to your child's specific needs and learning style."
              features={[
                "Customized learning plans",
                "Flexible scheduling",
                "Regular progress updates",
                "All K-12 subjects",
              ]}
              href="#personalized"
            />
            <ServiceCard
              icon={<GraduationCap className="h-10 w-10 text-primary" />}
              title="Test Preparation"
              description="Offering a Test Taking Strategies Workshop for the Cogat and NNAT
              tests for rising K-2 grade students or any students who are considering taking a one time retake in the Fall."
              features={[
                "Practice tests & feedback",
                "Time management strategies",
                "Pattern recognition skills",
                "Confidence building",
              ]}
              href="#test-prep"
            />
            <ServiceCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Small Group Instruction"
              description="Collaborative learning environments with 2-4 students of similar grade levels and academic needs."
              features={[
                "Peer interaction & discussion",
                "Cost-effective option",
                "Personalized attention",
                "Reading & math workshops",
              ]}
              href="#group"
            />
          </div>
        </div>
      </section>

      {/* Personalized Tutoring */}
      <section id="personalized" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <Badge>One-on-One</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Personalized One-on-One Tutoring</h2>
              <p className="text-muted-foreground md:text-lg">
                Our tutoring services offer personalized 1:1 instruction with a Virginia-certified teacher for students
                in grades K-12. We specialize in reading, writing, and math, tailoring each session to meet the
                individual needs of the student. Sessions are typically one hour in length, though during the summer,
                they can extend up to 90 minutes if the client prefers.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Sessions are held in public spaces, such as libraries or office rental spaces to provide a focused and
                quiet environment for learning, though virtual tutoring can be arranged on a case-by-case basis. Tutors
                work closely with families, providing continuous feedback on their child's progress and discussing
                possible next steps for reinforcing learning at home.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Customized learning plans based on student needs and goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Multi-sensory learning approaches including Orton Gillingham instruction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Continuous feedback and communication with families</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Flexible scheduling to accommodate busy families</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/contact">
                  <Button size="lg" className="h-11 px-8">
                    Request a Tutor
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=1000"
                alt="One-on-one tutoring"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Test Preparation */}
      <section id="test-prep" className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden order-last lg:order-first">
              <Image
                src="/placeholder.svg?height=1000&width=1000"
                alt="Test preparation"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <Badge>Test Prep</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Comprehensive Test Preparation</h2>
              <p className="text-muted-foreground md:text-lg">
              We are offering a Test Taking Strategies Workshop for the Cogat and NNAT
              tests for rising K-2 grade students or any students who are considering taking a one time retake in the Fall. 
              <br />
              <br />
              COGAT session July 7-10 (9am-12pm)
              <br />
              NNAT session August 4-8 (9am-12pm)
              </p>
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Our Approach Includes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Targeted Instruction:</span>
                        <p className="text-muted-foreground">
                          Covering verbal, quantitative, and nonverbal reasoning with focus on visual-spatial reasoning,
                          pattern recognition, and problem-solving.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Test-Taking Strategies:</span>
                        <p className="text-muted-foreground">
                          Time management, elimination techniques, and pattern recognition skills.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Practice Tests & Feedback:</span>
                        <p className="text-muted-foreground">
                          Full-length, timed practice tests followed by detailed review sessions.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium">Interactive Learning:</span>
                        <p className="text-muted-foreground">
                          Games, puzzles, and hands-on activities to make learning enjoyable.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/contact">
                  <Button size="lg" className="h-11 px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Group Instruction */}
      <section id="group" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <Badge>Small Group</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Small Group Instruction</h2>
              <p className="text-muted-foreground md:text-lg">
                In addition to our one-on-one tutoring, we offer small group instruction for students who benefit from
                collaborative learning environments. Our small groups typically consist of 2-4 students of similar grade
                levels and academic needs, allowing for personalized attention while fostering peer interaction and
                discussion.
              </p>
              <p className="text-muted-foreground md:text-lg">
                Small group sessions are particularly effective for reading groups, math workshops, and test
                preparation. Students can learn from each other's questions and insights while still receiving the
                individualized support they need from our certified teachers.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Collaborative learning with personalized attention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Peer interaction and discussion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Cost-effective alternative to one-on-one tutoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>Ideal for reading groups, math workshops, and test prep</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link href="/contact">
                  <Button size="lg" className="h-11 px-8">
                    Inquire About Groups
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=1000&width=1000"
                alt="Small group instruction"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="mb-2">Pricing</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Affordable tutoring options to meet your child's educational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="One-on-One Tutoring"
              price="$80"
              duration="per hour"
              description="Personalized instruction with a certified teacher"
              features={["Customized learning plan", "Progress reports", "Flexible scheduling", "All K-12 subjects"]}
              buttonText="Get Started"
              buttonLink="/contact"
              popular={true}
            />
            <PricingCard
              title="Small Group Sessions"
              price="$45"
              duration="per hour, per student"
              description="Collaborative learning with 2-4 students"
              features={["Peer interaction", "Cost-effective option", "Personalized attention", "Similar grade levels"]}
              buttonText="Get Started"
              buttonLink="/contact"
              popular={false}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Need a custom plan? Contact us to discuss your specific requirements.
            </p>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-11 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge className="mb-2">Details</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Service Information</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              What to expect when working with Jump Start with Us Advanced Academics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Session Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>One hour sessions during the school year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Up to 90-minute sessions available during summer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Flexible scheduling to accommodate busy families</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Regular progress updates and communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Locations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Northern Virginia (NoVA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Fairfax County (Vienna, McLean, Falls Church)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Arlington County</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>City of Alexandria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Virtual tutoring available on case-by-case basis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                Contact us today to learn more about our services and how we can help your child succeed academically.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="h-12 px-8 text-base font-medium">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
