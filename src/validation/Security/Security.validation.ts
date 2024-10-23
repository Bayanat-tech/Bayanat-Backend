import Joi from "joi";

import { IFlowmaster } from "../../interfaces/Security/Security.interfae";

import { IRolemaster } from "../../interfaces/Security/Security.interfae";

import { ISecmaster } from "../../interfaces/Security/Security.interfae";

import { ISecmodule } from "../../interfaces/Security/Security.interfae";

export const flowmasterSchema = (data: IFlowmaster) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    flow_code: Joi.string().required(),
    flow_description: Joi.string().required(),
  });
  return schema.validate(data);
};
export const rolemasterSchema = (data: IRolemaster) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    role_id: Joi.number().integer(), // No longer required
    role_desc: Joi.string().required(),
    remarks: Joi.string(),
  });
  return schema.validate(data);
};

export const secmasterSchema = (data: ISecmaster) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    id: Joi.number().integer(), // No longer required
    username: Joi.string().required(),
    userpass: Joi.string(),
    contact_no: Joi.string(),
    email_id: Joi.string(),
  });
  return schema.validate(data);
};

export const secmoduleSchema = (data: ISecmodule) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    app_code: Joi.string().required(), // No longer required
    serial_no: Joi.number().integer(),
    level1: Joi.string(),
    level2: Joi.string(),
    level3: Joi.string(),
    position: Joi.string(),
    url_path: Joi.string(),
  });
  return schema.validate(data);
};
