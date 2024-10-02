export type TLogin = { email: string; password: string };
export interface ComparePasswordInterface {
  password: string;
  hashedPassword: string;
}
