import Joi from "joi";

import * as Yup from "yup";
import {
  ICostmaster,
  IItemtmaster,
} from "../../interfaces/Purchaseflow/Purucahseflow.interface";
import { IProjectmaster } from "../../interfaces/Purchaseflow/Purucahseflow.interface";

export const costmasterSchema = (data: ICostmaster) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    cost_code: Joi.string().required(),
    cost_name: Joi.string().required(),
  });
  return schema.validate(data);
};

export const projectmasterSchema = (data: IProjectmaster) => {
  const schema = Joi.object().keys({
    project_code: Joi.string().optional().allow(null),
    project_name: Joi.string().optional().allow(null),
    company_code: Joi.string().optional().allow(null),
    div_code: Joi.string().required(),
    prno_pre_fix: Joi.string().required(),
    flag_proj_department: Joi.string().optional().allow(null),
    project_date_from: Joi.date().optional().allow(null),
    project_date_to: Joi.date().optional().allow(null),
    total_project_cost: Joi.number().required(),
    facility_mgr_name: Joi.string().required(),
    facility_mgr_email: Joi.string().email().required(),
    facility_mgr_phone: Joi.string()
      .required()
      .pattern(/^[0-9\s\-()+]+$/), // This regex allows digits, spaces, dashes, parentheses, and plus sign
    project_type: Joi.string().optional().allow(null),
    updated_at: Joi.date().optional().allow(null),
    updated_by: Joi.string().optional().allow(null),
    created_at: Joi.date().optional().allow(null),
    created_by: Joi.string().optional().allow(null),
  });

  return schema.validate(data, { abortEarly: false }); // Will log all validation errors, not just the first
};

export const itemmasterSchema = (data: IItemtmaster) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    item_code: Joi.string().required(),
    item_desp: Joi.string().required(),
  });
  return schema.validate(data);
};
