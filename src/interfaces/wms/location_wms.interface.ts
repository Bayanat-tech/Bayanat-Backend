export interface ILocation {
    location_code: string;
    loc_desc: string;
    loc_type: string;
    loc_stat: string;
    asile: string;
    column_no: number;
    height: number;
    job_no: string;
    prod_code: string;
    prin_code: string;
    stk_stat: string;
    pref_prin: string;
    pref_prod: string;
    pref_group:string;
    pref_brand:string;
    put_seqno: string;
    pick_seqno: string;
    push_level: string;
    max_qty: number;
    uom: string;
    reorder_qty: number;
    barcode: string;
    prod_type:string;
    depth:string;
    check_digit: string;
    assigned_prin_code:string;
    assigned_prodgroup:string;
    assigned_userid:string;
    location_code_002:string;
    volume_cbm:number;
    height_cm:number;
    breadth_cm:number;
    length_cm:number;
    blockcyc:string;
    trolly_no:string;
    bonded_area_code:string;
    location_reserved_for:string;
    company_code?: string;
    created_at?: Date;
    created_by?: string;
    updated_at?: Date;
    updated_by?: string;
  }
  

  
