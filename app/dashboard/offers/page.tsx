"use client"

import { useState } from "react"
import {
  MessageSquare,
  FileText,
  Briefcase,
  Calendar,
  DollarSign,
  MapPin,
  Search,
  CheckCircle2,
  XCircle,
  Building,
  ExternalLink,
  User,
  Filter,
  Clock,
  Star,
  Zap,
  Users,
  Globe,
  Share2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import Navbar from "@/components/navbar"

// Mock data
const offersData = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Tech Innovators",
    companyLogo: "https://randomuser.me/api/portraits/men/32.jpg",
    type: "Full-time",
    salary: "Rp 30.000.000/bulan",
    location: "Remote",
    status: "pending", // pending, accepted, declined
    date: "2023-11-28",
    description:
      "Kami mencari Senior React Developer untuk bergabung dengan tim pengembangan produk kami. Anda akan bertanggung jawab untuk membangun dan memelihara aplikasi web yang skalabel.",
    requirements: [
      "Min. 5 tahun pengalaman dengan React",
      "Pengalaman dengan TypeScript",
      "Pemahaman mendalam tentang state management",
    ],
    benefits: ["Jam kerja fleksibel", "Asuransi kesehatan", "Tunjangan pendidikan", "Bonus tahunan"],
    companyInfo: {
      size: "50-200 karyawan",
      industry: "Teknologi Informasi",
      website: "https://techinnovators.com",
      founded: "2015",
      about:
        "Tech Innovators adalah perusahaan teknologi yang fokus pada pengembangan produk digital inovatif untuk berbagai industri.",
    },
    contactPerson: {
      name: "Rina Wijaya",
      position: "HR Manager",
      email: "rina@techinnovators.com",
    },
    matchScore: 92,
    skills: ["React", "TypeScript", "Redux", "Node.js", "GraphQL"],
    teamSize: "8-12 orang",
    projectDuration: "Long-term",
  },
  {
    id: 2,
    title: "Frontend Consultant",
    company: "Digital Solutions",
    companyLogo: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "Contract",
    salary: "Rp 40.000.000/bulan",
    location: "Jakarta",
    status: "pending",
    date: "2023-11-25",
    description:
      "Kami mencari konsultan frontend untuk membantu meningkatkan arsitektur frontend kami dan memberikan pelatihan kepada tim internal.",
    requirements: [
      "Min. 7 tahun pengalaman frontend",
      "Pengalaman sebagai konsultan",
      "Kemampuan komunikasi yang baik",
    ],
    benefits: [
      "Kontrak 6 bulan dengan kemungkinan perpanjangan",
      "Bonus penyelesaian proyek",
      "Fleksibilitas lokasi kerja",
    ],
    companyInfo: {
      size: "200-500 karyawan",
      industry: "Konsultan IT",
      website: "https://digitalsolutions.com",
      founded: "2010",
      about:
        "Digital Solutions adalah perusahaan konsultan IT terkemuka yang menyediakan solusi digital untuk perusahaan Fortune 500.",
    },
    contactPerson: {
      name: "Budi Santoso",
      position: "Technical Director",
      email: "budi@digitalsolutions.com",
    },
    matchScore: 87,
    skills: ["React", "Angular", "Vue.js", "JavaScript", "CSS Architecture"],
    teamSize: "4-6 orang",
    projectDuration: "6 bulan",
  },
  {
    id: 3,
    title: "UI/UX Designer & Developer",
    company: "Creative Studio",
    companyLogo: "https://randomuser.me/api/portraits/women/68.jpg",
    type: "Project-based",
    salary: "Rp 35.000.000 (total project)",
    location: "Bandung / Remote",
    status: "accepted",
    date: "2023-11-20",
    description:
      "Kami mencari UI/UX Designer yang juga bisa mengimplementasikan desain ke dalam kode. Proyek ini berfokus pada redesign aplikasi mobile kami.",
    requirements: [
      "Portofolio desain UI/UX yang kuat",
      "Kemampuan coding dengan React Native",
      "Pengalaman dengan design system",
    ],
    benefits: ["Pembayaran bertahap", "Portofolio yang berharga", "Potensi kerjasama jangka panjang"],
    companyInfo: {
      size: "10-50 karyawan",
      industry: "Desain & Kreatif",
      website: "https://creativestudio.id",
      founded: "2018",
      about: "Creative Studio adalah studio desain yang fokus pada pengalaman pengguna dan desain produk digital.",
    },
    contactPerson: {
      name: "Diana Putri",
      position: "Creative Director",
      email: "diana@creativestudio.id",
    },
    matchScore: 95,
    skills: ["UI Design", "UX Research", "React Native", "Figma", "Design Systems"],
    teamSize: "3-5 orang",
    projectDuration: "3 bulan",
  },
  {
    id: 4,
    title: "Senior Frontend Engineer",
    company: "Fintech Indonesia",
    companyLogo: "https://randomuser.me/api/portraits/men/22.jpg",
    type: "Full-time",
    salary: "Rp 28.000.000 - 35.000.000/bulan",
    location: "Jakarta",
    status: "declined",
    date: "2023-11-15",
    description:
      "Kami mencari Senior Frontend Engineer untuk membangun dan mengembangkan aplikasi fintech kami. Anda akan bekerja dengan tim yang berpengalaman dalam industri keuangan.",
    requirements: [
      "Min. 4 tahun pengalaman dengan JavaScript/TypeScript",
      "Pengalaman dengan React dan Redux",
      "Pemahaman tentang keamanan frontend",
    ],
    benefits: [
      "Asuransi kesehatan premium",
      "Program kepemilikan saham karyawan",
      "Tunjangan transportasi",
      "Lingkungan kerja yang dinamis",
    ],
    companyInfo: {
      size: "100-250 karyawan",
      industry: "Financial Technology",
      website: "https://fintechindonesia.com",
      founded: "2017",
      about:
        "Fintech Indonesia adalah perusahaan fintech yang menyediakan solusi pembayaran digital dan pinjaman untuk pasar Indonesia.",
    },
    contactPerson: {
      name: "Rudi Hartono",
      position: "CTO",
      email: "rudi@fintechindonesia.com",
    },
    matchScore: 83,
    skills: ["React", "Redux", "TypeScript", "Security", "Payment Integration"],
    teamSize: "10-15 orang",
    projectDuration: "Long-term",
  },
  {
    id: 5,
    title: "React Native Developer",
    company: "Mobile App Studio",
    companyLogo: "https://randomuser.me/api/portraits/women/28.jpg",
    type: "Part-time",
    salary: "Rp 15.000.000/bulan (20 jam/minggu)",
    location: "Remote",
    status: "pending",
    date: "2023-11-10",
    description:
      "Kami mencari React Native Developer paruh waktu untuk membantu mengembangkan aplikasi mobile kami. Ideal untuk freelancer yang mencari pekerjaan tetap paruh waktu.",
    requirements: [
      "Min. 2 tahun pengalaman dengan React Native",
      "Portofolio aplikasi yang telah dirilis",
      "Kemampuan bekerja secara mandiri",
    ],
    benefits: [
      "Jadwal kerja fleksibel",
      "Kemungkinan untuk bekerja full-time di masa depan",
      "Lingkungan startup yang dinamis",
    ],
    companyInfo: {
      size: "10-50 karyawan",
      industry: "Mobile Development",
      website: "https://mobileappstudio.id",
      founded: "2019",
      about:
        "Mobile App Studio adalah studio pengembangan aplikasi mobile yang fokus pada pengalaman pengguna dan performa aplikasi.",
    },
    contactPerson: {
      name: "Sinta Dewi",
      position: "Project Manager",
      email: "sinta@mobileappstudio.id",
    },
    matchScore: 89,
    skills: ["React Native", "JavaScript", "Mobile UI/UX", "API Integration", "App Store Publishing"],
    teamSize: "3-5 orang",
    projectDuration: "Ongoing",
  },
]

export default function OffersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  // Filter offers based on active tab and search query
  const filteredOffers = offersData
    .filter((offer) => {
      if (activeTab === "pending") return offer.status === "pending"
      if (activeTab === "accepted") return offer.status === "accepted"
      if (activeTab === "declined") return offer.status === "declined"
      return true
    })
    .filter((offer) => {
      if (!searchQuery) return true
      const query = searchQuery.toLowerCase()
      return (
        offer.title.toLowerCase().includes(query) ||
        offer.company.toLowerCase().includes(query) ||
        offer.location.toLowerCase().includes(query)
      )
    })

  // Sort offers
  const sortedOffers = [...filteredOffers].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    if (sortBy === "salary") {
      // Simple parsing for demo purposes
      const salaryA = Number.parseInt(a.salary.replace(/\D/g, ""))
      const salaryB = Number.parseInt(b.salary.replace(/\D/g, ""))
      return salaryB - salaryA
    }
    if (sortBy === "match") {
      return b.matchScore - a.matchScore
    }
    return 0
  })

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("id-ID", options)
  }

  // Helper function to get status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200 font-medium">
            <Clock className="h-3 w-3 mr-1" />
            Menunggu
          </Badge>
        )
      case "accepted":
        return (
          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200 font-medium">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Diterima
          </Badge>
        )
      case "declined":
        return (
          <Badge className="bg-rose-100 text-rose-800 border-rose-200 hover:bg-rose-200 font-medium">
            <XCircle className="h-3 w-3 mr-1" />
            Ditolak
          </Badge>
        )
      default:
        return <Badge>Unknown</Badge>
    }
  }

  // Helper function to get match score color
  const getMatchScoreColor = (score: number) => {
    if (score >= 90) return "text-emerald-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-amber-600"
    return "text-gray-600"
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-navy-800">Tawaran Pekerjaan</h1>
              <p className="text-gray-600">Kelola dan tanggapi tawaran pekerjaan dari perusahaan</p>
            </div>
          </div>

          <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden mb-6">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b pb-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-lg text-navy-800 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-500" />
                    Tawaran Pekerjaan
                  </CardTitle>
                  <CardDescription>{filteredOffers.length} tawaran ditemukan</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Cari tawaran..."
                      className="pl-9 rounded-lg border-gray-200 w-full sm:w-64 focus-visible:ring-blue-500"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-lg border-gray-200 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[180px] rounded-lg border-gray-200">
                        <SelectValue placeholder="Urutkan berdasarkan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date">Tanggal (Terbaru)</SelectItem>
                        <SelectItem value="salary">Gaji (Tertinggi)</SelectItem>
                        <SelectItem value="match">Kesesuaian (Tertinggi)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {showFilters && (
                <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Tipe Pekerjaan</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-full rounded-lg border-gray-200">
                          <SelectValue placeholder="Semua tipe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua tipe</SelectItem>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="project">Project-based</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Lokasi</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-full rounded-lg border-gray-200">
                          <SelectValue placeholder="Semua lokasi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua lokasi</SelectItem>
                          <SelectItem value="remote">Remote</SelectItem>
                          <SelectItem value="jakarta">Jakarta</SelectItem>
                          <SelectItem value="bandung">Bandung</SelectItem>
                          <SelectItem value="surabaya">Surabaya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">Rentang Gaji</label>
                      <Select defaultValue="all">
                        <SelectTrigger className="w-full rounded-lg border-gray-200">
                          <SelectValue placeholder="Semua rentang" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Semua rentang</SelectItem>
                          <SelectItem value="0-15">Rp 0 - 15 juta</SelectItem>
                          <SelectItem value="15-25">Rp 15 - 25 juta</SelectItem>
                          <SelectItem value="25-40">Rp 25 - 40 juta</SelectItem>
                          <SelectItem value="40+">Rp 40+ juta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button variant="outline" size="sm" className="mr-2">
                      Reset
                    </Button>
                    <Button size="sm">Terapkan Filter</Button>
                  </div>
                </div>
              )}

              <div className="mt-4">
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-blue-100/50 rounded-lg p-1">
                    <TabsTrigger
                      value="all"
                      className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                    >
                      Semua
                    </TabsTrigger>
                    <TabsTrigger
                      value="pending"
                      className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                    >
                      Menunggu
                    </TabsTrigger>
                    <TabsTrigger
                      value="accepted"
                      className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                    >
                      Diterima
                    </TabsTrigger>
                    <TabsTrigger
                      value="declined"
                      className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                    >
                      Ditolak
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                {sortedOffers.length > 0 ? (
                  sortedOffers.map((offer) => (
                    <Card
                      key={offer.id}
                      className="border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 overflow-hidden group"
                    >
                      <CardContent className="p-0">
                        <div className="relative">
                          {/* Colored status indicator */}
                          <div
                            className={`absolute top-0 left-0 w-1 h-full 
                              ${
                                offer.status === "pending"
                                  ? "bg-amber-400"
                                  : offer.status === "accepted"
                                    ? "bg-emerald-400"
                                    : "bg-rose-400"
                              }`}
                          />

                          <div className="p-4 pl-5">
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                              <div className="relative">
                                <Avatar className="h-14 w-14 border border-gray-200 shadow-sm">
                                  <AvatarImage src={offer.companyLogo || "/placeholder.svg"} alt={offer.company} />
                                  <AvatarFallback className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 font-semibold">
                                    {offer.company.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                {offer.matchScore >= 90 && (
                                  <div className="absolute -top-1 -right-1 bg-emerald-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs shadow-sm">
                                    <Star className="h-3 w-3" />
                                  </div>
                                )}
                              </div>

                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                  <div>
                                    <div className="flex items-center gap-2">
                                      <h3 className="font-medium text-navy-800 text-lg group-hover:text-blue-600 transition-colors">
                                        {offer.title}
                                      </h3>
                                      {getStatusBadge(offer.status)}
                                    </div>
                                    <p className="text-gray-600 flex items-center gap-1">
                                      <Building className="h-3.5 w-3.5 text-gray-400" />
                                      {offer.company}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <div className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-md flex items-center">
                                      <Zap className="h-3.5 w-3.5 mr-1" />
                                      <span className={`font-semibold ${getMatchScoreColor(offer.matchScore)}`}>
                                        {offer.matchScore}%
                                      </span>
                                      <span className="text-gray-500 ml-1">match</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 gap-2 mt-3 sm:grid-cols-3">
                                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                    <Briefcase className="h-3.5 w-3.5 text-blue-500" />
                                    <span>{offer.type}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                    <MapPin className="h-3.5 w-3.5 text-blue-500" />
                                    <span>{offer.location}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                    <DollarSign className="h-3.5 w-3.5 text-blue-500" />
                                    <span className="font-medium">{offer.salary}</span>
                                  </div>
                                </div>

                                <div className="mt-3 flex flex-wrap gap-1.5">
                                  {offer.skills.slice(0, 3).map((skill, index) => (
                                    <Badge
                                      key={index}
                                      className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-transparent"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                  {offer.skills.length > 3 && (
                                    <Badge className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-transparent">
                                      +{offer.skills.length - 3}
                                    </Badge>
                                  )}
                                </div>

                                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-3">
                                  <Calendar className="h-3.5 w-3.5" />
                                  <span>Diterima: {formatDate(offer.date)}</span>
                                  <span className="mx-1">•</span>
                                  <Users className="h-3.5 w-3.5" />
                                  <span>Tim: {offer.teamSize}</span>
                                  <span className="mx-1">•</span>
                                  <Clock className="h-3.5 w-3.5" />
                                  <span>Durasi: {offer.projectDuration}</span>
                                </div>
                              </div>

                              <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0 md:self-start">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className="rounded-lg border-blue-200 text-blue-700 hover:bg-blue-50"
                                    >
                                      Detail
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-4xl p-0 overflow-hidden">
  <div className="relative">
    {/* Header */}
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 pt-6 pb-24">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">{offer.title}</h2>
          <p className="text-blue-100 flex items-center mt-1 flex-wrap">
            <Building className="h-4 w-4 mr-1.5" />
            {offer.company}
            <span className="mx-2">•</span>
            <MapPin className="h-4 w-4 mr-1" />
            {offer.location}
          </p>
        </div>
        {getStatusBadge(offer.status)}
      </div>
    </div>

    {/* Logo */}
    <div className="absolute -bottom-12 left-6">
      <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
        <AvatarImage src={offer.companyLogo || "/placeholder.svg"} alt={offer.company} />
        <AvatarFallback className="bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 text-xl font-semibold">
          {offer.company.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </div>

    {/* Match Score */}
    <div className="absolute -bottom-10 right-6">
      <div className="bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
          <Zap className="h-6 w-6 text-blue-500" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Kesesuaian</p>
          <p className={`text-xl font-bold ${getMatchScoreColor(offer.matchScore)}`}>
            {offer.matchScore}%
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Main Body */}
  <div className="px-6 pt-20 pb-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Content */}
      <div className="md:col-span-2 space-y-8">
        {/* Job Description */}
        <div>
          <h3 className="text-lg font-semibold text-navy-800 mb-2">Deskripsi Pekerjaan</h3>
          <p className="text-gray-700">{offer.description}</p>
        </div>

        {/* Requirements and Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-navy-800 mb-2">Persyaratan</h3>
            <ul className="space-y-2">
              {offer.requirements.map((req, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <CheckCircle2 className="text-blue-600 h-4 w-4 mt-1" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy-800 mb-2">Benefit</h3>
            <ul className="space-y-2">
              {offer.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <Star className="text-emerald-600 h-4 w-4 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold text-navy-800 mb-2">Keahlian yang Dibutuhkan</h3>
          <div className="flex flex-wrap gap-2">
            {offer.skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 py-1 px-3 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Offer Details */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-navy-800 mb-3">Detail Tawaran</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: "Tipe Pekerjaan", value: offer.type },
              { label: "Gaji", value: offer.salary },
              { label: "Lokasi", value: offer.location },
              { label: "Tanggal Tawaran", value: formatDate(offer.date) },
              { label: "Ukuran Tim", value: offer.teamSize },
              { label: "Durasi Proyek", value: offer.projectDuration },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="font-medium text-navy-800">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        {/* Company Info */}
        <Card className="border border-gray-200 overflow-hidden">
          <CardHeader className="bg-gray-50 pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Building className="h-4 w-4 text-blue-500" />
              Tentang Perusahaan
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-10 w-10 border border-gray-200">
                <AvatarImage src={offer.companyLogo || "/placeholder.svg"} alt={offer.company} />
                <AvatarFallback className="bg-blue-100 text-blue-700">
                  {offer.company.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{offer.company}</p>
                <a
                  href={offer.companyInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                >
                  {offer.companyInfo.website.replace("https://", "")}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-3">{offer.companyInfo.about}</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500">Industri</p>
                <p className="font-medium">{offer.companyInfo.industry}</p>
              </div>
              <div>
                <p className="text-gray-500">Ukuran</p>
                <p className="font-medium">{offer.companyInfo.size}</p>
              </div>
              <div>
                <p className="text-gray-500">Didirikan</p>
                <p className="font-medium">{offer.companyInfo.founded}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="border border-gray-200">
          <CardHeader className="bg-gray-50 pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <User className="h-4 w-4 text-blue-500" />
              Kontak
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="font-medium">{offer.contactPerson.name}</p>
            <p className="text-sm text-gray-600">{offer.contactPerson.position}</p>
            <a
              href={`mailto:${offer.contactPerson.email}`}
              className="text-sm text-blue-600 hover:underline mt-1 block"
            >
              {offer.contactPerson.email}
            </a>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          {offer.status === "pending" && (
            <>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white w-full">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Terima
              </Button>
              <Button variant="outline" className="border-rose-200 text-rose-700 hover:bg-rose-50 w-full">
                <XCircle className="h-4 w-4 mr-2" />
                Tolak
              </Button>
            </>
          )}
          {offer.status === "accepted" && (
            <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
              <MessageSquare className="h-4 w-4 mr-2" />
              Hubungi Perusahaan
            </Button>
          )}
          {offer.status === "declined" && (
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 w-full">
              <Globe className="h-4 w-4 mr-2" />
              Lihat Tawaran Serupa
            </Button>
          )}
        </div>
      </div>
    </div>
  </div>

  <DialogFooter className="bg-gray-50 px-6 py-4">
    <Button variant="outline" className="gap-2">
      <Share2 className="h-4 w-4" />
      Bagikan Tawaran
    </Button>
  </DialogFooter>
</DialogContent>

                                </Dialog>

                                {offer.status === "pending" && (
                                  <>
                                    <Button
                                      variant="outline"
                                      className="rounded-lg border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                                    >
                                      <CheckCircle2 className="h-4 w-4 mr-2" />
                                      Terima
                                    </Button>
                                    <Button
                                      variant="outline"
                                      className="rounded-lg border-rose-200 text-rose-700 hover:bg-rose-50"
                                    >
                                      <XCircle className="h-4 w-4 mr-2" />
                                      Tolak
                                    </Button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada tawaran ditemukan</h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      {searchQuery
                        ? "Tidak ada tawaran yang cocok dengan pencarian Anda. Coba kata kunci lain."
                        : "Anda belum memiliki tawaran pekerjaan. Lengkapi profil Anda untuk mendapatkan tawaran."}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
