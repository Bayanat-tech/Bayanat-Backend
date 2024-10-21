export interface  IFlowmaster {
    flow_code: string;
    flow_description: string;
    company_code?: string;
    created_at?: Date;
    created_by?: string;
    updated_at?: Date;
    updated_by?: string;
  }
  export interface  IRolemaster {
    role_id: number;
    role_desc: string;
    remarks?: string;
    company_code?: string;
    created_at?: Date;
    created_by?: string;
    updated_at?: Date;
    updated_by?: string;
  }

  export interface  ISecmaster {
    id: number;
    username: string;
    contact_no: string;
    userpass: string;
    email_id?: string;
    company_code?: string;
    created_at?: Date;
    created_by?: string;
    updated_at?: Date;
    updated_by?: string;
  }

  export interface  ISecmodule {
    id: number;
    username: string;
    contact_no: string;
    userpass: string;
    email_id?: string;
    company_code?: string;
    created_at?: Date;
    created_by?: string;
    updated_at?: Date;
    updated_by?: string;
  }