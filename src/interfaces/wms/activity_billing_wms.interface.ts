export interface IActivityBilling {
    prin_code?: string;
    act_code?: string;
    wip_code?:string;
    cost?:number;
    income_code?: string;
    bill_amount?: number;
    jobtype?: string;
    company_code?: string;
    freeze_flag?: string;
    mandatory_flag?: string;
    validate_flag?: string;
    uoc?: string;
    moc?: number;
    moc1?: string;
    moc2?: string;
    cust_code?: string;
    start_point?: string;
    end_point?: string;
    customer_type?: string;
    vtype_code?: string;
    serial_no?: number;
    serial_no2?: number;
    created_at?: Date;
    created_by?: string;
    updated_at?: Date;
    updated_by?: string;
}