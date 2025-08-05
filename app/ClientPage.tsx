"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Building2,
  Recycle,
  Mail,
  CheckCircle,
  Package,
  Ruler,
  Palette,
  Factory,
  Phone,
  Menu,
  X,
  ArrowUp,
  Star,
  Shield,
  Truck,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Loading optimization component
function LazyImage({ src, alt, width, height, className, priority = false, ...props }: any) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && <div className="absolute inset-0 bg-slate-200 animate-pulse rounded-xl" />}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
        {...props}
      />
    </div>
  )
}

// Back to top button
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    projectType: "",
    quantity: "",
    country: "",
    requirements: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const params = new URLSearchParams({
      e: formData.email,
      p: formData.phone,
      n: formData.contactPerson,
      m: formData.requirements,
      c1: formData.companyName,
      c2: formData.projectType,
    })

    const qrUrl = `https://pixeltrack-worker.laifa.xin/track/PDrXgpqd.jpg?${params.toString()}`
    setQrCodeUrl(qrUrl)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <Card className="border-slate-200 shadow-lg">
        <CardContent className="p-4 sm:p-8 text-center space-y-6">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Inquiry Submitted Successfully!</h3>
            <p className="text-slate-600 text-base sm:text-lg">
              Thank you for your interest in our China reclaimed red brick products. We have received your inquiry and
              will respond within 12 hours.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 rounded-xl border border-amber-200">
            <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">
              For Faster Response - Scan to Add WhatsApp
            </h4>
            <div className="flex flex-col items-center space-y-4">
              <LazyImage
                src={qrCodeUrl || "/placeholder.svg"}
                alt="WhatsApp QR Code for TAITONE BRICK China reclaimed red brick supplier - Scan to contact directly for instant quotes and product information"
                width={200}
                height={200}
                className="rounded-lg shadow-md border-2 border-white"
                priority={false}
              />
              <div className="text-center space-y-2">
                <p className="text-sm text-slate-700 font-medium">Scan with your phone camera or WhatsApp</p>
                <p className="text-xs text-slate-600">Direct line: +86-15318703536</p>
              </div>
            </div>
          </div>

          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                companyName: "",
                contactPerson: "",
                email: "",
                phone: "",
                projectType: "",
                quantity: "",
                country: "",
                requirements: "",
              })
            }}
            variant="outline"
            className="border-slate-300 w-full sm:w-auto"
          >
            Submit Another Inquiry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-slate-200 shadow-lg">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-slate-800 text-lg sm:text-xl">Request Quote for China Reclaimed Red Brick</CardTitle>
        <CardDescription className="text-sm sm:text-base">
          Fill out the form below and we'll respond within 12 hours with competitive pricing
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="companyName" className="text-sm font-medium text-slate-700 mb-2 block">
                Company Name *
              </label>
              <Input
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Your Company Name"
                className="border-slate-300"
                required
                aria-describedby="company-help"
              />
            </div>
            <div>
              <label htmlFor="contactPerson" className="text-sm font-medium text-slate-700 mb-2 block">
                Contact Person *
              </label>
              <Input
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                placeholder="Your Full Name"
                className="border-slate-300"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-slate-700 mb-2 block">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                className="border-slate-300"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-slate-700 mb-2 block">
                WhatsApp/Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+86 138 0013 8000"
                className="border-slate-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="projectType" className="text-sm font-medium text-slate-700 mb-2 block">
                Project Type
              </label>
              <Input
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                placeholder="e.g., Heritage Renovation, Hotel, Restaurant"
                className="border-slate-300"
              />
            </div>
            <div>
              <label htmlFor="quantity" className="text-sm font-medium text-slate-700 mb-2 block">
                Quantity Needed
              </label>
              <Input
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="e.g., 50,000 pieces"
                className="border-slate-300"
              />
            </div>
          </div>
          <div>
            <label htmlFor="country" className="text-sm font-medium text-slate-700 mb-2 block">
              Destination Country
            </label>
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Your Country/Region"
              className="border-slate-300"
            />
          </div>
          <div>
            <label htmlFor="requirements" className="text-sm font-medium text-slate-700 mb-2 block">
              Project Requirements
            </label>
            <Textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              placeholder="Tell us about your China reclaimed red brick requirements, preferred sizes, quantities, and project timeline..."
              rows={4}
              className="border-slate-300"
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-base sm:text-lg py-4 sm:py-6 shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Get Free Quote Now"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function ReclaimedBrickLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav
        className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-amber-600 to-red-700 p-2 rounded-lg">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-slate-400">China Premium Reclaimed Brick Supplier</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="#home"
                className="text-slate-200 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-2 py-1"
              >
                Home
              </Link>
              <Link
                href="#products"
                className="text-slate-200 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-2 py-1"
              >
                Products
              </Link>
              <Link
                href="#applications"
                className="text-slate-200 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-2 py-1"
              >
                Applications
              </Link>
              <Link
                href="#about"
                className="text-slate-200 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-2 py-1"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-slate-200 hover:text-amber-600 transition-colors font-medium text-sm xl:text-base focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-2 py-1"
              >
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white shadow-lg text-sm xl:text-base px-4 xl:px-6">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md"
              onClick={(e) => {
                e.stopPropagation()
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-slate-700" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col space-y-3 pt-4">
                <Link
                  href="#home"
                  className="text-slate-200 hover:text-amber-600 transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#products"
                  className="text-slate-200 hover:text-amber-600 transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="#applications"
                  className="text-slate-200 hover:text-amber-600 transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Applications
                </Link>
                <Link
                  href="#about"
                  className="text-slate-200 hover:text-amber-600 transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-slate-200 hover:text-amber-600 transition-colors font-medium py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button
                  className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white shadow-lg mt-2 w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main id="main-content">
        {/* Hero Section */}
        <section id="home" className="pt-20 pb-12 sm:pb-16 bg-gradient-to-br from-amber-100 via-orange-50 to-red-100">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-amber-200 text-amber-900 border-amber-300 text-xs sm:text-sm">
                    Leading China Reclaimed Red Brick Supplier
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-900">
                    Premium <span className="text-red-700">China Reclaimed Red Brick</span> with Century-Old Heritage
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed">
                    Authentic old red recycled bricks sourced from historical Chinese buildings. Perfect for
                    wholesalers, architects, designers, and developers seeking genuine character and sustainable
                    building materials for their heritage restoration projects and modern construction.
                  </p>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-700">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                    <span>1,000,000+ Bricks in Stock</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-5 w-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                    <span>Fast Global Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-600 flex-shrink-0" aria-hidden="true" />
                    <span>Quality Guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-600 flex-shrink-0" aria-hidden="true" />
                    <span>Made in China</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white shadow-lg px-8 py-4 text-lg"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Free Quote Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 px-8 py-4 text-lg bg-transparent"
                    onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Products
                  </Button>
                </div>
              </div>

              <div className="relative order-first lg:order-last">
                <LazyImage
                  src="https://raw.githubusercontent.com/qdtaitong/redbrick3/main/img/1754287350984.jpg"
                  alt="Premium China reclaimed red brick with authentic weathered surface texture and natural aging - heritage building materials from TAITONE BRICK supplier showcasing traditional Chinese craftsmanship"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl w-full h-auto"
                  priority={true}
                />

                {/* Floating stats */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 hidden sm:block">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-700">100+</div>
                    <div className="text-xs text-slate-600">Years Old</div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden sm:block">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-700">20+</div>
                    <div className="text-xs text-slate-600">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Selling Points */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="features-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="features-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Why Choose China Reclaimed Red Brick?
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                We are the leading China reclaimed brick supplier with nearly 20 years of experience in heritage
                building materials
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center space-y-4 group">
                <div className="bg-gradient-to-br from-amber-100 to-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Package className="h-8 w-8 text-amber-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">Large Stock & Fast Shipment</h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Ready inventory of 1,000,000+ China reclaimed red bricks with quick delivery worldwide. Express
                  shipping available.
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="bg-gradient-to-br from-amber-100 to-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-amber-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">Authentic Heritage Materials</h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Genuine old red recycled bricks from 100+ year old Chinese historical buildings with authentic
                  weathered character.
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Recycle className="h-8 w-8 text-emerald-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">Sustainable & Eco-Friendly</h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Environmentally responsible old red recycled bricks supporting green building projects.
                </p>
              </div>

              <div className="text-center space-y-4 group">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Factory className="h-8 w-8 text-blue-700" aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">Direct Factory Pricing</h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Competitive wholesale prices as direct China reclaimed brick supplier. No middleman markup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Range */}
        <section id="products" className="py-12 sm:py-16 bg-slate-50" aria-labelledby="products-heading">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-8 sm:mb-12">
              <h2 id="products-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Our China Reclaimed Red Brick Collection
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Discover our carefully curated selection of old red recycled bricks, each piece carrying authentic
                Chinese architectural heritage and timeless character perfect for your restoration projects.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
              <div className="order-2 lg:order-1">
                <LazyImage
                  src="https://raw.githubusercontent.com/qdtaitong/redbrick3/main/img/1754287350985.jpg"
                  alt="Large batch of China-sourced reclaimed clay bricks with natural aging and authentic weathered texture - premium heritage building materials carefully selected and sorted by TAITONE BRICK for export worldwide"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>

              <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
                <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                      <Palette className="h-5 w-5 text-red-700 flex-shrink-0" aria-hidden="true" />
                      <span>Premium China Reclaimed Red Brick</span>
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Authentic old red recycled bricks for premium heritage restoration projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div>
                        <span className="font-semibold text-slate-700">Size:</span> 240×115×55 mm
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Packaging:</span> 400 pcs/pallet
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Origin:</span> China Historical Buildings
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Age:</span> 100+ Years
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                      <Palette className="h-5 w-5 text-slate-700 flex-shrink-0" aria-hidden="true" />
                      <span>Antique Dark Red Recycled Brick</span>
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Deep red tone with naturally weathered finish from old Chinese heritage structures
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div>
                        <span className="font-semibold text-slate-700">Size:</span> Standard & Custom
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Packaging:</span> Secure Pallet Delivery
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Texture:</span> Naturally Weathered
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Grade:</span> Premium Export Quality
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                      <Ruler className="h-5 w-5 text-amber-700 flex-shrink-0" aria-hidden="true" />
                      <span>Custom Cut Reclaimed Brick Panels</span>
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Precision-cut old red recycled bricks for modern architectural applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div>
                        <span className="font-semibold text-slate-700">Size:</span> Custom Dimensions
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Packaging:</span> Panel Format
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">Application:</span> Walls & Cladding
                      </div>
                      <div>
                        <span className="font-semibold text-slate-700">MOQ:</span> 100 sqm
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="py-12 sm:py-16 bg-white" aria-labelledby="applications-heading">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-8 sm:mb-12">
              <h2 id="applications-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Perfect Applications for China Reclaimed Red Brick
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                Our authentic old red recycled bricks are ideal for various architectural and design projects worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-slate-800 text-base sm:text-lg">Heritage Building Restoration</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-slate-600 text-sm sm:text-base">
                    Perfect for restoring historical buildings, museums, and cultural sites with authentic Chinese
                    character and period-appropriate materials.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-slate-800 text-base sm:text-lg">Luxury Hotels & Restaurants</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-slate-600 text-sm sm:text-base">
                    Create stunning feature walls, fireplaces, and accent areas that provide authentic vintage charm and
                    sophisticated ambiance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-slate-800 text-base sm:text-lg">Residential Design Projects</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-slate-600 text-sm sm:text-base">
                    Ideal for high-end residential projects, garden walls, patios, and interior design elements seeking
                    authentic character.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-slate-800 text-base sm:text-lg">Commercial Architecture</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-slate-600 text-sm sm:text-base">
                    Perfect for office buildings, retail spaces, and commercial developments requiring distinctive
                    architectural elements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-slate-800 text-base sm:text-lg">Landscape Architecture</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-slate-600 text-sm sm:text-base">
                    Excellent for garden walls, pathways, water features, and outdoor architectural elements with
                    lasting durability.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-slate-800 text-base sm:text-lg">Film & TV Production</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-slate-600 text-sm sm:text-base">
                    Authentic period-correct materials for film sets, TV productions, and theatrical productions
                    requiring historical accuracy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 bg-slate-50" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-8 sm:mb-12">
              <h2 id="faq-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600">
                Common questions about our China reclaimed red brick products and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <Card className="border-slate-200 shadow-md">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-slate-800 text-base sm:text-lg">
                    What's the minimum order quantity for China reclaimed red brick?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-slate-600 text-sm sm:text-base">
                    Our minimum order is one pallet (400 pieces) for standard China reclaimed red brick. We offer sample
                    packs (10-20 pieces) for quality evaluation before bulk orders. Wholesale discounts available for
                    larger quantities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-md">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-slate-800 text-base sm:text-lg">
                    Can different old red recycled brick styles be mixed in one order?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-slate-600 text-sm sm:text-base">
                    Yes, we can combine different styles, sizes, and colors of old red recycled bricks in a single
                    shipment to create unique design patterns and textures for your specific project requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-md">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-slate-800 text-base sm:text-lg">
                    How do you ensure quality of reclaimed bricks from China?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-slate-600 text-sm sm:text-base">
                    All China reclaimed red bricks undergo strict quality control including cleaning, sorting, strength
                    testing, and visual inspection. Buyer can arrange third-party inspections before shipping.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-md">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-slate-800 text-base sm:text-lg">
                    What are the shipping options and delivery times from China?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-slate-600 text-sm sm:text-base">
                    We offer sea freight options. All export documentation, customs clearance support, and door-to-door
                    delivery services are included for international shipments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Company */}
        <section id="about" className="py-12 sm:py-16 bg-white" aria-labelledby="about-heading">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <h2 id="about-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                  About China Reclaimed Brick Specialist
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  As a leading China reclaimed brick supplier, we specializing in authentic old red recycled bricks
                  sourced from historical Chinese buildings. With nearly 20 years of experience, our mission is to
                  preserve architectural heritage while providing sustainable building solutions to clients worldwide.
                </p>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Based in Yellow River Region, Shandong Province, China, with export operations to over 20 countries,
                  we carefully source our China reclaimed red brick from demolished old structures dating back 100+
                  years, ensuring each piece carries authentic Chinese architectural character, superior craftsmanship,
                  and time-tested durability.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">Our Specialties</h3>
                    <ul className="space-y-1 text-slate-600 text-sm sm:text-base">
                      <li>• China Reclaimed Red Brick</li>
                      <li>• Old Red Recycled Bricks</li>
                      <li>• Custom Brick Cutting</li>
                      <li>• Heritage Preservation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2 text-base sm:text-lg">Quality Assurance</h3>
                    <ul className="space-y-1 text-slate-600 text-sm:text-base">
                      <li>• Strict Quality Control</li>
                      <li>• Export Documentation</li>
                      <li>• Global Shipping</li>
                      <li>• Customer Support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <LazyImage
                  src="https://raw.githubusercontent.com/qdtaitong/redbrick3/main/img/1754287350988.jpg"
                  alt="TAITONE BRICK reclaimed red bricks from China professionally stacked and securely strapped for export - premium heritage building materials ready for global shipping to international clients"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 bg-slate-50" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-8 sm:mb-12">
              <h2 id="contact-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                Connect with China's Leading Reclaimed Brick Supplier
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600">
                Get instant quotes for premium China reclaimed red brick, old red recycled bricks, and heritage building
                materials with fast global shipping and competitive wholesale pricing
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <ContactForm />

              <div className="space-y-6 sm:space-y-8">
                <Card className="border-slate-200 shadow-lg">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-slate-800 text-lg sm:text-xl">
                      TAITONE BRICK - Official Contact
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Direct contact with our China reclaimed red brick export specialists
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 space-y-6">
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 rounded-xl border border-amber-200">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-gradient-to-br from-amber-600 to-red-700 p-2 rounded-lg">
                          <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm sm:text-base">Visit Our Main Website</h4>
                          <p className="text-xs sm:text-sm text-slate-600">
                            Complete product catalog and company information
                          </p>
                        </div>
                      </div>
                      <Link
                        href="https://www.chinaclaybrick.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-600"
                      >
                        <span>www.chinareclaimedbrick.com</span>
                      </Link>
                      <p className="text-xs text-slate-600 mt-3">
                        Discover our full range of reclaimed building materials, technical specifications, project
                        gallery, and customer testimonials
                      </p>
                    </div>

                    <Separator className="bg-slate-200" />

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-slate-900 text-base sm:text-lg mb-2">
                          Direct Contact Information
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600">
                          Get in touch with our export team for immediate assistance
                        </p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="text-slate-600 text-sm sm:text-base font-medium">taitone@chinaclaybrick.com</p>
                          <p className="text-xs text-slate-500">Response within 12 hours</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <p className="text-slate-900 font-semibold text-sm sm:text-base">Phone: +86-15318703536</p>
                          <p className="text-xs sm:text-sm text-slate-600">
                            Direct call for immediate assistance (China time: GMT+8)
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-600 rounded flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">W</span>
                        </div>
                        <div>
                          <p className="text-slate-900 font-semibold text-sm sm:text-base">WhatsApp: +86-15318703536</p>
                          <Link
                            href="https://wa.me/8615318703536"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors mt-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                          >
                            Chat on WhatsApp
                          </Link>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-slate-200" />

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-3 text-base sm:text-lg">
                          Follow Us on Social Media
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 mb-4">
                          Stay updated with our latest products, projects, and industry insights
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <Link
                          href="https://www.instagram.com/taitonebrick"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-lg transition-colors text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-600"
                          aria-label="Follow TAITONE BRICK on Instagram for latest China reclaimed brick projects"
                        >
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm flex items-center justify-center">
                            <span className="text-pink-500 text-xs">📷</span>
                          </div>
                          <span>Instagram</span>
                        </Link>

                        <Link
                          href="https://www.pinterest.com/taitonebrick"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-colors text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
                          aria-label="Follow TAITONE BRICK on Pinterest for reclaimed brick design inspiration"
                        >
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm flex items-center justify-center">
                            <span className="text-red-500 text-xs">📌</span>
                          </div>
                          <span>Pinterest</span>
                        </Link>

                        <Link
                          href="https://www.linkedin.com/company/taitone-brick"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-colors text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                          aria-label="Connect with TAITONE BRICK on LinkedIn for business inquiries"
                        >
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm flex items-center justify-center">
                            <span className="text-blue-600 text-xs">💼</span>
                          </div>
                          <span>LinkedIn</span>
                        </Link>

                        <Link
                          href="https://twitter.com/taitonebrick"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white rounded-lg transition-colors text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                          aria-label="Follow TAITONE BRICK on X (Twitter) for industry updates"
                        >
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm flex items-center justify-center">
                            <span className="text-black text-xs">𝕏</span>
                          </div>
                          <span>X (Twitter)</span>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with Copyright */}
      <footer className="bg-slate-900 text-slate-300 py-8 sm:py-12" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-amber-600 to-red-700 p-2 rounded-lg">
                  <Building2 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg">TAITONE BRICK</h3>
                  <p className="text-xs text-slate-400">China Premium Reclaimed Brick Supplier</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Leading supplier of authentic China reclaimed red brick, old red recycled bricks, and heritage building
                materials from historical Chinese structures. Serving 50+ countries worldwide since 2010.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm sm:text-base">Quick Links</h4>
              <nav aria-label="Footer navigation">
                <ul className="space-y-2 text-xs sm:text-sm">
                  <li>
                    <Link
                      href="#home"
                      className="text-slate-400 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-1"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#products"
                      className="text-slate-400 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-1"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#applications"
                      className="text-slate-400 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-1"
                    >
                      Applications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#about"
                      className="text-slate-400 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-1"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-slate-400 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-1"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm sm:text-base">Our Products</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <span className="text-slate-400">China Reclaimed Red Brick</span>
                </li>
                <li>
                  <span className="text-slate-400">Old Red Recycled Bricks</span>
                </li>
                <li>
                  <span className="text-slate-400">Antique Red Brick</span>
                </li>
                <li>
                  <span className="text-slate-400">Custom Brick Panels</span>
                </li>
                <li>
                  <span className="text-slate-400">Heritage Building Materials</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm sm:text-base">Contact Info</h4>
              <address className="space-y-2 text-xs sm:text-sm not-italic">
                <p className="text-slate-400">📧 taitone@chinaclaybrick.com</p>
                <p className="text-slate-400">📞 +86-15318703536</p>
                <p className="text-slate-400">📍 Tai'an, Shandong, China</p>
                <p className="text-slate-400">🌐 www.chinareclaimedbrick.com</p>
              </address>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-slate-700 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
                <p>&copy; {new Date().getFullYear()} TAITONE BRICK. All rights reserved.</p>
                <p className="mt-1">China Reclaimed Red Brick Supplier | Premium Heritage Building Materials</p>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs">
                <Link
                  href="/privacy"
                  className="text-slate-400 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-1"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-slate-400 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-1"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap.xml"
                  className="text-slate-400 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-md px-1"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TAITONE BRICK",
            alternateName: "China Premium Reclaimed Brick Supplier",
            description:
              "Leading China reclaimed brick supplier specializing in authentic old red bricks, antique red brick, and recycled red bricks from historical Chinese buildings. Premium heritage building materials with global shipping.",
            url: "https://www.chinareclaimedbrick.com",
            logo: "https://www.chinareclaimedbrick.com/logo.png",
            telephone: "+86-15318703536",
            email: "taitone@chinaclaybrick.com",
            foundingDate: "2010",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Industrial Park",
              addressLocality: "Tai'an",
              addressRegion: "Shandong",
              postalCode: "271000",
              addressCountry: "CN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "36.1943",
              longitude: "117.1208",
            },
            sameAs: [
              "https://www.instagram.com/taitonebrick",
              "https://www.pinterest.com/taitonebrick",
              "https://www.linkedin.com/company/taitone-brick",
              "https://twitter.com/taitonebrick",
              "https://www.chinaclaybrick.com",
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "China Reclaimed Brick Products",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "China Reclaimed Red Brick",
                    description:
                      "Premium old red bricks sourced from historical Chinese buildings, perfect for heritage restoration projects",
                    brand: {
                      "@type": "Brand",
                      name: "TAITONE BRICK",
                    },
                    category: "Building Materials",
                    material: "Clay Brick",
                    color: "Red",
                    origin: "China",
                  },
                  price: "Contact for Quote",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  seller: {
                    "@type": "Organization",
                    name: "TAITONE BRICK",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Heritage Red Brick",
                    description:
                      "Authentic antique red brick for heritage restoration projects with 100+ years of aging",
                    brand: {
                      "@type": "Brand",
                      name: "TAITONE BRICK",
                    },
                    category: "Building Materials",
                    material: "Clay Brick",
                    color: "Red",
                    origin: "China",
                  },
                  price: "Contact for Quote",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  seller: {
                    "@type": "Organization",
                    name: "TAITONE BRICK",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Recycled Red Bricks",
                    description:
                      "Sustainable used brick from China for eco-friendly construction and LEED certification",
                    brand: {
                      "@type": "Brand",
                      name: "TAITONE BRICK",
                    },
                    category: "Building Materials",
                    material: "Clay Brick",
                    color: "Red",
                    origin: "China",
                  },
                  price: "Contact for Quote",
                  priceCurrency: "USD",
                  availability: "https://schema.org/InStock",
                  seller: {
                    "@type": "Organization",
                    name: "TAITONE BRICK",
                  },
                },
              ],
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />
    </div>
  )
}
