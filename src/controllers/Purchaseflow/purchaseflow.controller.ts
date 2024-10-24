import { Response } from "express";
import { RequestWithUser } from "../../interfaces/cmmon.interface";

import { IUser } from "../../interfaces/user.interface";

import Costmaster from "../../models/Purchaseflow/costmaster_pf.model";

import VProjectmaster from "../../models/Purchaseflow/projectmaster_pf_view.model";
import Itemmaster_pf from "../../models/Purchaseflow/itemmaster_pf_model";
import Divisionmaster from "../../models/Purchaseflow/divisionmaster_pf.model";

import constants from "../../helpers/constants";

import {
  ICostmaster,
  IItemtmaster,
} from "../../interfaces/Purchaseflow/Purucahseflow.interface";
import { IVProjectmaster } from "../../interfaces/Purchaseflow/Purucahseflow.interface";
import { IDivisionmaster } from "../../interfaces/Purchaseflow/Purucahseflow.interface";
//import { QueryTypes, Sequelize } from "sequelize";
//import sequelize from "sequelize";
//import { sequelize } from "../../database/connection"

import { sequelize } from "../../database/connection";
import { Op, QueryTypes } from "sequelize";

// This is for Purchase flow module
export const getPfMaster = async (req: RequestWithUser, res: Response) => {
  try {
    console.log("Enter in this getPfFunction today function..");
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = Number(page * limit - limit);
    let fetchedData: unknown[] = [];
    switch (master) {
      case "division":
        console.log("inside division");
        {
          (fetchedData = await Divisionmaster.findAll({
            where: { company_code: requestUser.company_code },
            offset: skip,
            limit: limit,
          })) as unknown[] as IDivisionmaster[];
        }
        break;
      case "costmaster":
        {
          (fetchedData = await Costmaster.findAll({
            where: { company_code: requestUser.company_code },
            offset: skip,
            limit: limit,
          })) as unknown[] as ICostmaster[];
        }
        break;

      case "projectmaster":
        console.log(
          "Enter in this getPfFunction today function projectmaster.."
        );
        /*   let viewdata: any[] = [];
        const query =
          "select project_code, project_name, div_name, total_project_cost from VW_MS_PS_PROJECT_MASTER where company_code = :company_code";

        viewdata = await sequelize.query(query, {
          replacements: {
            company_code: requestUser.company_code,
          },
          type: QueryTypes.SELECT,
        });

        fetchedData = viewdata;*/

        {
          (fetchedData = await VProjectmaster.findAll({
            where: { company_code: requestUser.company_code },
            offset: skip,
            limit: limit,
          })) as unknown[] as IVProjectmaster[];
        }
        break;
      case "itemmaster":
        {
          (fetchedData = await Itemmaster_pf.findAll({
            where: { company_code: requestUser.company_code },
            offset: skip,
            limit: limit,
          })) as unknown[] as IItemtmaster[];
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
    const { cost_code } = req.body;
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
      case "project_code":
      /*  console.log("inside purchaseflow delete");
          {
            if (!cost_code || cost_code.length === 0) {
              throw new Error("flowCode is required");
            }
            await Projectmaster.destroy({
              where: {
                company_code: requestUser.company_code,
                project_code: project_code,
              },
            });
          }
          break;*/
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
