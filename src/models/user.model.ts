import { Schema, model, models } from "mongoose";

const addressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  country: String,
  postalCode: String,
});

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: String,
  company: { type: String, required: true },
  department: String,
  role: String,
  jobTitle: String,
  experience: {
    yearsInIndustry: Number,
    expertise: [String],
    certifications: [String],
  },
  preferences: {
    language: String,
    timezone: String,
    communicationChannel: {
      type: String,
      enum: ["email", "phone", "both"],
      default: "email",
    },
  },
  demographics: {
    ageRange: String,
    gender: String,
    education: String,
  },
  workHistory: {
    currentPosition: String,
    previousPositions: [String],
    industrySpecialization: [String],
  },
  status: {
    type: String,
    enum: ["active", "inactive", "pending"],
    default: "pending",
  },
  participation: {
    surveysCompleted: { type: Number, default: 0 },
    lastResponseDate: Date,
    responseRate: { type: Number, default: 0 },
  },
  address: addressSchema,
  joinedAt: { type: Date, default: Date.now },
  lastActive: { type: Date, default: Date.now },
  metadata: Schema.Types.Mixed,
});

userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ company: 1 });
userSchema.index({ status: 1 });
userSchema.index({ "experience.expertise": 1 });
userSchema.index({ "workHistory.industrySpecialization": 1 });

export const User = models.User || model("User", userSchema);
