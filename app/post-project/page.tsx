"use client"

import type React from "react"

import { useState } from "react"
import {
  ArrowRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  Clock,
  FileText,
  Lightbulb,
  Sparkles,
  Upload,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PostProject() {
  const [useAI, setUseAI] = useState(false)
  const [projectType, setProjectType] = useState("fulltime")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "UI/UX Design",
    "Product Management",
    "DevOps",
    "Data Science",
    "Machine Learning",
    "Mobile Development",
    "AWS",
    "Docker",
    "Kubernetes",
  ]

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    } else {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Show success message or redirect
      window.alert("Proyek berhasil diposting!")
    }, 1500)
  }

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
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
          <div className="pb-8 pt-2">
            <h1 className="text-2xl md:text-3xl font-bold">Posting Proyek</h1>
            <p className="text-blue-200 mt-2">Temukan talent terbaik untuk proyek Anda</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden mb-6">
                <CardHeader className="bg-blue-50 border-b pb-4">
                  <CardTitle className="text-xl text-navy-800">Detail Proyek</CardTitle>
                  <CardDescription>Berikan informasi lengkap tentang proyek Anda</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="project-title" className="text-gray-700">
                      Judul Proyek <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="project-title"
                      placeholder="Contoh: Pengembangan Website E-commerce"
                      className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-description" className="text-gray-700">
                      Deskripsi Proyek <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="project-description"
                      placeholder="Jelaskan detail proyek, tujuan, dan hasil yang diharapkan..."
                      className="min-h-[150px] border-gray-300 rounded-xl focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-category" className="text-gray-700">
                        Kategori <span className="text-red-500">*</span>
                      </Label>
                      <Select required>
                        <SelectTrigger className="w-full border-gray-300 rounded-xl h-12">
                          <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-blue-100">
                          <SelectItem value="development">Pengembangan Software</SelectItem>
                          <SelectItem value="design">Desain & Kreatif</SelectItem>
                          <SelectItem value="marketing">Marketing & SEO</SelectItem>
                          <SelectItem value="data">Data & Analytics</SelectItem>
                          <SelectItem value="business">Bisnis & Konsultasi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project-budget" className="text-gray-700">
                        Budget (Rp) <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="project-budget"
                        type="number"
                        placeholder="Contoh: 25000000"
                        className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-700">
                      Jenis Proyek <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      defaultValue="fulltime"
                      value={projectType}
                      onValueChange={setProjectType}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2"
                    >
                      <div>
                        <RadioGroupItem value="fulltime" id="fulltime" className="peer sr-only" />
                        <Label
                          htmlFor="fulltime"
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:border-blue-200 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-500 cursor-pointer"
                        >
                          <div className="mb-2 p-2 rounded-full bg-blue-100">
                            <Briefcase className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="text-center">
                            <div className="text-base font-medium">Full-time</div>
                            <div className="text-sm text-gray-500">Jangka panjang</div>
                          </div>
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem value="contract" id="contract" className="peer sr-only" />
                        <Label
                          htmlFor="contract"
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:border-blue-200 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-500 cursor-pointer"
                        >
                          <div className="mb-2 p-2 rounded-full bg-blue-100">
                            <FileText className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="text-center">
                            <div className="text-base font-medium">Kontrak</div>
                            <div className="text-sm text-gray-500">3-6 bulan</div>
                          </div>
                        </Label>
                      </div>

                      <div>
                        <RadioGroupItem value="project" id="project" className="peer sr-only" />
                        <Label
                          htmlFor="project"
                          className="flex flex-col items-center justify-between rounded-xl border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 hover:border-blue-200 peer-data-[state=checked]:border-blue-500 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-500 cursor-pointer"
                        >
                          <div className="mb-2 p-2 rounded-full bg-blue-100">
                            <Calendar className="h-5 w-5 text-blue-600" />
                          </div>
                          <div className="text-center">
                            <div className="text-base font-medium">Proyek</div>
                            <div className="text-sm text-gray-500">One-time</div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {projectType === "fulltime" || projectType === "contract" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="start-date" className="text-gray-700">
                          Tanggal Mulai
                        </Label>
                        <Input
                          id="start-date"
                          type="date"
                          className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>

                      {projectType === "contract" && (
                        <div className="space-y-2">
                          <Label htmlFor="duration" className="text-gray-700">
                            Durasi (bulan)
                          </Label>
                          <Select>
                            <SelectTrigger className="w-full border-gray-300 rounded-xl h-12">
                              <SelectValue placeholder="Pilih durasi" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-blue-100">
                              <SelectItem value="1">1 bulan</SelectItem>
                              <SelectItem value="3">3 bulan</SelectItem>
                              <SelectItem value="6">6 bulan</SelectItem>
                              <SelectItem value="12">12 bulan</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="work-hours" className="text-gray-700">
                          Jam Kerja per Minggu
                        </Label>
                        <Select>
                          <SelectTrigger className="w-full border-gray-300 rounded-xl h-12">
                            <SelectValue placeholder="Pilih jam kerja" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl border-blue-100">
                            <SelectItem value="10">Kurang dari 10 jam</SelectItem>
                            <SelectItem value="20">10-20 jam</SelectItem>
                            <SelectItem value="30">20-30 jam</SelectItem>
                            <SelectItem value="40">30-40 jam</SelectItem>
                            <SelectItem value="50">Lebih dari 40 jam</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="deadline" className="text-gray-700">
                          Deadline
                        </Label>
                        <Input
                          id="deadline"
                          type="date"
                          className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label className="text-gray-700">
                      Keahlian yang Dibutuhkan <span className="text-red-500">*</span>
                    </Label>
                    <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-xl border border-gray-200">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant={selectedSkills.includes(skill) ? "default" : "outline"}
                          className={`
                            cursor-pointer rounded-full px-3 py-1 text-sm
                            ${
                              selectedSkills.includes(skill)
                                ? "bg-blue-500 text-white hover:bg-blue-600"
                                : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300"
                            }
                          `}
                          onClick={() => toggleSkill(skill)}
                        >
                          {skill}
                          {selectedSkills.includes(skill) && <CheckCircle2 className="ml-1 h-3 w-3" />}
                        </Badge>
                      ))}
                    </div>
                    {selectedSkills.length === 0 && <p className="text-sm text-red-500">Pilih minimal satu keahlian</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-gray-700">
                      Lokasi
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full border-gray-300 rounded-xl h-12">
                        <SelectValue placeholder="Pilih lokasi" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-blue-100">
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="jakarta">Jakarta</SelectItem>
                        <SelectItem value="bandung">Bandung</SelectItem>
                        <SelectItem value="surabaya">Surabaya</SelectItem>
                        <SelectItem value="yogyakarta">Yogyakarta</SelectItem>
                        <SelectItem value="bali">Bali</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="use-ai" className="text-gray-700 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-blue-500" />
                          <span>Gunakan AI untuk menemukan talent</span>
                        </div>
                        <p className="text-sm text-gray-500 ml-7">
                          AI kami akan mencocokkan proyek Anda dengan talent terbaik
                        </p>
                      </Label>
                      <Switch id="use-ai" checked={useAI} onCheckedChange={setUseAI} />
                    </div>
                    {useAI && (
                      <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mt-2">
                        <p className="text-sm text-blue-700">
                          Dengan mengaktifkan fitur ini, sistem AI kami akan menganalisis proyek Anda dan
                          merekomendasikan talent yang paling cocok berdasarkan keahlian, pengalaman, dan ketersediaan.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attachments" className="text-gray-700">
                      Lampiran (Opsional)
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-1">Drag & drop file atau klik untuk upload</p>
                      <p className="text-xs text-gray-500">PDF, DOCX, JPG, PNG (Max 5MB)</p>
                      <Input id="attachments" type="file" className="hidden" multiple />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden mb-6">
                <CardHeader className="bg-blue-50 border-b pb-4">
                  <CardTitle className="text-xl text-navy-800">Informasi Perusahaan</CardTitle>
                  <CardDescription>Berikan informasi tentang perusahaan Anda</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name" className="text-gray-700">
                        Nama Perusahaan <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="company-name"
                        placeholder="Nama perusahaan Anda"
                        className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-website" className="text-gray-700">
                        Website
                      </Label>
                      <Input
                        id="company-website"
                        placeholder="https://www.perusahaan-anda.com"
                        className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company-description" className="text-gray-700">
                      Deskripsi Perusahaan
                    </Label>
                    <Textarea
                      id="company-description"
                      placeholder="Ceritakan tentang perusahaan Anda..."
                      className="min-h-[100px] border-gray-300 rounded-xl focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name" className="text-gray-700">
                        Nama Kontak <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="contact-name"
                        placeholder="Nama lengkap"
                        className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email" className="text-gray-700">
                        Email Kontak <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="email@perusahaan.com"
                        className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="rounded-full px-8 py-6 h-auto bg-orange-500 hover:bg-orange-600 text-offwhite font-medium text-base shadow-md"
                  disabled={isSubmitting || selectedSkills.length === 0}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Memproses...
                    </>
                  ) : (
                    <>
                      Posting Proyek
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden sticky top-6">
              <CardHeader className="bg-blue-50 border-b pb-4">
                <CardTitle className="text-xl text-navy-800">Tips Posting Proyek</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Lightbulb className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">Buat judul yang jelas</h3>
                      <p className="text-sm text-gray-600">Judul yang spesifik akan menarik talent yang tepat.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">Detail yang lengkap</h3>
                      <p className="text-sm text-gray-600">
                        Semakin detail deskripsi, semakin mudah talent memahami kebutuhan Anda.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">Tentukan timeline</h3>
                      <p className="text-sm text-gray-600">Berikan informasi tentang deadline dan durasi proyek.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">Tentukan keahlian</h3>
                      <p className="text-sm text-gray-600">
                        Pilih keahlian yang relevan untuk menarik talent yang tepat.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-gray-200" />

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-navy-800">AI Matching</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Aktifkan fitur AI untuk menemukan talent yang paling cocok dengan kebutuhan proyek Anda.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-700 font-medium">Tersedia untuk pengguna premium</span>
                    <Badge className="bg-orange-500 text-white">Premium</Badge>
                  </div>
                </div>

                <Tabs defaultValue="basic" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-blue-50 rounded-xl p-1 border border-blue-100">
                    <TabsTrigger
                      value="basic"
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                    >
                      Basic
                    </TabsTrigger>
                    <TabsTrigger
                      value="premium"
                      className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm"
                    >
                      Premium
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="basic" className="pt-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Posting proyek</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Terima proposal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Kontak talent</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-50">
                        <CheckCircle2 className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">AI Matching</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-50">
                        <CheckCircle2 className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Prioritas tampilan</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full mt-4 bg-white border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300"
                    >
                      Paket Gratis
                    </Button>
                  </TabsContent>

                  <TabsContent value="premium" className="pt-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Semua fitur Basic</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">AI Matching</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Prioritas tampilan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Akses talent premium</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Dukungan prioritas</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                      <Zap className="mr-2 h-4 w-4" />
                      Upgrade ke Premium
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
