export interface TallyInfo{
    _id?: string,
    well_rig_name:any,
    tally_code:any,
    tally_name:any,
    date:any,
    run_in_hole_date_time:any,
    rig_no:any,
    plength: any,
    description:any,
    lengthTotal:any,
    Trecords:any[]
}

export interface Trecords{
    personnel:string;
    name:string;
    hrs:number;
}