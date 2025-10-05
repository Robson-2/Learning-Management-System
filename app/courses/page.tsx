"use client"

import { useAuth } from "@/contexts/auth-context"
import { courses } from "@/data/courses"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Award, Play, CheckCircle } from "lucide-react"

export default function MyCoursesPage() {
  const { user, loading, completeCourse } = useAuth()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("enrolled")

  useEffect(() => {
    console.log("[v0] Courses useEffect - loading:", loading, "user:", user ? "exists" : "null")

    if (!loading && !user) {
      console.log("[v0] Courses redirecting to signin")
      router.push("/signin")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#27586B] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading courses...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Redirecting to sign in...</p>
        </div>
      </div>
    )
  }

  const enrolledCourses = courses.filter((course) => user.enrolledCourses.includes(course.id))
  const completedCourses = courses.filter((course) => user.completedCourses.includes(course.id))

  // Mock progress data for enrolled courses
  const courseProgress = {
    "hs-001": 75,
    "ml-001": 45,
    "dm-001": 60,
    "sd-001": 30,
  }

  const handleContinueCourse = (courseId: string) => {
    // In a real app, this would navigate to the course content
    alert(`Continuing course: ${courses.find((c) => c.id === courseId)?.title}`)
  }

  const handleCompleteCourse = (courseId: string) => {
    completeCourse(courseId)
    alert("Congratulations! Course completed successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
              <p className="text-gray-600">Track your learning progress and continue your journey</p>
            </div>
            <Button onClick={() => router.push("/catalog")} className="bg-[#27586B] hover:bg-[#1e4a5a] text-white">
              Browse More Courses
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab("enrolled")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "enrolled" ? "bg-white text-[#27586B] shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Enrolled ({enrolledCourses.length})
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "completed" ? "bg-white text-[#27586B] shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Completed ({completedCourses.length})
            </button>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === "enrolled" && (
          <div>
            {enrolledCourses.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No enrolled courses yet</h3>
                <p className="text-gray-600 mb-6">Start your learning journey by enrolling in a course</p>
                <Button onClick={() => router.push("/catalog")} className="bg-[#27586B] hover:bg-[#1e4a5a] text-white">
                  Browse Courses
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => {
                  const progress = courseProgress[course.id as keyof typeof courseProgress] || 0
                  return (
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
                        <CardTitle className="text-lg font-semibold">{course.title}</CardTitle>
                        <p className="text-sm text-gray-600">by {course.instructor}</p>
                      </CardHeader>

                      <CardContent>
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-medium">{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Award className="w-4 h-4" />
                              <span>{course.level}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            onClick={() => handleContinueCourse(course.id)}
                            className="flex-1 bg-[#27586B] hover:bg-[#1e4a5a] text-white"
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Continue Learning
                          </Button>
                          {progress >= 90 && (
                            <Button
                              onClick={() => handleCompleteCourse(course.id)}
                              variant="outline"
                              className="border-green-600 text-green-600 hover:bg-green-50"
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Complete
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {activeTab === "completed" && (
          <div>
            {completedCourses.length === 0 ? (
              <div className="text-center py-12">
                <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No completed courses yet</h3>
                <p className="text-gray-600 mb-6">Complete your enrolled courses to see them here</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {completedCourses.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-600 text-white">Completed</Badge>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">{course.title}</CardTitle>
                      <p className="text-sm text-gray-600">by {course.instructor}</p>
                    </CardHeader>

                    <CardContent>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium text-green-600">100%</span>
                        </div>
                        <Progress value={100} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="w-4 h-4" />
                            <span>{course.accreditation}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          onClick={() => alert("Certificate downloaded!")}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                        >
                          <Award className="w-4 h-4 mr-2" />
                          Download Certificate
                        </Button>
                        <Button
                          onClick={() => handleContinueCourse(course.id)}
                          variant="outline"
                          className="bg-transparent"
                        >
                          Review Course
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
