"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Briefcase,
  Calendar,
  Clock,
  DollarSign,
  FileText,
  MessageSquare,
  Users,
  MapPin,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  Bell,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  BarChart3,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Navbar from "@/components/navbar"

// Mock data
const userData = {
  name: "Budi Santoso",
  title: "Senior Frontend Developer",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  profileViews: 128,
  profileCompletion: 85,
  availabilityStatus: "available", // available, busy, unavailable
  skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
  hourlyRate: "Rp 350.000",
  location: "Jakarta, Indonesia",
  experience: "8 tahun",
  lastActive: "Hari ini",
}

const projectsData = [
  {
    id: 1,
    title: "E-commerce Website Redesign",
    company: "TechRetail Indonesia",
    status: "in-progress", // in-progress, completed, cancelled
    dueDate: "2023-12-15",
    budget: "Rp 45.000.000",
    progress: 65,
    description:
      "Redesign UI/UX untuk website e-commerce dengan fokus pada peningkatan konversi dan pengalaman pengguna.",
    tasks: [
      { name: "Wireframing", status: "completed" },
      { name: "UI Design", status: "completed" },
      { name: "Frontend Development", status: "in-progress" },
      { name: "Testing", status: "pending" },
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    company: "FinTech Solutions",
    status: "in-progress",
    dueDate: "2024-01-20",
    budget: "Rp 60.000.000",
    progress: 30,
    description:
      "Pengembangan aplikasi mobile untuk layanan keuangan dengan fitur pembayaran, transfer, dan manajemen keuangan.",
    tasks: [
      { name: "Requirement Analysis", status: "completed" },
      { name: "UI/UX Design", status: "completed" },
      { name: "Frontend Development", status: "in-progress" },
      { name: "Backend Integration", status: "pending" },
    ],
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    company: "Data Insights Corp",
    status: "completed",
    dueDate: "2023-11-05",
    budget: "Rp 25.000.000",
    progress: 100,
    description: "Pembuatan dashboard analitik untuk visualisasi data bisnis dan pemantauan KPI.",
    tasks: [
      { name: "Data Analysis", status: "completed" },
      { name: "Dashboard Design", status: "completed" },
      { name: "Implementation", status: "completed" },
      { name: "User Training", status: "completed" },
    ],
  },
]

const offersData = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Tech Innovators",
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
  },
  {
    id: 2,
    title: "Frontend Consultant",
    company: "Digital Solutions",
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
  },
]

const messagesData = [
  {
    id: 1,
    sender: "Ahmad Fauzi",
    company: "TechRetail Indonesia",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    message: "Halo Budi, bagaimana progress untuk redesign halaman checkout?",
    time: "10:30",
    unread: true,
  },
  {
    id: 2,
    sender: "Sinta Dewi",
    company: "FinTech Solutions",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    message: "Terima kasih atas update-nya. Bisakah kita meeting besok?",
    time: "Kemarin",
    unread: false,
  },
  {
    id: 3,
    sender: "Rudi Hartono",
    company: "Data Insights Corp",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    message: "Project dashboard sudah selesai. Terima kasih atas kerjasamanya!",
    time: "Kemarin",
    unread: false,
  },
]

const earningsData = {
  currentMonth: "Rp 25.000.000",
  lastMonth: "Rp 22.500.000",
  pending: "Rp 15.000.000",
  total: "Rp 180.000.000",
  history: [
    { month: "Jan", amount: 15000000 },
    { month: "Feb", amount: 18000000 },
    { month: "Mar", amount: 20000000 },
    { month: "Apr", amount: 19000000 },
    { month: "May", amount: 22000000 },
    { month: "Jun", amount: 21000000 },
    { month: "Jul", amount: 23000000 },
    { month: "Aug", amount: 22500000 },
    { month: "Sep", amount: 24000000 },
    { month: "Oct", amount: 23500000 },
    { month: "Nov", amount: 25000000 },
  ],
}

const upcomingEvents = [
  {
    id: 1,
    title: "Meeting dengan TechRetail",
    date: "2023-12-01",
    time: "10:00 - 11:00",
    type: "meeting", // meeting, deadline, interview
    description: "Diskusi progress redesign dan timeline untuk fitur baru",
    participants: ["Ahmad Fauzi", "Dian Purnama", "Eko Santoso"],
  },
  {
    id: 2,
    title: "Deadline Mobile App Phase 1",
    date: "2023-12-05",
    time: "23:59",
    type: "deadline",
    description: "Menyelesaikan implementasi UI untuk halaman utama dan autentikasi",
    deliverables: ["UI Implementation", "Unit Tests", "Documentation"],
  },
  {
    id: 3,
    title: "Interview dengan NewTech Corp",
    date: "2023-12-08",
    time: "14:00 - 15:00",
    type: "interview",
    description: "Interview teknis untuk posisi Senior Frontend Developer",
    interviewer: "Direktur Teknologi - Rini Wijaya",
  },
]

const notifications = [
  {
    id: 1,
    type: "project",
    title: "Project baru ditambahkan",
    message: "Anda telah ditambahkan ke project 'E-commerce Website Redesign'",
    time: "1 jam yang lalu",
    read: false,
  },
  {
    id: 2,
    type: "message",
    title: "Pesan baru",
    message: "Ahmad Fauzi mengirim pesan tentang project TechRetail",
    time: "3 jam yang lalu",
    read: false,
  },
  {
    id: 3,
    type: "payment",
    title: "Pembayaran diterima",
    message: "Pembayaran sebesar Rp 15.000.000 telah diterima",
    time: "Kemarin",
    read: true,
  },
]

const insights = [
  {
    title: "Tingkatkan Profil Anda",
    description: "Tambahkan 2 proyek lagi ke portfolio untuk meningkatkan visibilitas",
    icon: TrendingUp,
    color: "blue",
  },
  {
    title: "Skill yang Diminati",
    description: "React Native sedang banyak dicari. Tambahkan ke skill Anda?",
    icon: Zap,
    color: "purple",
  },
  {
    title: "Tingkatkan Rate",
    description: "Berdasarkan pengalaman Anda, Anda dapat meningkatkan rate hingga 15%",
    icon: DollarSign,
    color: "green",
  },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Helper function to get status badge styling
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">Sedang Berjalan</Badge>
      case "completed":
        return <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">Selesai</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-200">Dibatalkan</Badge>
      case "pending":
        return <Badge className="bg-orange-100 text-orange-800 border-orange-200 hover:bg-orange-200">Menunggu</Badge>
      case "accepted":
        return <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">Diterima</Badge>
      case "declined":
        return <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-200">Ditolak</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("id-ID", options)
  }

  // Helper function to format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
          {/* Dashboard Header with Welcome Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-navy-600 h-48 md:h-64 mb-8">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] z-10"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-20 -left-20 w-60 h-60 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    Selamat Datang, {userData.name}!
                  </h1>
                  <p className="text-blue-100 max-w-xl">
                    Dashboard ini membantu Anda mengelola proyek, tawaran, dan jadwal sebagai talent.
                  </p>
                </div>
                <div className="flex gap-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-lg border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                        >
                          <Bell className="h-4 w-4 mr-2" />
                          <span className="relative">
                            Notifikasi
                            {notifications.filter((n) => !n.read).length > 0 && (
                              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                                {notifications.filter((n) => !n.read).length}
                              </span>
                            )}
                          </span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Lihat notifikasi terbaru Anda</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <Link href="/user-profile">
                    <Button className="rounded-lg bg-white text-blue-700 hover:bg-blue-50">
                      <FileText className="h-4 w-4 mr-2" />
                      Profil Saya
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Status Cards - Quick Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Proyek Aktif</p>
                    <h3 className="text-2xl font-bold mt-1 text-navy-800">
                      {projectsData.filter((p) => p.status === "in-progress").length}
                    </h3>
                    <p className="text-xs mt-1 flex items-center text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      10% dari bulan lalu
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 shadow-sm">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link href="#projects" onClick={() => setActiveTab("projects")}>
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-0 h-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    >
                      <span>Lihat semua proyek</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Tawaran Baru</p>
                    <h3 className="text-2xl font-bold mt-1 text-navy-800">
                      {offersData.filter((o) => o.status === "pending").length}
                    </h3>
                    <p className="text-xs mt-1 flex items-center text-red-600">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      5% dari bulan lalu
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 shadow-sm">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link href="#offers" onClick={() => setActiveTab("offers")}>
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-0 h-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    >
                      <span>Lihat semua tawaran</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Pesan Baru</p>
                    <h3 className="text-2xl font-bold mt-1 text-navy-800">
                      {messagesData.filter((m) => m.unread).length}
                    </h3>
                    <p className="text-xs mt-1 flex items-center text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      12% dari bulan lalu
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-gradient-to-br from-green-100 to-green-200 shadow-sm">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-0 h-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                  >
                    <span>Lihat semua pesan</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Pendapatan Bulan Ini</p>
                    <h3 className="text-2xl font-bold mt-1 text-navy-800">{earningsData.currentMonth}</h3>
                    <p className="text-xs mt-1 flex items-center text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      11% dari bulan lalu
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 shadow-sm">
                    <DollarSign className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-0 h-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                  >
                    <span>Lihat laporan keuangan</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6">
              {/* Profile Card */}
              <Card className="border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-blue-500 to-navy-600 p-6 relative">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] z-10"></div>
                    <div className="relative z-20 flex items-center gap-4">
                      <Avatar className="h-16 w-16 border-2 border-white/50 shadow-lg">
                        <AvatarImage src={userData.avatar || "/placeholder.svg"} alt={userData.name} />
                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-navy-500 text-white text-xl">
                          {userData.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="text-white font-bold text-lg">{userData.name}</h2>
                        <p className="text-blue-100 text-sm">{userData.title}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="text-gray-600">Kelengkapan Profil</span>
                        <span className="font-medium text-blue-700">{userData.profileCompletion}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                          style={{ width: `${userData.profileCompletion}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Profil yang lengkap meningkatkan peluang Anda mendapatkan proyek
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-500">Status</p>
                          <p className="font-medium flex items-center gap-1">
                            <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                            Tersedia
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Lokasi</p>
                          <p className="font-medium">{userData.location}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Pengalaman</p>
                          <p className="font-medium">{userData.experience}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-500">Rate per jam</p>
                          <p className="font-medium">{userData.hourlyRate}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Profil dilihat</p>
                          <p className="font-medium">{userData.profileViews} kali</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Terakhir aktif</p>
                          <p className="font-medium">{userData.lastActive}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-sm text-gray-500 mb-2">Keahlian Utama</p>
                      <div className="flex flex-wrap gap-2">
                        {userData.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            className="bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex gap-2">
                      <Link href="/edit-profile" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full rounded-lg border-blue-200 text-blue-700 hover:bg-blue-50"
                        >
                          Edit Profil
                        </Button>
                      </Link>
                      <Link href="/user-profile" className="flex-1">
                        <Button className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white">
                          Lihat Profil
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Insights & Tips */}
              <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                <CardHeader className="bg-blue-50 border-b pb-3">
                  <CardTitle className="text-lg text-navy-800 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-500" />
                    Wawasan & Tips
                  </CardTitle>
                  <CardDescription>Rekomendasi untuk meningkatkan profil dan peluang Anda</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {insights.map((insight, index) => (
                      <div
                        key={index}
                        className="flex gap-3 p-3 rounded-lg border border-gray-200 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
                      >
                        <div className={`p-2 rounded-full bg-${insight.color}-100 text-${insight.color}-600 h-fit`}>
                          <insight.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-navy-800">{insight.title}</h4>
                          <p className="text-sm text-gray-600">{insight.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Upcoming Events */}
              <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                <CardHeader className="bg-blue-50 border-b pb-3">
                  <CardTitle className="text-lg text-navy-800 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    Jadwal Mendatang
                  </CardTitle>
                  <CardDescription>Meeting, deadline, dan interview yang akan datang</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {upcomingEvents.map((event, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow hover:border-blue-200 bg-white"
                      >
                        <div
                          className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 ${
                            event.type === "meeting"
                              ? "bg-blue-100"
                              : event.type === "deadline"
                                ? "bg-orange-100"
                                : "bg-green-100"
                          }`}
                        >
                          {event.type === "meeting" ? (
                            <Users className={`h-5 w-5 text-blue-600`} />
                          ) : event.type === "deadline" ? (
                            <Clock className={`h-5 w-5 text-orange-600`} />
                          ) : (
                            <Briefcase className={`h-5 w-5 text-green-600`} />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-navy-800">{event.title}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <span>{formatDate(event.date)}</span>
                            <span>•</span>
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="sm" className="rounded-full h-8 w-8 p-0">
                                <HelpCircle className="h-4 w-4 text-gray-500" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-sm">{event.description}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-2 border-t border-gray-100">
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-0 h-8 text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                    >
                      <span>Lihat semua jadwal</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-blue-50 rounded-xl p-1 border border-gray-200 shadow-sm">
                  <TabsTrigger
                    value="overview"
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm data-[state=active]:font-medium transition-all duration-200"
                  >
                    Ringkasan
                  </TabsTrigger>
                  <TabsTrigger
                    value="projects"
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                  >
                    Proyek
                  </TabsTrigger>
                  <TabsTrigger
                    value="offers"
                    className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                  >
                    Tawaran
                  </TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="mt-6 space-y-6">
                  {/* Notifications */}
                  <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                    <CardHeader className="bg-blue-50 border-b pb-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg text-navy-800 flex items-center gap-2">
                          <Bell className="h-5 w-5 text-blue-500" />
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardHeader className="bg-blue-50 border-b pb-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg text-navy-800 flex items-center gap-2">
                          <Bell className="h-5 w-5 text-blue-500" />
                          Notifikasi Terbaru
                        </CardTitle>
                        <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 h-8">
                          Tandai semua telah dibaca
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {notifications.map((notification, index) => (
                          <div
                            key={index}
                            className={`p-4 border rounded-lg ${notification.read ? "border-gray-200" : "border-blue-200 bg-blue-50/50"}`}
                          >
                            <div className="flex gap-3">
                              <div
                                className={`p-2 rounded-full ${
                                  notification.type === "project"
                                    ? "bg-blue-100 text-blue-600"
                                    : notification.type === "message"
                                      ? "bg-green-100 text-green-600"
                                      : "bg-purple-100 text-purple-600"
                                } h-fit`}
                              >
                                {notification.type === "project" ? (
                                  <Briefcase className="h-4 w-4" />
                                ) : notification.type === "message" ? (
                                  <MessageSquare className="h-4 w-4" />
                                ) : (
                                  <DollarSign className="h-4 w-4" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <p className="font-medium text-navy-800">{notification.title}</p>
                                  <p className="text-xs text-gray-500">{notification.time}</p>
                                </div>
                                <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Current Projects */}
                  <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                    <CardHeader className="bg-blue-50 border-b pb-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg text-navy-800 flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-blue-500" />
                          Proyek Berjalan
                        </CardTitle>
                        <Button
                          variant="ghost"
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 h-8"
                          onClick={() => setActiveTab("projects")}
                        >
                          Lihat semua
                        </Button>
                      </div>
                      <CardDescription>Proyek yang sedang Anda kerjakan saat ini</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        {projectsData
                          .filter((project) => project.status === "in-progress")
                          .map((project, index) => (
                            <div
                              key={index}
                              className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 bg-gradient-to-r from-white to-blue-50/30"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium text-navy-800">{project.title}</h3>
                                  <p className="text-sm text-gray-600 mt-1">{project.company}</p>
                                </div>
                                {getStatusBadge(project.status)}
                              </div>
                              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{project.description}</p>
                              <div className="mt-3">
                                <div className="flex justify-between text-sm mb-1">
                                  <span className="text-gray-600">Progress</span>
                                  <span className="font-medium">{project.progress}%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                                    style={{ width: `${project.progress}%` }}
                                  ></div>
                                </div>
                              </div>
                              <div className="mt-3 flex justify-between text-sm">
                                <div className="flex items-center gap-1 text-gray-600">
                                  <Clock className="h-4 w-4" />
                                  <span>Due: {formatDate(project.dueDate)}</span>
                                </div>
                                <span className="font-medium text-blue-700">{project.budget}</span>
                              </div>
                              <div className="mt-3 pt-3 border-t border-gray-100">
                                <p className="text-xs text-gray-500 mb-2">Task Status:</p>
                                <div className="flex flex-wrap gap-2">
                                  {project.tasks.map((task, i) => (
                                    <Badge
                                      key={i}
                                      className={`
                                        ${
                                          task.status === "completed"
                                            ? "bg-green-100 text-green-800 border-green-200"
                                            : task.status === "in-progress"
                                              ? "bg-blue-100 text-blue-800 border-blue-200"
                                              : "bg-gray-100 text-gray-800 border-gray-200"
                                        }
                                      `}
                                    >
                                      {task.status === "completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                                      {task.status === "in-progress" && <Clock className="h-3 w-3 mr-1" />}
                                      {task.status === "pending" && <AlertCircle className="h-3 w-3 mr-1" />}
                                      {task.name}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Messages */}
                  <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                    <CardHeader className="bg-blue-50 border-b pb-3">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg text-navy-800 flex items-center gap-2">
                          <MessageSquare className="h-5 w-5 text-blue-500" />
                          Pesan Terbaru
                        </CardTitle>
                        <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 h-8">
                          Lihat semua
                        </Button>
                      </div>
                      <CardDescription>Komunikasi terbaru dengan klien dan perusahaan</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        {messagesData.map((message) => (
                          <div
                            key={message.id}
                            className={`p-4 border rounded-lg hover:shadow-md transition-shadow ${
                              message.unread ? "bg-blue-50 border-blue-200" : "border-gray-200"
                            }`}
                          >
                            <div className="flex gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
                                <AvatarFallback className="bg-blue-200 text-blue-700">
                                  {message.sender.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex justify-between">
                                  <div>
                                    <p className="font-medium text-navy-800">{message.sender}</p>
                                    <p className="text-xs text-gray-600">{message.company}</p>
                                  </div>
                                  <p className="text-xs text-gray-500">{message.time}</p>
                                </div>
                                <p className="text-sm text-gray-700 mt-1 line-clamp-2">{message.message}</p>
                              </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-lg h-8 border-blue-200 text-blue-700 hover:bg-blue-50"
                              >
                                Balas
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Earnings Summary */}
                  <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                    <CardHeader className="bg-blue-50 border-b pb-3">
                      <CardTitle className="text-lg text-navy-800 flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-blue-500" />
                        Ringkasan Pendapatan
                      </CardTitle>
                      <CardDescription>Pendapatan Anda dari proyek dan kontrak</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">Bulan Ini</p>
                          <p className="font-semibold text-blue-700">{earningsData.currentMonth}</p>
                        </div>
                        <div className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">Bulan Lalu</p>
                          <p className="font-semibold text-gray-700">{earningsData.lastMonth}</p>
                        </div>
                        <div className="p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">Tertunda</p>
                          <p className="font-semibold text-orange-700">{earningsData.pending}</p>
                        </div>
                        <div className="p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">Total</p>
                          <p className="font-semibold text-green-700">{earningsData.total}</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm font-medium text-gray-700 mb-2">Tren Pendapatan (11 bulan terakhir)</p>
                        <div className="h-32 sm:h-40 flex items-end gap-1">
                          {earningsData.history.map((item, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center">
                              <div
                                className="w-full bg-blue-500 hover:bg-blue-600 rounded-t-sm transition-all"
                                style={{
                                  height: `${(item.amount / 25000000) * 100}%`,
                                  opacity: index === earningsData.history.length - 1 ? 1 : 0.7,
                                }}
                              ></div>
                              <span className="text-xs mt-1 text-gray-500">{item.month}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        className="w-full mt-3 text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 h-8"
                      >
                        Lihat detail pendapatan
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Projects Tab */}
                <TabsContent value="projects" className="mt-6 space-y-6">
                  <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                    <CardHeader className="bg-blue-50 border-b pb-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-lg text-navy-800 flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-blue-500" />
                            Semua Proyek
                          </CardTitle>
                          <CardDescription>Kelola semua proyek Anda di satu tempat</CardDescription>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="rounded-lg h-8">
                            Filter
                          </Button>
                          <Button size="sm" className="rounded-lg h-8 bg-blue-500 hover:bg-blue-600 text-white">
                            + Proyek Baru
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        {projectsData.map((project) => (
                          <div
                            key={project.id}
                            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium text-navy-800">{project.title}</h3>
                                <p className="text-sm text-gray-600">{project.company}</p>
                              </div>
                              {getStatusBadge(project.status)}
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                            <div className="mt-3">
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-600">Progress</span>
                                <span className="font-medium">{project.progress}%</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                                  style={{ width: `${project.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="mt-3 flex justify-between text-sm">
                              <div className="flex items-center gap-1 text-gray-600">
                                <Clock className="h-4 w-4" />
                                <span>Due: {formatDate(project.dueDate)}</span>
                              </div>
                              <span className="font-medium text-blue-700">{project.budget}</span>
                            </div>
                            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end gap-2">
                              <Button variant="ghost" size="sm" className="rounded-lg h-8 text-gray-600">
                                Detail
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-lg h-8 border-blue-200 text-blue-700 hover:bg-blue-50"
                              >
                                Update
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Offers Tab */}
                <TabsContent value="offers" className="mt-6 space-y-6">
                  <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                    <CardHeader className="bg-blue-50 border-b pb-3">
                      <CardTitle className="text-lg text-navy-800 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-500" />
                        Tawaran Pekerjaan
                      </CardTitle>
                      <CardDescription>Tawaran pekerjaan yang Anda terima dari perusahaan</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        {offersData.map((offer) => (
                          <div
                            key={offer.id}
                            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium text-navy-800">{offer.title}</h3>
                                <p className="text-sm text-gray-600">{offer.company}</p>
                              </div>
                              {getStatusBadge(offer.status)}
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{offer.description}</p>
                            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                              <div className="flex items-center gap-1 text-gray-600">
                                <Briefcase className="h-4 w-4" />
                                <span>{offer.type}</span>
                              </div>
                              <div className="flex items-center gap-1 text-gray-600">
                                <MapPin className="h-4 w-4" />
                                <span>{offer.location}</span>
                              </div>
                              <div className="flex items-center gap-1 text-gray-600">
                                <DollarSign className="h-4 w-4" />
                                <span>{offer.salary}</span>
                              </div>
                              <div className="flex items-center gap-1 text-gray-600">
                                <Calendar className="h-4 w-4" />
                                <span>Diterima: {formatDate(offer.date)}</span>
                              </div>
                            </div>
                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <p className="text-xs text-gray-500 mb-2">Persyaratan:</p>
                              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                {offer.requirements.map((req, i) => (
                                  <li key={i}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end gap-2">
                              <Button variant="ghost" size="sm" className="rounded-lg h-8 text-gray-600">
                                Detail
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-lg h-8 border-green-200 text-green-700 hover:bg-green-50"
                              >
                                Terima
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="rounded-lg h-8 border-red-200 text-red-700 hover:bg-red-50"
                              >
                                Tolak
                              </Button>
                            </div>
                          </div>
                        ))}
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
