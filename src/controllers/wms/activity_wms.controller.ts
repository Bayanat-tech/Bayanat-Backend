import { Request, Response } from "express";
import { QueryTypes } from "sequelize";
import { sequelize } from "../../database/connection";
import { IUser } from "../../interfaces/user.interface";

 //Get Api Controller Based On Specific Principal Code 
export const getActivityBillingDataByCompanyAndPrincipal = async (req: Request, res: Response) => {
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
  


  
  
  