import Joi from "joi";
import { IIndustrysector } from "../../interfaces/wms/industrysector_wms.interface";
import { ICountry, IDepartment } from "../../interfaces/wms/gm_wms.interface";
import {
  IPrincipalContactDetlWMs,
  IPrincipalWms,
} from "../../interfaces/wms/principal_wms.interface";
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

export const principalSchema = (
  data: IPrincipalWms & IPrincipalContactDetlWMs
) => {
  const schema = Joi.object({
    //---------------basic----------
    prin_code: Joi.string().required(),
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
    //---------------contact--------------
    prin_cont1: Joi.string().email().allow(""),
    prin_cont2: Joi.string().email().allow(""),
    prin_cont3: Joi.string().email().allow(""),
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
