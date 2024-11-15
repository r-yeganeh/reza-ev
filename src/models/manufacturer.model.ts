import { Schema, model, models } from "mongoose";

const manufacturerSchema = new Schema({
  name: { type: String, required: true, unique: true },
  industry: { type: String, required: true },
  userIds: [{ type: Schema.Types.ObjectId, ref: "User" }],
  contactPerson: {
    name: String,
    email: String,
    phone: String,
  },
});

manufacturerSchema.index({ name: 1 }, { unique: true });
manufacturerSchema.index({ industry: 1 });

export const Manufacturer =
  models.Manufacturer || model("Manufacturer", manufacturerSchema);
