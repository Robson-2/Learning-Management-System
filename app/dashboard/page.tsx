"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Award, Clock, TrendingUp, User, Settings, LogOut } from "lucide-react"

export default function DashboardPage() {
  const { user, loading, logout } = useAuth() // Added loading from auth context
  const router = useRouter()

  useEffect(() => {
    console.log("[v0] Dashboard useEffect - loading:", loading, "user:", user ? "exists" : "null")

    if (!loading && !user) {
      console.log("[v0] Redirecting to signin - user not authenticated")
      router.push("/signin")
    }
  }, [user, loading, router])

  if (loading) {
    console.log("[v0] Dashboard showing loading state")
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#27586B] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    console.log("[v0] Dashboard - no user found, should redirect")
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Redirecting to sign in...</p>
        </div>
      </div>
    )
  }

  console.log("[v0] Dashboard rendering for user:", user.email)

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const userInitials = `${user.firstName?.[0] || "U"}${user.lastName?.[0] || "S"}`
  const enrolledCount = user.enrolledCourses?.length || 0
  const completedCount = user.completedCourses?.length || 0
  const certificatesCount = user.certificates?.length || 0
  const studyHours = user.studyHours || 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-10">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-3">
            <img src="https://amasiko.co.za/assets/img/logo.png" alt="Amasiko Group" className="h-8" />
            <div>
              <h2 className="font-semibold text-gray-900">Amasiko Group</h2>
              <p className="text-sm text-gray-500">LMS Portal</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-[#27586B] rounded-full flex items-center justify-center text-white font-semibold">
              {userInitials}
            </div>
            <div>
              <p className="font-medium text-gray-900">
                {user.firstName || "User"} {user.lastName || ""}
              </p>
              <span className="inline-block px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">
                Active Learner
              </span>
            </div>
          </div>
        </div>

        <nav className="px-4 space-y-2">
          <a href="/dashboard" className="flex items-center space-x-3 px-3 py-2 bg-[#27586B] text-white rounded-lg">
            <TrendingUp className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
          <a
            href="/courses"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <BookOpen className="w-5 h-5" />
            <span>My Courses</span>
          </a>
          <a
            href="/catalog"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <BookOpen className="w-5 h-5" />
            <span>Training Catalog</span>
          </a>
          <a
            href="/certificates"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Award className="w-5 h-5" />
            <span>Certificates</span>
          </a>
          <a
            href="/profile"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <User className="w-5 h-5" />
            <span>Profile</span>
          </a>
          <a
            href="/settings"
            className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full flex items-center space-x-2 bg-transparent"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.firstName || "User"}!</h1>
          <p className="text-gray-600">Continue your learning journey</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#27586B]">{enrolledCount}</div>
              <p className="text-xs text-muted-foreground">Currently active</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#27586B]">{completedCount}</div>
              <p className="text-xs text-muted-foreground">+2 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificates Earned</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#27586B]">{certificatesCount}</div>
              <p className="text-xs text-muted-foreground">Professional credentials</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#27586B]">{studyHours}</div>
              <p className="text-xs text-muted-foreground">Total learning time</p>
            </CardContent>
          </Card>
        </div>

        {/* Continue Learning Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <p className="text-sm text-gray-600">Pick up where you left off</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {enrolledCount === 0 ? (
                  <div className="text-center py-8">
                    <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">No enrolled courses yet</p>
                    <Button
                      onClick={() => router.push("/catalog")}
                      className="bg-[#27586B] hover:bg-[#1e4a5a] text-white"
                    >
                      Browse Courses
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Advanced Project Management</h3>
                          <p className="text-sm text-gray-600">by Dr. Sarah Johnson</p>
                        </div>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Management</span>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#27586B] h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Next: Risk Assessment Strategies</p>
                      <Button className="bg-[#27586B] hover:bg-[#1e4a5a] text-white">Continue</Button>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">Digital Marketing Fundamentals</h3>
                          <p className="text-sm text-gray-600">by Mark Thompson</p>
                        </div>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Marketing</span>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>45%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#27586B] h-2 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Next: Social Media Analytics</p>
                      <Button className="bg-[#27586B] hover:bg-[#1e4a5a] text-white">Continue</Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-sm">Construction Safety Management - Final Assessment</p>
                    <p className="text-xs text-gray-600">Due: 2025-01-22</p>
                  </div>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">high</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-sm">Advanced Project Management - Module 4 Quiz</p>
                    <p className="text-xs text-gray-600">Due: 2025-01-25</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">medium</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-sm">Digital Marketing Fundamentals - Assignment 2</p>
                    <p className="text-xs text-gray-600">Due: 2025-01-30</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">low</span>
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View Schedule
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium">Completed lesson: Financial Planning Basics</p>
                      <p className="text-xs text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
