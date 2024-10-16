import Joi from "joi";
import { IIndustrysector } from "../../interfaces/wms/industrysector_wms.interface";
import { ICountry, IDepartment } from "../../interfaces/wms/gm_wms.interface";
//import { IDepartment } from "../../interfaces/wms/gm_wms.interface";

import { ILocation } from "../../interfaces/wms/location_wms.interface";

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
    remarks: Joi.string().required(),
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

export const locationSchema = (data: ILocation) => {
  const schema = Joi.object().keys({
    site_code: Joi.string().required(),
    location_code: Joi.string().allow(""),
    loc_desc: Joi.string().allow(""),
    loc_type: Joi.string().allow(""),
    loc_stat: Joi.string().allow(""),
    aisle: Joi.string().required(),
    column_no: Joi.number().required(),
    height: Joi.number().required(),
    job_no: Joi.string().allow(""),
    prod_code: Joi.string().allow(""),
    prin_code: Joi.string().allow(""),
    stk_stat: Joi.string().allow(""),
    pref_prin: Joi.string().allow(""),
    pref_prod: Joi.string().allow(""),
    pref_group: Joi.string().allow(""),
    pref_brand: Joi.string().allow(""),
    put_seqno: Joi.number().allow(""),
    pick_seqno: Joi.number().allow(""),
    push_level: Joi.string().allow(""),
    max_qty: Joi.number().allow(""),
    uom: Joi.string().allow(""),
    reorder_qty: Joi.number().allow(""),
    company_code: Joi.string().required(),
    barcode: Joi.string().allow(""),
    prod_type: Joi.number().allow(""),
    depth: Joi.number().allow(""),
    check_digit: Joi.string().allow(""),
    assigned_prin_code: Joi.string().allow(""),
    assigned_prodgroup: Joi.string().allow(""),
    assigned_userid: Joi.string().allow(""),
    location_code_002: Joi.string().allow(""),
    volume_cbm: Joi.number().allow(""),
    height_cm: Joi.number().allow(""),
    breadth_cm: Joi.number().allow(""),
    length_cm: Joi.number().allow(""),
    blockcyc: Joi.string().valid("Y", "N").allow(""),
    trolley_no: Joi.string().allow(""),
    bonded_area_code: Joi.string().allow(""),
    location_reserved_for: Joi.string().allow(""),
    updated_at: Joi.date().allow(""),
    updated_by: Joi.string().allow(""),
    created_by: Joi.string().allow(""),
    created_at: Joi.date().allow(""),
  });

  return schema.validate(data);
};
