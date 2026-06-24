import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileText } from "lucide-react";

export default function Calculator() {
  const [pages, setPages] = useState(24);
  const [copies, setCopies] = useState(1);
  const [paperType, setPaperType] = useState("75GSM");
  const [paperSize, setPaperSize] = useState("A4");
  const [printColor, setPrintColor] = useState("B&W");
  const [printingSides, setPrintingSides] = useState("Both");
  const [bindingOption, setBindingOption] = useState("No");
  const [coverOption, setCoverOption] = useState("No");
  const [deliveryMethod, setDeliveryMethod] = useState("Store Pickup");
  const [totalCost, setTotalCost] = useState(0);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const calculateCost = () => {
    const pricePerPage = printColor === "B&W" ? (printingSides === "Both" ? 2 : 3) : (printingSides === "Both" ? 12 : 15);
    const printingCost = pages * copies * pricePerPage;
    const bindingCost = bindingOption === "Spiral" ? 50 : bindingOption === "Hardcover" ? 100 : 0;
    const coverCost = coverOption === "Clear Plastic" ? 20 : coverOption === "Color Cardstock" ? 50 : 0;
    const total = printingCost + bindingCost + coverCost;
    setTotalCost(total);
    setShowBreakdown(true);
  };

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
            <Link href="/calculator" className="text-blue-600 font-medium">
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

      {/* Main Content */}
      <section className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Dark Header Section */}
          <Card className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-2xl mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-sm font-bold text-blue-300 mb-2">PRICE CALCULATOR</h2>
                <h1 className="text-3xl font-bold">Select Product Type</h1>
              </div>
              <div>
                <p className="text-sm font-bold text-blue-300 mb-2">PRODUCT CATEGORIES</p>
                <Select value={paperType} onValueChange={setPaperType}>
                  <SelectTrigger className="bg-blue-800 border-blue-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="75GSM">Documents</SelectItem>
                    <SelectItem value="100GSM">Premium Paper</SelectItem>
                    <SelectItem value="Photo">Photo Paper</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <p className="text-sm font-bold text-blue-300 mb-2">SPECIFIC TYPE</p>
                <Select value={printColor} onValueChange={setPrintColor}>
                  <SelectTrigger className="bg-blue-800 border-blue-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="B&W">PDF Print</SelectItem>
                    <SelectItem value="Color">Word Document</SelectItem>
                    <SelectItem value="Color">Image Print</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Form Section */}
          <Card className="p-8 mb-8">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div>
                <Label className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="text-gray-400">#</span> PAGES
                </Label>
                <Input
                  type="number"
                  value={pages}
                  onChange={(e) => setPages(parseInt(e.target.value) || 1)}
                  className="text-center text-2xl font-bold border-gray-300"
                />
              </div>
              <div>
                <Label className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="text-gray-400">#</span> COPIES
                </Label>
                <Input
                  type="number"
                  value={copies}
                  onChange={(e) => setCopies(parseInt(e.target.value) || 1)}
                  className="text-center text-2xl font-bold border-gray-300"
                />
              </div>
              <div>
                <Label className="text-sm font-bold text-gray-700 mb-2">PAPER QUALITY</Label>
                <Select value={paperType} onValueChange={setPaperType}>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="75GSM">70GSM Normal</SelectItem>
                    <SelectItem value="100GSM">100GSM Premium</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-bold text-gray-700 mb-2">PAPER SIZE</Label>
                <Select value={paperSize} onValueChange={setPaperSize}>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A4">A4</SelectItem>
                    <SelectItem value="A3">A3</SelectItem>
                    <SelectItem value="Letter">Letter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <Label className="text-sm font-bold text-gray-700 mb-2">SIDES</Label>
                <Select value={printingSides} onValueChange={setPrintingSides}>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Single">Single Side</SelectItem>
                    <SelectItem value="Both">Both Sides</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-bold text-gray-700 mb-2">BINDING</Label>
                <Select value={bindingOption} onValueChange={setBindingOption}>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="No">No Binding</SelectItem>
                    <SelectItem value="Spiral">Spiral Binding</SelectItem>
                    <SelectItem value="Hardcover">Hardcover</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-sm font-bold text-gray-700 mb-2">COVER</Label>
                <Select value={coverOption} onValueChange={setCoverOption}>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="No">No Cover</SelectItem>
                    <SelectItem value="Clear Plastic">Clear Plastic</SelectItem>
                    <SelectItem value="Color Cardstock">Color Cardstock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Delivery Method */}
            <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-6 mb-8">
              <Label className="text-sm font-bold text-gray-700 mb-4 block">DELIVERY METHOD</Label>
              <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="Store Pickup" id="pickup" />
                    <Label htmlFor="pickup" className="font-semibold text-gray-900 cursor-pointer">
                      Store Pickup
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="Home Delivery" id="delivery" />
                    <Label htmlFor="delivery" className="font-semibold text-gray-900 cursor-pointer">
                      Home Delivery
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Calculate Button */}
            <Button
              onClick={calculateCost}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg"
            >
              Calculate Price
            </Button>
          </Card>

          {/* Cost Breakdown */}
          {showBreakdown && (
            <Card className="p-8 border-2 border-cyan-300 bg-cyan-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Breakdown</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-gray-700">Printing Cost:</span>
                  <span className="font-semibold">₹{(pages * copies * (printColor === "B&W" ? (printingSides === "Both" ? 2 : 3) : (printingSides === "Both" ? 12 : 15))).toFixed(2)}</span>
                </div>
                {bindingOption !== "No" && (
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-700">Binding ({bindingOption}):</span>
                    <span className="font-semibold">₹{(bindingOption === "Spiral" ? 50 : 100).toFixed(2)}</span>
                  </div>
                )}
                {coverOption !== "No" && (
                  <div className="flex justify-between text-lg">
                    <span className="text-gray-700">Cover ({coverOption}):</span>
                    <span className="font-semibold">₹{(coverOption === "Clear Plastic" ? 20 : 50).toFixed(2)}</span>
                  </div>
                )}
              </div>
              <div className="border-t-2 border-cyan-300 pt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">Total Cost:</span>
                <span className="text-3xl font-bold text-blue-600">₹{(totalCost / 100).toFixed(2)}</span>
              </div>
              <Link href="/upload">
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-lg">
                  Proceed to Upload Files
                </Button>
              </Link>
            </Card>
          )}
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
