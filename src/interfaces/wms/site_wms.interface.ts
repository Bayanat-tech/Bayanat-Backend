export interface ISite {
    site_code: string;
    site_ind: string;
    site_type: string;
    site_name: string;
    site_addr1?: string;
    site_addr2?: string;
    site_addr3?: string;
    site_addr4?: string;
    city?: string;
    country_code?: string;
    contact_name?: string;
    tel_no?: string;
    charge_ind?: string;
    prin_code?: string;
    group_code?: string;
    loc_type: number;
    company_code: string;
    site_class?: string;
    status:string;
    graphical_object_plus: string;
    graphical_object_minus?: string;
    wh_code: number;
    picking_out: string;
    site_volume: number;
    assigned_pda_user?: string;
    site_uom: string;
    inc_storage: string;
    div_code: string;
    site_rpt_name?: string;
    report_flag: string;
    created_at?: Date;
    created_by?: string;
    updated_at?: Date;
    updated_by?: string;
}