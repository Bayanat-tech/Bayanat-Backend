export interface ICostmaster {
  cost_code: string;
  cost_name: string;
  company_code: string;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
}
export interface IVProjectmaster {
  project_code?: string; // Project code (optional)
  project_name?: string; // Project name (optional)
  company_code?: string;
  div_name?: string;
  total_project_cost?: Number;
  created_at?: Date;
  created_by?: string;
  updated_at?: Date;
  updated_by?: string;
}

export interface IProjectmaster {
  project_code?: string; // Project code (optional)
  project_name?: string; // Project name (optional)
  company_code?: string; // Company code (optional)
  div_code: string; // Division code (required)
  prno_pre_fix?: string; // Add prno_pre_fix here
  flag_proj_department?: string;
  project_date_from?: string; // Use string for date (ISO format)
  project_date_to?: string; // Use string for date (ISO format)
  total_project_cost: number; // Use primitive 'number'
  project_type: string;
  facility_mgr_name: string;
  facility_mgr_email: string;
  facility_mgr_phone?: string; // Removed null type
  updated_at?: string; // Use string for date
  updated_by?: string;
  created_at?: string; // Use string for date
  created_by?: string;
}

export interface IItemtmaster {
  item_code: string;
  item_desp: string;
  company_code?: string;
  updated_at?: Date;
  updated_by?: string;
  created_at?: Date;
  created_by?: string;
}
export interface IDivisionmaster {
  div_code: string;
  div_name: string;
  company_code?: string;
  updated_at?: Date;
  updated_by?: string;
  created_at?: Date;
  created_by?: string;
}
