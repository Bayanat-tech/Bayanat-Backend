import Joi from "joi";
import { IIndustrysector } from "../../interfaces/wms/industrysector_wms.interface";
import { ICountry,IDepartment } from "../../interfaces/wms/gm_wms.interface";
import { IPickWave } from "../../interfaces/wms/pickwave_wms.interface";
//import { IDepartment } from "../../interfaces/wms/gm_wms.interface";




export const countrySchema = (data: ICountry) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    country_code: Joi.string().required(),
    country_name: Joi.string().required(),
    country_gcc: Joi.string().valid("Y", "N").required(),
    short_desc: Joi.string().allow(null),
    nationality: Joi.string().allow(null),
  });
  return schema.validate(data);
};
export const industrysectorSchema = (data: IIndustrysector) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    sector_code: Joi.string().required(),
    sector_name: Joi.string().required(),
    remarks: Joi.string().required()
      });
  return schema.validate(data);
};
export const pickwaveSchema = (data: IPickWave) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    wave_code: Joi.string().required(),
    wave_name: Joi.string().required()
   
      });
  return schema.validate(data);
};

export const departmentSchema = (data: IDepartment) => {
  const schema = Joi.object().keys({
    dept_code: Joi.string().required(),
    dept_name: Joi.string().required(),
    inv_flag: Joi.string().allow(null),
    jobno_seq: Joi.number().allow(null),
    invno_seq: Joi.number().allow(null),
    company_code: Joi.string().required(),
    operation_type: Joi.string().allow(null),
    
    div_code: Joi.string().allow(null),
    ac_div_code: Joi.string().allow(null),
    dept_email: Joi.string().allow(null),
    dn_email: Joi.string().allow(null),
    grn_email: Joi.string().allow(null),
    inv_gen: Joi.string().allow(null),
    inb_oub_related: Joi.string().allow(null),
    inv_prefix: Joi.string().allow(null),

    //country_gcc: Joi.string().valid("Y", "N").required(),
    //short_desc: Joi.string().allow(null),
    // nationality: Joi.string().allow(null),
  });
  return schema.validate(data);
};
