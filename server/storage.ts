import { type User, type InsertUser, type InsertContact, type ContactInquiry, type InsertEnrollment, type Enrollment } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(contact: InsertContact): Promise<ContactInquiry>;
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, ContactInquiry>;
  private enrollments: Map<string, Enrollment>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.enrollments = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(contact: InsertContact): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = { ...contact, id, createdAt: new Date(), phone: contact.phone ?? null };
    this.contacts.set(id, inquiry);
    return inquiry;
  }

  async createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment> {
    const id = randomUUID();
    const enroll: Enrollment = { ...enrollment, id, createdAt: new Date(), phone: enrollment.phone ?? null };
    this.enrollments.set(id, enroll);
    return enroll;
  }
}

export const storage = new MemStorage();
