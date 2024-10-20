import Joi from "joi";
import { ICostmaster, IProjectmaster } from "../../interfaces/Purchaseflow/Purucahseflow.interface";

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
    project_name: Joi.string().required()
    });
  return schema.validate(data);
};

