
export interface IHarmonize{
    harm_code: string;
    harm_desc: string;
    company_code?: string;
    updated_at?: Date;
    updated_by?: string;
    created_by?: string;
    created_at?: Date;
  }

export interface IHarmonize {
  harm_code: string;
  harm_desc: string;
  short_desc: string;
  uom: string;
  permit_reqd: string;
  unit: string;
  company_code?: string;
  updated_at?: Date;
  updated_by?: string;
  created_by?: string;
  created_at?: Date;
}
