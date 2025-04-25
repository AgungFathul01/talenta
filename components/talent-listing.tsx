"use client"

import { useState } from "react"
import {
  Filter,
  Search,
  Sparkles,
  X,
  Loader2,
  LayoutGrid,
  List,
  Calendar,
  Briefcase,
  Star,
  Award,
  ArrowRight,
  MapPin,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Update the talents data to change rates from per hour to per month and add realistic profile images
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
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.9,
    completedProjects: 32,
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
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.7,
    completedProjects: 24,
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
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4.8,
    completedProjects: 28,
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
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 4.6,
    completedProjects: 19,
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
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 4.9,
    completedProjects: 35,
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
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    rating: 4.8,
    completedProjects: 26,
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
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 4.5,
    completedProjects: 12,
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
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4.7,
    completedProjects: 22,
  },
]

// Filter options
const categories = ["Development", "Design", "Data", "DevOps", "Management", "QA"]
const experienceLevels = ["Junior (1-2 years)", "Mid-level (3-5 years)", "Senior (5+ years)"]
const jobTypes = ["Full-time", "Part-time", "Contract"]
// Update the locations to Indonesian cities
const locations = ["Remote", "Jakarta", "Bandung", "Surabaya", "Yogyakarta"]

export default function TalentListing() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedExperience, setSelectedExperience] = useState<string[]>([])
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [showAvailableOnly, setShowAvailableOnly] = useState(true)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // AI search states
  const [aiPrompt, setAiPrompt] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [aiResults, setAiResults] = useState<typeof talents | null>(null)
  const [searchMode, setSearchMode] = useState<"filters" | "ai">("filters")

  // Toggle filter selection
  const toggleFilter = (filter: string, type: "category" | "experience" | "jobType" | "location") => {
    switch (type) {
      case "category":
        setSelectedCategories(
          selectedCategories.includes(filter)
            ? selectedCategories.filter((c) => c !== filter)
            : [...selectedCategories, filter],
        )
        break
      case "experience":
        setSelectedExperience(
          selectedExperience.includes(filter)
            ? selectedExperience.filter((e) => e !== filter)
            : [...selectedExperience, filter],
        )
        break
      case "jobType":
        setSelectedJobTypes(
          selectedJobTypes.includes(filter)
            ? selectedJobTypes.filter((j) => j !== filter)
            : [...selectedJobTypes, filter],
        )
        break
      case "location":
        setSelectedLocations(
          selectedLocations.includes(filter)
            ? selectedLocations.filter((l) => l !== filter)
            : [...selectedLocations, filter],
        )
        break
    }
  }

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedExperience([])
    setSelectedJobTypes([])
    setSelectedLocations([])
    setShowAvailableOnly(true)
  }

  // Filter talents based on selected filters
  const filteredTalents = talents.filter((talent) => {
    // Filter by availability
    if (showAvailableOnly && !talent.available) return false

    // Filter by search query
    if (
      searchQuery &&
      !talent.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !talent.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !talent.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    )
      return false

    // Filter by category
    if (selectedCategories.length > 0 && !selectedCategories.includes(talent.category)) return false

    // Filter by experience
    if (selectedExperience.length > 0 && !selectedExperience.includes(talent.experience)) return false

    // Filter by job type
    if (selectedJobTypes.length > 0 && !selectedJobTypes.includes(talent.jobType)) return false

    // Filter by location
    if (selectedLocations.length > 0 && !selectedLocations.includes(talent.location)) return false

    return true
  })

  // Count active filters
  const activeFilterCount =
    selectedCategories.length +
    selectedExperience.length +
    selectedJobTypes.length +
    selectedLocations.length +
    (showAvailableOnly ? 1 : 0)

  // AI search function (simulated)
  const handleAiSearch = () => {
    if (!aiPrompt.trim()) return

    setIsSearching(true)

    // Simulate API call delay
    setTimeout(() => {
      // Simple keyword matching for demo purposes
      const prompt = aiPrompt.toLowerCase()

      let results = talents.filter((talent) => {
        // Match based on skills
        if (talent.skills.some((skill) => prompt.includes(skill.toLowerCase()))) return true

        // Match based on experience level
        if (prompt.includes("senior") && talent.experience.includes("Senior")) return true
        if (prompt.includes("junior") && talent.experience.includes("Junior")) return true
        if (prompt.includes("mid") && talent.experience.includes("Mid")) return true

        // Match based on job type
        if (prompt.includes("full-time") && talent.jobType === "Full-time") return true
        if (prompt.includes("part-time") && talent.jobType === "Part-time") return true
        if (prompt.includes("contract") && talent.jobType === "Contract") return true

        // Match based on location
        if (prompt.includes("remote") && talent.location === "Remote") return true

        // Match based on category
        if (prompt.includes("developer") && talent.category === "Development") return true
        if (prompt.includes("design") && talent.category === "Design") return true
        if (prompt.includes("data") && talent.category === "Data") return true

        // Match based on availability
        if (prompt.includes("available") && talent.available) return true

        return false
      })

      // If no specific matches, try more general matching
      if (results.length === 0) {
        results = talents.filter((talent) => {
          return (
            talent.title.toLowerCase().includes(prompt) ||
            talent.name.toLowerCase().includes(prompt) ||
            talent.category.toLowerCase().includes(prompt)
          )
        })
      }

      // If still no matches, show available talents
      if (results.length === 0 && prompt.includes("available")) {
        results = talents.filter((talent) => talent.available)
      }

      setAiResults(results)
      setIsSearching(false)
    }, 1500)
  }

  const FilterSection = ({
    title,
    options,
    selected,
    type,
  }: {
    title: string
    options: string[]
    selected: string[]
    type: "category" | "experience" | "jobType" | "location"
  }) => (
    <div className="space-y-2">
      <h3 className="font-medium text-gray-800">{title}</h3>
      <div className="space-y-1">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`${type}-${option}`}
              checked={selected.includes(option)}
              onCheckedChange={() => toggleFilter(option, type)}
              className="text-blue-500 border-gray-300 focus:ring-blue-500"
            />
            <Label htmlFor={`${type}-${option}`} className="text-sm cursor-pointer">
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  )

  // Determine which talents to display
  const displayedTalents = searchMode === "ai" && aiResults ? aiResults : filteredTalents

  // Render talent card (used in grid view)
  const renderTalentCard = (talent: (typeof talents)[0]) => (
    <Card
      key={talent.id}
      className="overflow-hidden border-0 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300 group bg-white rounded-xl h-full flex flex-col"
    >
      <div className="p-5 flex items-start gap-4">
        <Avatar className="h-16 w-16 border-2 border-white shadow-md ring-2 ring-blue-50">
          <AvatarImage src={talent.avatar || "/placeholder.svg"} alt={talent.name} />
          <AvatarFallback className="bg-gradient-to-br from-blue-400 to-navy-500 text-offwhite">
            {talent.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold group-hover:text-blue-700 transition-colors">{talent.name}</h3>
              <p className="text-gray-500 text-sm">{talent.title}</p>
            </div>
            {talent.available ? (
              <Badge className="bg-green-100 text-green-800 border-green-200 rounded-full px-3 py-1 text-xs">
                Available
              </Badge>
            ) : (
              <Badge className="bg-gray-100 text-gray-600 border-gray-200 rounded-full px-3 py-1 text-xs">
                Unavailable
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
            <div className="flex items-center">
              <Star className="h-3.5 w-3.5 mr-1 text-orange-500" />
              <span className="font-medium">{talent.rating}</span>
            </div>
            <div className="flex items-center">
              <Award className="h-3.5 w-3.5 mr-1 text-blue-500" />
              <span>{talent.completedProjects} projects</span>
            </div>
          </div>
        </div>
      </div>

      <CardContent className="pb-3 pt-0 flex-1">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-sm font-medium mb-2 text-gray-700">Skills</p>
            <div className="flex flex-wrap gap-2">
              {talent.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="hover:bg-blue-100 rounded-full px-2 py-0.5 text-xs transition-all duration-200 bg-blue-50 text-blue-700 border border-blue-100"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
            <span className="inline-flex items-center text-xs">
              <MapPin className="h-3 w-3 mr-1 text-gray-400" />
              {talent.location}
            </span>
          </div>
        </div>
      </CardContent>

      <div className="mt-auto">
        <div className="p-3 flex gap-2 bg-white border-t border-gray-100">
          <Link href={`/book/${talent.id}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full rounded-lg text-sm h-9 border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book
            </Button>
          </Link>
          <Link href={`/talent/${talent.id}`} className="flex-1">
            <Button className="w-full rounded-lg text-sm h-9 bg-orange-500 hover:bg-orange-600 text-offwhite">
              View Profile
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )

  // Render talent in list view (horizontal layout)
  const renderTalentListItem = (talent: (typeof talents)[0]) => (
    <Card
      key={talent.id}
      className="overflow-hidden border-0 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300 group bg-white rounded-xl"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 p-5">
          <div className="flex items-start gap-4">
            <Avatar className="h-16 w-16 border-2 border-white shadow-md ring-2 ring-blue-50">
              <AvatarImage src={talent.avatar || "/placeholder.svg"} alt={talent.name} />
              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-navy-500 text-white">
                {talent.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-blue-700 transition-colors">{talent.name}</h3>
                  <p className="text-gray-500 text-sm">{talent.title}</p>
                </div>
                {talent.available ? (
                  <Badge className="bg-green-100 text-green-800 border-green-200 rounded-full px-3 py-1 text-xs">
                    Available
                  </Badge>
                ) : (
                  <Badge className="bg-gray-100 text-gray-600 border-gray-200 rounded-full px-3 py-1 text-xs">
                    Unavailable
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                <div className="flex items-center">
                  <Star className="h-3.5 w-3.5 mr-1 text-orange-500" />
                  <span className="font-medium">{talent.rating}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-3.5 w-3.5 mr-1 text-blue-500" />
                  <span>{talent.completedProjects} projects</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium mb-2 text-gray-700">Skills</p>
            <div className="flex flex-wrap gap-2">
              {talent.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="hover:bg-blue-100 rounded-full px-2 py-0.5 text-xs transition-all duration-200 bg-blue-50 text-blue-700 border border-blue-100"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500 mt-4">
            <span className="inline-flex items-center">
              <MapPin className="h-3 w-3 mr-1 text-gray-400" />
              {talent.location}
            </span>
            <span className="inline-flex items-center">
              <Briefcase className="h-3 w-3 mr-1 text-gray-400" />
              {talent.category}
            </span>
          </div>
        </div>

        <div className="md:w-1/3 flex flex-col justify-between p-5 bg-blue-50 border-t md:border-t-0 md:border-l">
          <div className="flex flex-col gap-3">
            <Link href={`/book/${talent.id}`} className="w-full">
              <Button
                variant="outline"
                className="w-full rounded-lg text-sm h-9 border-blue-200 bg-white text-blue-700 hover:bg-blue-100 hover:text-blue-800"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Talent
              </Button>
            </Link>
            <Link href={`/talent/${talent.id}`} className="w-full">
              <Button className="w-full rounded-lg text-sm h-9 bg-orange-500 hover:bg-orange-600 text-offwhite">
                View Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modern Hero Section */}
      <div className="relative bg-navy-800 text-offwhite overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] z-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-60 h-60 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-sm text-blue-200 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2"></span>
                Platform Talenta Terbaik di Indonesia
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Temukan <span className="text-orange-500">Talenta Profesional</span> untuk Proyek Anda
              </h1>
              <p className="text-base md:text-lg text-blue-100 max-w-lg">
                Akses ke ribuan profesional terverifikasi dengan keahlian yang Anda butuhkan untuk mengembangkan bisnis
                Anda.
              </p>
            </div>
            <div className="hidden md:block relative">
              <div className="relative z-10 bg-navy-700/50 backdrop-blur-sm p-6 rounded-2xl border border-navy-600 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
                    T
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Talent Platform</h3>
                    <p className="text-blue-200 text-sm">Temukan talenta terbaik</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-navy-600/50 border border-navy-500"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0"></div>
                      <div className="flex-grow">
                        <div className="h-2.5 bg-navy-400 rounded-full w-24 mb-2"></div>
                        <div className="h-2 bg-navy-400 rounded-full w-16"></div>
                      </div>
                      <div className="h-8 w-16 bg-orange-500 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-30 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Stats Bar with Modern Design */}
        <div className="relative border-t border-navy-700 bg-navy-800/80 backdrop-blur-sm py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 rounded-xl hover:bg-navy-700/50 transition-colors">
                <p className="text-2xl md:text-3xl font-bold text-orange-500">500+</p>
                <p className="text-blue-200 text-xs md:text-sm">Talenta Terverifikasi</p>
              </div>
              <div className="p-3 rounded-xl hover:bg-navy-700/50 transition-colors">
                <p className="text-2xl md:text-3xl font-bold text-orange-500">98%</p>
                <p className="text-blue-200 text-xs md:text-sm">Kepuasan Klien</p>
              </div>
              <div className="p-3 rounded-xl hover:bg-navy-700/50 transition-colors">
                <p className="text-2xl md:text-3xl font-bold text-orange-500">24/7</p>
                <p className="text-blue-200 text-xs md:text-sm">Dukungan</p>
              </div>
              <div className="p-3 rounded-xl hover:bg-navy-700/50 transition-colors">
                <p className="text-2xl md:text-3xl font-bold text-orange-500">15+</p>
                <p className="text-blue-200 text-xs md:text-sm">Kategori Keahlian</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col space-y-6">
          {/* Search Tabs */}
          <Tabs
            defaultValue="filters"
            className="w-full"
            onValueChange={(value) => setSearchMode(value as "filters" | "ai")}
          >
            <TabsList className="grid w-full grid-cols-2 mb-4 bg-offwhite p-1 rounded-full shadow-sm border border-gray-200">
              <TabsTrigger
                value="filters"
                className="text-sm md:text-base data-[state=active]:bg-blue-500 data-[state=active]:text-offwhite rounded-full"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter Search
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="text-sm md:text-base data-[state=active]:bg-blue-500 data-[state=active]:text-offwhite rounded-full"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                AI Search
              </TabsTrigger>
            </TabsList>

            <TabsContent value="filters">
              {/* Filter Panel */}
              <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden">
                <CardHeader className="bg-blue-50 border-b pb-4">
                  <h2 className="text-xl font-semibold text-navy-800">Find Your Perfect Talent Match</h2>
                  <p className="text-gray-600 text-sm">Use the filters below to narrow down your search</p>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Primary Search Bar - Most Important */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="Search by name, title, or skills..."
                        className="pl-12 h-14 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-blue-500 text-base shadow-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Quick Filters Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {/* Availability - Common Filter */}
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 shadow-sm">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="available-only"
                          checked={showAvailableOnly}
                          onCheckedChange={() => setShowAvailableOnly(!showAvailableOnly)}
                          className="text-blue-500 border-blue-300 focus:ring-blue-500"
                        />
                        <Label htmlFor="available-only" className="cursor-pointer text-navy-800 font-medium">
                          Available talents only
                        </Label>
                      </div>
                    </div>

                    {/* Experience Level - Common Filter */}
                    <div>
                      <Select
                        value={selectedExperience.length === 1 ? selectedExperience[0] : ""}
                        onValueChange={(value) => {
                          if (value === "any") {
                            setSelectedExperience([])
                          } else if (value) {
                            setSelectedExperience([value])
                          }
                        }}
                      >
                        <SelectTrigger className="w-full border-gray-300 rounded-xl h-14 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Experience Level" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-blue-100">
                          <SelectItem value="any">Any Experience</SelectItem>
                          {experienceLevels.map((level) => (
                            <SelectItem key={level} value={level}>
                              {level}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Job Type - Common Filter */}
                    <div>
                      <Select
                        value={selectedJobTypes.length === 1 ? selectedJobTypes[0] : ""}
                        onValueChange={(value) => {
                          if (value === "any") {
                            setSelectedJobTypes([])
                          } else if (value) {
                            setSelectedJobTypes([value])
                          }
                        }}
                      >
                        <SelectTrigger className="w-full border-gray-300 rounded-xl h-14 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Job Type" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-blue-100">
                          <SelectItem value="any">Any Type</SelectItem>
                          {jobTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Location - Common Filter */}
                    <div>
                      <Select
                        value={selectedLocations.length === 1 ? selectedLocations[0] : ""}
                        onValueChange={(value) => {
                          if (value === "any") {
                            setSelectedLocations([])
                          } else if (value) {
                            setSelectedLocations([value])
                          }
                        }}
                      >
                        <SelectTrigger className="w-full border-gray-300 rounded-xl h-14 focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-blue-100">
                          <SelectItem value="any">Any Location</SelectItem>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Secondary Row - Sort and Clear */}
                  <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
                    <Select defaultValue="relevance">
                      <SelectTrigger className="w-full sm:w-[200px] border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-blue-100">
                        <SelectGroup>
                          <SelectItem value="relevance">Relevance</SelectItem>
                          <SelectItem value="recent">Most Recent</SelectItem>
                          <SelectItem value="experience-high">Experience (High to Low)</SelectItem>
                          <SelectItem value="experience-low">Experience (Low to High)</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="w-full sm:w-auto border-gray-300 rounded-xl h-12 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                      disabled={activeFilterCount === 1 && showAvailableOnly}
                    >
                      Clear all filters
                      {activeFilterCount > 0 && (
                        <Badge variant="secondary" className="ml-2 rounded-full bg-blue-100 text-blue-600">
                          {activeFilterCount}
                        </Badge>
                      )}
                    </Button>
                  </div>

                  {/* Expandable Advanced Filters */}
                  <Accordion type="single" collapsible className="w-full mt-6">
                    <AccordionItem value="filters" className="border-b-0">
                      <AccordionTrigger className="py-2 hover:text-blue-600 transition-colors">
                        Advanced Filters
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                          <FilterSection
                            title="Category"
                            options={categories}
                            selected={selectedCategories}
                            type="category"
                          />
                          <FilterSection
                            title="Experience Level"
                            options={experienceLevels}
                            selected={selectedExperience}
                            type="experience"
                          />
                          <FilterSection
                            title="Job Type"
                            options={jobTypes}
                            selected={selectedJobTypes}
                            type="jobType"
                          />
                          <FilterSection
                            title="Location"
                            options={locations}
                            selected={selectedLocations}
                            type="location"
                          />
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Active Filters */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {showAvailableOnly && (
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1 bg-blue-100 text-blue-600 rounded-full px-3 py-1"
                    >
                      Available only
                      <button
                        onClick={() => setShowAvailableOnly(false)}
                        className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {selectedCategories.map((category) => (
                    <Badge
                      key={category}
                      variant="secondary"
                      className="flex items-center gap-1 bg-blue-100 text-blue-600 rounded-full px-3 py-1"
                    >
                      {category}
                      <button
                        onClick={() => toggleFilter(category, "category")}
                        className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {selectedExperience.map((exp) => (
                    <Badge
                      key={exp}
                      variant="secondary"
                      className="flex items-center gap-1 bg-blue-100 text-blue-600 rounded-full px-3 py-1"
                    >
                      {exp}
                      <button
                        onClick={() => toggleFilter(exp, "experience")}
                        className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {selectedJobTypes.map((type) => (
                    <Badge
                      key={type}
                      variant="secondary"
                      className="flex items-center gap-1 bg-blue-100 text-blue-600 rounded-full px-3 py-1"
                    >
                      {type}
                      <button
                        onClick={() => toggleFilter(type, "jobType")}
                        className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {selectedLocations.map((location) => (
                    <Badge
                      key={location}
                      variant="secondary"
                      className="flex items-center gap-1 bg-blue-100 text-blue-600 rounded-full px-3 py-1"
                    >
                      {location}
                      <button
                        onClick={() => toggleFilter(location, "location")}
                        className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="ai">
              {/* AI Search Panel */}
              <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden">
                <CardHeader className="bg-blue-50 border-b pb-4">
                  <h3 className="text-xl font-semibold flex items-center text-navy-800">
                    <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
                    AI-Powered Talent Search
                  </h3>
                  <p className="text-gray-600 text-sm">Describe the talent you're looking for in natural language</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-xl text-sm text-gray-700 mb-4 border border-blue-100 shadow-sm">
                      <p className="font-medium text-navy-800">Example prompts:</p>
                      <ul className="list-disc list-inside space-y-1 mt-1">
                        <li>"I need a senior React developer who is available for remote work"</li>
                        <li>"Looking for a UX designer with Figma experience"</li>
                        <li>"Find me a data scientist with machine learning skills"</li>
                      </ul>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Textarea
                        placeholder="Describe the talent you're looking for..."
                        className="min-h-[120px] border-gray-300 rounded-xl focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                      />
                      <Button
                        onClick={handleAiSearch}
                        disabled={isSearching || !aiPrompt.trim()}
                        className="self-end rounded-full bg-orange-500 hover:bg-orange-600 text-offwhite px-6"
                      >
                        {isSearching ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Searching...
                          </>
                        ) : (
                          <>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Search with AI
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Results Header with Count and View Toggle */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Showing {displayedTalents.length} {displayedTalents.length === 1 ? "talent" : "talents"}
            </p>

            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-1 bg-white shadow-sm">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      className={`h-8 w-8 p-0 rounded-full ${viewMode === "grid" ? "bg-blue-500 text-offwhite" : "text-gray-600"}`}
                      onClick={() => setViewMode("grid")}
                    >
                      <LayoutGrid className="h-4 w-4" />
                      <span className="sr-only">Grid view</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Grid view</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      className={`h-8 w-8 p-0 rounded-full ${viewMode === "list" ? "bg-blue-500 text-offwhite" : "text-gray-600"}`}
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                      <span className="sr-only">List view</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>List view</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Talent Cards */}
          {displayedTalents.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Search className="h-10 w-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-800">No talents found</h3>
              <p className="text-gray-500 mt-2 max-w-md mx-auto">
                {searchMode === "ai"
                  ? "Try a different search prompt or be more specific"
                  : "Try adjusting your filters to find more talents"}
              </p>
              <Button
                variant="outline"
                className="mt-6 rounded-full border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400"
                onClick={() => {
                  if (searchMode === "ai") {
                    setAiPrompt("")
                    setAiResults(null)
                  } else {
                    clearFilters()
                  }
                }}
              >
                {searchMode === "ai" ? "Clear search" : "Clear all filters"}
              </Button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {displayedTalents.map((talent) => renderTalentCard(talent))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {displayedTalents.map((talent) => renderTalentListItem(talent))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
