import { Response } from "express";
import constants from "../helpers/constants";
import { RequestWithUser } from "../interfaces/cmmon.interface";
import { IUser } from "../interfaces/user.interface";
import { ICountry, IMoc2 } from "../interfaces/wms/gm_wms.interface";
import { IDepartment } from "../interfaces/wms/department_wms.interface";
import { ITerritory } from "../interfaces/wms/territory_wms.interface";
import { ICurrency } from "../interfaces/wms/currency_wms.interface";
import { IIndustrysector } from "../interfaces/wms/gm_wms.interface";
import { IFlowmaster } from "../interfaces/Security/Security.interfae";
import { IRolemaster } from "../interfaces/Security/Security.interfae";
import { ICostmaster } from "../interfaces/Purchaseflow/Purucahseflow.interface";
import { ILocation } from "../interfaces/wms/location_wms.interface";
import { IUom } from "../interfaces/wms/gm_wms.interface";
import { IMoc } from "../interfaces/wms/gm_wms.interface";
import { IHarmonize } from "../interfaces/wms/harmonize.interface";
import { IActivity } from "../interfaces/wms/activity_wms.interface";
import { IActivityUoc } from "../interfaces/wms/activity_uoc_wms.interface";

// Importing models for WMS master data
import Country from "../models/wms/country_wms.model";
import Department from "../models/wms/department_wms.model";
import Location from "../models/wms/location_wms.model";
import Currency from "../models/wms/currency_wms.model";
import Territory from "../models/wms/territory_wms.model";
import Salesman from "../models/wms/salesman_wms.model";
import Site from "../models/wms/site_wms.model";
import Storage from "../models/wms/storage_wms.model";
import Uom from "../models/wms/uom_wms.model";
import Moc from "../models/wms/moc_wms.model";
import Harmonize from "../models/wms/harmonize_code.model";
import Activitysubgroup from "../models/wms/activity_subgroup.model";

import ActivityBillingTable from "../models/wms/activity_billing_table_wms";
import Activity from "../models/wms/activity_wms.model";
import ActivityUoc from "../models/wms/activity_uoc.model";

// --- Database sequelize import ---
import { sequelize } from "../database/connection";
import { Op, QueryTypes } from "sequelize";
import PrincipalWmsView from "../models/wms/principal_wms.view.model";
import Principal from "../models/wms/principal_wms.model";
import activitygroup from "../models/wms/activitygroup_wms.model";
import { IActivityGroup } from "../interfaces/wms/activitygroup_wms.interface";
import { activitysubgroupSchema } from "../validation/wms/gm.validation";
import { IActivitysubgroup } from "../interfaces/wms/activity_subgroup_wms.interface";

// Retrieves master data (country, department, territory, etc.) with optional pagination based on the `master` type.
export const getWmsMaster = async (req: RequestWithUser, res: Response) => {
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const principalCode = req.query.prin_code;
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
      case "activitysubgroup":
        {
          (fetchedData = await Activitysubgroup.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as IActivitysubgroup[];
        }
        break;

      case "billingactivity":
        {
          if (principalCode) {
            fetchedData = await ActivityBillingTable.findAll({
              where: {
                company_code: requestUser.company_code,
                prin_code: principalCode,
                user_id: requestUser.loginid,
              },
              ...paginationOptions,
            });
          } else {
            fetchedData = await ActivityBillingTable.findAll({
              where: {
                company_code: requestUser.company_code,
                user_id: requestUser.loginid,
              },
              ...paginationOptions,
            });
          }
        }
        break;

      case "activity": {
        console.log("Enter in activity", master);

        // Fetching data using the Activity model
        fetchedData = (await Activity.findAll({
          attributes: ["activity_code", "activity", "activity_group_code"],
          where: {
            company_code: requestUser.company_code,
          },
          ...paginationOptions,
        })) as unknown[] as IActivity[];

        break;
      }
      case "location":
        {
          (fetchedData = await Location.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as ILocation[];
        }
        break;
      case "uom":
        {
          (fetchedData = await Uom.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as IUom[];
        }
        break;
      case "harmonize":
        {
          console.log("i am sagar");
          (fetchedData = await Harmonize.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as IHarmonize[];
        }
        break;

      case "uoc":
      case "moc1":
      case "moc2":
        {
          fetchedData = (await ActivityUoc.findAll({
            attributes: [
              "company_code",
              "charge_type",
              "charge_code",
              "description",
              "activity_group_code",
            ],
            where: {
              company_code: requestUser.company_code,
              charge_type: master ? master : " ",
            },
            ...paginationOptions,
          })) as IActivityUoc[];
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
