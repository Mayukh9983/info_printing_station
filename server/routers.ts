import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  orders: router({
    create: publicProcedure
      .input(z.object({
        customerId: z.number(),
        fileUrl: z.string().optional(),
        fileKey: z.string().optional(),
        fileName: z.string().optional(),
        pages: z.number(),
        copies: z.number(),
        paperType: z.string(),
        paperSize: z.string(),
        printColor: z.string(),
        printingSides: z.string(),
        bindingOption: z.string(),
        coverOption: z.string(),
        pricePerPage: z.number(),
        totalCost: z.number(),
        coverCost: z.number(),
      }))
      .mutation(async ({ input }) => {
        const orderId = `InFO/${new Date().getFullYear()}-${new Date().getFullYear() + 1}/${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
        const order = await db.createOrder({
          ...input,
          orderId,
          status: "Pending" as any,
          paymentStatus: "Due",
        });
        return order;
      }),
    getAll: protectedProcedure.query(async () => {
      return await db.getAllOrders();
    }),
    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.string(),
      }))
      .mutation(async ({ input: { id, status } }) => {
        await db.updateOrderStatus(id, status);
        return { success: true };
      }),
    getRevenue: protectedProcedure.query(async () => {
      const total = await db.getDeliveredOrdersTotal();
      return { total: total / 100 };
    }),
  }),
});

export type AppRouter = typeof appRouter;
