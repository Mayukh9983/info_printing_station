import { Router, Request, Response } from "express";
import multer from "multer";
import * as db from "./db";
import { uploadFile } from "./uploadHandler";

const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } });

// File upload endpoint
router.post("/api/upload", upload.single("file"), async (req: Request & { file?: Express.Multer.File }, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file provided" });
    }

    const { fileKey, fileUrl } = await uploadFile(
      req.file.buffer,
      req.file.originalname,
      req.file.mimetype
    );

    res.json({ fileKey, fileUrl, fileName: req.file.originalname });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed" });
  }
});

// Order creation endpoint
router.post("/api/create-order", async (req: Request, res: Response) => {
  try {
    const {
      customerName,
      customerPhone,
      customerEmail,
      customerAddress,
      fileUrl,
      fileKey,
      fileName,
      pages,
      copies,
      paperType,
      paperSize,
      printColor,
      printingSides,
      bindingOption,
      coverOption,
      totalCost,
    } = req.body;

    // Validate required fields
    if (!customerName || !customerPhone || !totalCost) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Get or create customer
    const customer = await db.getOrCreateCustomer(
      customerName,
      customerPhone,
      customerEmail,
      customerAddress
    );

    // Generate unique order ID
    const orderId = `InFO/${new Date().getFullYear()}-${new Date().getFullYear() + 1}/${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`;

    // Create order
    const orderData = {
      customerId: customer.id,
      orderId,
      fileUrl: fileUrl || null,
      fileKey: fileKey || null,
      fileName: fileName || null,
      pages,
      copies,
      paperType,
      paperSize,
      printColor,
      printingSides,
      bindingOption,
      coverOption,
      pricePerPage: Math.round((totalCost / (pages * copies)) * 100) / 100,
      totalCost: Math.round(totalCost * 100), // Store in paise
      bindingCost: bindingOption === "Spiral" ? 5000 : bindingOption === "Hardcover" ? 10000 : 0,
      coverCost: coverOption === "Clear Plastic" ? 2000 : coverOption === "Color Cardstock" ? 5000 : 0,
      status: "Pending" as any,
      paymentStatus: "Due",
    };

    await db.createOrder(orderData);

    // Send notification to owner (placeholder for now)
    console.log(`New order created: ${orderId} for ${customerName}`);

    res.json({ orderId, success: true });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ error: "Order creation failed" });
  }
});

export default router;
