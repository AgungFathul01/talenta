"use client"

import { useState } from "react"
import { Star, Award, Calendar, MapPin, MessageSquare, Download, Share2, ChevronLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Update the talents data to use Indonesian names and add realistic profile images
const talents = [
  {
    id: 1,
    name: "Budi Santoso",
    title: "Senior Frontend Developer",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "GraphQL", "Jest", "Cypress"],
    experience: "Senior (5+ years)",
    jobType: "Full-time",
    category: "Development",
    location: "Remote",
    available: true,
    bio: "Passionate frontend developer with 7+ years of experience building responsive and accessible web applications. Specialized in React ecosystem and modern JavaScript.",
    workHistory: [
      {
        company: "TechCorp Inc.",
        role: "Senior Frontend Developer",
        duration: "2020 - Present",
        description:
          "Lead developer for the company's main SaaS product. Improved performance by 40% and implemented a new component library.",
      },
      {
        company: "WebSolutions",
        role: "Frontend Developer",
        duration: "2017 - 2020",
        description:
          "Worked on various client projects using React, Redux, and TypeScript. Mentored junior developers.",
      },
      {
        company: "StartupXYZ",
        role: "Junior Developer",
        duration: "2015 - 2017",
        description: "Full-stack development with focus on frontend technologies.",
      },
    ],
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
    education: [
      {
        institution: "University of Technology",
        degree: "B.S. Computer Science",
        year: "2015",
      },
    ],
    certifications: ["AWS Certified Developer", "React Certification"],
    languages: ["Bahasa Indonesia (Native)", "English (Fluent)"],
    availability: {
      startDate: "Immediate",
      hoursPerWeek: "40",
      timezone: "WIB (GMT+7)",
    },
    rateRange: "Rp 25.000.000/bulan",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.9,
    completedProjects: 32,
    reviews: [
      {
        name: "Ahmad Fauzi",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 5,
        date: "2 bulan yang lalu",
        comment:
          "Budi adalah developer yang sangat profesional dan terampil. Dia menyelesaikan proyek tepat waktu dan hasilnya melebihi ekspektasi saya.",
      },
      {
        name: "Sinta Dewi",
        avatar: "https://randomuser.me/api/portraits/women/53.jpg",
        rating: 4,
        date: "3 bulan yang lalu",
        comment:
          "Sangat puas dengan hasil kerja Budi. Dia sangat komunikatif dan memahami kebutuhan proyek dengan baik.",
      },
    ],
  },
  {
    id: 2,
    name: "Siti Rahayu",
    title: "UX/UI Designer",
    skills: [
      "Figma",
      "User Research",
      "Prototyping",
      "Adobe XD",
      "Sketch",
      "Wireframing",
      "Design Systems",
      "Usability Testing",
    ],
    experience: "Mid-level (3-5 years)",
    jobType: "Contract",
    category: "Design",
    location: "Jakarta",
    available: true,
    bio: "Creative UX/UI designer with a passion for creating intuitive and engaging user experiences. Focused on user-centered design principles and accessibility.",
    workHistory: [
      {
        company: "DesignStudio",
        role: "UX/UI Designer",
        duration: "2021 - Present",
        description: "Design lead for multiple client projects across fintech and healthcare industries.",
      },
      {
        company: "CreativeAgency",
        role: "UI Designer",
        duration: "2019 - 2021",
        description: "Created visual designs and interactive prototypes for web and mobile applications.",
      },
    ],
    projects: [
      {
        name: "Healthcare App Redesign",
        description: "Redesigned a healthcare app improving user satisfaction scores by 35%.",
        technologies: ["Figma", "Prototyping", "User Testing"],
      },
      {
        name: "Banking Dashboard",
        description: "Created a comprehensive design system for a banking client's dashboard.",
        technologies: ["Sketch", "Design Systems"],
      },
    ],
    education: [
      {
        institution: "Design Institute",
        degree: "B.A. Interaction Design",
        year: "2019",
      },
    ],
    certifications: ["Certified UX Designer", "Google UX Design Certificate"],
    languages: ["Bahasa Indonesia (Native)", "English (Intermediate)"],
    availability: {
      startDate: "2 weeks",
      hoursPerWeek: "30-40",
      timezone: "WIB (GMT+7)",
    },
    rateRange: "Rp 20.000.000/bulan",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.7,
    completedProjects: 24,
    reviews: [
      {
        name: "Rudi Hartono",
        avatar: "https://randomuser.me/api/portraits/men/36.jpg",
        rating: 5,
        date: "1 bulan yang lalu",
        comment:
          "Siti memiliki mata yang tajam untuk desain dan sangat memahami kebutuhan pengguna. Hasil kerjanya luar biasa!",
      },
    ],
  },
]

export default function TalentProfile({ params }: { params: { id: string } }) {
  // Find the talent by ID
  const talent = talents.find((t) => t.id === Number.parseInt(params.id)) || talents[0]
  const [showContactInfo, setShowContactInfo] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient background */}
      <div className="bg-navy-800 text-offwhite relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] z-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-60 h-60 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="py-6 flex items-center justify-between">

          </div>
          <div className="pb-8 pt-2">
            <h1 className="text-2xl md:text-3xl font-bold">Talent Profile</h1>
            <p className="text-blue-200 mt-2">View detailed information about this talent</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 md:px-6">
        {/* Profile Header */}
        <div className="bg-offwhite rounded-2xl shadow-md border border-gray-200 p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <Avatar className="h-20 w-20 md:h-24 md:w-24 border-4 border-offwhite shadow-lg">
                <AvatarImage src={talent.avatar || "/placeholder.svg"} alt={talent.name} />
                <AvatarFallback className="bg-gradient-to-br from-blue-400 to-navy-500 text-offwhite text-2xl">
                  {talent.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex flex-wrap items-center gap-3 mt-3 sm:mt-0">
                  <h1 className="text-2xl md:text-3xl font-bold text-navy-800">{talent.name}</h1>
                  {talent.available && (
                    <Badge className="bg-green-100 text-green-800 border-green-200 rounded-full px-3 py-1">
                      Available
                    </Badge>
                  )}
                </div>
                <p className="text-lg md:text-xl text-gray-600 mt-1">{talent.title}</p>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-orange-500 mr-1" />
                    <span className="font-medium">{talent.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-blue-500 mr-1" />
                    <span>{talent.completedProjects} projects</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-500 mr-1" />
                    <span>{talent.location}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
              <Button
                variant="outline"
                className="rounded-full border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 hover:border-blue-400"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Profile
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 hover:border-blue-400"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button className="rounded-full bg-orange-500 hover:bg-orange-600 text-offwhite shadow-sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar with key information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="overflow-hidden border border-gray-200 shadow-md rounded-2xl">
              <CardHeader className="bg-blue-50 border-b pb-4">
                <CardTitle className="text-xl text-navy-800">Profile Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 pt-5">
                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Location</h3>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                    <p className="text-gray-700">{talent.location}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Experience Level</h3>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 rounded-full px-3 py-1">
                    {talent.experience}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Job Type</h3>
                  <Badge className="bg-navy-100 text-navy-800 border-navy-200 rounded-full px-3 py-1">
                    {talent.jobType}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Category</h3>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200 rounded-full px-3 py-1">
                    {talent.category}
                  </Badge>
                </div>

                <Separator className="bg-gray-200" />

                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Availability</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Start date:</span>
                      <span className="font-medium text-gray-800">{talent.availability?.startDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hours per week:</span>
                      <span className="font-medium text-gray-800">{talent.availability?.hoursPerWeek}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Timezone:</span>
                      <span className="font-medium text-gray-800">{talent.availability?.timezone}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Rate</h3>
                  <p className="text-lg font-semibold text-blue-700">{talent.rateRange}</p>
                </div>

                <Separator className="bg-gray-200" />

                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {talent.languages?.map((language) => (
                      <Badge
                        key={language}
                        className="bg-gray-100 text-gray-800 border-gray-200 rounded-full px-3 py-1"
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link href={`/book/${talent.id}`}>
                    <Button className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-offwhite py-5 h-auto shadow-md">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Talent
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden border border-gray-200 shadow-md rounded-2xl">
              <CardHeader className="bg-blue-50 border-b pb-4">
                <CardTitle className="text-xl text-navy-800">About</CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <p className="text-gray-700 leading-relaxed">{talent.bio}</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-gray-200 shadow-md rounded-2xl">
              <CardHeader className="bg-blue-50 border-b pb-4">
                <CardTitle className="text-xl text-navy-800">Skills</CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <div className="flex flex-wrap gap-2">
                  {talent.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="text-sm py-1.5 px-3 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200 hover:from-blue-100 hover:to-blue-200 rounded-full"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-blue-50 rounded-t-2xl p-1 border border-gray-200 border-b-0">
                <TabsTrigger
                  value="experience"
                  className="text-xs sm:text-sm rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-offwhite"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className="text-xs sm:text-sm rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-offwhite"
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="text-xs sm:text-sm rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-offwhite"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="text-xs sm:text-sm rounded-full data-[state=active]:bg-blue-500 data-[state=active]:text-offwhite"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>

              <div className="border border-gray-200 rounded-b-2xl shadow-md bg-white">
                <TabsContent value="experience" className="p-6 focus:outline-none">
                  <div className="space-y-6">
                    {talent.workHistory?.map((work, index) => (
                      <div
                        key={index}
                        className="space-y-3 p-5 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-lg text-blue-800">{work.role}</h3>
                          <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                            {work.duration}
                          </span>
                        </div>
                        <p className="text-sm text-blue-600 font-medium">{work.company}</p>
                        <p className="text-gray-700">{work.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="projects" className="p-6 focus:outline-none">
                  <div className="space-y-6">
                    {talent.projects?.map((project, index) => (
                      <div
                        key={index}
                        className="space-y-3 p-5 rounded-xl bg-gradient-to-r from-white to-navy-50 border border-navy-100 hover:shadow-md transition-shadow duration-300"
                      >
                        <h3 className="font-semibold text-lg text-navy-800">{project.name}</h3>
                        <p className="text-gray-700">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} className="bg-white text-navy-700 border border-navy-200 rounded-full">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="education" className="p-6 focus:outline-none">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-blue-800">Education</h3>
                      {talent.education?.map((edu, index) => (
                        <div
                          key={index}
                          className="space-y-2 p-5 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex justify-between">
                            <p className="font-semibold text-blue-800">{edu.degree}</p>
                            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                              {edu.year}
                            </span>
                          </div>
                          <p className="text-blue-600">{edu.institution}</p>
                        </div>
                      ))}
                    </div>

                    {talent.certifications && talent.certifications.length > 0 && (
                      <div className="space-y-4 mt-8">
                        <h3 className="font-semibold text-lg text-blue-800">Certifications</h3>
                        <div className="p-5 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100">
                          <ul className="space-y-2">
                            {talent.certifications.map((cert, index) => (
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
                </TabsContent>

                <TabsContent value="reviews" className="p-6 focus:outline-none">
                  <div className="space-y-6">
                    {talent.reviews?.map((review, index) => (
                      <div
                        key={index}
                        className="space-y-3 p-5 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-navy-500 text-offwhite">
                                {review.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{review.name}</p>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "text-orange-500 fill-orange-500" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}

                    {(!talent.reviews || talent.reviews.length === 0) && (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No reviews yet</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
