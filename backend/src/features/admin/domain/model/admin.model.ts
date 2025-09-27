import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";

export interface IAdmin extends Document {
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  comparePassword: (candidate: string) => Promise<boolean>;
}

const adminSchema = new Schema<IAdmin>(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

adminSchema.methods.comparePassword = async function (candidate: string) {
  return await bcrypt.compare(candidate, this.password);
};

export default model<IAdmin>("Admin", adminSchema);
