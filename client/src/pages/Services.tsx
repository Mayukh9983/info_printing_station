import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { FileText, Image, Copy, Check } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            InFo Printing Station
          </Link>
          <div className="flex gap-6">
            <Link href="/services" className="text-blue-600 font-medium">
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

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-700">
            We offer a wide range of printing services tailored to meet your needs
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Student Printing */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Student Printing</h2>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  Perfect for students who need to print assignments, projects, thesis, and study materials. We understand the importance of quality and affordability for students.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Fast turnaround on bulk printing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Affordable student rates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Multiple paper types available</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Binding and cover options</span>
                  </div>
                </div>
                <Link href="/calculator">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Calculate Price
                  </Button>
                </Link>
              </div>
              <Card className="p-8 bg-blue-50 border-2 border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4">What You Can Print:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Assignment papers and reports</li>
                  <li>• Project documentation</li>
                  <li>• Thesis and dissertations</li>
                  <li>• Study notes and handouts</li>
                  <li>• Presentation slides</li>
                  <li>• Certificates and awards</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Photo Printing */}
          <div className="mb-16 border-t pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Card className="p-8 bg-purple-50 border-2 border-purple-200 order-2 md:order-1">
                <h3 className="font-bold text-gray-900 mb-4">Paper Types:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Glossy Photo Paper</li>
                  <li>• Matte Photo Paper</li>
                  <li>• Premium Photo Paper</li>
                  <li>• Canvas Prints</li>
                  <li>• Poster Prints</li>
                  <li>• Custom Sizes Available</li>
                </ul>
              </Card>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                    <Image className="w-6 h-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Photo Printing</h2>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  Preserve your precious memories with our high-quality photo printing services. From family portraits to event photography, we ensure vibrant colors and sharp details.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Professional color accuracy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Multiple paper finishes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Custom sizes and formats</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Fast processing time</span>
                  </div>
                </div>
                <Link href="/calculator">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Calculate Price
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bulk Xerox */}
          <div className="border-t pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                    <Copy className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Bulk Xerox</h2>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  Need large volumes of copies? Our bulk xerox service is perfect for offices, schools, and organizations. Competitive rates and quick turnaround guaranteed.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Competitive bulk pricing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">High-speed copying</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Black & White and Color options</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Collating and binding available</span>
                  </div>
                </div>
                <Link href="/calculator">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Calculate Price
                  </Button>
                </Link>
              </div>
              <Card className="p-8 bg-green-50 border-2 border-green-200">
                <h3 className="font-bold text-gray-900 mb-4">Ideal For:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Office documents</li>
                  <li>• School materials</li>
                  <li>• Training handouts</li>
                  <li>• Meeting materials</li>
                  <li>• Promotional flyers</li>
                  <li>• Event programs</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Place Your Order?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Use our price calculator to get an instant quote and upload your files
          </p>
          <Link href="/calculator">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started
            </Button>
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
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/calculator" className="hover:text-white">Calculator</Link></li>
                <li><Link href="/upload" className="hover:text-white">Upload</Link></li>
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
