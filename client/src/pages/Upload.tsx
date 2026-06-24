import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload as UploadIcon, CheckCircle, AlertCircle } from "lucide-react";

type UploadStatus = "idle" | "uploading" | "success" | "error";

export default function Upload() {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState(10);
  const [copies, setCopies] = useState(1);
  const [paperType, setPaperType] = useState("75GSM");
  const [paperSize, setPaperSize] = useState("A4");
  const [printColor, setPrintColor] = useState("B&W");
  const [printingSides, setPrintingSides] = useState("Both");
  const [bindingOption, setBindingOption] = useState("No");
  const [coverOption, setCoverOption] = useState("No");
  const [totalCost, setTotalCost] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle");
  const [orderId, setOrderId] = useState("");

  const calculateCost = () => {
    const pricePerPage = printColor === "B&W" ? (printingSides === "Both" ? 2 : 3) : (printingSides === "Both" ? 12 : 15);
    const printingCost = pages * copies * pricePerPage;
    const bindingCost = bindingOption === "Spiral" ? 50 : bindingOption === "Hardcover" ? 100 : 0;
    const coverCost = coverOption === "Clear Plastic" ? 20 : coverOption === "Color Cardstock" ? 50 : 0;
    const total = printingCost + bindingCost + coverCost;
    setTotalCost(total);
    return total;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
      if (validTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
      } else {
        alert("Please upload a PDF or image file (JPEG, PNG)");
      }
    }
  };

  const handleUpload = async () => {
    if (!file || !customerName || !customerPhone) {
      alert("Please fill in all required fields and select a file");
      return;
    }

    setUploadStatus("uploading");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const { fileUrl, fileKey } = await response.json();
      const cost = calculateCost();

      const orderResponse = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          customerPhone,
          customerEmail,
          customerAddress,
          fileUrl,
          fileKey,
          fileName: file.name,
          pages,
          copies,
          paperType,
          paperSize,
          printColor,
          printingSides,
          bindingOption,
          coverOption,
          totalCost: cost,
        }),
      });

      if (!orderResponse.ok) throw new Error("Order creation failed");

      const { orderId: newOrderId } = await orderResponse.json();
      setOrderId(newOrderId);
      setUploadStatus("success");
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus("error");
    }
  };

  const whatsappMessage = `Hello! I would like to place an order.%0AOrder ID: ${orderId}%0ATotal Cost: ₹${totalCost}%0ACustomer: ${customerName}%0APhone: ${customerPhone}`;
  const whatsappLink = `https://wa.me/919007072869?text=${whatsappMessage}`;

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
            <Link href="/upload" className="text-blue-600 font-medium">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Upload Your Files</h1>
          <p className="text-lg text-gray-700">
            Upload your documents and place your order
          </p>
        </div>
      </section>

      {/* Upload Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {uploadStatus === "success" ? (
            <Card className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Created Successfully!</h2>
              <p className="text-gray-700 mb-4">Order ID: <span className="font-bold">{orderId}</span></p>
              <p className="text-gray-700 mb-6">Total Cost: <span className="text-2xl font-bold text-blue-600">₹{totalCost}</span></p>
              <p className="text-gray-600 mb-8">Please proceed to WhatsApp to confirm your order</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-white mb-4">
                  Confirm Order on WhatsApp
                </Button>
              </a>
              <Link href="/">
                <a>
                  <Button variant="outline" className="w-full">
                    Back to Home
                  </Button>
                </a>
              </Link>
            </Card>
          ) : (
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Customer Info */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h2>

                  <div>
                    <Label htmlFor="name" className="text-gray-900 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="mt-2"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-900 font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="mt-2"
                      placeholder="9007072869"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-900 font-medium">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="mt-2"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-gray-900 font-medium">Address</Label>
                    <Input
                      id="address"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="mt-2"
                      placeholder="Your address"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <Label htmlFor="file" className="text-gray-900 font-medium">Upload File (PDF/Image) *</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                      <UploadIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        id="file"
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      <label htmlFor="file" className="cursor-pointer">
                        <p className="text-gray-700 font-medium">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-500">PDF or Image (JPEG, PNG)</p>
                        {file && <p className="text-green-600 font-medium mt-2">✓ {file.name}</p>}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                  <Card className="p-6 bg-blue-50 border-2 border-blue-200">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Pages:</span>
                        <span className="font-bold text-gray-900">{pages}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Copies:</span>
                        <span className="font-bold text-gray-900">{copies}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Paper Type:</span>
                        <span className="font-bold text-gray-900">{paperType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Paper Size:</span>
                        <span className="font-bold text-gray-900">{paperSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Print Color:</span>
                        <span className="font-bold text-gray-900">{printColor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Printing Sides:</span>
                        <span className="font-bold text-gray-900">{printingSides}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Binding:</span>
                        <span className="font-bold text-gray-900">{bindingOption}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Cover:</span>
                        <span className="font-bold text-gray-900">{coverOption}</span>
                      </div>
                      <div className="border-t pt-4 mt-4 flex justify-between">
                        <span className="text-lg font-bold text-gray-900">Estimated Total:</span>
                        <span className="text-2xl font-bold text-blue-600">₹{totalCost}</span>
                      </div>
                    </div>
                  </Card>

                  <Button
                    onClick={handleUpload}
                    disabled={uploadStatus === "uploading"}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    {uploadStatus === "uploading" ? "Uploading..." : "Upload & Create Order"}
                  </Button>

                  {uploadStatus === "error" && (
                    <div className="flex items-center gap-2 text-red-600">
                      <AlertCircle className="w-5 h-5" />
                      <span>Upload failed. Please try again.</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          )}
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
