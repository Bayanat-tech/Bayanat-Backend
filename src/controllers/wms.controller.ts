import { Response } from "express";
import constants from "../helpers/constants";
import { RequestWithUser } from "../interfaces/cmmon.interfacte";
import { IUser } from "../interfaces/user.interface";
import { ICountry } from "../interfaces/wms/gm_wms.interface";
import { IDepartment } from "../interfaces/wms/department_wms.interface";
import { ITerritory } from "../interfaces/wms/territory_wms.interface";
import { ICurrency } from "../interfaces/wms/currency_wms.interface";

// Importing models for WMS master data
import Country from "../models/wms/country_wms.model";
import Department from "../models/wms/department_wms.model";
import Currency from "../models/wms/currency_wms.model"
import Territory from "../models/wms/territory_wms.model";
import Salesman from "../models/wms/salesman_wms.model";
import Site from "../models/wms/site_wms.model";
import Storage from "../models/wms/storage_wms.model";

// Retrieves master data (country, department, territory, etc.) with optional pagination based on the `master` type.
export const getWmsMaster = async (req: RequestWithUser, res: Response) => {
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = Number(page * limit - limit);
    let fetchedData: unknown[] = [];
    const paginationOptions = limit ? { offset: skip, limit: limit } : {}; 
    console.log("master: ----->>>>>>" + master);
    switch (master) {
      case "country":
        {
          (fetchedData = await Country.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions
          })) as unknown[] as ICountry[];
        }
        break; 
      case "department":
        {          
          (fetchedData = await Department.findAll({
            where: { company_code: requestUser.company_code},
            ...paginationOptions
          })) as unknown[] as IDepartment[];
        } 
        break; 
        case "territory": {
          (fetchedData = await Territory.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions
          })) as unknown[] as ITerritory[];
        }
        break;
        case "currency": {
          (fetchedData = await Currency.findAll({
            where: { company_code: requestUser.company_code },
           ...paginationOptions
          })) as unknown[] as ICurrency[];
        }
        break;
        case "salesman":{
          (fetchedData = await Salesman.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions
          }))
        }
        break;
        case "site" :
          {
            (fetchedData = await Site.findAll({
              where: { company_code: requestUser.company_code },
             ...paginationOptions
            }))
          }
          break;
          case "storage":
            {
              (fetchedData = await Storage.findAll({
                where: { company_code: 'BSG' },
               ...paginationOptions
              }))
            }
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      data: { tableData: fetchedData, count: fetchedData?.length },
    });
    return;
  } catch (err) {
    console.error(err);
    res.status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Error occurred while fetching data",
    });
  }
};

// Delete master data (country, department, territory, etc.) with optional pagination based on the `master` type.
export const deleteWmsMaster = async (req:RequestWithUser, res:Response) =>{
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const {dept_code, country_code, territory_code, curr_code, salesman_code} = req.body;
    switch (master) {
      case "country":
        {
          if(!country_code || country_code.length === 0){
            throw new Error("countryCode is required");
          }
          await Country.destroy({
            where: { company_code: requestUser.company_code, country_code: country_code},
          });
        }
        break;
      case "department":
        {
          if(!dept_code || dept_code.length === 0){
            throw new Error("departmentCode is required");
          }
          await Department.destroy({
            where: { company_code: requestUser.company_code, dept_code: dept_code},
          });
        }
        break;
      case "territory":
        {
          if(!territory_code || territory_code.length === 0){
            throw new Error("territoryCode is required");
          }
          await Territory.destroy({
            where: { company_code: requestUser.company_code, territory_code: territory_code},
          });
        }
        break;
      case "currency":
        {
          if(!curr_code || curr_code.length === 0){
            throw new Error("currencyCode is required");
          }
          await Currency.destroy({
            where: { company_code: requestUser.company_code, curr_code:curr_code },
          });
        }
        break;
      case "salesman":{
        if(!salesman_code || salesman_code.length === 0){
          throw new Error("salesmanCode is required");
        }
        await Salesman.destroy({
          where: { company_code: requestUser.company_code, salesman_code:salesman_code },
        });
      }
      break;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: `${master} is successfully deleted`,
    });
   return;
  } catch (error:any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
}