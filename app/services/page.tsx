import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Comprehensive solutions designed to enhance human capital capabilities and drive organizational success.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-l-4" style={{ borderLeftColor: "#27586B" }}>
              <CardHeader>
                <div
                  className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "#27586B" }}
                >
                  <span className="text-white text-2xl">📱</span>
                </div>
                <CardTitle style={{ color: "#27586B" }}>Skills Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive skills development programs designed to enhance capabilities and drive career growth.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Technical skills training</li>
                  <li>• Leadership development</li>
                  <li>• Professional certifications</li>
                  <li>• Custom training programs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: "#27586B" }}>
              <CardHeader>
                <div
                  className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "#27586B" }}
                >
                  <span className="text-white text-2xl">👥</span>
                </div>
                <CardTitle style={{ color: "#27586B" }}>Recruitment Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Executive talent acquisition and recruitment services to help organizations find the right talent.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Executive search</li>
                  <li>• Talent acquisition</li>
                  <li>• Skills assessment</li>
                  <li>• Workforce planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: "#27586B" }}>
              <CardHeader>
                <div
                  className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "#27586B" }}
                >
                  <span className="text-white text-2xl">🏗️</span>
                </div>
                <CardTitle style={{ color: "#27586B" }}>Construction Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Civil engineering and construction services that meet industry standards and client expectations.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Project management</li>
                  <li>• Civil engineering</li>
                  <li>• Infrastructure development</li>
                  <li>• Quality assurance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: "#27586B" }}>
              <CardHeader>
                <div
                  className="w-16 h-16 rounded-lg mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "#27586B" }}
                >
                  <span className="text-white text-2xl">📺</span>
                </div>
                <CardTitle style={{ color: "#27586B" }}>Media & Branding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Strategic media and branding services with 20 years of experience in creative communications.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Brand strategy</li>
                  <li>• Digital marketing</li>
                  <li>• Content creation</li>
                  <li>• Media planning</li>
                </ul>
              </CardContent>
            </Card>
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
