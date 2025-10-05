import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TrainingPage() {
  const programs = [
    {
      category: "Full Qualifications",
      title: "Learnership Programmes",
      count: "30+",
      description: "Comprehensive qualification programs designed to develop industry-ready professionals.",
      features: ["NQF Aligned", "SETA Accredited", "Workplace Learning", "Assessment Included"],
    },
    {
      category: "Short Courses",
      title: "Credit Bearing Courses",
      count: "85+",
      description: "Focused skill development courses that provide immediate value and career advancement.",
      features: ["Industry Relevant", "Flexible Scheduling", "Expert Facilitators", "Certification"],
    },
    {
      category: "Health & Safety",
      title: "Safety Training Programs",
      count: "15+",
      description: "Essential health and safety training to ensure workplace compliance and safety.",
      features: ["OHS Compliance", "Risk Assessment", "Emergency Procedures", "Legal Requirements"],
    },
    {
      category: "Leadership",
      title: "Management Development",
      count: "12+",
      description: "Leadership and management skills development for current and aspiring leaders.",
      features: ["Strategic Thinking", "Team Leadership", "Performance Management", "Change Management"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Training Programs</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Accredited skills development and training programs designed to enhance capabilities and drive career
            growth.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#27586B" }}>
              Our Training Portfolio
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training solutions tailored to meet industry needs and individual career aspirations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="border-l-4 hover:shadow-lg transition-shadow"
                style={{ borderLeftColor: "#27586B" }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {program.category}
                    </span>
                    <span
                      className="px-3 py-1 text-sm font-bold text-white rounded-full"
                      style={{ backgroundColor: "#27586B" }}
                    >
                      {program.count}
                    </span>
                  </div>
                  <CardTitle style={{ color: "#27586B" }}>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{program.description}</CardDescription>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#27586B" }}></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button style={{ backgroundColor: "#27586B" }} className="text-white hover:opacity-90">
                      Enroll Now
                    </Button>
                    <Button
                      variant="outline"
                      style={{ borderColor: "#27586B", color: "#27586B" }}
                      className="hover:bg-[#27586B] hover:text-white bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "#27586B" }}>
            Training Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: "#27586B" }}>
                1,500+
              </div>
              <div className="text-gray-600">Delegates Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: "#27586B" }}>
                95%
              </div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: "#27586B" }}>
                23
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2" style={{ color: "#27586B" }}>
                100%
              </div>
              <div className="text-gray-600">Accredited</div>
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
