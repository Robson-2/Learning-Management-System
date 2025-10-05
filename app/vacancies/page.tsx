import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function VacanciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Career Opportunities</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join our team of professionals and contribute to South Africa's transformation and development.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#27586B" }}>
              Current Openings
            </h2>
            <p className="text-gray-600">
              We are currently updating our job listings. Please check back soon for new opportunities.
            </p>
          </div>

          <div className="text-center py-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#27586B" }}>
                No Current Vacancies
              </h3>
              <p className="text-gray-600 mb-6">
                We don't have any open positions at the moment, but we're always looking for talented individuals. Send
                us your CV and we'll keep you in mind for future opportunities.
              </p>
              <Button style={{ backgroundColor: "#27586B" }} className="text-white hover:opacity-90">
                Submit Your CV
              </Button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: "#27586B" }}>
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter to be notified when new career opportunities become available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27586B]"
                />
                <Button style={{ backgroundColor: "#27586B" }} className="text-white hover:opacity-90">
                  Subscribe
                </Button>
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
