import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white max-w-6xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Empowering Excellence Through <span className="text-white">Skills Development</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Your trusted 100% Black female owned enterprise delivering high quality training, recruitment, and
            development solutions across South Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Link href="/training" className="w-full sm:w-auto">
              <Button className="bg-white text-[#27586B] hover:bg-gray-100 px-8 py-3 w-full sm:w-auto font-semibold">
                Explore Training Programs
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#27586B] px-8 py-3 bg-transparent w-full sm:w-auto font-semibold"
              >
                Our Mission & Vision
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#27586B" }}>
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Guiding principles that drive our commitment to excellence and transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card
              className="border-l-4 shadow-lg hover:shadow-xl transition-shadow"
              style={{ borderLeftColor: "#27586B" }}
            >
              <CardHeader className="pb-4">
                <div
                  className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center"
                  style={{ backgroundColor: "#27586B" }}
                >
                  <span className="text-white text-2xl">👁️</span>
                </div>
                <CardTitle className="text-xl" style={{ color: "#27586B" }}>
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  To create high-quality, scalable services aligned with clients' strategic objectives, while
                  contributing to the socio-economic advancement of South Africa's working services sector providers in
                  recruitment, skills development, training, and media advertising.
                </CardDescription>
              </CardContent>
            </Card>

            <Card
              className="border-l-4 shadow-lg hover:shadow-xl transition-shadow"
              style={{ borderLeftColor: "#27586B" }}
            >
              <CardHeader className="pb-4">
                <div
                  className="w-14 h-14 rounded-lg mb-6 flex items-center justify-center"
                  style={{ backgroundColor: "#27586B" }}
                >
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <CardTitle className="text-xl" style={{ color: "#27586B" }}>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  To provide solutions that enhance human capital capabilities, foster innovation, and drive sustainable
                  growth. We deliver comprehensive technical partnerships with clients, serving as a preferred service
                  provider across all operations. We pursue excellence through continuous learning and technology as a
                  leading Black-owned service provider.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "#27586B" }}>
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to excellence and transformation.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "30+", label: "Live Qualification Programs" },
              { number: "85+", label: "Cross-Skilling Courses" },
              { number: "1,500+", label: "Delegates Trained" },
              { number: "23", label: "Years of Excellence" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3" style={{ color: "#27586B" }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#27586B" }}>
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Comprehensive solutions designed to enhance human capital capabilities and drive organizational success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "📱",
                title: "Skills Development",
                desc: "Comprehensive skills development programs designed to enhance capabilities and drive career growth.",
              },
              {
                icon: "👥",
                title: "Recruitment",
                desc: "Executive talent acquisition and recruitment services to help organizations find the right talent.",
              },
              {
                icon: "🏗️",
                title: "Construction",
                desc: "Civil engineering and construction services that meet industry standards and client expectations.",
              },
              {
                icon: "📺",
                title: "Media & Branding",
                desc: "Strategic media and branding services with 20 years of experience in creative communications.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div
                    className="w-16 h-16 rounded-lg mx-auto mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "#27586B" }}
                  >
                    <span className="text-white text-2xl">{service.icon}</span>
                  </div>
                  <CardTitle className="text-lg" style={{ color: "#27586B" }}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{service.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#27586B" }}>
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to enhance your organization's capabilities? Contact us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: "#27586B" }}>
                  <span>📍</span> Johannesburg Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Howard House, Office No. 206, 2nd Floor</p>
                <p className="text-gray-600">23 Loveday Street, Marshalltown</p>
                <p className="text-gray-600">Johannesburg, 2107</p>
                <p className="font-semibold" style={{ color: "#27586B" }}>
                  ☎ +27 11 492 1264
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{ color: "#27586B" }}>
                  <span>📍</span> Durban Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-600">Commercial City Building, Office No. 1138</p>
                <p className="text-gray-600">45 Dr AB Xuma Street</p>
                <p className="text-gray-600">Durban, 4001</p>
                <p className="font-semibold" style={{ color: "#27586B" }}>
                  ☎ +27 31 301 1408
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-semibold" style={{ color: "#27586B" }}>
              ✉️ admin@amasiko.co.za
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white max-w-6xl">
          <p className="opacity-90 text-lg">© 2025 Amasiko Group. All rights reserved. | Level 1 B-BBEE Enterprise</p>
        </div>
      </footer>
    </div>
  )
}
