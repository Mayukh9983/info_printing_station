import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Truck, FileText, Image, Copy, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            InFo Printing Station
          </Link>
          <div className="flex gap-6">
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/calculator" className="text-gray-700 hover:text-blue-600 font-medium">
              Calculator
            </Link>
            <Link href="/upload" className="text-gray-700 hover:text-blue-600 font-medium">
              Upload
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-blue-600 font-medium">
              Admin
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Dark Blue Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-12 rounded-3xl shadow-2xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-700 rounded-lg p-4">
                  <FileText className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-4">InFo Printing Station</h1>
              <p className="text-xl text-blue-100 mb-6">High-Quality Printing • Fast Service • Best Prices</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-blue-100">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Mannapara, Duttapukur</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>9007072869</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Printing Card */}
            <Card className="border-t-4 border-t-cyan-500 shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 rounded-lg p-4">
                    <FileText className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Student Printing</h3>
                <p className="text-center text-gray-600 mb-4">
                  Affordable printing for assignments and projects.
                </p>
                <p className="text-center text-lg font-semibold text-gray-900">
                  From ₹2/page for B&W.
                </p>
              </div>
            </Card>

            {/* Photo Printing Card */}
            <Card className="border-t-4 border-t-cyan-500 shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-purple-100 rounded-lg p-4">
                    <Image className="w-10 h-10 text-purple-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Photo Printing</h3>
                <p className="text-center text-gray-600 mb-4">
                  Professional photo prints on premium paper.
                </p>
                <p className="text-center text-lg font-semibold text-gray-900">
                  From ₹12/page in color.
                </p>
              </div>
            </Card>

            {/* Bulk Xerox Card */}
            <Card className="border-t-4 border-t-cyan-500 shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-orange-100 rounded-lg p-4">
                    <Copy className="w-10 h-10 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">Bulk Xerox</h3>
                <p className="text-center text-gray-600 mb-4">
                  Fast copying service for bulk orders.
                </p>
                <p className="text-center text-lg font-semibold text-gray-900">
                  B&W Xerox at ₹2/page.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Offers */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Free Delivery Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-green-500 bg-green-50">
              <div className="flex items-center gap-4 mb-4">
                <Truck className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-green-900">Free Delivery in Duttapukur</h3>
              </div>
              <p className="text-lg text-green-800">Free delivery over ₹199 in Duttapukur</p>
            </Card>
            <Card className="p-8 border-2 border-orange-500 bg-orange-50">
              <div className="flex items-center gap-4 mb-4">
                <Truck className="w-8 h-8 text-orange-600" />
                <h3 className="text-2xl font-bold text-orange-900">Free Delivery in Barasat</h3>
              </div>
              <p className="text-lg text-orange-800">Free delivery over ₹299 in Barasat Station Area</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Ready to Get Started?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculator">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Calculate Price
              </Button>
            </Link>
            <Link href="/upload">
              <Button size="lg" variant="outline" className="px-8">
                Upload Files
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">InFo Printing Station</h3>
              <p className="text-sm">Your trusted printing partner in Duttapukur</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
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
