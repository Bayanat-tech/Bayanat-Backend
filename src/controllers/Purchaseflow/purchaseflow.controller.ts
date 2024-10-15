import { Response } from "express";
import { RequestWithUser } from "../../interfaces/cmmon.interfacte";

import { IUser } from "../../interfaces/user.interface"

import costmaster from "../../models/Purchaseflow/costmaster_pf.model";


import constants from "../../helpers/constants";

import { ICostmaster } from "../../interfaces/Purchaseflow/Purucahseflow.interface";

export const getPfMaster = async (req: RequestWithUser, res: Response) => {
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = Number(page * limit - limit);

    let fetchedData: unknown[] = [];
    switch (master) {
      case "costmaster":
        {
          (fetchedData = await costmaster.findAll({
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
