export interface  ICostmaster {
    cost_code: string;
    cost_name: string;
    company_code: string;
    created_at?: Date;
    created_by?: string;
    updated_at?: Date;
    updated_by?: string;
  }
  export interface IProjectmaster {
    project_code?: string;            // Project code (optional)
    project_name?: string;            // Project name (optional)
    company_code?: string;            // Company code (optional)
    prno_pre_fix?: string;
    flag_proj_department: 'D' | 'P'; // Add flag_proj_department here
    updated_at?: Date;                // Last updated timestamp (optional)
    updated_by?: string;              // Updated by user (optional)
    created_at?: Date;                // Record creation timestamp (optional)
    created_by?: string;              // Created by user (optional)
  }
  export interface IHrdivision {
    div_code?: string;            // Project code (optional)
    div_name?: string;            // Project name (optional)
    }