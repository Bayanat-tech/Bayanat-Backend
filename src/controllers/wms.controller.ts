import { Response } from "express";
import { RequestWithUser } from "../interfaces/cmmon.interfacte";
import Country from "../models/wms/country_wms.model";
import Department from "../models/wms/department_wms.model";
import Currency from "../models/wms/currency_wms.model"
import Territory from "../models/wms/territory_wms.model";
import { IUser } from "../interfaces/user.interface";
import constants from "../helpers/constants";
import { ICountry } from "../interfaces/wms/country_wms.interface";
import { IDepartment } from "../interfaces/wms/department_wms.interface";
import { ITerritory } from "../interfaces/wms/territory_wms.interface";
import { ICurrency } from "../interfaces/wms/currency_wms.interface";
import Salesman from "../models/wms/salesman_wms.model";

export const getWmsMaster = async (req: RequestWithUser, res: Response) => {
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = Number(page * limit - limit);
    let fetchedData: unknown[] = [];
    console.log("request...", requestUser.company_code);
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
      case "department":
        {          
          (fetchedData = await Department.findAll({
            where: { company_code: requestUser.company_code},
            offset: skip,
            limit: limit,
          })) as unknown[] as IDepartment[];
          console.log("fetch fata", fetchedData)
        } 
        break; 
        case "territory": {
          (fetchedData = await Territory.findAll({
            where: { company_code: requestUser.company_code },
            offset: skip,
            limit: limit,
          })) as unknown[] as ITerritory[];
        }
        break;
        case "currency": {
          (fetchedData = await Currency.findAll({
            where: { company_code: requestUser.company_code },
            offset: skip,
            limit: limit,
          })) as unknown[] as ICurrency[];
        }
        break;
        case "salesman":{
          (fetchedData = await Salesman.findAll({
            where: { company_code: requestUser.company_code },
            offset: skip,
            limit: limit,
          }))
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
