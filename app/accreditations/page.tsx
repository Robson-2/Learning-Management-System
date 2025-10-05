"use client"

import { useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, CheckCircle, Star, Building, Users, Calendar, Globe } from "lucide-react"

const accreditations = [
  {
    id: 1,
    title: "B-BBEE Level 1 EME Contributor",
    issuer: "Department of Trade, Industry and Competition",
    description:
      "Broad-Based Black Economic Empowerment Level 1 Exempted Micro Enterprise status, demonstrating our commitment to transformation and economic empowerment.",
    validUntil: "2025-12-31",
    category: "Regulatory",
    icon: <Shield className="w-8 h-8 text-green-600" />,
    color: "green",
    image: "/bbee-level-1-certificate.png",
  },
  {
    id: 2,
    title: "SETA Accredited Training Provider",
    issuer: "Sector Education and Training Authority",
    description:
      "Accredited to provide quality skills development and training programs across multiple sectors with full SETA recognition.",
    validUntil: "2026-03-31",
    category: "Education",
    icon: <Award className="w-8 h-8 text-blue-600" />,
    color: "blue",
    image: "/seta-accreditation-certificate.png",
  },
  {
    id: 3,
    title: "Department of Labour Approval",
    issuer: "Department of Employment and Labour",
    description:
      "Approved training provider for Occupational Health and Safety programs, ensuring compliance with national safety standards.",
    validUntil: "2025-08-31",
    category: "Safety",
    icon: <Shield className="w-8 h-8 text-red-600" />,
    color: "red",
    image: "/department-labour-approval.png",
  },
  {
    id: 4,
    title: "PMI Authorized Training Partner",
    issuer: "Project Management Institute",
    description:
      "Authorized to deliver PMI-approved project management training programs and Professional Development Units (PDUs).",
    validUntil: "2025-12-31",
    category: "Professional",
    icon: <Star className="w-8 h-8 text-purple-600" />,
    color: "purple",
    image: "/pmi-authorized-partner.png",
  },
  {
    id: 5,
    title: "SABPP Approved Provider",
    issuer: "South African Board for People Practices",
    description:
      "Approved provider of Continuing Professional Development (CPD) programs for HR professionals and practitioners.",
    validUntil: "2026-01-31",
    category: "Professional",
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    color: "indigo",
    image: "/sabpp-approved-provider.png",
  },
  {
    id: 6,
    title: "SAICA CPD Provider",
    issuer: "South African Institute of Chartered Accountants",
    description:
      "Approved provider of Continuing Professional Development hours for chartered accountants and financial professionals.",
    validUntil: "2025-11-30",
    category: "Professional",
    icon: <Building className="w-8 h-8 text-yellow-600" />,
    color: "yellow",
    image: "/saica-cpd-provider.png",
  },
  {
    id: 7,
    title: "Google Partner Certification",
    issuer: "Google",
    description:
      "Certified Google Partner for digital marketing training, providing Google-approved curriculum and certifications.",
    validUntil: "2025-09-30",
    category: "Technology",
    icon: <Globe className="w-8 h-8 text-green-500" />,
    color: "green",
    image: "/google-partner-certification.png",
  },
  {
    id: 8,
    title: "IFMA Approved Education Provider",
    issuer: "International Facility Management Association",
    description:
      "Approved to provide facility management education and professional development programs with international recognition.",
    validUntil: "2026-02-28",
    category: "Professional",
    icon: <Award className="w-8 h-8 text-teal-600" />,
    color: "teal",
    image: "/ifma-approved-provider.png",
  },
]

const stats = [
  { label: "Years in Operation", value: "22+", icon: <Calendar className="w-6 h-6" /> },
  { label: "Accreditations", value: "15+", icon: <Award className="w-6 h-6" /> },
  { label: "Delegates Trained", value: "1500+", icon: <Users className="w-6 h-6" /> },
  { label: "B-BBEE Level", value: "1", icon: <Shield className="w-6 h-6" /> },
]

const categories = ["All", "Regulatory", "Education", "Safety", "Professional", "Technology"]

export default function AccreditationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredAccreditations = accreditations.filter(
    (acc) => selectedCategory === "All" || acc.category === selectedCategory,
  )

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "border-green-200 bg-green-50",
      blue: "border-blue-200 bg-blue-50",
      red: "border-red-200 bg-red-50",
      purple: "border-purple-200 bg-purple-50",
      indigo: "border-indigo-200 bg-indigo-50",
      yellow: "border-yellow-200 bg-yellow-50",
      teal: "border-teal-200 bg-teal-50",
    }
    return colorMap[color as keyof typeof colorMap] || "border-gray-200 bg-gray-50"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#27586B] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Our Accreditations & Certifications</h1>
            <p className="text-xl opacity-90 mb-8">
              Amasiko Group maintains the highest standards through comprehensive accreditations and regulatory
              approvals
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 opacity-80">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#27586B] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Accreditations Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccreditations.map((accreditation) => (
            <Card key={accreditation.id} className="hover:shadow-lg transition-shadow">
              <div className={`p-6 rounded-t-lg ${getColorClasses(accreditation.color)}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {accreditation.icon}
                    <Badge variant="outline" className="bg-white">
                      {accreditation.category}
                    </Badge>
                  </div>
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <img
                  src={accreditation.image || "/placeholder.svg?height=120&width=200&query=accreditation certificate"}
                  alt={accreditation.title}
                  className="w-full h-32 object-cover rounded-lg bg-white p-2"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-lg font-semibold">{accreditation.title}</CardTitle>
                <p className="text-sm text-gray-600 font-medium">{accreditation.issuer}</p>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-700 mb-4">{accreditation.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Valid Until:</span>
                  <span className="font-medium text-green-600">
                    {new Date(accreditation.validUntil).toLocaleDateString("en-ZA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Commitment Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg text-gray-700 mb-8">
              Since 2002, Amasiko Group has maintained the highest standards of quality and compliance across all our
              service offerings. Our comprehensive accreditations ensure that our clients receive world-class training
              and development programs that meet both local and international standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#27586B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                <p className="text-gray-600">
                  Full compliance with South African regulatory requirements and international standards
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#27586B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Continuous monitoring and improvement of our training programs and service delivery
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#27586B] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Development</h3>
                <p className="text-gray-600">
                  Recognized CPD provider across multiple professional bodies and industry sectors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
