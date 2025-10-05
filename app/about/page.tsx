import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Amasiko Group</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            A 100% Black female owned enterprise with over 23 years of excellence in skills development, recruitment,
            and business solutions.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "#27586B" }}>
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Amasiko Group has been at the forefront of human capital development and business solutions for over two
                decades. As a proudly South African, 100% Black female owned enterprise, we have consistently delivered
                high-quality services that drive transformation and excellence.
              </p>
              <p className="text-gray-600">
                Our commitment to empowering individuals and organizations through skills development, strategic
                recruitment, and innovative business solutions has made us a trusted partner across various industries.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#27586B" }}>
                Key Achievements
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 23+ years of industry excellence</li>
                <li>• 1,500+ delegates successfully trained</li>
                <li>• 30+ live qualification programs</li>
                <li>• 85+ cross-skilling courses</li>
                <li>• Level 1 B-BBEE Enterprise</li>
              </ul>
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
