import { Response } from "express";
import constants from "../helpers/constants";
import { RequestWithUser } from "../interfaces/cmmon.interface";
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
import { IActivityGroup } from "../interfaces/wms/activitygroup_wms.interface";

// Importing models for WMS master data
import Country from "../models/wms/country_wms.model";
import Department from "../models/wms/department_wms.model";
import Location from "../models/wms/location_wms.model";
import Currency from "../models/wms/currency_wms.model";
import Territory from "../models/wms/territory_wms.model";
import Salesman from "../models/wms/salesman_wms.model";
import Site from "../models/wms/site_wms.model";
import Storage from "../models/wms/storage_wms.model";
import activitygroup from "../models/wms/activitygroup_wms.model";

// --- Database sequelize import ---
import { sequelize } from "../database/connection";
import { Op, QueryTypes } from "sequelize";
import PrincipalWmsView from "../models/wms/principal_wms.view.model";
import Principal from "../models/wms/principal_wms.model";

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
      //----------------------wms----------------
      //---------------gm----------
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
      case "principal": {
        fetchedData = await PrincipalWmsView.findAll({
          where: {
            [Op.and]: [
              { company_code: requestUser.company_code },
              { user_id: requestUser.loginid },
            ],
          },
          ...paginationOptions,
        });
        break;
      }
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
      case "activitygroup":
        {
          (fetchedData = await activitygroup.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as IActivityGroup[];
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
    const { ids } = req.body;
    if (!ids || ids.length === 0) {
      throw new Error("countryCode is required");
    }
    switch (master) {
      case "country":
        {
          await Country.destroy({
            where: {
              company_code: requestUser.company_code,
              country_code: ids,
            },
          });
        }
        break;
      case "principal":
        {
          await Principal.destroy({
            where: {
              company_code: requestUser.company_code,
              prin_code: ids,
            },
          });
        }
        break;
      case "activitygroup":
      {
          await activitygroup.destroy({
            where: {
              company_code: requestUser.company_code,
              activity_group_code: ids,
            },
          });
        }
        break;
        break;
      case "department":
        {
          await Department.destroy({
            where: {
              company_code: requestUser.company_code,
              dept_code: ids,
            },
          });
        }
        break;
      case "territory":
        {
          await Territory.destroy({
            where: {
              company_code: requestUser.company_code,
              territory_code: ids,
            },
          });
        }
        break;
      case "currency":
        {
          await Currency.destroy({
            where: {
              company_code: requestUser.company_code,
              curr_code: ids,
            },
          });
        }
        break;
      case "salesman":
        {
          await Salesman.destroy({
            where: {
              company_code: requestUser.company_code,
              salesman_code: ids,
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
