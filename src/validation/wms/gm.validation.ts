import Joi from "joi";
import { IIndustrysector } from "../../interfaces/wms/industrysector_wms.interface";
import {
  ICountry,
  IDepartment,
  ISalesman,
  IGroup,
  IBrand,
  IManufacture,
} from "../../interfaces/wms/gm_wms.interface";
import { ICurrency } from "../../interfaces/wms/currency_wms.interface";
import { ILocation } from "../../interfaces/wms/location_wms.interface";
import { ISupplier } from "../../interfaces/wms/supplier_wms.interface";
//import { IBrand } from "../../interfaces/wms/gm_wms.interface";

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

export const manufactureSchema = (data: IManufacture) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    manu_code: Joi.string().required(),
    manu_name: Joi.string().required(),
    prin_code: Joi.string().allow(null),
  });
  return schema.validate(data);
};

export const groupSchema = (data: IGroup) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    group_code: Joi.string().required(),
    group_name: Joi.string().required(),
    prin_code: Joi.string().allow(null),
  });
  return schema.validate(data);
};

export const brandSchema = (data: IBrand) => {
  const schema = Joi.object().keys({
    brand_code: Joi.string().required(),
    prin_code: Joi.string().required(),
    group_code: Joi.string().required(),
    brand_name: Joi.string().allow(null),
    pref_site: Joi.string().allow(""),
    pref_loc_from: Joi.string().allow(""),
    pref_loc_to: Joi.string().allow(""),
    pref_aisle_from: Joi.string().allow(""),
    pref_aisle_to: Joi.string().allow(""),
    pref_col_from: Joi.number().allow(""),
    pref_col_to: Joi.number().allow(""),
    pref_ht_from: Joi.number().allow(""),
    pref_ht_to: Joi.number().allow(""),
    company_code: Joi.string().required(),
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
  });

  return schema.validate(data);
};

export const salesmanSchema = (data: ISalesman) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    salesman_code: Joi.string().required(),
    salesman_name: Joi.string().required(),
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

export const currencySchema = (data: ICurrency) => {
  const schema = Joi.object().keys({
    curr_code: Joi.string().required(),
    curr_name: Joi.string().required(),
    ex_rate: Joi.string().allow(null),
    division: Joi.string().allow(""),
    subdivision: Joi.number().allow(""),
    company_code: Joi.string().required(),
    curr_sign: Joi.string().allow(""),
  });
  return schema.validate(data);
};

export const supplierSchema = (data: ISupplier) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    prin_code: Joi.string().required(),
    supp_code: Joi.string().required(),
    curr_code: Joi.string().allow(null),
    country_code: Joi.string().allow(null),
    supp_name: Joi.string().allow(""),
    supp_addr1: Joi.string().allow(""),
    supp_addr2: Joi.string().allow(""),
    supp_addr3: Joi.string().allow(""),
    supp_addr4: Joi.string().allow(""),
    supp_city: Joi.string().allow(""),
    supp_contact1: Joi.string().allow(""),
    supp_telno1: Joi.string().allow(""),
    supp_faxno1: Joi.string().allow(""),
    supp_email1: Joi.string().allow(""),
    supp_contact2: Joi.string().allow(""),
    supp_telno2: Joi.string().allow(""),
    supp_faxno2: Joi.string().allow(""),
    supp_email2: Joi.string().allow(""),
    supp_contact3: Joi.string().allow(""),
    supp_telno3: Joi.string().allow(""),
    supp_faxno3: Joi.string().allow(""),
    supp_ref1: Joi.string().allow(""),
    supp_ref2: Joi.string().allow(""),
    supp_ref3: Joi.string().allow(""),
    service_date: Joi.date().allow(null),
    supp_acref: Joi.string().allow(""),
    supp_credit: Joi.number().allow(null),
    supp_stat: Joi.string().allow(""),
    supp_imp_code: Joi.string().allow(""),
    supp_lic_no: Joi.string().allow(""),
    supp_lic_type: Joi.string().allow(""),
    price_check: Joi.string().allow(""),
    supp_email3: Joi.string().allow(""),
    payment_terms: Joi.number().allow(null),
    importer_code: Joi.string().allow(""),
    updated_at: Joi.date().allow(null),
    updated_by: Joi.string().allow(""),
    created_by: Joi.string().allow(""),
    created_at: Joi.date().allow(null),
  });

  return schema.validate(data);
};
