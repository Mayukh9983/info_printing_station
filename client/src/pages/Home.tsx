import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Truck, FileText, Image, Copy, MapPin, Phone, Star, Check, Zap, Award, Users, Clock } from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            InFo Printing Station
          </Link>
          <div className="flex gap-8">
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
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

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }} />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "4s" }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block">
            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full px-6 py-2 border border-blue-200">
              <p className="text-sm font-semibold text-blue-600">✨ Premium Printing Services</p>
            </div>
          </div>

          <h1 className="text-6xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent leading-tight">
            Professional Printing, <br /> Delivered Fast
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get high-quality prints, photos, and xerox services with lightning-fast turnaround. Free delivery on orders over ₹199 in Duttapukur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/calculator">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-2xl text-white px-8 py-6 text-lg transition-all transform hover:scale-105">
                <Zap className="w-5 h-5 mr-2" />
                Calculate Price
              </Button>
            </Link>
            <Link href="/upload">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2 hover:bg-gray-50 transition-all">
                <FileText className="w-5 h-5 mr-2" />
                Upload Files
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-cyan-600">24hrs</div>
              <p className="text-gray-600 text-sm">Fast Delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-purple-600">4.9★</div>
              <p className="text-gray-600 text-sm">Avg Rating</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600">Choose from our premium printing options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Printing */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600" />
                <div className="p-8">
                  <div className="mb-6 inline-block p-4 bg-blue-100 rounded-xl">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Student Printing</h3>
                  <p className="text-gray-600 mb-6">Perfect for assignments, projects, and study materials. Affordable pricing for students.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">From ₹2/page B&W</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Fast turnaround</span>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-blue-600">Starting at ₹2/page</p>
                </div>
              </Card>
            </div>

            {/* Photo Printing */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600" />
                <div className="p-8">
                  <div className="mb-6 inline-block p-4 bg-purple-100 rounded-xl">
                    <Image className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Photo Printing</h3>
                  <p className="text-gray-600 mb-6">Premium quality photo prints on professional-grade paper. Perfect for memories.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Premium paper</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Vibrant colors</span>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-purple-600">From ₹12/page</p>
                </div>
              </Card>
            </div>

            {/* Bulk Xerox */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Card className="relative bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-red-600" />
                <div className="p-8">
                  <div className="mb-6 inline-block p-4 bg-orange-100 rounded-xl">
                    <Copy className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Bulk Xerox</h3>
                  <p className="text-gray-600 mb-6">Fast, reliable copying service for large orders. Competitive bulk rates available.</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Bulk discounts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">Quick service</span>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-orange-600">₹2/page</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 inline-block p-4 bg-blue-100 rounded-full">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-600">Get your prints ready in 24 hours or less</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-block p-4 bg-cyan-100 rounded-full">
                <Award className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">Professional-grade equipment and materials</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-block p-4 bg-purple-100 rounded-full">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Free Delivery</h3>
              <p className="text-gray-600">Orders over ₹199 in Duttapukur area</p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-block p-4 bg-orange-100 rounded-full">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Support</h3>
              <p className="text-gray-600">Friendly team ready to help anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Offers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Free Delivery Zones</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-12 text-white">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-3">Duttapukur</h3>
                <p className="text-lg mb-4">Free delivery on orders over</p>
                <p className="text-5xl font-bold">₹199</p>
                <p className="text-sm mt-4 opacity-90">Within Duttapukur area</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-12 text-white">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-3">Barasat Station</h3>
                <p className="text-lg mb-4">Free delivery on orders over</p>
                <p className="text-5xl font-bold">₹299</p>
                <p className="text-sm mt-4 opacity-90">Barasat Station Area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Upload your files now and get your order processed immediately</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold">
                Calculate Price
              </Button>
            </Link>
            <Link href="/upload">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold">
                Upload Files Now
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
              <p className="text-sm">Your trusted printing partner in Duttapukur. Premium quality, fast service, best prices.</p>
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
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">&copy; 2026 InFo Printing Station. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
