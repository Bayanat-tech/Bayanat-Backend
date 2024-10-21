export interface IStorage {
    prin_code: string;
    prod_code: string;
    site_ind: string;
    uom_code?: string;
    curr_code?: string;
    charge_time?: string;
    foc: string;
    foc_start: number;
    foc_end: number;
    cpu:number;
    flat_rate:number;
    company_code: string;
    start_date: Date;
    end_date: Date;
    free_days: number;
    amt_lumpsum: number;
    ind_active:string;
    terminate_date: Date;
    perday_cap: number;
    edit_user: string;
    lmp_mode: string;
    created_at?: Date;
    created_by?: string;
    updated_at?: Date;
    updated_by?: string;
}