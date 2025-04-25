"use client"

import { useState } from "react"
import { Calendar, MapPin, Briefcase, Clock, Star, Award, Check, ChevronLeft } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// Update the talents data to use Indonesian names and pricing and add realistic profile images
const talents = [
  {
    id: 1,
    name: "Budi Santoso",
    title: "Senior Frontend Developer",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    experience: "Senior (5+ years)",
    jobType: "Full-time",
    category: "Development",
    location: "Remote",
    available: true,
    rate: "Rp 25.000.000/bulan",
    availableTimes: ["Pagi", "Siang", "Sore"],
    timezone: "WIB (GMT+7)",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.9,
    completedProjects: 32,
    bio: "Passionate frontend developer with 7+ years of experience building responsive and accessible web applications. Specialized in React ecosystem and modern JavaScript.",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    title: "UX/UI Designer",
    skills: ["Figma", "User Research", "Prototyping"],
    experience: "Mid-level (3-5 years)",
    jobType: "Contract",
    category: "Design",
    location: "Jakarta",
    available: true,
    rate: "Rp 20.000.000/bulan",
    availableTimes: ["Pagi", "Siang"],
    timezone: "WIB (GMT+7)",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.7,
    completedProjects: 24,
    bio: "Creative UX/UI designer with a passion for creating intuitive and engaging user experiences. Focused on user-centered design principles and accessibility.",
  },
  {
    id: 3,
    name: "Agus Wijaya",
    title: "Data Scientist",
    skills: ["Python", "Machine Learning", "SQL"],
    experience: "Senior (5+ years)",
    jobType: "Full-time",
    category: "Data",
    location: "Remote",
    available: true,
    rate: "Rp 28.000.000/bulan",
    availableTimes: ["Siang", "Sore"],
    timezone: "WIB (GMT+7)",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4.8,
    completedProjects: 28,
    bio: "Experienced data scientist with expertise in machine learning and statistical analysis. Passionate about turning data into actionable insights.",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    title: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB"],
    experience: "Mid-level (3-5 years)",
    jobType: "Part-time",
    category: "Development",
    location: "Bandung",
    available: true,
    rate: "Rp 22.000.000/bulan",
    availableTimes: ["Pagi", "Sore"],
    timezone: "WIB (GMT+7)",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 4.6,
    completedProjects: 19,
    bio: "Backend developer specializing in Node.js and database design. Experienced in building scalable APIs and microservices.",
  },
  {
    id: 5,
    name: "Hendra Gunawan",
    title: "DevOps Engineer",
    skills: ["AWS", "Docker", "Kubernetes"],
    experience: "Senior (5+ years)",
    jobType: "Contract",
    category: "DevOps",
    location: "Remote",
    available: false,
    rate: "Rp 26.000.000/bulan",
    availableTimes: ["Pagi", "Siang", "Sore"],
    timezone: "WIB (GMT+7)",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 4.9,
    completedProjects: 35,
    bio: "DevOps engineer with extensive experience in cloud infrastructure and CI/CD pipelines. Focused on automation and scalable solutions.",
  },
  {
    id: 6,
    name: "Maya Putri",
    title: "Product Manager",
    skills: ["Agile", "Roadmapping", "User Stories"],
    experience: "Senior (5+ years)",
    jobType: "Full-time",
    category: "Management",
    location: "Surabaya",
    available: true,
    rate: "Rp 30.000.000/bulan",
    availableTimes: ["Pagi", "Siang"],
    timezone: "WIB (GMT+7)",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 4.8,
    completedProjects: 26,
    bio: "Product manager with a track record of successful product launches. Skilled in agile methodologies and cross-functional team leadership.",
  },
  {
    id: 7,
    name: "Dimas Pratama",
    title: "Mobile Developer",
    skills: ["React Native", "Swift", "Kotlin"],
    experience: "Junior (1-2 years)",
    jobType: "Full-time",
    category: "Development",
    location: "Remote",
    available: true,
    rate: "Rp 18.000.000/bulan",
    availableTimes: ["Siang", "Sore"],
    timezone: "WIB (GMT+7)",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 4.5,
    completedProjects: 12,
    bio: "Mobile developer specializing in cross-platform and native app development. Passionate about creating intuitive and performant mobile applications with great user experiences.",
  },
  {
    id: 8,
    name: "Rina Wati",
    title: "QA Engineer",
    skills: ["Test Automation", "Selenium", "Jest"],
    experience: "Mid-level (3-5 years)",
    jobType: "Contract",
    category: "QA",
    location: "Yogyakarta",
    available: true,
    rate: "Rp 19.000.000/bulan",
    availableTimes: ["Pagi", "Siang", "Sore"],
    timezone: "WIB (GMT+7)",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4.7,
    completedProjects: 22,
    bio: "QA engineer with expertise in test automation and quality assurance processes. Committed to delivering bug-free software through comprehensive testing strategies.",
  },
]

export default function BookTalent({ params }: { params: { id: string } }) {
  // Find the talent by ID
  const talent = talents.find((t) => t.id === Number.parseInt(params.id)) || talents[0]

  // State for form
  const [date, setDate] = useState<Date>()
  const [duration, setDuration] = useState("1")
  const [meetingType, setMeetingType] = useState("video")

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
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-offwhite px-4 py-2 rounded-lg transition-colors border border-white/20"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Back to Listings</span>
            </Link>
          </div>
          <div className="pb-8 pt-2">
            <h1 className="text-2xl md:text-3xl font-bold">Book a Session with {talent.name}</h1>
            <p className="text-blue-200 mt-2">Complete the form below to schedule your booking</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Talent Information */}
          <div className="lg:col-span-1">
            <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden lg:sticky lg:top-6">
              <CardHeader className="bg-blue-50 border-b pb-4">
                <CardTitle className="text-xl text-navy-800">Talent Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 pt-5">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-16 w-16 border-2 border-offwhite shadow-md">
                    <AvatarImage src={talent.avatar || "/placeholder.svg"} alt={talent.name} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-400 to-navy-500 text-offwhite text-xl">
                      {talent.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold">{talent.name}</h2>
                    <p className="text-gray-500">{talent.title}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-orange-500 mr-1" />
                        <span className="font-medium">{talent.rating}</span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-blue-500 mr-1" />
                        <span>{talent.completedProjects} projects</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-sm text-gray-600 italic">"{talent.bio}"</p>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                  {talent.location}
                </div>

                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2 text-blue-500" />
                  {talent.category} • {talent.experience}
                </div>

                <Separator className="bg-gray-200" />

                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="bg-gray-200" />

                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Rate</h3>
                  <p className="text-xl font-semibold text-blue-700">{talent.rate}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Timezone</h3>
                  <p className="text-sm">{talent.timezone}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2 text-blue-700">Available Times</h3>
                  <div className="flex flex-wrap gap-2">
                    {talent.availableTimes.map((time) => (
                      <Badge key={time} variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                        {time}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form - All in one page */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden">
              <CardHeader className="bg-blue-50 border-b pb-4">
                <CardTitle className="text-xl text-navy-800">Pesan {talent.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                {/* Schedule Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-800">Schedule Your Session</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Date Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-gray-700">
                        Select Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-gray-300 rounded-xl h-12 bg-white"
                            id="date"
                          >
                            <Calendar className="mr-2 h-4 w-4 text-blue-500" />
                            <span>{date ? date.toLocaleDateString() : "Pick a date"}</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 rounded-xl border-blue-100">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            className="rounded-xl"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Time Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-gray-700">
                        Select Time
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full border-gray-300 rounded-xl h-12">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-blue-100">
                          <SelectItem value="9:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="11:00">11:00</SelectItem>
                          <SelectItem value="12:00">12:00</SelectItem>
                          <SelectItem value="13:00">13:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Duration */}
                    <div className="space-y-2">
                      <Label htmlFor="duration" className="text-gray-700">
                        Duration (months)
                      </Label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger className="w-full border-gray-300 rounded-xl h-12">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-blue-100">
                          <SelectItem value="1">1 bulan</SelectItem>
                          <SelectItem value="3">3 bulan</SelectItem>
                          <SelectItem value="6">6 bulan</SelectItem>
                          <SelectItem value="12">12 bulan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Meeting Type */}
                    <div className="space-y-2">
                      <Label htmlFor="meetingType" className="text-gray-700">
                        Meeting Type
                      </Label>
                      <Select value={meetingType} onValueChange={setMeetingType}>
                        <SelectTrigger className="w-full border-gray-300 rounded-xl h-12">
                          <SelectValue placeholder="Select meeting type" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-blue-100">
                          <SelectItem value="video">Video Call</SelectItem>
                          <SelectItem value="phone">Telepon</SelectItem>
                          <SelectItem value="inperson">Tatap Muka</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator className="bg-gray-200" />

                {/* Project Details Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-800">Project Details</h3>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <Label htmlFor="projectTitle" className="text-gray-700">
                      Project Title
                    </Label>
                    <Input
                      id="projectTitle"
                      placeholder="Enter a title for your project"
                      className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType" className="text-gray-700">
                      Project Type
                    </Label>
                    <RadioGroup defaultValue="consultation" className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                      <div>
                        <RadioGroupItem value="consultation" id="consultation" className="peer sr-only" />
                        <Label
                          htmlFor="consultation"
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:border-blue-200 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-500 cursor-pointer"
                        >
                          <div className="mb-2 p-2 rounded-full bg-blue-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-600"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                          </div>
                          <div className="text-center">
                            <div className="text-base font-medium">Consultation</div>
                            <div className="text-sm text-gray-500">Get expert advice</div>
                          </div>
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem value="development" id="development" className="peer sr-only" />
                        <Label
                          htmlFor="development"
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:border-blue-200 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-500 cursor-pointer"
                        >
                          <div className="mb-2 p-2 rounded-full bg-blue-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-600"
                            >
                              <path d="m18 16 4-4-4-4"></path>
                              <path d="m6 8-4 4 4 4"></path>
                              <path d="m14.5 4-5 16"></path>
                            </svg>
                          </div>
                          <div className="text-center">
                            <div className="text-base font-medium">Development</div>
                            <div className="text-sm text-gray-500">Build a feature</div>
                          </div>
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem value="review" id="review" className="peer sr-only" />
                        <Label
                          htmlFor="review"
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:border-blue-200 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-500 cursor-pointer"
                        >
                          <div className="mb-2 p-2 rounded-full bg-blue-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-blue-600"
                            >
                              <path d="M12 20V10"></path>
                              <path d="M18 20V4"></path>
                              <path d="M6 20v-6"></path>
                            </svg>
                          </div>
                          <div className="text-center">
                            <div className="text-base font-medium">Review</div>
                            <div className="text-sm text-gray-500">Code or design review</div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectDetails" className="text-gray-700">
                      Project Description
                    </Label>
                    <Textarea
                      id="projectDetails"
                      placeholder="Describe your project and what you need help with..."
                      className="min-h-[150px] border-gray-300 rounded-xl focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <Separator className="bg-gray-200" />

                {/* Contact Information Section */}
                <div className="space-y-6">
                  <h3 className="text-lg font-medium text-gray-800">Your Contact Information</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700">
                        Company (Optional)
                      </Label>
                      <Input
                        id="company"
                        placeholder="Enter your company name"
                        className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Booking Summary */}
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-6">
                  <h3 className="text-lg font-medium mb-4 text-navy-800">Ringkasan Pemesanan</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-blue-500" />
                        <span className="text-gray-700">Durasi:</span>
                      </div>
                      <span className="font-medium">{duration} bulan</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                        <span className="text-gray-700">Tanggal Mulai:</span>
                      </div>
                      <span className="font-medium">{date ? date.toLocaleDateString() : "Belum dipilih"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 text-blue-500"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span className="text-gray-700">Jenis Meeting:</span>
                      </div>
                      <span className="font-medium">
                        {meetingType === "video" ? "Video Call" : meetingType === "phone" ? "Telepon" : "Tatap Muka"}
                      </span>
                    </div>
                    <Separator className="bg-blue-200 my-2" />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="text-gray-700 font-medium">Tarif per bulan:</span>
                      </div>
                      <span className="font-medium">{talent.rate}</span>
                    </div>
                    <Separator className="bg-blue-200 my-2" />
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-semibold text-navy-800">Total:</span>
                      <span className="font-bold text-navy-800">
                        {`Rp ${new Intl.NumberFormat("id-ID").format(Number.parseInt(talent.rate.replace(/\D/g, "")) * Number.parseInt(duration))}`}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button className="rounded-full px-6 py-5 h-auto bg-orange-500 hover:bg-orange-600 text-offwhite font-medium text-base shadow-md">
                    <Check className="mr-2 h-5 w-5" />
                    Konfirmasi Pemesanan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
