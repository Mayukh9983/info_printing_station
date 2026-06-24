import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Printer, Zap, Truck, FileText, Image, Copy } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-blue-600">InFo Printing Station</a>
          </Link>
          <div className="flex gap-6">
            <Link href="/services">
              <a className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            </Link>
            <Link href="/calculator">
              <a className="text-gray-700 hover:text-blue-600 font-medium">Calculator</a>
            </Link>
            <Link href="/upload">
              <a className="text-gray-700 hover:text-blue-600 font-medium">Upload</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </Link>
            <Link href="/admin">
              <a className="text-gray-700 hover:text-blue-600 font-medium">Admin</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Welcome to InFo Printing Station
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              High-quality printing, fast service, and affordable prices in Duttapukur
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/calculator">
                <a>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Calculate Price
                  </Button>
                </a>
              </Link>
              <Link href="/upload">
                <a>
                  <Button size="lg" variant="outline">
                    Upload Files
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Offers */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 border-2 border-green-500 bg-green-50">
              <div className="flex items-center gap-3 mb-2">
                <Truck className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-bold text-green-900">Free Delivery in Duttapukur</h3>
              </div>
              <p className="text-green-800">Free delivery over ₹199 in Duttapukur</p>
            </Card>
            <Card className="p-6 border-2 border-orange-500 bg-orange-50">
              <div className="flex items-center gap-3 mb-2">
                <Truck className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-bold text-orange-900">Free Delivery in Barasat</h3>
              </div>
              <p className="text-orange-800">Free delivery over ₹299 in Barasat Station Area</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Printing */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Student Printing</h3>
              <p className="text-gray-700 mb-4">
                Perfect for assignments, projects, and thesis printing. Fast turnaround and affordable rates.
              </p>
              <Link href="/services">
                <a className="text-blue-600 font-medium hover:text-blue-700">Learn more →</a>
              </Link>
            </Card>

            {/* Photo Printing */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Image className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Photo Printing</h3>
              <p className="text-gray-700 mb-4">
                High-quality photo prints on glossy and photo paper. Preserve your memories beautifully.
              </p>
              <Link href="/services">
                <a className="text-blue-600 font-medium hover:text-blue-700">Learn more →</a>
              </Link>
            </Card>

            {/* Bulk Xerox */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <Copy className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Bulk Xerox</h3>
              <p className="text-gray-700 mb-4">
                Large volume copying at competitive rates. Perfect for offices, schools, and organizations.
              </p>
              <Link href="/services">
                <a className="text-blue-600 font-medium hover:text-blue-700">Learn more →</a>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Printer className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">High Quality</h3>
              <p className="text-gray-700">Professional printing equipment ensures crisp, clear results every time.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Fast Service</h3>
              <p className="text-gray-700">Quick turnaround times without compromising on quality.</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Free Delivery</h3>
              <p className="text-gray-700">Complimentary delivery on orders over ₹199 in Duttapukur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Calculate your printing cost and upload your files today
          </p>
          <Link href="/calculator">
            <a>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Now
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">InFo Printing Station</h3>
              <p className="text-sm">Your trusted printing partner in Duttapukur</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services"><a className="hover:text-white">Services</a></Link></li>
                <li><Link href="/calculator"><a className="hover:text-white">Calculator</a></Link></li>
                <li><Link href="/upload"><a className="hover:text-white">Upload</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm">Phone: 9007072869</p>
              <p className="text-sm">Email: infoprintingstationdtk@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 InFo Printing Station. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
