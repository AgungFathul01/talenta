"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Menu, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Check if user is logged in (mock data for demo)
  const isLoggedIn = true
  const userType = "talent" // or "company"

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Posting Proyek", href: "/post-project" },
  ]

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4 transition-all duration-300 ${
        isScrolled ? "top-2" : "top-4"
      }`}
    >
      <nav
        className={`w-full rounded-full border border-gray-200 bg-white/90 backdrop-blur-md shadow-md px-4 py-2 transition-all duration-300 ${
          isScrolled ? "py-1.5" : "py-2"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-navy-600 flex items-center justify-center text-white font-bold text-lg">
              T
            </div>
            <span className="font-semibold text-navy-800 hidden sm:inline-block">TalentHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100 hover:text-navy-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* User Menu (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Bell className="h-5 w-5 text-gray-600" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="rounded-full p-0 h-9 w-9">
                      <Avatar className="h-9 w-9 border border-gray-200">
                        <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-navy-500 text-white">
                          U
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 rounded-xl p-2">
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">Budi Santoso</p>
                        <p className="text-xs leading-none text-gray-500">budi@example.com</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href="/user-profile" className="cursor-pointer">
                        Profil Saya
                      </Link>
                    </DropdownMenuItem>
                    {userType === "talent" ? (
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard" className="cursor-pointer">
                          Dashboard Talent
                        </Link>
                      </DropdownMenuItem>
                    ) : (
                      <DropdownMenuItem asChild>
                        <Link href="/company-dashboard" className="cursor-pointer">
                          Dashboard Perusahaan
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem asChild>
                      <Link href="/settings" className="cursor-pointer">
                        Pengaturan
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600 cursor-pointer">Keluar</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="rounded-full">
                    Masuk
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white">Daftar</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-6 w-6 text-gray-600" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] sm:w-[350px] p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-navy-600 flex items-center justify-center text-white font-bold text-lg">
                          T
                        </div>
                        <span className="font-semibold text-navy-800">TalentHub</span>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <X className="h-5 w-5 text-gray-600" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-auto py-4">
                    <div className="flex flex-col space-y-1 px-2">
                      {navLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isActive(link.href)
                              ? "bg-blue-100 text-blue-700"
                              : "text-gray-700 hover:bg-gray-100 hover:text-navy-800"
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 border-t mt-auto">
                    {isLoggedIn ? (
                      <div className="flex items-center gap-4 p-2">
                        <Avatar className="h-10 w-10 border border-gray-200">
                          <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
                          <AvatarFallback className="bg-gradient-to-br from-blue-400 to-navy-500 text-white">
                            U
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Budi Santoso</p>
                          <p className="text-xs text-gray-500">budi@example.com</p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <Link href="/login" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button variant="outline" className="w-full rounded-lg">
                            Masuk
                          </Button>
                        </Link>
                        <Link href="/register" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                          <Button className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Daftar</Button>
                        </Link>
                      </div>
                    )}

                    {isLoggedIn && (
                      <div className="mt-4 space-y-2">
                        <Link
                          href="/user-profile"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <User className="h-4 w-4" />
                          Profil Saya
                        </Link>
                        <Link
                          href={userType === "talent" ? "/dashboard" : "/company-dashboard"}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <rect width="7" height="9" x="3" y="3" rx="1" />
                            <rect width="7" height="5" x="14" y="3" rx="1" />
                            <rect width="7" height="9" x="14" y="12" rx="1" />
                            <rect width="7" height="5" x="3" y="16" rx="1" />
                          </svg>
                          {userType === "talent" ? "Dashboard Talent" : "Dashboard Perusahaan"}
                        </Link>
                        <Link
                          href="/settings"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                          Pengaturan
                        </Link>
                        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" x2="9" y1="12" y2="12" />
                          </svg>
                          Keluar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  )
}
