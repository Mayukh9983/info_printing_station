import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { FileText, Image, Copy, Check, Zap, Award, Truck, Users, Palette, Layers, BookOpen, Briefcase } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            InFo Printing Station
          </Link>
          <div className="flex gap-8">
            <Link href="/services" className="text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/calculator" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Calculator
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </div>
          <Link href="/upload">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg transition-all">
              Order Now
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a complete range of professional printing services tailored to your needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Core Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Student Printing */}
            <div className="group">
              <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600" />
                <div className="mb-6 inline-block p-4 bg-blue-100 rounded-xl group-hover:scale-110 transition-transform">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Printing</h3>
                <p className="text-gray-600 mb-6">Perfect for assignments, projects, and study materials. Affordable pricing designed for students.</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">From ₹2/page B&W</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Fast turnaround time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">High-quality output</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Bulk discounts available</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600"><span className="font-bold text-gray-900">Ideal for:</span> Assignments, projects, thesis, notes, study materials</p>
                </div>

                <Link href="/calculator">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg text-white">
                    Calculate Price
                  </Button>
                </Link>
              </Card>
            </div>

            {/* Photo Printing */}
            <div className="group">
              <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600" />
                <div className="mb-6 inline-block p-4 bg-purple-100 rounded-xl group-hover:scale-110 transition-transform">
                  <Image className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Photo Printing</h3>
                <p className="text-gray-600 mb-6">Premium quality photo prints on professional-grade paper. Perfect for preserving your memories.</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">From ₹12/page color</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Premium paper quality</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Vibrant, true colors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Multiple sizes available</span>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600"><span className="font-bold text-gray-900">Perfect for:</span> Memories, events, gifts, framing, albums</p>
                </div>

                <Link href="/calculator">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg text-white">
                    Calculate Price
                  </Button>
                </Link>
              </Card>
            </div>

            {/* Bulk Xerox */}
            <div className="group">
              <Card className="h-full p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-red-600" />
                <div className="mb-6 inline-block p-4 bg-orange-100 rounded-xl group-hover:scale-110 transition-transform">
                  <Copy className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bulk Xerox</h3>
                <p className="text-gray-600 mb-6">Fast, reliable copying service for large orders. Competitive bulk rates and quick turnaround.</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">₹2/page B&W</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Bulk discounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Quick processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Professional quality</span>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600"><span className="font-bold text-gray-900">Great for:</span> Documents, flyers, handouts, notices, forms</p>
                </div>

                <Link href="/calculator">
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-lg text-white">
                    Calculate Price
                  </Button>
                </Link>
              </Card>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Additional Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-blue-100 rounded-full">
                  <Palette className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Color Printing</h4>
                <p className="text-gray-600 text-sm">Vibrant color prints for brochures, posters, and marketing materials</p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-cyan-100 rounded-full">
                  <Layers className="w-8 h-8 text-cyan-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Binding & Finishing</h4>
                <p className="text-gray-600 text-sm">Professional binding, covers, and finishing options available</p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-purple-100 rounded-full">
                  <Briefcase className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Business Printing</h4>
                <p className="text-gray-600 text-sm">Business cards, letterheads, envelopes, and corporate materials</p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-block p-4 bg-green-100 rounded-full">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Premium Quality</h4>
                <p className="text-gray-600 text-sm">Guaranteed quality with professional equipment and materials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-900">Why Choose InFo Printing Station?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 inline-block p-4 bg-blue-100 rounded-full">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">24-hour turnaround on most orders</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-block p-4 bg-cyan-100 rounded-full">
                <Award className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Professional equipment and materials</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-block p-4 bg-purple-100 rounded-full">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Delivery</h3>
              <p className="text-gray-600">On orders over ₹199 in Duttapukur</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-block p-4 bg-orange-100 rounded-full">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Friendly team ready to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Calculate your order and upload your files now</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Calculate Price
              </Button>
            </Link>
            <Link href="/upload">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                Upload Files
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">InFo Printing Station</h3>
              <p className="text-sm">Your trusted printing partner in Duttapukur</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/calculator" className="hover:text-white transition-colors">Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Student Printing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Photo Printing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bulk Xerox</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm mb-2">Phone: 9007072869</p>
              <p className="text-sm mb-2">Email: infoprintingstationdtk@gmail.com</p>
              <p className="text-sm">Mannapara, Duttapukur</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">&copy; 2026 InFo Printing Station. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
