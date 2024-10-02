import bcrypt from "bcrypt";
import { ComparePasswordInterface } from "../interfaces/login.type";
import { GenerateTokenInterface } from "../interfaces/cmmon.interfacte";
import jsonwebtoken from "jsonwebtoken";
import constants from "./constants";

export const comparePassword = async (args: ComparePasswordInterface) => {
  const { password, hashedPassword } = args;
  console.log(password, hashedPassword);

  const result = await bcrypt.compare(password, hashedPassword);

  return result;
};
export const generateToken = async (args: GenerateTokenInterface) => {
  const { username, email_id, loginid } = args;

  const token = jsonwebtoken.sign(
    {
      username,
      email_id,
      loginid,
    },
    constants.AUTHENTICATION.APP_SECRET,
    {
      expiresIn: "24h",
    }
  );
  return token;
};
