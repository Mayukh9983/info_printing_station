import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Phone, MessageCircle, Mail, MapPin, QrCode } from "lucide-react";

export default function Contact() {
  const phoneNumber = "9007072869";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const emailAddress = "infoprintingstationdtk@gmail.com";
  const address = "Nebadhai, Mannapara, Duttapukur";

  return (
    <div className="min-h-screen flex flex-col">
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
            <Link href="/contact" className="text-blue-600 font-medium">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700">
            Get in touch with InFo Printing Station. We are here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Phone */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Phone</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg font-medium">{phoneNumber}</p>
              <p className="text-gray-600 mb-6">Call us during business hours for quick assistance</p>
              <a href={`tel:${phoneNumber}`}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Call Now
                </Button>
              </a>
            </Card>

            {/* WhatsApp */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">WhatsApp</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg font-medium">{phoneNumber}</p>
              <p className="text-gray-600 mb-6">Send us a message on WhatsApp for order updates</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-white w-full">
                  Message on WhatsApp
                </Button>
              </a>
            </Card>

            {/* Email */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg font-medium">{emailAddress}</p>
              <p className="text-gray-600 mb-6">Email us for bulk orders and inquiries</p>
              <a href={`mailto:${emailAddress}`}>
                <Button variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                  Send Email
                </Button>
              </a>
            </Card>

            {/* Address */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Address</h3>
              </div>
              <p className="text-gray-700 mb-4 text-lg font-medium">{address}</p>
              <p className="text-gray-600 mb-6">Visit us in person for immediate service</p>
              <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                Get Directions
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Instructions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* UPI */}
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                  <QrCode className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">UPI Payment</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Quick and secure payment via UPI. Scan the QR code or use UPI ID:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6 text-center">
                <p className="text-gray-900 font-mono text-lg font-bold">infoprintingstation@upi</p>
              </div>
              <p className="text-sm text-gray-600">
                After payment, share the transaction receipt with us via WhatsApp
              </p>
            </Card>

            {/* Cash on Delivery */}
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Cash Payment</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Pay in cash when you pick up or receive your order.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-gray-900 font-medium">No extra charges for cash payment</p>
              </div>
              <p className="text-sm text-gray-600">
                Contact us at 9007072869 to confirm cash payment option
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Hours of Operation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Hours of Operation</h2>
          <Card className="p-8 max-w-2xl">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">Monday - Friday:</span>
                <span className="text-gray-700">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">Saturday:</span>
                <span className="text-gray-700">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">Sunday:</span>
                <span className="text-gray-700">Closed</span>
              </div>
              <div className="border-t pt-4 mt-4">
                <p className="text-sm text-gray-600">
                  For urgent orders outside these hours, please contact us via WhatsApp
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Place Your Order?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Use our price calculator and upload your files today
          </p>
          <Link href="/calculator">
            <a>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started
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
                <li><Link href="/"><a className="hover:text-white">Home</a></Link></li>
                <li><Link href="/services"><a className="hover:text-white">Services</a></Link></li>
                <li><Link href="/calculator"><a className="hover:text-white">Calculator</a></Link></li>
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
