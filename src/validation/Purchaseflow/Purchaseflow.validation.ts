import Joi from "joi";
import { ICostmaster, IProjectmaster, IItemtmaster } from "../../interfaces/Purchaseflow/Purucahseflow.interface";

export const costmasterSchema = (data: ICostmaster) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    cost_code: Joi.string().required(), 
    cost_name: Joi.string().required()
    });
  return schema.validate(data);
};
export const projectmasterSchema = (data: IProjectmaster) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    project_code: Joi.string().required(), 
    project_name: Joi.string().required(),
    prno_pre_fix: Joi.string().required(),
    flag_proj_department: Joi.string().required()
    });
  return schema.validate(data);
};
export const itemmasterSchema = (data: IItemtmaster) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    item_code: Joi.string().required(), 
    item_desp: Joi.string().required(),
    });
  return schema.validate(data);
};

