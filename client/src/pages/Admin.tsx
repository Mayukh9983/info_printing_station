import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Eye, TrendingUp, Lock } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";

export default function Admin() {
  const { user, isAuthenticated, loading } = useAuth();
  const [adminPassword, setAdminPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [revenue, setRevenue] = useState(0);

  const ordersQuery = trpc.orders.getAll.useQuery(undefined, {
    enabled: isLoggedIn && isAuthenticated,
  });

  const revenueQuery = trpc.orders.getRevenue.useQuery(undefined, {
    enabled: isLoggedIn && isAuthenticated,
  });

  const updateStatusMutation = trpc.orders.updateStatus.useMutation();

  useEffect(() => {
    if (ordersQuery.data) {
      setOrders(ordersQuery.data);
    }
  }, [ordersQuery.data]);

  useEffect(() => {
    if (revenueQuery.data) {
      setRevenue(revenueQuery.data.total);
    }
  }, [revenueQuery.data]);

  const handleLogin = () => {
    if (adminPassword === "admin123") {
      setIsLoggedIn(true);
      setAdminPassword("");
    } else {
      alert("Invalid password");
    }
  };

  const handleStatusChange = async (orderId: number, newStatus: string) => {
    try {
      await updateStatusMutation.mutateAsync({ id: orderId, status: newStatus });
      ordersQuery.refetch();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleGenerateInvoice = (order: any) => {
    const invoiceHTML = `
      <html>
        <head>
          <title>Invoice ${order.orderId}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .header h1 { margin: 0; color: #1e40af; }
            .header p { margin: 5px 0; color: #666; }
            .section { margin-bottom: 20px; }
            .section-title { font-weight: bold; margin-bottom: 10px; border-bottom: 2px solid #1e40af; padding-bottom: 5px; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }
            th { background-color: #f0f0f0; font-weight: bold; }
            .total-row { font-weight: bold; background-color: #f0f0f0; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>InFo Printing Station</h1>
            <p>Nebadhai, Mannapara, Duttapukur</p>
            <p>Phone: 9007072869 | Email: infoprintingstationdtk@gmail.com</p>
          </div>

          <div class="section">
            <div class="section-title">INVOICE TO:</div>
            <p><strong>${order.customerName || "N/A"}</strong></p>
            <p>WhatsApp: ${order.customerPhone || "N/A"}</p>
            <p>Address: ${order.customerAddress || "N/A"}</p>
          </div>

          <div class="section">
            <div class="section-title">INVOICE DETAILS</div>
            <p>Date: ${new Date(order.createdAt).toLocaleDateString()}</p>
            <p>Invoice No: ${order.orderId}</p>
          </div>

          <table>
            <thead>
              <tr>
                <th>DESCRIPTION</th>
                <th>QTY</th>
                <th>PRICE</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${order.paperType} - ${order.paperSize} - ${order.printColor} (${order.printingSides})</td>
                <td>${order.pages * order.copies}</td>
                <td>Rs. ${(order.pricePerPage / 100).toFixed(2)} per page</td>
                <td>Rs. ${(order.totalCost / 100).toFixed(2)}</td>
              </tr>
              ${order.bindingOption !== "No" ? `<tr><td>Binding: ${order.bindingOption}</td><td>1</td><td>Rs. ${order.bindingOption === "Spiral" ? "50" : "100"}</td><td>Rs. ${order.bindingOption === "Spiral" ? "50" : "100"}</td></tr>` : ""}
              ${order.coverOption !== "No" ? `<tr><td>Cover: ${order.coverOption}</td><td>1</td><td>Rs. ${order.coverOption === "Clear Plastic" ? "20" : "50"}</td><td>Rs. ${order.coverOption === "Clear Plastic" ? "20" : "50"}</td></tr>` : ""}
            </tbody>
          </table>

          <div class="section">
            <table>
              <tr class="total-row">
                <td colspan="3">Total:</td>
                <td>Rs. ${(order.totalCost / 100).toFixed(2)}/-</td>
              </tr>
              <tr>
                <td colspan="3">Payment Method:</td>
                <td>${order.paymentMethod || "Pending"}</td>
              </tr>
              <tr>
                <td colspan="3">Payment Status:</td>
                <td>${order.paymentStatus}</td>
              </tr>
            </table>
          </div>

          <div class="footer">
            <p>GET "FREE" HOME DELIVERY ON ALL ORDERS OVER RS.199/-</p>
            <p>(CURRENTLY WITHIN DUTTAPUKUR)</p>
            <p style="margin-top: 20px;">Thank you for your business!</p>
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open("", "", "height=600,width=800");
    if (printWindow) {
      printWindow.document.write(invoiceHTML);
      printWindow.document.close();
      printWindow.print();
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-blue-600">InFo Printing Station</a>
            </Link>
          </div>
        </nav>

        <section className="flex-1 flex items-center justify-center bg-gray-50">
          <Card className="p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Login Required</h1>
            </div>
            <p className="text-gray-600 mb-6 text-center">
              Please log in with your Manus account to access the admin dashboard
            </p>
            <Link href="/">
              <a>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Go to Home
                </Button>
              </a>
            </Link>
          </Card>
        </section>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/">
              <a className="text-2xl font-bold text-blue-600">InFo Printing Station</a>
            </Link>
          </div>
        </nav>

        <section className="flex-1 flex items-center justify-center bg-gray-50">
          <Card className="p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="password" className="text-gray-900 font-medium">Admin Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="mt-2"
                  placeholder="Enter admin password"
                />
              </div>
              <Button
                onClick={handleLogin}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Login
              </Button>
            </div>
          </Card>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-blue-600">InFo Printing Station</a>
          </Link>
          <div className="flex gap-4">
            <span className="text-gray-700 font-medium">Admin: {user?.name}</span>
            <Button variant="outline" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Revenue Card */}
          <div className="mb-8">
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-700 text-sm font-medium">Total Revenue (Delivered Orders)</p>
                  <p className="text-3xl font-bold text-blue-600">₹{revenue.toFixed(2)}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Orders Table */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Orders</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-gray-500 py-8">
                        No orders yet
                      </TableCell>
                    </TableRow>
                  ) : (
                    orders.map((order: any) => (
                      <TableRow key={order.id}>
                        <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                        <TableCell className="font-bold text-blue-600">{order.orderId}</TableCell>
                        <TableCell>{order.customerName || "N/A"}</TableCell>
                        <TableCell>{order.customerPhone || "N/A"}</TableCell>
                        <TableCell>₹{(order.totalCost / 100).toFixed(2)}</TableCell>
                        <TableCell>
                          <Select
                            value={order.status}
                            onValueChange={(newStatus) => handleStatusChange(order.id, newStatus)}
                          >
                            <SelectTrigger className="w-40">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Pending">Pending</SelectItem>
                              <SelectItem value="Printing">Printing</SelectItem>
                              <SelectItem value="Ready for Pickup">Ready for Pickup</SelectItem>
                              <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
                              <SelectItem value="Delivered">Delivered</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            {order.fileUrl && (
                              <a href={order.fileUrl} target="_blank" rel="noopener noreferrer">
                                <Button size="sm" variant="outline">
                                  <Download className="w-4 h-4" />
                                </Button>
                              </a>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleGenerateInvoice(order)}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
