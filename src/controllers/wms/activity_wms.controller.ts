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