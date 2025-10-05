"use client"

import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { courses, categories } from "@/data/courses"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, Award, Search } from "lucide-react"

export default function CourseCatalogPage() {
  const { user, enrollInCourse } = useAuth()
  const [selectedCategory, setSelectedCategory] = useState("All Courses")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("popular")

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "All Courses" || course.category === selectedCategory
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.enrolled - a.enrolled
      case "rating":
        return b.rating - a.rating
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      default:
        return 0
    }
  })

  const handleEnroll = (courseId: string) => {
    if (user) {
      enrollInCourse(courseId)
      alert("Successfully enrolled in course!")
    } else {
      alert("Please sign in to enroll in courses")
    }
  }

  const isEnrolled = (courseId: string) => {
    return user?.enrolledCourses.includes(courseId) || false
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Training Catalog</h1>
              <p className="text-gray-600">Discover our comprehensive range of accredited courses</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27586B] w-64"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#27586B]"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-[#27586B] text-white" : "bg-transparent"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedCourses.length} courses
            {selectedCategory !== "All Courses" && ` in ${selectedCategory}`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCourses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 right-2 bg-[#27586B] text-white">{course.category}</Badge>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold line-clamp-2">{course.title}</CardTitle>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating}</span>
                    <span className="text-gray-500">({course.reviews})</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                <p className="text-sm text-gray-700 line-clamp-3">{course.description}</p>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.enrolled}</span>
                    </div>
                  </div>
                  <Badge variant="outline">{course.level}</Badge>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <Award className="w-4 h-4 text-[#27586B]" />
                  <span className="text-sm text-gray-600">{course.accreditation}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#27586B]">R{course.price.toLocaleString()}</span>
                  </div>
                  <Button
                    onClick={() => handleEnroll(course.id)}
                    disabled={isEnrolled(course.id)}
                    className={
                      isEnrolled(course.id)
                        ? "bg-green-600 text-white cursor-not-allowed"
                        : "bg-[#27586B] hover:bg-[#1e4a5a] text-white"
                    }
                  >
                    {isEnrolled(course.id) ? "Enrolled" : "Enroll Now"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All Courses")
              }}
              className="mt-4 bg-[#27586B] text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-[#27586B] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-sm opacity-90">Full Qualifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">85+</div>
              <div className="text-sm opacity-90">Credit Bearing Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1500+</div>
              <div className="text-sm opacity-90">Delegates Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Level 1</div>
              <div className="text-sm opacity-90">B-BBEE Status</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
