import Joi from "joi";

import { IFlowmaster } from "../../interfaces/Security/Security.interfae";

import { IRolemaster } from "../../interfaces/Security/Security.interfae";





export const flowmasterSchema = (data: IFlowmaster) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    flow_code: Joi.string().required(),
    flow_description: Joi.string().required()
    });
  return schema.validate(data);
};
export const rolemasterSchema = (data: IRolemaster) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    role_id: Joi.number().integer(), // No longer required
    role_desc: Joi.string().required(),
    remarks: Joi.string()
    });
  return schema.validate(data);
};

