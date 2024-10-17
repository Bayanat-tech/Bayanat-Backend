import {  Response } from "express";
import { QueryTypes } from "sequelize";
import { sequelize } from "../../database/connection";
import { IUser } from "../../interfaces/user.interface";
import { RequestWithUser } from "../../interfaces/cmmon.interfacte";
import ActivityBilling from "../../models/wms/activity_billing.model"

 //Get Api Controller Based On Specific Principal Code 
export const getActivityBillingDataByCompanyAndPrincipal = async (req: RequestWithUser, res: Response) => {
    const {companyCode, principalCode } = req.params;
    const requestUser: IUser = req.user as IUser; 
    try {
    const query = `
    SELECT
      *
    FROM
     VW_GEN_ACTIVITY_BILLING_DATA
    WHERE 
    COMPANY_CODE = :company_code
    AND PRIN_CODE = :principal_code
    AND USER_ID = :userId
  `;
      const activityBillingData = await sequelize.query(query, {
        replacements: { company_code:companyCode, principal_code:principalCode, userId:requestUser.loginid },
        type: QueryTypes.SELECT,
      });
      console.log("activity Billing Data", JSON.stringify(activityBillingData));
      if (activityBillingData.length > 0) {
        res.json({
          success: true,
          data: activityBillingData, 
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No activity billing data found for this principal and company.",
        });
      }
  
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Error fetching activity billing data",
        error: error.message,
      });
    }
};
  
// Get Data Based on uoc 
export const getActivityDataByUoc = async (req:RequestWithUser, res:Response) =>{
  try {
    const {activity_uoc} = req.params;
    const query = `
    SELECT
      mau.company_code,  
      mau.charge_type,  
      mau.charge_code,  
      mau.description,  
      mau.activity_group_code  
    FROM
      MS_ACTIVITY_UOC mau
    WHERE
      NVL(mau.CHARGE_TYPE, ' ') = 'UOC'
      AND mau.activity_uoc = :activityUoc;
  `;
  const activityData = await sequelize.query(query, {
      replacements: { activityUoc: activity_uoc },
      type: QueryTypes.SELECT,
    });
    res.status(200).json({
      success: true,
      data: activityData,
    });
  } catch (error:any) {
      res.status(500).json({
        success: false,
        message: "Error fetching activity data by UOC",
        error: error.message,
      });
  
  }
};

// Get Data Based on moc1 
export const getActivityDataByMoc1  = async (req:RequestWithUser, res:Response) =>{
  try {
    const {activit_moc1} = req.params;
    const query = `
    SELECT
      mau.company_code,  
      mau.charge_type,  
      mau.charge_code,  
      mau.description,  
      mau.activity_group_code  
    FROM
      MS_ACTIVITY_UOC mau
    WHERE
      (mau.CHARGE_TYPE, ' ') = 'MOC1'
      AND mau.activity_uoc = :activityMoc1;
  `;
  const activityData = await sequelize.query(query, {
      replacements: { activityMoc1: activit_moc1 },
      type: QueryTypes.SELECT,
    });
    res.status(200).json({
      success: true,
      data: activityData,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: "Error fetching activity data by MOC1",
      error: error.message,
    });
  }
}

// Get Data Based on moc2 
export const getActivityDataByMoc2  = async (req:RequestWithUser, res:Response) =>{
  try {
    const {activit_moc2} = req.params;
    const query = `
    SELECT
      mau.company_code,  
      mau.charge_type,  
      mau.charge_code,  
      mau.description,  
      mau.activity_group_code  
    FROM
      MS_ACTIVITY_UOC mau
    WHERE
      (mau.CHARGE_TYPE, ' ') = 'MOC2'
      AND mau.activity_uoc = :activityMoc2;
  `;
  const activityData = await sequelize.query(query, {
      replacements: { activityMoc2: activit_moc2 },
      type: QueryTypes.SELECT,
    });
    res.status(200).json({
      success: true,
      data: activityData,
    });
  } catch (error:any) {
    res.status(500).json({
      success: false,
      message: "Error fetching activity data by MOC2",
      error: error.message,
    });
  }
}

// Create Activity Controller
export const createActivityBillingDataByCompanyAndPrincipal = async (req: RequestWithUser, res: Response) => {
  try {
    const { companyCode, principalCode } = req.params;
    const {billing_amount, job_type, cost, uoc, moc1, moc2, act_code } = req.body;
    // Create a new record in the activity_billing table
    const newActivityBilling = await ActivityBilling.create({
      company_code: companyCode,
      prin_code: principalCode,
      bill_amount: billing_amount,
      jobtype: job_type,
      cost: cost,
      uoc: uoc,
      moc1: moc1,
      moc2: moc2,
      act_code: act_code,
    });

    res.status(201).json({
      success: true,
      message: "Activity billing data created successfully",
      data: newActivityBilling,
    });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error creating activity billing data",
      error: error.message,
    });
  }
};

// Update Activity Controller
export const updateActivityBillingDataByCompanyAndPrincipal = async (req: RequestWithUser, res: Response) => {
  try {
    const { principalCode, activityCode } = req.params;
    const { billing_amount, job_type, cost, uoc, moc1, moc2 } = req.body;
     console.log(`principal code: ${principalCode}, activity code: ${activityCode}`);
   // Find and update the record in the activity_billing table
   const updatedActivityBilling = await ActivityBilling.update(
    {
      bill_amount: billing_amount,
      jobtype: job_type,
      cost: cost,
      uoc: uoc,
      moc1: moc1,
      moc2: moc2,
    },
    { where: {prin_code: principalCode, act_code:activityCode } }
  );
   res.status(200).send({success:true, message: "Activity Billing updated successfully", data: updatedActivityBilling})
  } catch(err:any){
    res.status(500).json({
      success: false,
      message: "Error updating activity billing data",
      error: err.message,
    });
  }
}