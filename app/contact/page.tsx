import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're here to answer your questions and help you find the right tutoring solution for your child
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
              <p className="text-gray-500">
                Fill out the form below and we'll get back to you as soon as possible. We're excited to learn more about
                your child's educational needs and how we can help.
              </p>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We are pleased to offer our services throughout Northern Virginia, including:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-500">
                    <li>• Fairfax County (Vienna, McLean, Falls Church)</li>
                    <li>• Arlington County</li>
                    <li>• City of Alexandria</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Our tutoring sessions are scheduled at times convenient for you and your child. We offer:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-500">
                    <li>• After-school hours on weekdays</li>
                    <li>• Weekend availability</li>
                    <li>• Flexible summer scheduling</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    <a href="mailto:info@jumpstartadvancedacademics.com" className="hover:underline">
                      jumpstartwithus@gmail.com
                    </a>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    <a href="tel:+17035551234" className="hover:underline">
                      (917) 678-5212
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our tutoring services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>How do you match tutors with students?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We carefully match tutors with students based on the student's academic needs, learning style, and
                  personality. Our goal is to create a productive and comfortable learning relationship that helps your
                  child thrive.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Where do tutoring sessions take place?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Sessions are held in public spaces, such as libraries or office rental spaces to provide a focused and
                  quiet environment for learning. Virtual tutoring can also be arranged on a case-by-case basis.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How long are tutoring sessions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Sessions are typically one hour in length during the school year. During the summer, they can extend
                  up to 90 minutes if the client prefers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How will I know if my child is making progress?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Our tutors work closely with families, providing continuous feedback on their child's progress and
                  discussing possible next steps for reinforcing learning at home. We believe in a collaborative
                  approach to ensure your child's success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
