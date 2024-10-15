import { Response } from "express";
import { RequestWithUser } from "../interfaces/cmmon.interfacte";
import Country from "../models/wms/country_wms.model";
import { IUser } from "../interfaces/user.interface";
import constants from "../helpers/constants";
import { ICountry } from "../interfaces/wms/gm_wms.interface";
import { IIndustrysector } from "../interfaces/wms/gm_wms.interface";
import { IFlowmaster } from "../interfaces/Security/Security.interfae";
import { IRolemaster } from "../interfaces/Security/Security.interfae";
import { ICostmaster } from "../interfaces/Purchaseflow/Purucahseflow.interface";


export const getWmsMaster = async (req: RequestWithUser, res: Response) => {
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = Number(page * limit - limit);

    let fetchedData: unknown[] = [];
    switch (master) {
      case "country":
        {
          (fetchedData = await Country.findAll({
            where: { company_code: requestUser.company_code },
            offset: skip,
            limit: limit,
          })) as unknown[] as ICountry[];
        }
        break;
        case "industrysector":
        {
          (fetchedData = await Country.findAll({
            where: { company_code: requestUser.company_code },
            offset: skip,
            limit: limit,
          })) as unknown[] as IIndustrysector[];
        }
        break;
        case "costmaster":
          {
            (fetchedData = await Country.findAll({
              where: { company_code: requestUser.company_code },
              offset: skip,
              limit: limit,
            })) as unknown[] as ICostmaster[];
          }
          break;
          case "rolemaster":
          {
            (fetchedData = await Country.findAll({
              where: { company_code: requestUser.company_code },
              offset: skip,
              limit: limit,
            })) as unknown[] as IRolemaster[];
          }
          break;
          case "flowmaster":
            {
              (fetchedData = await Country.findAll({
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
