import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FileText, Zap, TrendingDown, Truck } from "lucide-react";

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
  const [showBreakdown, setShowBreakdown] = useState(false);

  const calculateCost = () => {
    const pricePerPage = printColor === "B&W" ? (printingSides === "Both" ? 2 : 3) : (printingSides === "Both" ? 12 : 15);
    const printingCost = pages * copies * pricePerPage;
    const bindingCost = bindingOption === "Spiral" ? 50 : bindingOption === "Hardcover" ? 100 : 0;
    const coverCost = coverOption === "Clear Plastic" ? 20 : coverOption === "Color Cardstock" ? 50 : 0;
    return printingCost + bindingCost + coverCost;
  };

  const totalCost = calculateCost();
  const pricePerPage = printColor === "B&W" ? (printingSides === "Both" ? 2 : 3) : (printingSides === "Both" ? 12 : 15);
  const printingCost = pages * copies * pricePerPage;
  const bindingCost = bindingOption === "Spiral" ? 50 : bindingOption === "Hardcover" ? 100 : 0;
  const coverCost = coverOption === "Clear Plastic" ? 20 : coverOption === "Color Cardstock" ? 50 : 0;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
            <Link href="/calculator" className="text-blue-600 font-medium">
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

      {/* Main Content */}
      <section className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="inline-block mb-4">
              <div className="bg-blue-100 rounded-full px-4 py-2 border border-blue-200">
                <p className="text-sm font-semibold text-blue-600">💰 Instant Price Calculator</p>
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Calculate Your Order</h1>
            <p className="text-xl text-gray-600">Get an instant quote for your printing needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-xl border-0">
                {/* Dark Header Section */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-8 rounded-2xl mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm font-bold text-blue-300 mb-2">PRODUCT TYPE</p>
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
                      <p className="text-sm font-bold text-blue-300 mb-2">PRINT TYPE</p>
                      <Select value={printColor} onValueChange={setPrintColor}>
                        <SelectTrigger className="bg-blue-800 border-blue-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="B&W">B&W Print</SelectItem>
                          <SelectItem value="Color">Color Print</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-blue-300 mb-2">PAPER SIZE</p>
                      <Select value={paperSize} onValueChange={setPaperSize}>
                        <SelectTrigger className="bg-blue-800 border-blue-600 text-white">
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
                </div>

                {/* Form Fields */}
                <div className="space-y-8">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                      <Label className="text-sm font-bold text-gray-700 mb-2 block">Pages</Label>
                      <Input
                        type="number"
                        value={pages}
                        onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
                        className="text-center text-2xl font-bold border-2 border-gray-300 focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-bold text-gray-700 mb-2 block">Copies</Label>
                      <Input
                        type="number"
                        value={copies}
                        onChange={(e) => setCopies(Math.max(1, parseInt(e.target.value) || 1))}
                        className="text-center text-2xl font-bold border-2 border-gray-300 focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <Label className="text-sm font-bold text-gray-700 mb-2 block">Sides</Label>
                      <Select value={printingSides} onValueChange={setPrintingSides}>
                        <SelectTrigger className="border-2 border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Single">Single Side</SelectItem>
                          <SelectItem value="Both">Both Sides</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-bold text-gray-700 mb-2 block">Binding</Label>
                      <Select value={bindingOption} onValueChange={setBindingOption}>
                        <SelectTrigger className="border-2 border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="No">No Binding</SelectItem>
                          <SelectItem value="Spiral">Spiral</SelectItem>
                          <SelectItem value="Hardcover">Hardcover</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm font-bold text-gray-700 mb-2 block">Cover</Label>
                      <Select value={coverOption} onValueChange={setCoverOption}>
                        <SelectTrigger className="border-2 border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="No">No Cover</SelectItem>
                          <SelectItem value="Clear Plastic">Clear Plastic</SelectItem>
                          <SelectItem value="Color Cardstock">Color Cardstock</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-bold text-gray-700 mb-2 block">Quality</Label>
                      <Select value={paperType} onValueChange={setPaperType}>
                        <SelectTrigger className="border-2 border-gray-300">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="75GSM">70GSM Normal</SelectItem>
                          <SelectItem value="100GSM">100GSM Premium</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Delivery Method */}
                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-2xl p-6">
                    <Label className="text-sm font-bold text-gray-700 mb-4 block flex items-center gap-2">
                      <Truck className="w-5 h-5 text-cyan-600" />
                      Delivery Method
                    </Label>
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
                    onClick={() => setShowBreakdown(true)}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-2xl text-white font-bold py-3 text-lg transition-all transform hover:scale-105"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Calculate Price
                  </Button>
                </div>
              </Card>
            </div>

            {/* Cost Breakdown Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Cost Breakdown</h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-700">Printing ({pages} × {copies})</span>
                      <span className="font-semibold text-gray-900">₹{printingCost}</span>
                    </div>

                    {bindingCost > 0 && (
                      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <span className="text-gray-700">Binding ({bindingOption})</span>
                        <span className="font-semibold text-gray-900">₹{bindingCost}</span>
                      </div>
                    )}

                    {coverCost > 0 && (
                      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                        <span className="text-gray-700">Cover ({coverOption})</span>
                        <span className="font-semibold text-gray-900">₹{coverCost}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-4">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        ₹{totalCost}
                      </span>
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <TrendingDown className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-green-900">Free Delivery!</p>
                        <p className="text-xs text-green-700">Orders over ₹199 in Duttapukur</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/upload">
                    <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-2xl text-white font-bold py-3 text-lg transition-all">
                      <FileText className="w-5 h-5 mr-2" />
                      Proceed to Upload
                    </Button>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">InFo Printing Station</h3>
              <p className="text-sm">Your trusted printing partner</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
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
