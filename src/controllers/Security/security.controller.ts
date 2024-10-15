import { Response } from "express";
import { RequestWithUser } from "../../interfaces/cmmon.interfacte";
import { IUser } from "../../interfaces/user.interface"
import constants from "../../helpers/constants";
import { IFlowmaster } from "../../interfaces/Security/Security.interfae";
import { IRolemaster } from "../../interfaces/Security/Security.interfae";
import rolemaster from "../../models/Security/rolemaster_security..model";
import flowmaster from "../../models/Security/flowmaster_security.model";

export const getSecMaster = async (req: RequestWithUser, res: Response) => {
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = Number(page * limit - limit);

    let fetchedData: unknown[] = [];
    switch (master) {
         case "rolemaster":
          {
            (fetchedData = await rolemaster.findAll({
              where: { company_code: requestUser.company_code },
              offset: skip,
              limit: limit,
            })) as unknown[] as IRolemaster[];
          }
          break;
          case "flowmaster":
            {
              (fetchedData = await flowmaster.findAll({
                where: { company_code: requestUser.company_code },
                offset: skip,
                limit: limit,
              })) as unknown[] as IFlowmaster[];
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
