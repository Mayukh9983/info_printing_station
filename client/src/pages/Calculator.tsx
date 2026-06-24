import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Calculator() {
  const [pages, setPages] = useState(10);
  const [copies, setCopies] = useState(1);
  const [paperType, setPaperType] = useState("75GSM");
  const [paperSize, setPaperSize] = useState("A4");
  const [printColor, setPrintColor] = useState("B&W");
  const [printingSides, setPrintingSides] = useState("Both");
  const [bindingOption, setBindingOption] = useState("No");
  const [coverOption, setCoverOption] = useState("No");
  const [showBreakdown, setShowBreakdown] = useState(false);

  const getPricePerPage = () => {
    if (printColor === "B&W") {
      return printingSides === "Both" ? 200 : 300;
    } else {
      return printingSides === "Both" ? 1200 : 1500;
    }
  };

  const getBindingCost = () => {
    switch (bindingOption) {
      case "Spiral":
        return 5000;
      case "Hardcover":
        return 10000;
      default:
        return 0;
    }
  };

  const getCoverCost = () => {
    switch (coverOption) {
      case "Clear Plastic":
        return 2000;
      case "Color Cardstock":
        return 5000;
      default:
        return 0;
    }
  };

  const pricePerPage = getPricePerPage();
  const totalPages = pages * copies;
  const printingCost = totalPages * pricePerPage;
  const bindingCost = getBindingCost();
  const coverCost = getCoverCost();
  const totalCost = printingCost + bindingCost + coverCost;

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
              <a className="text-blue-600 font-medium">Calculator</a>
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

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Price Calculator</h1>
          <p className="text-lg text-gray-700">
            Calculate your printing cost instantly
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Input Fields */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Printing Details</h2>

                {/* Pages */}
                <div>
                  <Label htmlFor="pages" className="text-gray-900 font-medium">Number of Pages</Label>
                  <Input
                    id="pages"
                    type="number"
                    min="1"
                    value={pages}
                    onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
                    className="mt-2"
                  />
                </div>

                {/* Copies */}
                <div>
                  <Label htmlFor="copies" className="text-gray-900 font-medium">Number of Copies</Label>
                  <Input
                    id="copies"
                    type="number"
                    min="1"
                    value={copies}
                    onChange={(e) => setCopies(Math.max(1, parseInt(e.target.value) || 1))}
                    className="mt-2"
                  />
                </div>

                {/* Paper Type */}
                <div>
                  <Label htmlFor="paperType" className="text-gray-900 font-medium">Paper Type</Label>
                  <Select value={paperType} onValueChange={setPaperType}>
                    <SelectTrigger id="paperType" className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="75GSM">75GSM Normal Paper</SelectItem>
                      <SelectItem value="Glossy">Glossy Paper</SelectItem>
                      <SelectItem value="Photo">Photo Paper</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Paper Size */}
                <div>
                  <Label htmlFor="paperSize" className="text-gray-900 font-medium">Paper Size</Label>
                  <Select value={paperSize} onValueChange={setPaperSize}>
                    <SelectTrigger id="paperSize" className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="A4">A4</SelectItem>
                      <SelectItem value="A3">A3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Print Color */}
                <div>
                  <Label htmlFor="printColor" className="text-gray-900 font-medium">Print Color</Label>
                  <Select value={printColor} onValueChange={setPrintColor}>
                    <SelectTrigger id="printColor" className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="B&W">Black & White</SelectItem>
                      <SelectItem value="Color">Color</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Printing Sides */}
                <div>
                  <Label htmlFor="printingSides" className="text-gray-900 font-medium">Printing Sides</Label>
                  <Select value={printingSides} onValueChange={setPrintingSides}>
                    <SelectTrigger id="printingSides" className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Single">Single Side Printing</SelectItem>
                      <SelectItem value="Both">Both Side Printing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Binding Option */}
                <div>
                  <Label htmlFor="bindingOption" className="text-gray-900 font-medium">Binding Option</Label>
                  <Select value={bindingOption} onValueChange={setBindingOption}>
                    <SelectTrigger id="bindingOption" className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="No">No Binding</SelectItem>
                      <SelectItem value="Spiral">Spiral Binding (₹50)</SelectItem>
                      <SelectItem value="Hardcover">Hardcover (₹100)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Cover Option */}
                <div>
                  <Label htmlFor="coverOption" className="text-gray-900 font-medium">Cover Option</Label>
                  <Select value={coverOption} onValueChange={setCoverOption}>
                    <SelectTrigger id="coverOption" className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="No">No Cover</SelectItem>
                      <SelectItem value="Clear Plastic">Clear Plastic (₹20)</SelectItem>
                      <SelectItem value="Color Cardstock">Color Cardstock (₹50)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={() => setShowBreakdown(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-8"
                  size="lg"
                >
                  Calculate Price
                </Button>
              </div>

              {/* Cost Breakdown */}
              {showBreakdown && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Breakdown</h2>
                  <Card className="p-6 bg-blue-50 border-2 border-blue-200">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-4 border-b border-blue-300">
                        <span className="text-gray-700">Printing Charge Per Page:</span>
                        <span className="font-bold text-gray-900">₹{(pricePerPage / 100).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-blue-300">
                        <span className="text-gray-700">Total Pages ({pages} × {copies}):</span>
                        <span className="font-bold text-gray-900">{totalPages}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-blue-300">
                        <span className="text-gray-700">Printing Cost:</span>
                        <span className="font-bold text-gray-900">₹{(printingCost / 100).toFixed(2)}</span>
                      </div>
                      {bindingCost > 0 && (
                        <div className="flex justify-between items-center pb-4 border-b border-blue-300">
                          <span className="text-gray-700">Binding Cost:</span>
                          <span className="font-bold text-gray-900">₹{(bindingCost / 100).toFixed(2)}</span>
                        </div>
                      )}
                      {coverCost > 0 && (
                        <div className="flex justify-between items-center pb-4 border-b border-blue-300">
                          <span className="text-gray-700">Cover Cost:</span>
                          <span className="font-bold text-gray-900">₹{(coverCost / 100).toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center pt-4 bg-white p-4 rounded-lg">
                        <span className="text-lg font-bold text-gray-900">Total Cost:</span>
                        <span className="text-2xl font-bold text-blue-600">₹{(totalCost / 100).toFixed(2)}</span>
                      </div>
                    </div>
                  </Card>
                  <Link href="/upload">
                    <a>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        size="lg"
                      >
                        Proceed to Upload Files
                      </Button>
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </Card>
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
                <li><Link href="/"><a className="hover:text-white">Home</a></Link></li>
                <li><Link href="/services"><a className="hover:text-white">Services</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-white">Contact</a></Link></li>
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
