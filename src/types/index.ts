import { Types } from "mongoose";

export interface Address {
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface User {
  _id: Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  department: string;
  role: string;
  jobTitle: string;
  experience: {
    yearsInIndustry: number;
    expertise: string[];
    certifications: string[];
  };
  preferences: {
    language: string;
    timezone: string;
    communicationChannel: "email" | "phone" | "both";
  };
  demographics: {
    ageRange: string;
    gender: string;
    education: string;
  };
  workHistory: {
    currentPosition: string;
    previousPositions: string[];
    industrySpecialization: string[];
  };
  status: "active" | "inactive" | "pending";
  participation: {
    surveysCompleted: number;
    lastResponseDate: Date | null;
    responseRate: number;
  };
  address: Address;
  joinedAt: Date;
  lastActive: Date;
  metadata: Record<string, unknown>;
}

export interface Manufacturer {
  _id: Types.ObjectId;
  name: string;
  industry: string;
  userIds: Types.ObjectId[];
  location: Address;
  contactPerson: {
    name: string;
    email: string;
    phone: string;
  };
}
