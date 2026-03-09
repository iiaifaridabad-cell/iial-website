import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertEnrollmentSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(data);
      res.json({ success: true, id: inquiry.id });
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({ error: "Validation failed", details: err.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  app.post("/api/enroll", async (req, res) => {
    try {
      const data = insertEnrollmentSchema.parse(req.body);
      const enrollment = await storage.createEnrollment(data);
      res.json({ success: true, id: enrollment.id });
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({ error: "Validation failed", details: err.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  return httpServer;
}
