import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "https://amasiko.co.za/assets/img/800x1000_1.png",
      alt: "Amasiko Group Professional Services",
      title: "Professional Excellence",
    },
    {
      src: "https://amasiko.co.za/assets/img/800x1000_2.png",
      alt: "Amasiko Group Training Programs",
      title: "Skills Development",
    },
    {
      src: "https://amasiko.co.za/assets/img/800x800.png",
      alt: "Amasiko Group Team",
      title: "Our Expert Team",
    },
    {
      src: "https://amasiko.co.za/assets/img/800x600.png",
      alt: "Amasiko Group Services",
      title: "Comprehensive Solutions",
    },
    {
      src: "https://amasiko.co.za/assets/img/building-bg.png",
      alt: "Amasiko Group Construction Services",
      title: "Construction Excellence",
    },
    {
      src: "/professional-training-session-with-diverse-partici.png",
      alt: "Training Session",
      title: "Interactive Training",
    },
    {
      src: "/modern-office-construction.png",
      alt: "Construction Project",
      title: "Construction Projects",
    },
    {
      src: "/business-meeting-with-professionals-discussing-rec.png",
      alt: "Recruitment Services",
      title: "Talent Acquisition",
    },
    {
      src: "/media-and-branding-creative-workspace.png",
      alt: "Media Services",
      title: "Creative Solutions",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Showcasing our expertise across skills development, recruitment, construction, and media services.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#27586B" }}>
              Our Work in Action
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects, training programs, and professional services that have made
              a difference across South Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                    <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#27586B" }}>
              Our Impact
            </h2>
            <p className="text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: "#27586B" }}>
                38
              </div>
              <div className="text-gray-600">Employees</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: "#27586B" }}>
                2,348
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: "#27586B" }}>
                43
              </div>
              <div className="text-gray-600">Awards Received</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: "#27586B" }}>
                50+
              </div>
              <div className="text-gray-600">Services Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4" style={{ backgroundColor: "#27586B" }}>
        <div className="container mx-auto text-center text-white">
          <p className="opacity-90">© 2025 Amasiko Group. All rights reserved. | Level 1 B-BBEE Enterprise</p>
        </div>
      </footer>
    </div>
  )
}
