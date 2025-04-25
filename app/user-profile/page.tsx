"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, ChevronLeft, Edit, ExternalLink, FileText, Mail, MapPin, Phone, Share2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

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
}

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 px-4 py-2 rounded-lg transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Kembali</span>
            </Link>
            <h1 className="text-2xl font-bold text-navy-800 hidden md:block">Profil Saya</h1>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="rounded-lg border-blue-200 text-blue-700 hover:bg-blue-50">
              <Share2 className="h-4 w-4 mr-2" />
              Bagikan
            </Button>
            <Link href="/create-profile">
              <Button className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profil
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Header Card */}
        <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-navy-600 h-32 md:h-48 relative"></div>
          <div className="px-4 md:px-8 pb-6 relative">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white absolute -top-12 md:-top-16 shadow-lg">
              <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-navy-500 text-white text-2xl">
                {userData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="mt-16 md:mt-20 md:ml-36 flex flex-col md:flex-row md:justify-between md:items-end">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-800">{userData.name}</h2>
                <p className="text-lg text-gray-600">{userData.title}</p>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1 text-blue-500" />
                    <span className="text-sm">{userData.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-1 text-blue-500" />
                    <span className="text-sm">{userData.email}</span>
                  </div>
                  {userData.phone && (
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-1 text-blue-500" />
                      <span className="text-sm">{userData.phone}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end gap-2">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-800 border-green-200 rounded-full px-3 py-1">
                    Available
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 rounded-full px-3 py-1">
                    {userData.availability.jobType}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Star className="h-4 w-4 text-orange-500" />
                  <span>Profil Terverifikasi</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden">
              <CardHeader className="bg-blue-50 border-b pb-4">
                <CardTitle className="text-xl text-navy-800">Informasi Profil</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Bio</h3>
                  <p className="text-gray-700 text-sm">{userData.bio}</p>
                </div>

                <Separator className="bg-gray-200" />

                <div>
                  <h3 className="text-sm font-medium mb-3 text-blue-700">Keahlian</h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="text-sm py-1 px-2 bg-blue-50 text-blue-700 border border-blue-200 rounded-full"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="bg-gray-200" />

                <div>
                  <h3 className="text-sm font-medium mb-3 text-blue-700">Bahasa</h3>
                  <div className="space-y-2">
                    {userData.languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">{lang.language}</span>
                        <Badge className="bg-gray-100 text-gray-800 border-gray-200 rounded-full px-2 py-0.5 text-xs">
                          {lang.proficiency}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-gray-200" />

                <div>
                  <h3 className="text-sm font-medium mb-3 text-blue-700">Ketersediaan</h3>
                  <div className="space-y-2 text-sm">
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
                      <h3 className="text-sm font-medium mb-3 text-blue-700">Website</h3>
                      <a
                        href={userData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                      >
                        {userData.website}
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </>
                )}

                <Separator className="bg-gray-200" />

                <div>
                  <h3 className="text-sm font-medium mb-3 text-blue-700">Kelengkapan Profil</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-700">Kelengkapan</span>
                      <span className="font-medium text-blue-700">{userData.profileCompletion}%</span>
                    </div>
                    <Progress value={userData.profileCompletion} className="h-2 bg-gray-200" />
                    {userData.profileCompletion < 100 && (
                      <p className="text-xs text-gray-500">Lengkapi profil Anda untuk meningkatkan peluang</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="sticky top-24">
              <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-navy-800">Tindakan</h3>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full rounded-lg bg-orange-500 hover:bg-orange-600 text-white justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      Atur Ketersediaan
                    </Button>
                    <Button variant="outline" className="w-full rounded-lg justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-blue-50 rounded-xl p-1 border border-gray-200">
                <TabsTrigger
                  value="overview"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                >
                  Ringkasan
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                >
                  Pengalaman
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                >
                  Pendidikan
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden">
                  <CardHeader className="bg-blue-50 border-b pb-4">
                    <CardTitle className="text-xl text-navy-800">Ringkasan Profil</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-navy-800 mb-3">Tentang Saya</h3>
                        <p className="text-gray-700">{userData.bio}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-navy-800 mb-3">Keahlian Utama</h3>
                        <div className="flex flex-wrap gap-2">
                          {userData.skills.slice(0, 5).map((skill) => (
                            <Badge
                              key={skill}
                              className="text-sm py-1.5 px-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 hover:from-blue-100 hover:to-blue-200 rounded-full"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-navy-800 mb-3">Pengalaman Terbaru</h3>
                        <div className="space-y-4">
                          {userData.experience.slice(0, 2).map((exp, index) => (
                            <div
                              key={index}
                              className="p-4 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100 hover:shadow-md transition-shadow duration-300"
                            >
                              <div className="flex justify-between">
                                <h4 className="font-semibold text-blue-800">{exp.role}</h4>
                                <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
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
                              <p className="text-sm text-blue-600 font-medium mt-1">{exp.company}</p>
                              <p className="text-gray-700 mt-2">{exp.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4">
                          <Button
                            variant="ghost"
                            className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0"
                            onClick={() => setActiveTab("experience")}
                          >
                            Lihat semua pengalaman
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-navy-800 mb-3">Proyek</h3>
                        <div className="space-y-4">
                          {userData.projects.map((project, index) => (
                            <div
                              key={index}
                              className="p-4 rounded-xl bg-gradient-to-r from-white to-navy-50 border border-navy-100 hover:shadow-md transition-shadow duration-300"
                            >
                              <h4 className="font-semibold text-navy-800">{project.name}</h4>
                              <p className="text-gray-700 mt-2">{project.description}</p>
                              <div className="flex flex-wrap gap-2 mt-3">
                                {project.technologies.map((tech) => (
                                  <Badge
                                    key={tech}
                                    className="bg-white text-navy-700 border border-navy-200 rounded-full"
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

              <TabsContent value="experience" className="mt-6 space-y-6">
                <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden">
                  <CardHeader className="bg-blue-50 border-b pb-4">
                    <CardTitle className="text-xl text-navy-800">Pengalaman Kerja</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {userData.experience.map((exp, index) => (
                        <div
                          key={index}
                          className="p-5 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex justify-between">
                            <h3 className="font-semibold text-lg text-blue-800">{exp.role}</h3>
                            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                              {new Date(exp.startDate).toLocaleDateString("id-ID", { year: "numeric", month: "short" })}{" "}
                              -{" "}
                              {exp.endDate === "Present"
                                ? "Sekarang"
                                : new Date(exp.endDate).toLocaleDateString("id-ID", {
                                    year: "numeric",
                                    month: "short",
                                  })}
                            </span>
                          </div>
                          <p className="text-sm text-blue-600 font-medium mt-1">{exp.company}</p>
                          <p className="text-gray-700 mt-3">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="education" className="mt-6 space-y-6">
                <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden">
                  <CardHeader className="bg-blue-50 border-b pb-4">
                    <CardTitle className="text-xl text-navy-800">Pendidikan & Sertifikasi</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-blue-800 mb-4">Pendidikan</h3>
                        {userData.education.map((edu, index) => (
                          <div
                            key={index}
                            className="p-5 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100 hover:shadow-md transition-shadow duration-300 mb-4"
                          >
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-semibold text-blue-800">
                                  {edu.degree} {edu.field}
                                </h4>
                                <p className="text-blue-600 mt-1">{edu.institution}</p>
                              </div>
                              <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                                {edu.year}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {userData.certifications && userData.certifications.length > 0 && (
                        <div>
                          <h3 className="text-lg font-medium text-blue-800 mb-4">Sertifikasi</h3>
                          <div className="p-5 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100">
                            <ul className="space-y-3">
                              {userData.certifications.map((cert, index) => (
                                <li key={index} className="flex items-center">
                                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                                  <span>{cert}</span>
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
  )
}
