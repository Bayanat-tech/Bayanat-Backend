import Joi, { string } from "joi";
import { ILocation } from "../../interfaces/wms/location_wms.interface";

export const locationSchema = (data: ILocation) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    site_code:Joi.string().required(),
    location_code: Joi.string().required(),
    loc_desc: Joi.string().required(),
    loc_type: Joi.string().required(),
    loc_stat: Joi.string().required(),
    asile: Joi.string().required(),
    column_no: Joi.number().required(), 
    height:Joi.number().required(),
    job_no: Joi.string().required(),
    prod_code: Joi.string().allow(null),
    prin_code: Joi.string().allow(null),
    stk_stat: Joi.string().allow(null),
    pref_prin: Joi.string().allow(null),
    pref_prod: Joi.string().allow(null),
    pref_group: Joi.string().allow(null),
    pref_brand: Joi.string().allow(null),
    put_seqno:  Joi.string().allow(null),
    pick_seqno: Joi.string().allow(null),
    push_level:Joi.string().allow(null),
    max_qty: Joi.number().required(),
    uom: string().allow(null),
    reorder_qty: Joi.number().required(),
    barcode: Joi.string().allow(null),
    prod_type: Joi.string().allow(null),
    depth: Joi.string().allow(null),
    check_digit:Joi.string().allow(null),
    assigned_prin_code: Joi.string().allow(null),
    assigned_prodgroup: Joi.string().allow(null),
    assigned_userid: Joi.string().allow(null),
    location_code_002: Joi.string().allow(null),
    volume_cbm: Joi.number().required(),
    height_cm:Joi.number().required(),
    breadth_cm:Joi.number().required(),
    length_cm:Joi.number().required(),
    blockcyc:Joi.string().allow(null),
    trolly_no: Joi.string().allow(null),
    bonded_area_code: Joi.string().allow(null),
    location_reserved_for:Joi.string().allow(null),
    
  });
  return schema.validate(data);
};


    