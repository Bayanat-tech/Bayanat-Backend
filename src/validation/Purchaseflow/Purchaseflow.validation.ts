import Joi from "joi";
import { ICostmaster } from "../../interfaces/Purchaseflow/Purucahseflow.interface";

export const costmasterSchema = (data: ICostmaster) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    cost_code: Joi.string().required(), 
    cost_name: Joi.string().required()
    });
  return schema.validate(data);
};
