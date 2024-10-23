import Joi from "joi";
import { IIndustrysector } from "../../interfaces/wms/industrysector_wms.interface";
import {
  IPrincipalContactDetlWMs,
  IPrincipalWms,
} from "../../interfaces/wms/principal_wms.interface";

import {
  IGroup,
  IBrand,
  IManufacture,
  ICountry,
  IDepartment,
  ISalesman,
  IUom,
  IMoc,
  IMoc2,
  IUoc,
} from "../../interfaces/wms/gm_wms.interface";
import { ICurrency } from "../../interfaces/wms/currency_wms.interface";
import { ILocation } from "../../interfaces/wms/location_wms.interface";
import { IHarmonize } from "../../interfaces/wms/harmonize.interface";

//import { IDepartment } from "../../interfaces/wms/gm_wms.interface";
import { IActivityGroup } from "../../interfaces/wms/activitygroup_wms.interface";
import { IActivitysubgroup } from "../../interfaces/wms/activity_subgroup_wms.interface";
//import { IDepartment } from "../../interfaces/wms/gm_wms.interface";
import { IActivityBilling } from "../../interfaces/wms/activity_billing_wms.interface";
import { ISupplier } from "../../interfaces/wms/supplier_wms.interface";
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

export const activitygroupSchema = (data: IActivityGroup) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    activity_group_code: Joi.string().required(),
    act_group_name: Joi.string().required(),
    mandatory_flag: Joi.string().valid("N", "Y"),
    validate_flag: Joi.string().valid("N", "Y"),
    account_code: Joi.string().allow(null),
    act_group_type: Joi.string().allow(null),
    alternate_accode: Joi.string().allow(null),
    exp_account_code: Joi.string().allow(null),
    freight_flag: Joi.string().valid("Y", "N"),
    rpt_group_name: Joi.string().allow(null),
    sw_flag: Joi.string().allow(null),
    cost_group: Joi.string().allow(null),
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
export const uomSchema = (data: IUom) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    uom_code: Joi.string().required(),
    uom_name: Joi.string().required(),
  });
  return schema.validate(data);
};

export const mocSchema = (data: IMoc) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    charge_code: Joi.string().required(),
    description: Joi.string().required(),
  });
  return schema.validate(data);
};

export const moc2Schema = (data: IMoc2) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    charge_code: Joi.string().required(),
    description: Joi.string().required(),
  });
  return schema.validate(data);
};

export const uocSchema = (data: IUoc) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    charge_code: Joi.string().required(),
    description: Joi.string().required(),
  });
  return schema.validate(data);
};

export const harmonizeSchema = (data: IHarmonize) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    harm_code: Joi.string().required(),
    harm_desc: Joi.string().required(),
    uom: Joi.string().allow(""),
    permit_reqd: Joi.string().allow(""),
    unit: Joi.string().allow(""),
  });
  return schema.validate(data);
};

export const activitysubgroupSchema = (data: IActivitysubgroup) => {
  const schema = Joi.object().keys({
    company_code: Joi.string().required(),
    activity_subgroup_code: Joi.string().required(),
    act_subgroup_name: Joi.string().required(),
    mandatory_flag: Joi.string().allow(""),
    act_group_code: Joi.string().allow(""),
    validate_flag: Joi.string().allow(""),
  });
  return schema.validate(data);
};

export const principalSchema = (
  data: IPrincipalWms & IPrincipalContactDetlWMs
) => {
  const schema = Joi.object({
    //---------------basic----------
    prin_name: Joi.string().required(),
    company_code: Joi.string().required(),
    prin_dept_code: Joi.string().required(),
    prin_addr1: Joi.string().allow(""),
    prin_addr2: Joi.string().allow(""),
    prin_addr3: Joi.string().allow(""),
    prin_addr4: Joi.string().allow(""),
    prin_city: Joi.string().allow(""),
    country_code: Joi.string().allow(""),
    tax_country_code: Joi.string().allow(""),
    tax_country_sn: Joi.string().allow(""),
    territory_code: Joi.string().allow(""),
    sector_code: Joi.string().allow(""),
    prin_email1: Joi.string().email().allow(""),
    prin_email2: Joi.string().email().allow(""),
    prin_email3: Joi.string().email().allow(""),
    prin_faxno1: Joi.string().allow(""),
    prin_faxno2: Joi.string().allow(""),
    prin_faxno3: Joi.string().allow(""),
    prin_ref1: Joi.string().allow(""),
    prin_status: Joi.string().allow(""),
    acc_email: Joi.string().email().allow(""),
    //---------------account-------------
    trn_no: Joi.number().allow(null),
    trn_exp_date: Joi.date().allow(null),
    comm_reg_no: Joi.number().allow(null),
    comm_exp_date: Joi.date().allow(null),
    prin_lic_no: Joi.number().allow(null),
    prin_lic_type: Joi.string().allow(""),
    curr_code: Joi.string().allow(""),
    prin_infze: Joi.string().allow(""),
    prin_acref: Joi.string().allow(""),
    credit_limit: Joi.number().allow(null),
    creditdays: Joi.number().allow(null),
    creditdays_freight: Joi.number().allow(null),
    prin_imp_code: Joi.string().allow(""),
    parent_prin_code: Joi.string().allow(""),
    prin_invdate: Joi.date().allow(null),
    files: Joi.array().items(Joi.any()).allow(null),
    //---------------contact--------------
    prin_cont1: Joi.string().allow(""),
    prin_cont2: Joi.string().allow(""),
    prin_cont3: Joi.string().allow(""),
    prin_cont_email1: Joi.string().email().allow(""),
    prin_cont_email2: Joi.string().email().allow(""),
    prin_cont_email3: Joi.string().email().allow(""),
    prin_cont_telno1: Joi.string().allow(""),
    prin_cont_telno2: Joi.string().allow(""),
    prin_cont_telno3: Joi.string().allow(""),
    prin_cont_faxno1: Joi.string().allow(""),
    prin_cont_faxno2: Joi.string().allow(""),
    prin_cont_faxno3: Joi.string().allow(""),
    prin_cont_ref1: Joi.string().allow(""),
    //---------------pick wave--------------

    pick_wave: Joi.string().allow(""),
    pick_wave_qty_sort: Joi.number().allow(null),
    pick_wave_ign_min_exp: Joi.number().allow(null),

    //---------------settings--------------
    under_value: Joi.string().allow(""),
    auto_insert_billactivity: Joi.string().allow(""),
    prin_charge: Joi.string().allow(""),
    prin_pricechk: Joi.string().allow(""),
    prin_landedpr: Joi.string().allow(""),
    auto_job: Joi.string().allow(""),
    validate_lotno: Joi.string().allow(null),
    storage_productwise: Joi.string().allow(""),
    dir_shpmnt: Joi.string().allow(""),
    validate_expdate: Joi.string().allow(null),
    minperiod_exppick: Joi.number().allow(null),
    rcpt_exp_limit: Joi.number().allow(null),
    perpectual_confirm_allow: Joi.string().allow(""),
    //---------------storage--------------
    pref_site: Joi.string().allow(""),
    pref_loc_from: Joi.string().allow(""),
    pref_loc_to: Joi.string().allow(""),
    pref_aisle_from: Joi.number().allow(null),
    pref_aisle_to: Joi.number().allow(null),
    pref_col_from: Joi.number().allow(null),
    pref_col_to: Joi.number().allow(null),
    pref_ht_from: Joi.number().allow(null),
    pref_ht_to: Joi.number().allow(null),
    prin_siteind: Joi.string().allow(""),
    service_date: Joi.date().allow(null),
    storage_type: Joi.string().allow(""),
    default_foc: Joi.string().allow(""),
    automate_activity: Joi.string().allow(""),
  });

  return schema.validate(data);
};

// ---------------Activity Billing--------------
export const activityBillingSchema = (data: IActivityBilling) => {
  const schema = Joi.object().keys({
    activityPassword: Joi.string(),
    prin_code: Joi.string(),
    act_code: Joi.string(),
    from: Joi.string().allow(null),
    to: Joi.string().allow(null),
    wip_code: Joi.string(),
    cost: Joi.number().required(),
    income_code: Joi.string(),
    bill_amount: Joi.number(),
    jobtype: Joi.string().required(),
    company_code: Joi.string(),
    freeze_flag: Joi.string().length(1),
    mandatory_flag: Joi.string().length(1),
    validate_flag: Joi.string().length(1),
    uoc: Joi.string().required(),
    moc: Joi.number(),
    moc1: Joi.string().required(),
    moc2: Joi.string().required(),
    cust_code: Joi.string(),
    start_point: Joi.string(),
    end_point: Joi.string(),
    customer_type: Joi.string(),
    vtype_code: Joi.string(),
    serial_no: Joi.number(),
    serial_no2: Joi.number(),
    updated_by: Joi.string(),
    created_by: Joi.string(),
  });

  return schema.validate(data);
};
// Calll Procedure
export const callProcedureSchema = (data: string) => {
  const schema = Joi.object().keys({
    activityPassword: Joi.string(),
    from: Joi.string().required(),
    to: Joi.string().required(),
  });

  return schema.validate(data);
};
