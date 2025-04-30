"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Calendar,
  ChevronLeft,
  Edit,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Share2,
  Star,
  Award,
  Download,
  Briefcase,
  GraduationCap,
  Code,
  Globe,
  Clock,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Navbar from "@/components/navbar"

// Mock user data
const userData = {
  name: "Budi Santoso",
  title: "Senior Frontend Developer",
  location: "Jakarta, Indonesia",
  email: "budi.santoso@example.com",
  phone: "+62 812 3456 7890",
  website: "https://budidev.com",
  bio: "Passionate frontend developer with 7+ years of experience building responsive and accessible web applications. Specialized in React ecosystem and modern JavaScript.",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL", "Jest", "Cypress"],
  languages: [
    { language: "Bahasa Indonesia", proficiency: "Native" },
    { language: "English", proficiency: "Fluent" },
  ],
  experience: [
    {
      company: "TechCorp Inc.",
      role: "Senior Frontend Developer",
      startDate: "2020-01",
      endDate: "Present",
      description:
        "Lead developer for the company's main SaaS product. Improved performance by 40% and implemented a new component library.",
    },
    {
      company: "WebSolutions",
      role: "Frontend Developer",
      startDate: "2017-03",
      endDate: "2019-12",
      description: "Worked on various client projects using React, Redux, and TypeScript. Mentored junior developers.",
    },
    {
      company: "StartupXYZ",
      role: "Junior Developer",
      startDate: "2015-06",
      endDate: "2017-02",
      description: "Full-stack development with focus on frontend technologies.",
    },
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "S1",
      field: "Computer Science",
      year: "2015",
    },
  ],
  certifications: ["AWS Certified Developer", "React Certification"],
  projects: [
    {
      name: "E-commerce Platform Redesign",
      description:
        "Led the frontend redesign of a major e-commerce platform, resulting in 25% increase in conversion rates.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      name: "Internal Dashboard",
      description: "Built a comprehensive analytics dashboard for internal use with real-time data visualization.",
      technologies: ["React", "D3.js", "GraphQL"],
    },
  ],
  availability: {
    jobType: "Full-time",
    startDate: "Immediate",
    hoursPerWeek: "40",
    rate: "Rp 25.000.000/bulan",
  },
  profileCompletion: 85,
  stats: [
    { label: "Proyek Selesai", value: "24", icon: Code },
    { label: "Jam Kerja", value: "1,240", icon: Clock },
    { label: "Rating", value: "4.9/5", icon: Star },
    { label: "Ulasan", value: "18", icon: Award },
  ],
}

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isMobile, setIsMobile] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setShowSidebar(window.innerWidth >= 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-16 md:pt-20">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 px-3 py-1.5 md:px-4 md:py-2 rounded-lg transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="text-sm md:text-base">Kembali</span>
              </Link>
              <h1 className="text-xl md:text-2xl font-bold text-navy-800 hidden md:block">Profil Saya</h1>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size={isMobile ? "sm" : "default"}
                className="rounded-lg border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <Share2 className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Bagikan</span>
              </Button>
              <Link href="/edit-profile">
                <Button
                  size={isMobile ? "sm" : "default"}
                  className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
                >
                  <Edit className="h-4 w-4 md:mr-2" />
                  <span className="hidden md:inline">Edit Profil</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile Header Card - Modern Version */}
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden mb-6">
            <div className="relative">
              {/* Background with gradient and pattern */}
              <div className="h-28 sm:h-32 md:h-48 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] z-10"></div>
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute top-20 -left-20 w-60 h-60 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-white/5 backdrop-blur-sm"></div>
                <div className="absolute bottom-0 left-0 w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="w-full h-16 text-white/10 fill-current"
                  >
                    <path d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,213.3C840,224,960,224,1080,208C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                  </svg>
                </div>
              </div>

              {/* Profile content with overlap */}
              <div className="px-4 md:px-8 pb-6 relative">
                <Avatar className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 border-4 border-white absolute -top-10 sm:-top-12 md:-top-16 shadow-lg ring-4 ring-white/30 ring-offset-2 ring-offset-blue-500/40">
                  <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-400 to-indigo-600 text-white text-2xl">
                    {userData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="mt-12 sm:mt-16 md:mt-20 md:ml-36 flex flex-col md:flex-row md:justify-between md:items-end">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-navy-800 to-blue-700 bg-clip-text text-transparent">
                      {userData.name}
                    </h2>
                    <p className="text-base md:text-lg text-gray-600">{userData.title}</p>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-2">
                      <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                        <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1 text-blue-500" />
                        <span className="text-xs md:text-sm">{userData.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                        <Mail className="h-3 w-3 md:h-4 md:w-4 mr-1 text-blue-500" />
                        <span className="text-xs md:text-sm">{userData.email}</span>
                      </div>
                      {userData.phone && (
                        <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                          <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 text-blue-500" />
                          <span className="text-xs md:text-sm">{userData.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white border-transparent backdrop-blur-sm rounded-full px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-medium">
                        <Clock className="h-3 w-3 mr-1" />
                        Available
                      </Badge>
                      <Badge className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white border-transparent backdrop-blur-sm rounded-full px-2 py-0.5 md:px-3 md:py-1 text-xs md:text-sm font-medium">
                        <Briefcase className="h-3 w-3 mr-1" />
                        {userData.availability.jobType}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs md:text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
                      <Star className="h-3 w-3 md:h-4 md:w-4 text-amber-500" />
                      <span>Profil Terverifikasi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Section - Mobile & Tablet */}
          <div className="md:hidden mb-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {userData.stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="p-3 text-center">
                    <div className="w-8 h-8 mx-auto mb-1 rounded-full bg-blue-100 flex items-center justify-center">
                      <stat.icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-lg font-bold text-blue-700">{stat.value}</p>
                    <p className="text-xs text-gray-600">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Sidebar Toggle */}
          {isMobile && (
            <div className="mb-4">
              <Button
                onClick={toggleSidebar}
                variant="outline"
                className="w-full justify-center rounded-lg border-gray-200"
              >
                {showSidebar ? "Sembunyikan Informasi Profil" : "Tampilkan Informasi Profil"}
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Sidebar */}
            {showSidebar &&
              (
                <div className="lg:col-span-1 space-y-4 md:space-y-6">
                {/* Stats Section - Desktop */}
                <div className="hidden md:block lg:hidden mb-6">
                  <div className="grid grid-cols-4 gap-3">
                    {userData.stats.map((stat, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
                      >
                        <CardContent className="p-3 text-center">
                          <div className="w-8 h-8 mx-auto mb-1 rounded-full bg-blue-100 flex items-center justify-center">
                            <stat.icon className="h-4 w-4 text-blue-600" />
                          </div>
                          <p className="text-lg font-bold text-blue-700">{stat.value}</p>
                          <p className="text-xs text-gray-600">{stat.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b pb-3 md:pb-4">
                    <CardTitle className="text-lg md:text-xl text-navy-800">Informasi Profil</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-2 text-blue-700 flex items-center gap-1.5">
                        <User className="h-4 w-4" />
                        Bio
                      </h3>
                      <p className="text-gray-700 text-xs md:text-sm">{userData.bio}</p>
                    </div>

                    <Separator className="bg-gray-200" />

                    <div>
                      <h3 className="text-sm font-medium mb-2 md:mb-3 text-blue-700 flex items-center gap-1.5">
                        <Code className="h-4 w-4" />
                        Keahlian
                      </h3>
                      <div className="flex flex-wrap gap-1.5  />
                        Keahlian
                      </h3>
                      <div className=\"flex flex-wrap gap-1.5 md:gap-2">
                        {userData.skills.map((skill) => (
                          <Badge
                            key={skill}
                            className="text-xs md:text-sm py-0.5 md:py-1 px-1.5 md:px-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 rounded-full"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Separator className="bg-gray-200" />

                    <div>
                      <h3 className="text-sm font-medium mb-2 md:mb-3 text-blue-700 flex items-center gap-1.5">
                        <Globe className="h-4 w-4" />
                        Bahasa
                      </h3>
                      <div className="space-y-1.5 md:space-y-2">
                        {userData.languages.map((lang, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-gray-700 text-xs md:text-sm">{lang.language}</span>
                            <Badge className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 border-gray-200 rounded-full px-1.5 md:px-2 py-0.5 text-xs">
                              {lang.proficiency}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="bg-gray-200" />

                    <div>
                      <h3 className="text-sm font-medium mb-2 md:mb-3 text-blue-700 flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        Ketersediaan
                      </h3>
                      <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Jenis Pekerjaan:</span>
                          <span className="font-medium text-gray-800">{userData.availability.jobType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mulai:</span>
                          <span className="font-medium text-gray-800">{userData.availability.startDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Jam per minggu:</span>
                          <span className="font-medium text-gray-800">{userData.availability.hoursPerWeek}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tarif:</span>
                          <span className="font-medium text-blue-700">{userData.availability.rate}</span>
                        </div>
                      </div>
                    </div>

                    {userData.website && (
                      <>
                        <Separator className="bg-gray-200" />
                        <div>
                          <h3 className="text-sm font-medium mb-2 md:mb-3 text-blue-700 flex items-center gap-1.5">
                            <ExternalLink className="h-4 w-4" />
                            Website
                          </h3>
                          <a
                            href={userData.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-xs md:text-sm flex items-center truncate"
                          >
                            {userData.website}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </>
                    )}

                    <Separator className="bg-gray-200" />

                    <div>
                      <h3 className="text-sm font-medium mb-2 md:mb-3 text-blue-700 flex items-center gap-1.5">
                        <Award className="h-4 w-4" />
                        Kelengkapan Profil
                      </h3>
                      <div className="space-y-1.5 md:space-y-2">
                        <div className="flex justify-between items-center text-xs md:text-sm">
                          <span className="text-gray-700">Kelengkapan</span>
                          <span className="font-medium text-blue-700">{userData.profileCompletion}%</span>
                        </div>
                        <Progress
                          value={userData.profileCompletion}
                          className="h-1.5 md:h-2 bg-gray-200"
                          style={
                            {
                              "--progress-background": "linear-gradient(to right, #3b82f6, #4f46e5)",
                            } as React.CSSProperties
                          }
                        />
                        {userData.profileCompletion < 100 && (
                          <p className="text-xs text-gray-500">Lengkapi profil Anda untuk meningkatkan peluang</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Stats Section - Large Desktop */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-2 gap-3">
                    {userData.stats.map((stat, index) => (
                      <Card
                        key={index}
                        className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
                      >
                        <CardContent className="p-3 text-center">
                          <div className="w-8 h-8 mx-auto mb-1 rounded-full bg-blue-100 flex items-center justify-center">
                            <stat.icon className="h-4 w-4 text-blue-600" />
                          </div>
                          <p className="text-lg font-bold text-blue-700">{stat.value}</p>
                          <p className="text-xs text-gray-600">{stat.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
                  <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-navy-800 text-sm md:text-base">Tindakan</h3>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <Button className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white justify-start text-xs md:text-sm">
                        <Calendar className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                        Atur Ketersediaan
                      </Button>
                      <Button variant="outline" className="w-full rounded-lg justify-start text-xs md:text-sm">
                        <Download className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                        Download CV
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              )}

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-1 border border-gray-200 shadow-sm">
                  <TabsTrigger
                    value="overview"
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm data-[state=active]:font-medium transition-all duration-200 text-xs md:text-sm"
                  >
                    Ringkasan
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm data-[state=active]:font-medium transition-all duration-200 text-xs md:text-sm"
                  >
                    Pengalaman
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm data-[state=active]:font-medium transition-all duration-200 text-xs md:text-sm"
                  >
                    Pendidikan
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-4 md:mt-6 space-y-4 md:space-y-6">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b pb-3 md:pb-4">
                      <CardTitle className="text-lg md:text-xl text-navy-800">Ringkasan Profil</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6">
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <h3 className="text-base md:text-lg font-medium text-navy-800 mb-2 md:mb-3 flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                              <User className="h-3.5 w-3.5 text-blue-600" />
                            </div>
                            Tentang Saya
                          </h3>
                          <p className="text-gray-700 text-sm">{userData.bio}</p>
                        </div>

                        <div>
                          <h3 className="text-base md:text-lg font-medium text-navy-800 mb-2 md:mb-3 flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                              <Code className="h-3.5 w-3.5 text-blue-600" />
                            </div>
                            Keahlian Utama
                          </h3>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {userData.skills.slice(0, 5).map((skill) => (
                              <Badge
                                key={skill}
                                className="text-xs md:text-sm py-1 px-2 md:py-1.5 md:px-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 hover:from-blue-100 hover:to-indigo-100 rounded-full"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base md:text-lg font-medium text-navy-800 mb-2 md:mb-3 flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                              <Briefcase className="h-3.5 w-3.5 text-blue-600" />
                            </div>
                            Pengalaman Terbaru
                          </h3>
                          <div className="space-y-3 md:space-y-4">
                            {userData.experience.slice(0, 2).map((exp, index) => (
                              <div
                                key={index}
                                className="space-y-2 md:space-y-3 p-3 md:p-5 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-0.5"
                              >
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">{exp.role}</h4>
                                  <span className="text-xs md:text-sm text-gray-500 bg-white px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-gray-200 mt-1 sm:mt-0 inline-block">
                                    {new Date(exp.startDate).toLocaleDateString("id-ID", {
                                      year: "numeric",
                                      month: "short",
                                    })}{" "}
                                    -{" "}
                                    {exp.endDate === "Present"
                                      ? "Sekarang"
                                      : new Date(exp.endDate).toLocaleDateString("id-ID", {
                                          year: "numeric",
                                          month: "short",
                                        })}
                                  </span>
                                </div>
                                <p className="text-xs md:text-sm text-blue-600 font-medium">{exp.company}</p>
                                <p className="text-xs md:text-sm text-gray-700">{exp.description}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 md:mt-4">
                            <Button
                              variant="ghost"
                              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 text-xs md:text-sm"
                              onClick={() => setActiveTab("experience")}
                            >
                              Lihat semua pengalaman
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-base md:text-lg font-medium text-navy-800 mb-2 md:mb-3 flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                              <Code className="h-3.5 w-3.5 text-blue-600" />
                            </div>
                            Proyek
                          </h3>
                          <div className="space-y-3 md:space-y-4">
                            {userData.projects.map((project, index) => (
                              <div
                                key={index}
                                className="p-3 md:p-4 rounded-xl bg-gradient-to-r from-white to-indigo-50 border border-indigo-100 hover:shadow-md transition-shadow duration-300"
                              >
                                <h4 className="font-semibold text-indigo-800 text-sm md:text-base">{project.name}</h4>
                                <p className="text-xs md:text-sm text-gray-700 mt-1 md:mt-2">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 md:mt-3">
                                  {project.technologies.map((tech) => (
                                    <Badge
                                      key={tech}
                                      className="text-xs bg-white text-indigo-700 border border-indigo-200 rounded-full"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="experience" className="mt-4 md:mt-6 space-y-4 md:space-y-6">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b pb-3 md:pb-4">
                      <CardTitle className="text-lg md:text-xl text-navy-800 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-blue-600" />
                        Pengalaman Kerja
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6">
                      <div className="space-y-4 md:space-y-6">
                        {userData.experience.map((exp, index) => (
                          <div
                            key={index}
                            className="p-3 md:p-5 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100 hover:shadow-md transition-shadow duration-300"
                          >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                              <h3 className="font-semibold text-base md:text-lg text-blue-800">{exp.role}</h3>
                              <span className="text-xs md:text-sm text-gray-500 bg-white px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-gray-200 mt-1 sm:mt-0 inline-block">
                                {new Date(exp.startDate).toLocaleDateString("id-ID", {
                                  year: "numeric",
                                  month: "short",
                                })}
                                -
                                {exp.endDate === "Present"
                                  ? "Sekarang"
                                  : new Date(exp.endDate).toLocaleDateString("id-ID", {
                                      year: "numeric",
                                      month: "short",
                                    })}
                              </span>
                            </div>
                            <p className="text-xs md:text-sm text-blue-600 font-medium mt-1">{exp.company}</p>
                            <p className="text-xs md:text-sm text-gray-700 mt-2 md:mt-3">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="education" className="mt-4 md:mt-6 space-y-4 md:space-y-6">
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b pb-3 md:pb-4">
                      <CardTitle className="text-lg md:text-xl text-navy-800 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                        Pendidikan & Sertifikasi
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 md:p-6">
                      <div className="space-y-4 md:space-y-6">
                        <div>
                          <h3 className="text-base md:text-lg font-medium text-blue-800 mb-2 md:mb-4">Pendidikan</h3>
                          {userData.education.map((edu, index) => (
                            <div
                              key={index}
                              className="p-3 md:p-5 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100 hover:shadow-md transition-shadow duration-300 mb-3 md:mb-4"
                            >
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                <div>
                                  <h4 className="font-semibold text-blue-800 text-sm md:text-base">
                                    {edu.degree} {edu.field}
                                  </h4>
                                  <p className="text-blue-600 text-xs md:text-sm mt-1">{edu.institution}</p>
                                </div>
                                <span className="text-xs md:text-sm text-gray-500 bg-white px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-gray-200 mt-1 sm:mt-0 inline-block">
                                  {edu.year}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {userData.certifications && userData.certifications.length > 0 && (
                          <div>
                            <h3 className="text-base md:text-lg font-medium text-blue-800 mb-2 md:mb-4">Sertifikasi</h3>
                            <div className="p-3 md:p-5 rounded-xl bg-gradient-to-r from-white to-indigo-50 border border-indigo-100">
                              <ul className="space-y-2 md:space-y-3">
                                {userData.certifications.map((cert, index) => (
                                  <li key={index} className="flex items-center">
                                    <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                                      <Award className="h-3 w-3 text-indigo-600" />
                                    </div>
                                    <span className="text-xs md:text-sm">{cert}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
