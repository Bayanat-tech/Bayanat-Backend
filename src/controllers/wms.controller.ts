import { Response } from "express";
import constants from "../helpers/constants";
import { RequestWithUser } from "../interfaces/cmmon.interfacte";
import { IUser } from "../interfaces/user.interface";
import { ICountry } from "../interfaces/wms/gm_wms.interface";
import { IDepartment } from "../interfaces/wms/department_wms.interface";
import { ITerritory } from "../interfaces/wms/territory_wms.interface";
import { ICurrency } from "../interfaces/wms/currency_wms.interface";
import { IIndustrysector } from "../interfaces/wms/gm_wms.interface";
import { IFlowmaster } from "../interfaces/Security/Security.interfae";
import { IRolemaster } from "../interfaces/Security/Security.interfae";
import { ICostmaster } from "../interfaces/Purchaseflow/Purucahseflow.interface";
import { ILocation } from "../interfaces/wms/location_wms.interface";

// Importing models for WMS master data
import Country from "../models/wms/country_wms.model";
import Department from "../models/wms/department_wms.model";
import Location from "../models/wms/location_wms.model";
import Currency from "../models/wms/currency_wms.model";
import Territory from "../models/wms/territory_wms.model";
import Salesman from "../models/wms/salesman_wms.model";
import Site from "../models/wms/site_wms.model";
import Storage from "../models/wms/storage_wms.model";

// --- Database sequelize import ---
import { sequelize } from "../database/connection";
import { QueryTypes } from "sequelize";

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
    switch (master) {
      case "country":
        {
          (fetchedData = await Country.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as ICountry[];
        }
        break;
      case "department":
        {
          (fetchedData = await Department.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as IDepartment[];
        }
        break;
      case "territory":
        {
          (fetchedData = await Territory.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as ITerritory[];
        }
        break;
      case "currency":
        {
          (fetchedData = await Currency.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as ICurrency[];
        }
        break;
      case "salesman":
        {
          fetchedData = await Salesman.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          });
        }
        break;
      case "site":
        {
          fetchedData = await Site.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          });
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

      case "storage":
        {
          fetchedData = await Storage.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          });
        }
        break;

      case "activity_billing":
        {
          const query = `
                SELECT
                  P.PRIN_NAME,
                  B.ACT_CODE,
                  A.ACTIVITY,
                  B.JOBTYPE
                FROM
                  MS_PRINCIPAL P
                JOIN
                  MS_ACTIVITY_BILLING B ON P.PRIN_CODE = B.PRIN_CODE
                JOIN
                  MS_ACTIVITY A ON B.ACT_CODE = A.ACTIVITY_CODE
                WHERE
                  P.COMPANY_CODE = :companyCode;
              `;

          const activityBillingData = await sequelize.query(query, {
            replacements: { companyCode: requestUser.company_code },
            type: QueryTypes.SELECT,
          });

          fetchedData = activityBillingData;
        }
        break;

      case "location":
        {
          (fetchedData = await Location.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as ILocation[];
        }
        break;
      
      case "uoc" :
      case "moc1":
      case "moc2":
        
      {
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
              COALESCE(mau.CHARGE_TYPE, ' ') = :charge_type
        AND mau.COMPANY_CODE = :company_code;
          `;
          const activityData = await sequelize.query(query, {
            replacements: {charge_type:master, company_code: requestUser.company_code },
            type: QueryTypes.SELECT,
          });
          fetchedData = activityData;
      }
     break;
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
export const deleteWmsMaster = async (req: RequestWithUser, res: Response) => {
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const {
      dept_code,
      country_code,
      territory_code,
      curr_code,
      salesman_code,
    } = req.body;
    switch (master) {
      case "country":
        {
          if (!country_code || country_code.length === 0) {
            throw new Error("countryCode is required");
          }
          await Country.destroy({
            where: {
              company_code: requestUser.company_code,
              country_code: country_code,
            },
          });
        }
        break;
      case "department":
        {
          if (!dept_code || dept_code.length === 0) {
            throw new Error("departmentCode is required");
          }
          await Department.destroy({
            where: {
              company_code: requestUser.company_code,
              dept_code: dept_code,
            },
          });
        }
        break;
      case "department":
        {
          if (!dept_code || dept_code.length === 0) {
            throw new Error("departmentCode is required");
          }
          await Department.destroy({
            where: {
              company_code: requestUser.company_code,
              dept_code: dept_code,
            },
          });
        }
        break;

      case "location":
        {
          if (!dept_code || dept_code.length === 0) {
            throw new Error("location Code is required");
          }
          await Location.destroy({
            where: {
              company_code: requestUser.company_code,
              location_code: dept_code,
            },
          });
        }
        break;

      case "territory":
        {
          if (!territory_code || territory_code.length === 0) {
            throw new Error("territoryCode is required");
          }
          await Territory.destroy({
            where: {
              company_code: requestUser.company_code,
              territory_code: territory_code,
            },
          });
        }
        break;
      case "currency":
        {
          if (!curr_code || curr_code.length === 0) {
            throw new Error("currencyCode is required");
          }
          await Currency.destroy({
            where: {
              company_code: requestUser.company_code,
              curr_code: curr_code,
            },
          });
        }
        break;
      case "salesman":
        {
          if (!salesman_code || salesman_code.length === 0) {
            throw new Error("salesmanCode is required");
          }
          await Salesman.destroy({
            where: {
              company_code: requestUser.company_code,
              salesman_code: salesman_code,
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
