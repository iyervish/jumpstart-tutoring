import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import TutorCard from "@/components/tutor-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png?height=1080&width=1920"
            alt="Students learning"
            fill
            className="object-cover brightness-[0.5]"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-cream text-navy hover:bg-cream/90">Personalized Learning</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
              Unlock Your Child's Academic Potential
            </h1>
            <p className="text-xl text-white/90 md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
              Expert tutoring with Virginia-certified teachers for students in grades K-12, specializing in reading,
              writing, math, and test preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services">
                <Button size="lg" className="h-12 px-8 text-base font-medium bg-coral hover:bg-coral/90 text-white">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 text-base font-medium bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge className="mb-2 bg-coral text-white">Our Services</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy">
                Personalized Learning Solutions
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Tailored instruction to meet the individual needs of each student
              </p>
            </div>
          </div>

          <Tabs defaultValue="personalized" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-cream">
              <TabsTrigger
                value="personalized"
                className="text-base data-[state=active]:bg-coral data-[state=active]:text-white"
              >
                One-on-One
              </TabsTrigger>
              <TabsTrigger
                value="test-prep"
                className="text-base data-[state=active]:bg-coral data-[state=active]:text-white"
              >
                Test Preparation
              </TabsTrigger>
              <TabsTrigger
                value="group"
                className="text-base data-[state=active]:bg-coral data-[state=active]:text-white"
              >
                Small Group
              </TabsTrigger>
            </TabsList>
            <TabsContent value="personalized" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/one-on-one.png?height=600&width=600"
                    alt="One-on-one tutoring"
                    width={600}
                    height={600}
                    className="rounded-2xl object-cover aspect-square shadow-coral"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-navy">Personalized One-on-One Tutoring</h3>
                  <p className="text-muted-foreground">
                    Our tutoring services offer personalized 1:1 instruction with a Virginia-certified teacher for
                    students in grades K-12. We specialize in reading, writing, and math, tailoring each session to meet
                    the individual needs of the student.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Customized learning plans based on student needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Virginia-certified teachers with classroom experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Flexible scheduling in convenient locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Regular progress updates and communication</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/services#personalized">
                      <Button className="h-11 px-8 bg-coral hover:bg-coral/90 text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="test-prep" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/test-prep.png?height=600&width=600"
                    alt="Test preparation"
                    width={600}
                    height={600}
                    className="rounded-2xl object-cover aspect-square shadow-coral"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-navy">Comprehensive Test Preparation</h3>
                  <p className="text-muted-foreground">
                    Jump Start With US Advanced Academics is offering a Test Taking Strategies Workshop for the Cogat and NNat test for rising K-2 grade students or any students who are considering  taking a one time retake in the Fall. 
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Targeted instruction in verbal, quantitative, and nonverbal reasoning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Time management and elimination techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Full-length practice tests with detailed review sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Interactive learning with games and puzzles</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/services#test-prep">
                      <Button className="h-11 px-8 bg-coral hover:bg-coral/90 text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="group" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/small-group.png?height=600&width=600"
                    alt="Small group instruction"
                    width={600}
                    height={600}
                    className="rounded-2xl object-cover aspect-square shadow-coral"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-navy">Small Group Instruction</h3>
                  <p className="text-muted-foreground">
                    Our small group instruction offers collaborative learning environments for students who benefit from
                    peer interaction. Groups typically consist of 2-4 students of similar grade levels and academic
                    needs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Collaborative learning with personalized attention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Peer interaction and discussion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Cost-effective alternative to one-on-one tutoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-coral mt-0.5 shrink-0" />
                      <span>Ideal for reading groups, math workshops, and test prep</span>
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Link href="/services#group">
                      <Button className="h-11 px-8 bg-coral hover:bg-coral/90 text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-cream">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge className="mb-2 bg-coral text-white">Our Tutors</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy">
                Meet Our Expert Educators
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Virginia-certified teachers with extensive classroom experience
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TutorCard
              name="Michelle Ward"
              title="CEO & Lead Educator"
              imageSrc="/michelle-ward.jpg?height=400&width=400"
              subjects={["Reading", "Writing", "ESOL"]}
              experience="24+ years"
              bio="Experienced educator with 24 years at Fairfax County Public Schools and founder of Jump Start Advanced Academic LLC."
            />
            <TutorCard
              name="Kayla Graham"
              title="Co-Chair & Educator"
              imageSrc="/kayla-graham.jpg?height=400&width=400"
              subjects={["Reading", "Writing", "Math"]}
              experience="5+ years"
              bio="Current 6th grade reading & writing teacher with expertise in student engagement and educational performance analysis."
            />
            <TutorCard
              name="Mia Wallace"
              title="Mathematics & Spanish Specialist"
              imageSrc="/mia-wallace.jpg?height=400&width=400"
              subjects={["Mathematics", "Spanish", "SAT Prep"]}
              experience="5+ years"
              bio="UVA graduate with a Master's in Education from GWU, specializing in mathematics up to calculus and Spanish language instruction."
            />
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-11 px-8 border-coral text-coral hover:bg-coral/10">
                Contact Our Tutors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge className="mb-2 bg-coral text-white">Our Process</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy">
                How Jump Start Tutoring Works
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                A simple, effective approach to personalized learning
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-coral/10 text-coral">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-coral/20"></div>
              </div>
              <h3 className="text-xl font-bold text-navy">Initial Consultation</h3>
              <p className="text-muted-foreground">
                We discuss your child's needs, goals, and learning style to understand how we can best support them.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-coral/10 text-coral">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-coral/20"></div>
              </div>
              <h3 className="text-xl font-bold text-navy">Tutor Matching</h3>
              <p className="text-muted-foreground">
                We pair your child with the perfect tutor based on their academic needs and personality.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-coral/10 text-coral">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-coral/20"></div>
              </div>
              <h3 className="text-xl font-bold text-navy">Personalized Plan</h3>
              <p className="text-muted-foreground">
                We develop a customized learning plan tailored to your child's specific goals and learning style.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-coral/10 text-coral">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-navy">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Regular sessions, progress updates, and adjustments to ensure your child achieves their academic goals.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="h-11 px-8 bg-coral hover:bg-coral/90 text-white">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-cream">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge className="mb-2 bg-coral text-white">Testimonials</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-navy">
                What Our Clients Say
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Hear from parents and students about their experience with Jump Start tutoring
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="As a parent, finding a teacher who genuinely connects with their students and fosters a love for learning is a true blessing. Mrs. O'Connor has been an excellent math tutor for my daughter. Her dedication to her students and her passion for teaching are evident in every lesson."
              author="Matthew L."
              role="Parent of 4th grader"
            />
            <TestimonialCard
              quote="Our son has been working with Ms. Primrose for the past year and we're not only impressed at his growth, but how much he loves working with her and enjoys the process."
              author="Neelima R."
              role="Parent of 2nd grader"
            />
            <TestimonialCard
              quote="We truly appreciate the personalized attention and commitment to each session. It’s clear she cares deeply about our daughter’s success, and we highly recommend Mrs. O’Connor to any family looking for a dedicated and adaptable tutor."
              author="Camila S."
              role="Parent of 4th and 6th grader"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-navy-gradient text-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Jump Start Your Child's Learning?
              </h2>
              <p className="text-white/90 md:text-xl/relaxed">
                Contact us today to learn more about our tutoring services and how we can help your child succeed
                academically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="h-12 px-8 text-base font-medium bg-coral hover:bg-coral/90 text-white"
                  >
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 text-base font-medium bg-transparent border-white/20 text-white hover:bg-white/10"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src="/jump-start.png?height=800&width=800" alt="Student success" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
