import { Request } from "express";
import { UserAttribute } from "./user.type";

export interface RequestWithUser extends Request {
  user?: any;
  query: any;
}
