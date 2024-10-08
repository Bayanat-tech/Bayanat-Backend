import { Request } from "express";

export interface GenerateTokenInterface {
  username: string;
  loginid: string;
  email_id: string;
}
export interface RowData {
  COMPANY_CODE: string;
  APP_CODE: string;
  SERIAL_NO: number;
  LEVEL1?: string;
  LEVEL2?: string;
  LEVEL3?: string;
  URL_PATH?: string | null;
  POSITION: number;
  USERID: string;
  CREATE_USER: string;
  CREATE_DATE: string | null;
}

export interface TreeNode {
  id: string;
  title: string;
  type: "collapse" | "item";
  icon: string;
  url_path?: string | null;
  children?: TreeNode[];
}
export type TLogin = { email: string; password: string };
export interface ComparePasswordInterface {
  password: string;
  hashedPassword: string;
}

export interface RequestWithUser extends Request {
  user?: any;
  query: any;
}
export interface TCreatedORUpdatedBy {
  loginid: string;
  username: string;
}
