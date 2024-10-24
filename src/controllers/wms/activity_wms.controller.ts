import { Response } from "express";
import { QueryTypes } from "sequelize";
import { sequelize } from "../../database/connection";
import { IUser } from "../../interfaces/user.interface";
import { RequestWithUser } from "../../interfaces/cmmon.interface";
import ActivityBilling from "../../models/wms/activity_billing.model";
import {
  activityBillingSchema,
  callProcedureSchema,
} from "../../validation/wms/gm.validation";
import constants from "../../helpers/constants";

// Create Activity Controller
export const createActivityBillingDataByCompanyAndPrincipal = async (
  req: RequestWithUser,
  res: Response
) => {
  try {
    const { companyCode, principalCode } = req.params;

    const { error } = activityBillingSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { bill_amount, jobtype, cost, uoc, moc1, moc2, act_code } = req.body;
    // Create a new record in the activity_billing table
    const newActivityBilling = await ActivityBilling.create({
      company_code: companyCode,
      prin_code: principalCode,
      bill_amount: bill_amount,
      jobtype: jobtype,
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
export const updateActivityBillingDataByCompanyAndPrincipal = async (
  req: RequestWithUser,
  res: Response
) => {
  try {
    const { principalCode, activityCode } = req.params;
    const { error } = activityBillingSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { bill_amount, jobtype, cost, uoc, moc1, moc2 } = req.body;
    // Find and update the record in the activity_billing table
    const updatedActivityBilling = await ActivityBilling.update(
      {
        bill_amount: bill_amount,
        jobtype: jobtype,
        cost: cost,
        uoc: uoc,
        moc1: moc1,
        moc2: moc2,
      },
      { where: { prin_code: principalCode, act_code: activityCode } }
    );
    res.status(200).send({
      success: true,
      message: "Activity Billing updated successfully",
      data: updatedActivityBilling,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Error updating activity billing data",
      error: err.message,
    });
  }
};

// Controller function to call the stored procedure
export const copyBillingActivity = async (
  req: RequestWithUser,
  res: Response
) => {
  try {
    const requestUser: IUser = req.user;
    const { error } = callProcedureSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { from, to } = req.body;
    // Calling the stored procedure
    const result = await sequelize.query(
      `CALL SP_WM_COPY_BILLING_ACTVY(:vs_comp_code, :vs_prin_from, :vs_prin_to, :vs_user)`,
      {
        replacements: {
          vs_comp_code: requestUser.company_code,
          vs_prin_from: from,
          vs_prin_to: to,
          vs_user: requestUser.loginid,
        },
        type: QueryTypes.RAW,
      }
    );
    res.status(200).json({
      success: true,
      message: "Billing activity copied successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Error copying billing activity",
      error: error.message,
    });
  }
};
