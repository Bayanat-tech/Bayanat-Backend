import { ObjectCannedACL } from "@aws-sdk/client-s3";
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
export interface UploadToS3ObjectInterface {
  Bucket: string;
  Key: string;
  Body: any;
  ACL: ObjectCannedACL;
  ContentType: string;
}
export interface IFiles {
  company_code: string;
  request_number: string;
  sr_no: number;
  file_name: string;
  extensions: string;
  org_file_name: string;
  aws_file_locn: string;
  flow_level: number;
  modules: string;
  updated_at: Date;
  updated_by: string;
  created_by: string;
  created_at: Date;
}
