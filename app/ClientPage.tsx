"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Building2, Recycle, Mail, CheckCircle, Package, Ruler, Palette, Factory, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
  const [qrCodeUrl, setQrCodeUrl] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

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
  }

  if (isSubmitted) {
    return (
      <Card className="border-slate-200 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Inquiry Submitted Successfully!</h3>
            <p className="text-slate-600 text-lg">
              Thank you for your interest in our China reclaimed red brick products. We have received your inquiry and
              will respond within 12 hours.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
            <h4 className="text-lg font-semibold text-slate-900 mb-4">For Faster Response - Scan to Add WhatsApp</h4>
            <div className="flex flex-col items-center space-y-4">
              <Image
                src={qrCodeUrl || "/placeholder.svg"}
                alt="WhatsApp QR Code - Contact TAITONE BRICK"
                width={200}
                height={200}
                className="rounded-lg shadow-md border-2 border-white"
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
            className="border-slate-300"
          >
            Submit Another Inquiry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-slate-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-slate-800">Request Quote for China Reclaimed Red Brick</CardTitle>
        <CardDescription>Fill out the form below and we'll respond within 12 hours</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Company Name *</label>
              <Input
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Your Company Name"
                className="border-slate-300"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Contact Person *</label>
              <Input
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                placeholder="Your Full Name"
                className="border-slate-300"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Email *</label>
              <Input
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
              <label className="text-sm font-medium text-slate-700 mb-2 block">WhatsApp/Phone</label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+86 138 0013 8000"
                className="border-slate-300"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Project Type</label>
              <Input
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                placeholder="e.g., Heritage Renovation, Hotel"
                className="border-slate-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 mb-2 block">Quantity Needed</label>
              <Input
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="e.g., 50,000 pieces"
                className="border-slate-300"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Destination Country</label>
            <Input
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Your Country/Region"
              className="border-slate-300"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Project Requirements</label>
            <Textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleInputChange}
              placeholder="Tell us about your China reclaimed red brick requirements..."
              rows={4}
              className="border-slate-300"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-lg py-6 shadow-lg"
          >
            Submit Inquiry Now
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function ReclaimedBrickLanding() {
  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-amber-600 to-red-700 p-2 rounded-lg">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-600">China Premium Reclaimed Brick Supplier</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-slate-200 hover:text-amber-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="#products" className="text-slate-200 hover:text-amber-600 transition-colors font-medium">
                Products
              </Link>
              <Link href="#applications" className="text-slate-200 hover:text-amber-600 transition-colors font-medium">
                Applications
              </Link>
              <Link href="#about" className="text-slate-200 hover:text-amber-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#contact" className="text-slate-200 hover:text-amber-600 transition-colors font-medium">
                Contact
              </Link>
              <Button className="bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white shadow-lg">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-amber-100 via-orange-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-200 text-amber-900 border-amber-300">
                  Leading China Reclaimed Red Brick Supplier
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                  Premium <span className="text-red-700">China Reclaimed Red Brick</span> with Century-Old Heritage
                </h1>
                <p className="text-xl text-slate-700 leading-relaxed">
                  Authentic old red recycled bricks sourced from historical Chinese buildings. Perfect for wholesalers,
                  architects, designers, and developers seeking genuine character and sustainable building materials for
                  their projects and clients.
                </p>
              </div>
              <div className="flex items-center space-x-8 text-sm text-slate-700">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span>Large Stock Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span>Fast Global Shipping</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span>Made in China</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://raw.githubusercontent.com/qdtaitong/redbrick3/main/img/1754287350984.jpg"
                alt="Close-up of reclaimed red brick from China, sourced by TAITONE BRICK with weathered surface texture"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 group">
              <div className="bg-gradient-to-br from-amber-100 to-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Package className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Large Stock & Fast Shipment</h3>
              <p className="text-slate-600">
                Ready inventory of China reclaimed red brick with quick delivery worldwide
              </p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="bg-gradient-to-br from-amber-100 to-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Building2 className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Authentic Old Red Recycled Bricks</h3>
              <p className="text-slate-600">
                Perfect for heritage building renovation projects with authentic Chinese character
              </p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Recycle className="h-8 w-8 text-emerald-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Eco-Friendly Solution</h3>
              <p className="text-slate-600">Sustainable old red recycled bricks supporting green building projects</p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Factory className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Direct from China Factory</h3>
              <p className="text-slate-600">Competitive pricing as leading China reclaimed brick supplier</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Our China Reclaimed Red Brick Collection</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our carefully curated selection of old red recycled bricks, each piece carrying authentic Chinese
              architectural heritage and timeless character.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="https://raw.githubusercontent.com/qdtaitong/redbrick3/main/img/1754287350985.jpg"
                alt="Batch of China-sourced reclaimed clay bricks with natural aging, selected by TAITONE BRICK"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="h-5 w-5 text-red-700" />
                    <span>Premium China Reclaimed Red Brick</span>
                  </CardTitle>
                  <CardDescription>Authentic old red recycled bricks for premium projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
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
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="h-5 w-5 text-slate-700" />
                    <span>Antique Dark Red Recycled Brick</span>
                  </CardTitle>
                  <CardDescription>Deep red tone with weathered finish from old Chinese structures</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-slate-700">Size:</span> Standard & Custom
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Packaging:</span> Pallet Delivery
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Texture:</span> Naturally Weathered
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Grade:</span> Premium Quality
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Ruler className="h-5 w-5 text-amber-700" />
                    <span>Custom Cut Reclaimed Brick Panels</span>
                  </CardTitle>
                  <CardDescription>Precision-cut old red recycled bricks for modern applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm">
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Common questions about our China reclaimed red brick products</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">
                  What's the minimum order for China reclaimed red brick?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Our minimum order is one pallet (400 pieces) for standard China reclaimed red brick. We offer sample
                  packs for quality evaluation before bulk orders.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">Can different old red recycled brick styles be mixed?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Yes, we can combine different styles of old red recycled bricks in a single shipment to create unique
                  design patterns for your project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">
                  How do you ensure quality of reclaimed bricks from China?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  All China reclaimed red bricks undergo strict quality control, cleaning, and sorting. We provide
                  qualified bricks to all over the world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 shadow-md">
              <CardHeader>
                <CardTitle className="text-slate-800">What are the shipping options from China?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We offer sea freight options. All export documentation and customs clearance support included for
                  international shipments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900">About China Reclaimed Brick</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                China Reclaimed Brick Supplier, specializing in authentic old red recycled bricks sourced from
                historical Chinese buildings. Our mission is to preserve architectural heritage while providing
                sustainable building solutions globally.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Based in Shandong Province, China, with export operations worldwide, we carefully source our China
                reclaimed red brick from demolished historical structures, ensuring each piece carries authentic Chinese
                architectural character and craftsmanship.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Our Specialties</h3>
                  <ul className="space-y-1 text-slate-600">
                    <li>• China Reclaimed Red Brick</li>
                    <li>• Old Red Recycled Bricks</li>
                    <li>• Custom Brick Cutting</li>
                    <li>• Heritage Preservation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="https://raw.githubusercontent.com/qdtaitong/redbrick3/main/img/1754287350988.jpg"
                alt="TAITONE BRICK reclaimed red bricks from China stacked and strapped for export"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-slate-900">Connect with China's Leading Reclaimed Brick Supplier</h2>
            <p className="text-xl text-slate-600">
              Get instant quotes for premium China reclaimed red brick, old red recycled bricks, and heritage building
              materials with fast global shipping
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />

            <div className="space-y-8">
              <Card className="border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-slate-800">TAITONE BRICK - Official Website</CardTitle>
                  <CardDescription>
                    Explore our complete range of China reclaimed red brick products and services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-to-br from-amber-600 to-red-700 p-2 rounded-lg">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Visit Our Main Website</h4>
                        <p className="text-sm text-slate-600">Complete product catalog and company information</p>
                      </div>
                    </div>
                    <Link
                      href="https://www.chinaclaybrick.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-600 to-red-700 hover:from-amber-700 hover:to-red-800 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
                    >
                      <span>www.chinaclaybrick.com</span>
                    </Link>
                    <p className="text-xs text-slate-600 mt-3">
                      Discover our full range of reclaimed building materials, technical specifications, and global
                      project gallery
                    </p>
                  </div>

                  <Separator className="bg-slate-200" />

                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="font-semibold text-slate-900">Direct Contact Information</h3>
                      <p className="text-sm text-slate-600">Get in touch with our export team</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-amber-600" />
                    <div>
                      <p className="text-slate-600">taitone@chinaclaybrick.com</p>
                    </div>
                  </div>

                  <Separator className="bg-slate-200" />

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="text-slate-900 font-semibold">Phone: +86-15318703536</p>
                        <p className="text-sm text-slate-600">Direct call for immediate assistance</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">W</span>
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold">WhatsApp: +86-15318703536</p>
                        <Link
                          href="https://wa.me/8615318703536"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors mt-2"
                        >
                          Chat on WhatsApp
                        </Link>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-slate-200" />

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-3">Follow Us on Social Media</h3>
                      <p className="text-sm text-slate-600 mb-4">Stay updated with our latest products and projects</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Link
                        href="https://www.instagram.com/taitonebrick"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-lg transition-colors text-sm"
                      >
                        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                          <span className="text-pink-500 text-xs font-bold">📷</span>
                        </div>
                        <span>Instagram</span>
                      </Link>

                      <Link
                        href="https://www.pinterest.com/taitonebrick"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg transition-colors text-sm"
                      >
                        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                          <span className="text-red-500 text-xs font-bold">📌</span>
                        </div>
                        <span>Pinterest</span>
                      </Link>

                      <Link
                        href="https://www.linkedin.com/company/taitone-brick"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-colors text-sm"
                      >
                        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                          <span className="text-blue-600 text-xs font-bold">💼</span>
                        </div>
                        <span>LinkedIn</span>
                      </Link>

                      <Link
                        href="https://twitter.com/taitonebrick"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white rounded-lg transition-colors text-sm"
                      >
                        <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                          <span className="text-black text-xs font-bold">𝕏</span>
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

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TAITONE BRICK",
          alternateName: "China Premium Reclaimed Brick Supplier",
          description:
            "Leading China reclaimed brick supplier specializing in old red bricks, antique red brick, and recycled red bricks from historical Chinese buildings.",
          url: "https://www.chinareclaimedbrick.com",
          telephone: "+86-15318703536",
          email: "taitone@chinaclaybrick.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Industrial Park",
            addressLocality: "Tai'an",
            addressRegion: "Shandong",
            postalCode: "271000",
            addressCountry: "CN",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "China Reclaimed Brick Products",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "China Reclaimed Red Brick",
                  description: "Premium old red bricks sourced from historical Chinese buildings",
                  brand: {
                    "@type": "Brand",
                    name: "TAITONE BRICK",
                  },
                  category: "Building Materials",
                  material: "Clay Brick",
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
                  description: "Authentic antique red brick for heritage restoration projects",
                  brand: {
                    "@type": "Brand",
                    name: "TAITONE BRICK",
                  },
                  category: "Building Materials",
                  material: "Clay Brick",
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
                  description: "Sustainable used brick from China for eco-friendly construction",
                  brand: {
                    "@type": "Brand",
                    name: "TAITONE BRICK",
                  },
                  category: "Building Materials",
                  material: "Clay Brick",
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
        })}
      </script>
    </div>
  )
}
