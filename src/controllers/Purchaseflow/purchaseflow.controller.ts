import { Response } from "express";
import { RequestWithUser } from "../../interfaces/cmmon.interfacte";

import { IUser } from "../../interfaces/user.interface"

import Costmaster from "../../models/Purchaseflow/costmaster_pf.model";
import constants from "../../helpers/constants";

import { ICostmaster } from "../../interfaces/Purchaseflow/Purucahseflow.interface";

// This is for Purchase flow module
export const getPfMaster = async (req: RequestWithUser, res: Response) => {
  try {
    console.log("Enter in this getPfFunction  function.." )
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = Number(page * limit - limit);
    let fetchedData: unknown[] = [];
    switch (master) {
      case "costmaster":
                {
          (fetchedData = await Costmaster.findAll({
            where: { company_code: requestUser.company_code },
            offset: skip,
            limit: limit,
          })) as unknown[] as ICostmaster[];
        }
        break;
     }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      data: { tableData: fetchedData, count: fetchedData?.length },
    });
    return;
  } catch (err) {}
  
};

export const deletepfMaster = async (req: RequestWithUser, res: Response) => {
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const {
      cost_code
    } = req.body;
    switch (master) {
     
      case "cost_code":
        console.log("inside purchaseflow delete");
        {
          if (!cost_code || cost_code.length === 0) {
            throw new Error("flowCode is required");
          }
          await Costmaster.destroy({
            where: {
              company_code: requestUser.company_code,
              cost_code: cost_code,
            },
          });
        }
        break;
     

      }
      res.status(constants.STATUS_CODES.OK).json({
        success: true,
        message: `${master} is successfully deleted`,
      });
      return;
    } catch (error: any) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
  };

