import { Response } from "express";
import { RequestWithUser } from "../../interfaces/cmmon.interfacte";
import { IUser } from "../../interfaces/user.interface"
import constants from "../../helpers/constants";
import { IFlowmaster } from "../../interfaces/Security/Security.interfae";
import { IRolemaster } from "../../interfaces/Security/Security.interfae";


// Importing models for WMS master data
import Rolemaster from "../../models/Security/rolemaster_security..model";
import Flowmaster from "../../models/Security/flowmaster_security.model";
import { Console } from "console";


// Retrieves master data (country, department, territory, etc.) with optional pagination based on the `master` type.
export const getSecMaster = async (req: RequestWithUser, res: Response) => {
  console.error('getSecMaster');
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = Number(page * limit - limit);
    let fetchedData: unknown[] = [];
    const paginationOptions = limit ? { offset: skip, limit: limit } : {};
    
    
    switch (master) {
      case "flowmaster":
        {
          console.log('test2');
          (fetchedData = await Flowmaster.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as IFlowmaster[];
        }
        break;
      case "rolemaster":
        {
          (fetchedData = await Rolemaster.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as IRolemaster[];
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
export const deletesecMaster = async (req: RequestWithUser, res: Response) => {
  console.log(req.body);
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const {
      flow_code
      
    } = req.body;
    
    switch (master) {
      case "flow_code":
        console.log("inside security delete");
        {
          if (!flow_code || flow_code.length === 0) {
            throw new Error("flowCode is required");
          }
          await Flowmaster.destroy({
            where: {
              company_code: requestUser.company_code,
              flow_code: flow_code,
            },
          });
        }
        break;
     /* case "role_id":
        {
          if (!role_id || role_id.length === 0) {
            throw new Error("roleCode is required");
          }
          await Rolemaster.destroy({
            where: {
              company_code: requestUser.company_code,
              role_id: role_id,
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
