import adminModel, { IAdmin } from "../domain/model/admin.model";
import { CreateAdmin } from "../domain/contracts/create-admin";
import { AuthenticateAdmin } from "../domain/contracts/authenticate-admin";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export class AdminRepository implements CreateAdmin, AuthenticateAdmin {
  async create(params: CreateAdmin.Params): Promise<CreateAdmin.Result> {
    const exists = await adminModel.findOne({ email: params.email });
    if (exists) return { sucess: false, message: "Email already registered" };

    await adminModel.create({ email: params.email, password: params.password });

    return { sucess: true, message: "Admin created" };
  }

  async authenticate(
    params: AuthenticateAdmin.Params
  ): Promise<AuthenticateAdmin.Result> {
    const admin = (await adminModel.findOne({
      email: params.email,
    })) as IAdmin | null;
    if (!admin) return { sucess: false, message: "Invalid credentials" };

    const match = await admin.comparePassword(params.password);
    if (!match) return { sucess: false, message: "Invalid credentials" };

    const token = jwt.sign({ id: admin._id, email: admin.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return { sucess: true, token };
  }
}
