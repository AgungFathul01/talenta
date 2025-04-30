"use client"

import { useState, useRef, useEffect } from "react"
import {
  MessageSquare,
  Search,
  ChevronLeft,
  Send,
  Paperclip,
  MoreHorizontal,
  CheckCircle2,
  Phone,
  Video,
  ArrowUpRight,
  ImageIcon,
  Smile,
  Filter,
  User,
  Calendar,
  X,
  FileText,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Navbar from "@/components/navbar"

// Mock data
const messagesData = [
  {
    id: 1,
    sender: "Ahmad Fauzi",
    company: "TechRetail Indonesia",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    messages: [
      {
        id: 1,
        text: "Halo Budi, bagaimana progress untuk redesign halaman checkout?",
        time: "10:30",
        date: "Hari ini",
        isFromMe: false,
      },
      {
        id: 2,
        text: "Halo Ahmad, progress redesign sudah mencapai 70%. Saya sedang mengerjakan responsive design untuk mobile.",
        time: "10:45",
        date: "Hari ini",
        isFromMe: true,
      },
      {
        id: 3,
        text: "Bagus sekali! Kapan kira-kira bisa selesai sepenuhnya?",
        time: "11:00",
        date: "Hari ini",
        isFromMe: false,
      },
    ],
    unread: true,
    lastActive: "Online",
    projectName: "E-commerce Website Redesign",
    attachments: 2,
  },
  {
    id: 2,
    sender: "Sinta Dewi",
    company: "FinTech Solutions",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
    messages: [
      {
        id: 1,
        text: "Terima kasih atas update-nya. Bisakah kita meeting besok?",
        time: "15:20",
        date: "Kemarin",
        isFromMe: false,
      },
      {
        id: 2,
        text: "Tentu, saya available besok jam 10 pagi atau 2 siang. Mana yang lebih baik untuk Anda?",
        time: "16:05",
        date: "Kemarin",
        isFromMe: true,
      },
    ],
    unread: false,
    lastActive: "1 jam yang lalu",
    projectName: "Mobile App Development",
    attachments: 0,
  },
  {
    id: 3,
    sender: "Rudi Hartono",
    company: "Data Insights Corp",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    messages: [
      {
        id: 1,
        text: "Project dashboard sudah selesai. Terima kasih atas kerjasamanya!",
        time: "09:15",
        date: "Kemarin",
        isFromMe: false,
      },
      {
        id: 2,
        text: "Sama-sama, Rudi. Senang bisa bekerja sama dengan tim Data Insights. Jika ada proyek lain di masa depan, jangan ragu untuk menghubungi saya.",
        time: "10:30",
        date: "Kemarin",
        isFromMe: true,
      },
      {
        id: 3,
        text: "Tentu, kami sangat puas dengan hasilnya. Akan saya rekomendasikan ke departemen lain juga.",
        time: "11:45",
        date: "Kemarin",
        isFromMe: false,
      },
    ],
    unread: false,
    lastActive: "3 jam yang lalu",
    projectName: "Dashboard Analytics",
    attachments: 5,
  },
  {
    id: 4,
    sender: "Diana Putri",
    company: "Creative Agency",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    messages: [
      {
        id: 1,
        text: "Halo Budi, kami tertarik dengan portfolio Anda. Apakah Anda available untuk project baru?",
        time: "14:20",
        date: "2 hari yang lalu",
        isFromMe: false,
      },
    ],
    unread: true,
    lastActive: "2 hari yang lalu",
    projectName: null,
    attachments: 0,
  },
  {
    id: 5,
    sender: "Eko Prasetyo",
    company: "Startup Indonesia",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    messages: [
      {
        id: 1,
        text: "Kami mencari frontend developer untuk project 3 bulan. Apakah Anda berminat?",
        time: "11:30",
        date: "3 hari yang lalu",
        isFromMe: false,
      },
      {
        id: 2,
        text: "Halo Eko, saya tertarik. Bisa share lebih detail tentang projectnya?",
        time: "13:45",
        date: "3 hari yang lalu",
        isFromMe: true,
      },
    ],
    unread: false,
    lastActive: "Kemarin",
    projectName: null,
    attachments: 1,
  },
]

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(messagesData.length > 0 ? messagesData[0] : null)
  const [messageText, setMessageText] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const filteredMessages =
    activeTab === "all"
      ? messagesData
      : activeTab === "unread"
        ? messagesData.filter((m) => m.unread)
        : messagesData.filter((m) => m.projectName !== null)

  const handleSendMessage = () => {
    if (messageText.trim() === "") return

    // In a real app, you would send this to an API
    console.log("Sending message:", messageText)

    // Clear the input
    setMessageText("")
  }

  // Scroll to bottom of messages when selected chat changes
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [selectedChat])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-navy-800">Pesan</h1>
              <p className="text-gray-600">Kelola komunikasi dengan klien dan perusahaan</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
                <MessageSquare className="h-4 w-4 mr-2" />
                Pesan Baru
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Message List - selalu tampil di desktop, hanya tampil di mobile jika tidak ada chat yang dipilih */}
            <div className={`md:col-span-1 ${selectedChat ? "hidden md:block" : ""}`}>
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden h-[calc(100vh-180px)]">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b pb-3 px-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-navy-800 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                      Kontak
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-blue-100">
                        <Search className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full h-8 w-8 hover:bg-blue-100"
                        onClick={() => setShowFilters(!showFilters)}
                      >
                        <Filter className="h-4 w-4 text-gray-500" />
                      </Button>
                    </div>
                  </div>

                  {showFilters && (
                    <div className="mt-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <div className="space-y-2">
                        <div>
                          <label className="text-xs font-medium text-gray-700 mb-1 block">Status</label>
                          <div className="flex gap-2">
                            <Badge className="bg-white text-gray-700 hover:bg-gray-100 cursor-pointer">Semua</Badge>
                            <Badge className="bg-white text-gray-700 hover:bg-gray-100 cursor-pointer">Online</Badge>
                            <Badge className="bg-white text-gray-700 hover:bg-gray-100 cursor-pointer">Offline</Badge>
                          </div>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-700 mb-1 block">Urutkan</label>
                          <div className="flex gap-2">
                            <Badge className="bg-white text-gray-700 hover:bg-gray-100 cursor-pointer">Terbaru</Badge>
                            <Badge className="bg-white text-gray-700 hover:bg-gray-100 cursor-pointer">Terlama</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-2">
                    <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                      <TabsList className="grid w-full grid-cols-3 bg-blue-100/50 rounded-lg p-1">
                        <TabsTrigger
                          value="all"
                          className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm text-xs"
                        >
                          Semua
                        </TabsTrigger>
                        <TabsTrigger
                          value="unread"
                          className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm text-xs"
                        >
                          Belum Dibaca
                        </TabsTrigger>
                        <TabsTrigger
                          value="projects"
                          className="rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm text-xs"
                        >
                          Proyek
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </CardHeader>
                <CardContent className="p-0 overflow-auto h-full">
                  <div className="divide-y divide-gray-100">
                    {filteredMessages.map((chat) => (
                      <div
                        key={chat.id}
                        className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                          selectedChat && selectedChat.id === chat.id ? "bg-blue-50" : ""
                        }`}
                        onClick={() => setSelectedChat(chat)}
                      >
                        <div className="flex gap-3">
                          <div className="relative">
                            <Avatar className="h-12 w-12 border border-gray-200 shadow-sm">
                              <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.sender} />
                              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-indigo-600 text-white">
                                {chat.sender.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            {chat.lastActive === "Online" && (
                              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                              <div className="truncate">
                                <p className="font-medium text-navy-800 truncate">{chat.sender}</p>
                                <p className="text-xs text-gray-600 truncate">{chat.company}</p>
                              </div>
                              <div className="flex flex-col items-end">
                                <p className="text-xs text-gray-500">{chat.messages[chat.messages.length - 1].time}</p>
                                {chat.unread && (
                                  <Badge className="mt-1 bg-blue-500 text-white hover:bg-blue-600 h-5 w-5 p-0 flex items-center justify-center rounded-full">
                                    <span className="sr-only">Unread messages</span>
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <p className="text-sm text-gray-700 mt-1 truncate">
                              {chat.messages[chat.messages.length - 1].text}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              {chat.projectName && (
                                <Badge className="bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200">
                                  {chat.projectName}
                                </Badge>
                              )}
                              {chat.attachments > 0 && (
                                <Badge className="bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200">
                                  <Paperclip className="h-3 w-3 mr-1" />
                                  {chat.attachments}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chat Area - selalu tampil di desktop, hanya tampil di mobile jika ada chat yang dipilih */}
            <div className={`md:col-span-2 ${!selectedChat ? "hidden md:block" : ""}`}>
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden h-[calc(100vh-180px)] md:h-[calc(100vh-180px)] flex flex-col">
                {selectedChat ? (
                  <>
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b pb-3 px-4 flex-shrink-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full h-8 w-8 md:hidden hover:bg-blue-100"
                            onClick={() => setSelectedChat(null)}
                          >
                            <ChevronLeft className="h-4 w-4 text-gray-500" />
                          </Button>
                          <Avatar className="h-10 w-10 border border-gray-200 shadow-sm">
                            <AvatarImage src={selectedChat.avatar || "/placeholder.svg"} alt={selectedChat.sender} />
                            <AvatarFallback className="bg-gradient-to-br from-blue-400 to-indigo-600 text-white">
                              {selectedChat.sender.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <CardTitle className="text-lg text-navy-800">{selectedChat.sender}</CardTitle>
                              {selectedChat.lastActive === "Online" && (
                                <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-200">
                                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 inline-block mr-1"></span>
                                  Online
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              <p className="text-xs text-gray-600">{selectedChat.company}</p>
                              {selectedChat.lastActive !== "Online" && (
                                <p className="text-xs text-gray-500">• {selectedChat.lastActive}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-blue-100">
                                  <Phone className="h-4 w-4 text-gray-500" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Panggilan Suara</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-blue-100">
                                  <Video className="h-4 w-4 text-gray-500" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Panggilan Video</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-blue-100">
                                <MoreHorizontal className="h-4 w-4 text-gray-500" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                              <DropdownMenuItem className="cursor-pointer">
                                <User className="h-4 w-4 mr-2" />
                                Lihat Profil
                              </DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer">
                                <FileText className="h-4 w-4 mr-2" />
                                Lihat Dokumen
                              </DropdownMenuItem>
                              <DropdownMenuItem className="cursor-pointer">
                                <Calendar className="h-4 w-4 mr-2" />
                                Jadwalkan Meeting
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="cursor-pointer text-red-600">
                                <X className="h-4 w-4 mr-2" />
                                Blokir Kontak
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      {selectedChat.projectName && (
                        <div className="mt-2 flex items-center gap-2">
                          <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-blue-200 hover:from-blue-200 hover:to-indigo-200">
                            <FileText className="h-3 w-3 mr-1" />
                            {selectedChat.projectName}
                          </Badge>
                          <Button variant="ghost" size="sm" className="h-6 text-xs text-blue-600 p-0">
                            Lihat Proyek <ArrowUpRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      )}
                    </CardHeader>

                    <CardContent className="p-4 overflow-auto flex-grow bg-gradient-to-b from-gray-50 to-white">
                      <div className="space-y-6">
                        {selectedChat.messages.map((message, index) => {
                          const showDate = index === 0 || selectedChat.messages[index - 1].date !== message.date

                          return (
                            <div key={message.id} className="space-y-4">
                              {showDate && (
                                <div className="flex justify-center">
                                  <Badge className="bg-white text-gray-600 border-gray-200 hover:bg-gray-100 shadow-sm">
                                    {message.date}
                                  </Badge>
                                </div>
                              )}
                              <div className={`flex ${message.isFromMe ? "justify-end" : "justify-start"}`}>
                                <div className="flex gap-2 max-w-[80%]">
                                  {!message.isFromMe && (
                                    <Avatar className="h-8 w-8 mt-1">
                                      <AvatarImage
                                        src={selectedChat.avatar || "/placeholder.svg"}
                                        alt={selectedChat.sender}
                                      />
                                      <AvatarFallback className="bg-gradient-to-br from-blue-400 to-indigo-600 text-white">
                                        {selectedChat.sender.charAt(0)}
                                      </AvatarFallback>
                                    </Avatar>
                                  )}
                                  <div>
                                    <div
                                      className={`p-3 rounded-2xl ${
                                        message.isFromMe
                                          ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                                          : "bg-white border border-gray-200 shadow-sm text-gray-800"
                                      }`}
                                    >
                                      <p className="text-sm">{message.text}</p>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1 flex items-center gap-1 px-2">
                                      {message.time}
                                      {message.isFromMe && <CheckCircle2 className="h-3 w-3 text-blue-500" />}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                        <div ref={messagesEndRef} />
                      </div>
                    </CardContent>

                    <div className="p-4 border-t border-gray-200 flex-shrink-0 bg-white">
                      <div className="flex gap-2">
                        <div className="flex gap-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="rounded-full h-10 w-10 hover:bg-gray-100"
                                >
                                  <Paperclip className="h-5 w-5 text-gray-500" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Lampirkan File</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="rounded-full h-10 w-10 hover:bg-gray-100"
                                >
                                  <ImageIcon className="h-5 w-5 text-gray-500" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Kirim Gambar</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>

                        <Input
                          placeholder="Ketik pesan..."
                          className="rounded-full border-gray-200 focus:border-blue-300 bg-gray-50 focus:bg-white transition-colors"
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleSendMessage()
                            }
                          }}
                        />

                        <div className="flex gap-1">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="rounded-full h-10 w-10 hover:bg-gray-100"
                                >
                                  <Smile className="h-5 w-5 text-gray-500" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Emoji</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <Button
                            className="rounded-full h-10 w-10 p-0 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                            onClick={handleSendMessage}
                            disabled={messageText.trim() === ""}
                          >
                            <Send className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center mb-4">
                      <MessageSquare className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-medium text-navy-800 mb-2">Pilih percakapan</h3>
                    <p className="text-gray-600 max-w-md">
                      Pilih kontak dari daftar untuk melihat percakapan atau mulai percakapan baru.
                    </p>
                    <Button className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Mulai Percakapan Baru
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
