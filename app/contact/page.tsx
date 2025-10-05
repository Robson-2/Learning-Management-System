import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Ready to enhance your organization's capabilities? Get in touch with our expert team today.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#27586B" }}>
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27586B]"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27586B]"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27586B]"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27586B]"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27586B]">
                    <option>Select a service</option>
                    <option>Skills Development & Training</option>
                    <option>Recruitment Services</option>
                    <option>Construction Services</option>
                    <option>Media & Branding</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27586B]"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <Button style={{ backgroundColor: "#27586B" }} className="w-full text-white hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#27586B" }}>
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're here to help you achieve your goals. Contact us through any of the following channels.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle style={{ color: "#27586B" }}>📍 Johannesburg Office</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-gray-600">Howard House, Office No. 206, 2nd Floor</p>
                    <p className="text-gray-600">23 Loveday Street, Marshalltown</p>
                    <p className="text-gray-600">Johannesburg, 2107</p>
                    <p style={{ color: "#27586B" }}>☎ +27 11 492 1264</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle style={{ color: "#27586B" }}>📍 Durban Office</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-gray-600">Commercial City Building, Office No. 1138</p>
                    <p className="text-gray-600">45 Dr AB Xuma Street</p>
                    <p className="text-gray-600">Durban, 4001</p>
                    <p style={{ color: "#27586B" }}>☎ +27 31 301 1408</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle style={{ color: "#27586B" }}>✉️ Email & Online</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p style={{ color: "#27586B" }}>admin@amasiko.co.za</p>
                    <p className="text-gray-600">www.amasiko.co.za</p>
                    <p className="text-gray-600">Response time: Within 24 hours</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#27586B" }}>
                  Business Hours
                </h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white">
          <p className="opacity-90">© 2025 Amasiko Group. All rights reserved. | Level 1 B-BBEE Enterprise</p>
        </div>
      </footer>
    </div>
  )
}
