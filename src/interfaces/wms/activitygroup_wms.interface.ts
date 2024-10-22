export interface IActivityGroup {
  activity_group_code: string;
  act_group_name: string;
  company_code?: string;
  mandatory_flag?: string;
  validate_flag?: string;
  account_code?: string;
  act_group_type?: string;
  alternate_accode?: string;
  exp_account_code?: string;
  freight_flag?: string;
  rpt_group_name?: string;
  sw_flag?: string;
  sort_order?: string;
  cost_group?: string;
  updated_at?: Date;
  updated_by?: string;
  created_by?: string;
  created_at?: Date;
}
