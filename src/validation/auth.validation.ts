import Joi from "joi";
import { TLogin } from "../interfaces/login.type";

export const loginSchema = (data: TLogin) => {
  const schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};
