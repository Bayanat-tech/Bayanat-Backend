export interface ICountry {
  country_code: string;
  country_name: string;
  country_gcc: string;
  company_code?: string;
  short_desc?: string;
  nationality?: string;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
}

export interface IManufacture {
  manu_code: string;
  manu_name: string;
  company_code?: string;
  prin_code?: string;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
}
export interface IGroup {
  group_code: string;
  group_name: string;
  company_code?: string;
  prin_code?: string;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
}

export interface IIndustrysector {
  sector_code: string;
  sector_name: string;
  remarks: string;
  company_code?: string;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
}

export interface IDepartment {
  dept_code: string;
  dept_name: string;
  inv_flag: string;
  jobno_seq: number;
  invno_seq: number;
  company_code: string;
  operation_type: string;
  div_code: number;
  ac_div_code: string;
  dept_email: string;
  dn_email: string;
  grn_email: string;
  inv_gen: string;
  inb_oub_related: string;
  inv_prefix: string;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
}

export interface ISalesman {
  company_code: string;
  salesman_code?: string;
  salesman_name: string;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
}

export interface IBrand {
  brand_code: string;
  prin_code: string;
  group_code: string;
  brand_name?: string;
  pref_site?: string;
  pref_loc_from?: string;
  pref_loc_to?: string;
  pref_aisle_from?: string;
  pref_aisle_to?: string;
  pref_col_from?: number;
  pref_col_to?: number;
  pref_ht_from?: number;
  pref_ht_to?: number;
  company_code: string;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
}

export interface ISupplier {
  company_code?: string;
  prin_code: string;
  supp_code: string;
  curr_code?: string;
  country_code?: string;
  supp_name?: string;
  supp_addr1?: string;
  supp_addr2?: string;
  supp_addr3?: string;
  supp_addr4?: string;
  supp_city?: string;
  supp_contact1?: string;
  supp_telno1?: string;
  supp_faxno1?: string;
  supp_email1?: string;
  supp_contact2?: string;
  supp_telno2?: string;
  supp_faxno2?: string;
  supp_email2?: string;
  supp_contact3?: string;
  supp_telno3?: string;
  supp_faxno3?: string;
  supp_ref1?: string;
  supp_ref2?: string;
  supp_ref3?: string;
  service_date?: Date;
  supp_acref?: string;
  supp_credit?: number;
  supp_stat?: string;
  supp_imp_code?: string;
  supp_lic_no?: string;
  supp_lic_type?: string;
  price_check?: string;
  supp_email3?: string;
  payment_terms?: number;
  importer_code?: string;
  updated_at?: Date;
  updated_by?: string;
  created_by?: string;
  created_at?: Date;
}
