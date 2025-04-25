"use client"

import type React from "react"

import { useState } from "react"
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ChevronLeft,
  FileText,
  GraduationCap,
  Languages,
  Plus,
  Star,
  Trash2,
  Upload,
  User,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CreateProfile() {
  const [activeTab, setActiveTab] = useState("personal")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [workExperiences, setWorkExperiences] = useState([
    { id: 1, company: "", role: "", startDate: "", endDate: "", description: "" },
  ])
  const [educations, setEducations] = useState([{ id: 1, institution: "", degree: "", field: "", year: "" }])
  const [languages, setLanguages] = useState([{ id: 1, language: "", proficiency: "basic" }])

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

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const addWorkExperience = () => {
    const newId = workExperiences.length > 0 ? Math.max(...workExperiences.map((exp) => exp.id)) + 1 : 1
    setWorkExperiences([
      ...workExperiences,
      { id: newId, company: "", role: "", startDate: "", endDate: "", description: "" },
    ])
  }

  const removeWorkExperience = (id: number) => {
    if (workExperiences.length > 1) {
      setWorkExperiences(workExperiences.filter((exp) => exp.id !== id))
    }
  }

  const updateWorkExperience = (id: number, field: string, value: string) => {
    setWorkExperiences(workExperiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)))
  }

  const addEducation = () => {
    const newId = educations.length > 0 ? Math.max(...educations.map((edu) => edu.id)) + 1 : 1
    setEducations([...educations, { id: newId, institution: "", degree: "", field: "", year: "" }])
  }

  const removeEducation = (id: number) => {
    if (educations.length > 1) {
      setEducations(educations.filter((edu) => edu.id !== id))
    }
  }

  const updateEducation = (id: number, field: string, value: string) => {
    setEducations(educations.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)))
  }

  const addLanguage = () => {
    const newId = languages.length > 0 ? Math.max(...languages.map((lang) => lang.id)) + 1 : 1
    setLanguages([...languages, { id: newId, language: "", proficiency: "basic" }])
  }

  const removeLanguage = (id: number) => {
    if (languages.length > 1) {
      setLanguages(languages.filter((lang) => lang.id !== id))
    }
  }

  const updateLanguage = (id: number, field: string, value: string) => {
    setLanguages(languages.map((lang) => (lang.id === id ? { ...lang, [field]: value } : lang)))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      // Show success message or redirect
      window.alert("Profil berhasil dibuat!")
    }, 1500)
  }

  const nextTab = () => {
    if (activeTab === "personal") setActiveTab("experience")
    else if (activeTab === "experience") setActiveTab("education")
    else if (activeTab === "education") setActiveTab("skills")
    else if (activeTab === "skills") setActiveTab("availability")
  }

  const prevTab = () => {
    if (activeTab === "availability") setActiveTab("skills")
    else if (activeTab === "skills") setActiveTab("education")
    else if (activeTab === "education") setActiveTab("experience")
    else if (activeTab === "experience") setActiveTab("personal")
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
           
          </div>
          <div className="pb-8 pt-2">
            <h1 className="text-2xl md:text-3xl font-bold">Buat Profil Talent</h1>
            <p className="text-blue-200 mt-2">Lengkapi profil Anda untuk menarik perhatian perusahaan</p>
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
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-xl text-navy-800">Buat Profil Talent</CardTitle>
                      <CardDescription>Lengkapi informasi untuk meningkatkan peluang Anda</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge
                        variant={activeTab === "personal" ? "default" : "outline"}
                        className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
                      >
                        1
                      </Badge>
                      <Badge
                        variant={activeTab === "experience" ? "default" : "outline"}
                        className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
                      >
                        2
                      </Badge>
                      <Badge
                        variant={activeTab === "education" ? "default" : "outline"}
                        className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
                      >
                        3
                      </Badge>
                      <Badge
                        variant={activeTab === "skills" ? "default" : "outline"}
                        className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
                      >
                        4
                      </Badge>
                      <Badge
                        variant={activeTab === "availability" ? "default" : "outline"}
                        className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200"
                      >
                        5
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    {/* Personal Information */}
                    <TabsContent value="personal" className="p-6 space-y-6 m-0 border-0">
                      <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                          <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                            {profileImage ? (
                              <AvatarImage src={profileImage || "/placeholder.svg"} alt="Profile" />
                            ) : (
                              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-navy-500 text-offwhite text-2xl">
                                <User className="h-12 w-12" />
                              </AvatarFallback>
                            )}
                          </Avatar>
                          <label
                            htmlFor="profile-image"
                            className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full cursor-pointer hover:bg-blue-600 transition-colors"
                          >
                            <Upload className="h-4 w-4" />
                            <input
                              id="profile-image"
                              type="file"
                              className="hidden"
                              accept="image/*"
                              onChange={handleProfileImageChange}
                            />
                          </label>
                        </div>
                        <p className="text-sm text-gray-500">Upload foto profil (disarankan 400x400px)</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name" className="text-gray-700">
                            Nama Depan <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="first-name"
                            placeholder="Nama depan Anda"
                            className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="last-name" className="text-gray-700">
                            Nama Belakang <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="last-name"
                            placeholder="Nama belakang Anda"
                            className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="professional-title" className="text-gray-700">
                          Judul Profesional <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="professional-title"
                          placeholder="Contoh: Senior Frontend Developer"
                          className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio" className="text-gray-700">
                          Bio Profesional <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="bio"
                          placeholder="Ceritakan tentang diri Anda, pengalaman, dan keahlian..."
                          className="min-h-[150px] border-gray-300 rounded-xl focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700">
                            Email <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="email@contoh.com"
                            className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-700">
                            Nomor Telepon
                          </Label>
                          <Input
                            id="phone"
                            placeholder="+62 8xx xxxx xxxx"
                            className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="location" className="text-gray-700">
                            Lokasi <span className="text-red-500">*</span>
                          </Label>
                          <Select required>
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
                          <Label htmlFor="category" className="text-gray-700">
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
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="website" className="text-gray-700">
                          Website / Portfolio
                        </Label>
                        <Input
                          id="website"
                          placeholder="https://www.portfolio-anda.com"
                          className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                    </TabsContent>

                    {/* Work Experience */}
                    <TabsContent value="experience" className="p-6 space-y-6 m-0 border-0">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-800">Pengalaman Kerja</h3>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={addWorkExperience}
                            className="rounded-full border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100"
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Tambah
                          </Button>
                        </div>

                        {workExperiences.map((exp, index) => (
                          <div key={exp.id} className="p-4 border border-gray-200 rounded-xl space-y-4 bg-white">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium text-gray-800">Pengalaman {index + 1}</h4>
                              {workExperiences.length > 1 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeWorkExperience(exp.id)}
                                  className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor={`company-${exp.id}`} className="text-gray-700">
                                  Perusahaan <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id={`company-${exp.id}`}
                                  value={exp.company}
                                  onChange={(e) => updateWorkExperience(exp.id, "company", e.target.value)}
                                  placeholder="Nama perusahaan"
                                  className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor={`role-${exp.id}`} className="text-gray-700">
                                  Posisi <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id={`role-${exp.id}`}
                                  value={exp.role}
                                  onChange={(e) => updateWorkExperience(exp.id, "role", e.target.value)}
                                  placeholder="Posisi atau jabatan"
                                  className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                                  required
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor={`start-date-${exp.id}`} className="text-gray-700">
                                  Tanggal Mulai <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id={`start-date-${exp.id}`}
                                  type="date"
                                  value={exp.startDate}
                                  onChange={(e) => updateWorkExperience(exp.id, "startDate", e.target.value)}
                                  className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor={`end-date-${exp.id}`} className="text-gray-700">
                                  Tanggal Selesai
                                </Label>
                                <Input
                                  id={`end-date-${exp.id}`}
                                  type="date"
                                  value={exp.endDate}
                                  onChange={(e) => updateWorkExperience(exp.id, "endDate", e.target.value)}
                                  className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor={`description-${exp.id}`} className="text-gray-700">
                                Deskripsi <span className="text-red-500">*</span>
                              </Label>
                              <Textarea
                                id={`description-${exp.id}`}
                                value={exp.description}
                                onChange={(e) => updateWorkExperience(exp.id, "description", e.target.value)}
                                placeholder="Jelaskan tanggung jawab dan pencapaian Anda..."
                                className="min-h-[100px] border-gray-300 rounded-xl focus:border-blue-500 focus:ring-blue-500"
                                required
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    {/* Education */}
                    <TabsContent value="education" className="p-6 space-y-6 m-0 border-0">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-800">Pendidikan</h3>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={addEducation}
                            className="rounded-full border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100"
                          >
                            <Plus className="h-4 w-4 mr-1" />
                            Tambah
                          </Button>
                        </div>

                        {educations.map((edu, index) => (
                          <div key={edu.id} className="p-4 border border-gray-200 rounded-xl space-y-4 bg-white">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium text-gray-800">Pendidikan {index + 1}</h4>
                              {educations.length > 1 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeEducation(edu.id)}
                                  className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor={`institution-${edu.id}`} className="text-gray-700">
                                  Institusi <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id={`institution-${edu.id}`}
                                  value={edu.institution}
                                  onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                                  placeholder="Nama universitas atau institusi"
                                  className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor={`degree-${edu.id}`} className="text-gray-700">
                                  Gelar <span className="text-red-500">*</span>
                                </Label>
                                <Select required>
                                  <SelectTrigger className="w-full border-gray-300 rounded-xl h-12">
                                    <SelectValue placeholder="Pilih gelar" />
                                  </SelectTrigger>
                                  <SelectContent className="rounded-xl border-blue-100">
                                    <SelectItem value="sma">SMA/SMK</SelectItem>
                                    <SelectItem value="d3">Diploma (D3)</SelectItem>
                                    <SelectItem value="s1">Sarjana (S1)</SelectItem>
                                    <SelectItem value="s2">Magister (S2)</SelectItem>
                                    <SelectItem value="s3">Doktor (S3)</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor={`field-${edu.id}`} className="text-gray-700">
                                  Bidang Studi <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id={`field-${edu.id}`}
                                  value={edu.field}
                                  onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                                  placeholder="Contoh: Ilmu Komputer"
                                  className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                                  required
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor={`year-${edu.id}`} className="text-gray-700">
                                  Tahun Lulus <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id={`year-${edu.id}`}
                                  value={edu.year}
                                  onChange={(e) => updateEducation(edu.id, "year", e.target.value)}
                                  placeholder="Contoh: 2020"
                                  className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-800">Sertifikasi</h3>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              className="rounded-full border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100"
                            >
                              <Plus className="h-4 w-4 mr-1" />
                              Tambah
                            </Button>
                          </div>

                          <div className="p-4 border border-gray-200 rounded-xl space-y-4 bg-white">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium text-gray-800">Sertifikasi</h4>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="certification-name" className="text-gray-700">
                                Nama Sertifikasi
                              </Label>
                              <Input
                                id="certification-name"
                                placeholder="Contoh: AWS Certified Developer"
                                className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="issuing-organization" className="text-gray-700">
                                  Organisasi Penerbit
                                </Label>
                                <Input
                                  id="issuing-organization"
                                  placeholder="Contoh: Amazon Web Services"
                                  className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="issue-date" className="text-gray-700">
                                  Tanggal Terbit
                                </Label>
                                <Input
                                  id="issue-date"
                                  type="date"
                                  className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-800">Bahasa</h3>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={addLanguage}
                              className="rounded-full border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100"
                            >
                              <Plus className="h-4 w-4 mr-1" />
                              Tambah
                            </Button>
                          </div>

                          {languages.map((lang, index) => (
                            <div key={lang.id} className="p-4 border border-gray-200 rounded-xl space-y-4 bg-white">
                              <div className="flex justify-between items-center">
                                <h4 className="font-medium text-gray-800">Bahasa {index + 1}</h4>
                                {languages.length > 1 && (
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => removeLanguage(lang.id)}
                                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor={`language-${lang.id}`} className="text-gray-700">
                                    Bahasa <span className="text-red-500">*</span>
                                  </Label>
                                  <Input
                                    id={`language-${lang.id}`}
                                    value={lang.language}
                                    onChange={(e) => updateLanguage(lang.id, "language", e.target.value)}
                                    placeholder="Contoh: Bahasa Indonesia"
                                    className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                                    required
                                  />
                                </div>

                                <div className="space-y-2">
                                  <Label htmlFor={`proficiency-${lang.id}`} className="text-gray-700">
                                    Tingkat Kemahiran <span className="text-red-500">*</span>
                                  </Label>
                                  <Select
                                    value={lang.proficiency}
                                    onValueChange={(value) => updateLanguage(lang.id, "proficiency", value)}
                                    required
                                  >
                                    <SelectTrigger className="w-full border-gray-300 rounded-xl h-12">
                                      <SelectValue placeholder="Pilih tingkat" />
                                    </SelectTrigger>
                                    <SelectContent className="rounded-xl border-blue-100">
                                      <SelectItem value="basic">Dasar</SelectItem>
                                      <SelectItem value="intermediate">Menengah</SelectItem>
                                      <SelectItem value="advanced">Mahir</SelectItem>
                                      <SelectItem value="native">Bahasa Ibu</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>

                    {/* Skills */}
                    <TabsContent value="skills" className="p-6 space-y-6 m-0 border-0">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-2">Keahlian</h3>
                          <p className="text-sm text-gray-600 mb-4">
                            Pilih keahlian yang Anda kuasai untuk membantu perusahaan menemukan Anda
                          </p>

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
                          {selectedSkills.length === 0 && (
                            <p className="text-sm text-red-500 mt-2">Pilih minimal satu keahlian</p>
                          )}
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-gray-800">Keahlian Tambahan</h3>
                          <div className="p-4 border border-gray-200 rounded-xl space-y-4 bg-white">
                            <div className="space-y-2">
                              <Label htmlFor="other-skill" className="text-gray-700">
                                Keahlian Lainnya
                              </Label>
                              <div className="flex gap-2">
                                <Input
                                  id="other-skill"
                                  placeholder="Tambahkan keahlian lain"
                                  className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                                />
                                <Button type="button" className="rounded-xl bg-blue-500 hover:bg-blue-600 text-white">
                                  Tambah
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-gray-800">Upload Portfolio</h3>
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                            <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                            <p className="text-sm text-gray-600 mb-1">Drag & drop file atau klik untuk upload</p>
                            <p className="text-xs text-gray-500">PDF, DOCX, JPG, PNG (Max 5MB)</p>
                            <Input id="portfolio" type="file" className="hidden" multiple />
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Availability */}
                    <TabsContent value="availability" className="p-6 space-y-6 m-0 border-0">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800 mb-2">Ketersediaan</h3>
                          <p className="text-sm text-gray-600 mb-4">
                            Berikan informasi tentang ketersediaan Anda untuk bekerja
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="job-type" className="text-gray-700">
                              Jenis Pekerjaan <span className="text-red-500">*</span>
                            </Label>
                            <Select required>
                              <SelectTrigger className="w-full border-gray-300 rounded-xl h-12">
                                <SelectValue placeholder="Pilih jenis pekerjaan" />
                              </SelectTrigger>
                              <SelectContent className="rounded-xl border-blue-100">
                                <SelectItem value="fulltime">Full-time</SelectItem>
                                <SelectItem value="parttime">Part-time</SelectItem>
                                <SelectItem value="contract">Kontrak</SelectItem>
                                <SelectItem value="freelance">Freelance</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="availability-date" className="text-gray-700">
                              Tanggal Mulai Tersedia <span className="text-red-500">*</span>
                            </Label>
                            <Select required>
                              <SelectTrigger className="w-full border-gray-300 rounded-xl h-12">
                                <SelectValue placeholder="Pilih ketersediaan" />
                              </SelectTrigger>
                              <SelectContent className="rounded-xl border-blue-100">
                                <SelectItem value="immediate">Segera</SelectItem>
                                <SelectItem value="1week">1 minggu</SelectItem>
                                <SelectItem value="2weeks">2 minggu</SelectItem>
                                <SelectItem value="1month">1 bulan</SelectItem>
                                <SelectItem value="custom">Tanggal tertentu</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="hours-per-week" className="text-gray-700">
                            Jam Kerja per Minggu <span className="text-red-500">*</span>
                          </Label>
                          <Select required>
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

                        <div className="space-y-2">
                          <Label htmlFor="rate" className="text-gray-700">
                            Tarif per Bulan (Rp) <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="rate"
                            type="number"
                            placeholder="Contoh: 15000000"
                            className="border-gray-300 rounded-xl h-12 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="profile-visibility" className="text-gray-700 cursor-pointer">
                              <div className="flex items-center gap-2">
                                <span>Visibilitas Profil</span>
                              </div>
                              <p className="text-sm text-gray-500">Izinkan perusahaan melihat profil Anda</p>
                            </Label>
                            <Switch id="profile-visibility" defaultChecked={true} />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="open-to-work" className="text-gray-700 cursor-pointer">
                              <div className="flex items-center gap-2">
                                <span>Terbuka untuk Pekerjaan</span>
                              </div>
                              <p className="text-sm text-gray-500">Tunjukkan bahwa Anda sedang mencari pekerjaan</p>
                            </Label>
                            <Switch id="open-to-work" defaultChecked={true} />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                {activeTab !== "personal" && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevTab}
                    className="rounded-full px-6 py-5 h-auto border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-800 hover:border-blue-400"
                  >
                    <ChevronLeft className="mr-2 h-5 w-5" />
                    Sebelumnya
                  </Button>
                )}

                {activeTab !== "availability" ? (
                  <Button
                    type="button"
                    onClick={nextTab}
                    className="rounded-full px-6 py-5 h-auto bg-blue-500 hover:bg-blue-600 text-white font-medium text-base shadow-md ml-auto"
                  >
                    Selanjutnya
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="rounded-full px-8 py-6 h-auto bg-orange-500 hover:bg-orange-600 text-offwhite font-medium text-base shadow-md ml-auto"
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
                        Buat Profil
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border border-gray-200 shadow-md rounded-2xl overflow-hidden sticky top-6">
              <CardHeader className="bg-blue-50 border-b pb-4">
                <CardTitle className="text-xl text-navy-800">Tips Profil</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">Foto profesional</h3>
                      <p className="text-sm text-gray-600">Gunakan foto yang jelas dan profesional.</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">Bio yang menarik</h3>
                      <p className="text-sm text-gray-600">
                        Jelaskan keahlian dan pengalaman Anda secara singkat dan menarik.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">Pengalaman relevan</h3>
                      <p className="text-sm text-gray-600">
                        Fokus pada pengalaman yang relevan dengan bidang yang Anda minati.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">Pendidikan dan sertifikasi</h3>
                      <p className="text-sm text-gray-600">
                        Tambahkan gelar dan sertifikasi untuk meningkatkan kredibilitas.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Languages className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">Bahasa</h3>
                      <p className="text-sm text-gray-600">
                        Cantumkan bahasa yang Anda kuasai untuk proyek internasional.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-gray-200" />

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-orange-500" />
                    <h3 className="font-semibold text-navy-800">Profil Terverifikasi</h3>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Dapatkan badge "Terverifikasi" untuk meningkatkan kepercayaan perusahaan dan peluang mendapatkan
                    proyek.
                  </p>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Verifikasi Profil</Button>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="font-medium text-gray-800 text-sm mb-2">Kelengkapan Profil</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div className="bg-blue-500 h-2.5 rounded-full w-[45%]"></div>
                  </div>
                  <p className="text-xs text-gray-500">45% - Lengkapi profil Anda untuk meningkatkan peluang</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
