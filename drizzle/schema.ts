import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const customers = mysqlTable("customers", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  email: varchar("email", { length: 320 }),
  address: text("address"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Customer = typeof customers.$inferSelect;
export type InsertCustomer = typeof customers.$inferInsert;

export const orders = mysqlTable("orders", {
  id: int("id").autoincrement().primaryKey(),
  orderId: varchar("orderId", { length: 50 }).notNull().unique(), // e.g., InFO/2026-27/001
  customerId: int("customerId").notNull(),
  fileUrl: varchar("fileUrl", { length: 500 }),
  fileKey: varchar("fileKey", { length: 500 }),
  fileName: varchar("fileName", { length: 255 }),
  pages: int("pages").notNull(),
  copies: int("copies").notNull(),
  paperType: varchar("paperType", { length: 50 }).notNull(), // 75GSM, Glossy, Photo
  paperSize: varchar("paperSize", { length: 10 }).notNull(), // A4, A3
  printColor: varchar("printColor", { length: 20 }).notNull(), // B&W, Color
  printingSides: varchar("printingSides", { length: 20 }).notNull(), // Single, Both
  bindingOption: varchar("bindingOption", { length: 50 }).notNull(), // No, Spiral, Hardcover
  coverOption: varchar("coverOption", { length: 50 }).notNull(), // No, Clear Plastic, Color Cardstock
  pricePerPage: int("pricePerPage").notNull(), // in paise
  totalCost: int("totalCost").notNull(), // in paise
  coverCost: int("coverCost").default(0).notNull(),
  status: mysqlEnum("status", ["Pending", "Printing", "Ready for Pickup", "Out for Delivery", "Delivered"]).default("Pending").notNull(),
  paymentMethod: varchar("paymentMethod", { length: 20 }), // UPI, Cash
  paymentStatus: varchar("paymentStatus", { length: 20 }).default("Due").notNull(), // Due, Paid
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Order = typeof orders.$inferSelect;
export type InsertOrder = typeof orders.$inferInsert;

export const pricingConfig = mysqlTable("pricingConfig", {
  id: int("id").autoincrement().primaryKey(),
  printType: varchar("printType", { length: 50 }).notNull(), // B&W_XEROX, B&W_PRINT, COLOR_PRINT
  printingSides: varchar("printingSides", { length: 20 }).notNull(), // Single, Both
  pricePerPage: int("pricePerPage").notNull(), // in paise (e.g., 200 = ₹2)
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PricingConfig = typeof pricingConfig.$inferSelect;
export type InsertPricingConfig = typeof pricingConfig.$inferInsert;

export const files = mysqlTable("files", {
  id: int("id").autoincrement().primaryKey(),
  orderId: int("orderId").notNull(), // Foreign key to orders table
  fileName: varchar("fileName", { length: 255 }).notNull(),
  fileUrl: varchar("fileUrl", { length: 500 }).notNull(), // S3 URL
  fileKey: varchar("fileKey", { length: 500 }).notNull(), // S3 key for retrieval
  fileSize: int("fileSize").notNull(), // in bytes
  mimeType: varchar("mimeType", { length: 50 }).notNull(), // application/pdf, image/jpeg, etc.
  uploadedBy: varchar("uploadedBy", { length: 255 }), // customer name or email
  uploadedAt: timestamp("uploadedAt").defaultNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type File = typeof files.$inferSelect;
export type InsertFile = typeof files.$inferInsert;
