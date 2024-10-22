import { Response } from "express";
import { RequestWithUser } from "../../interfaces/cmmon.interface";
import { IUser } from "../../interfaces/user.interface";
import constants from "../../helpers/constants";
import {
  IFlowmaster,
  ISecmodule,
} from "../../interfaces/Security/Security.interfae";
import { IRolemaster } from "../../interfaces/Security/Security.interfae";
import { ISecmaster } from "../../interfaces/Security/Security.interfae";

// Importing models for WMS master data
import Rolemaster from "../../models/Security/rolemaster_security.model";
import Flowmaster from "../../models/Security/flowmaster_security.model";
import secmaster from "../../models/Security/seclogin_security.model";
import secmodule from "../../models/Security/secmodule_security.model";

// Retrieves master data (country, department, territory, etc.) with optional pagination based on the `master` type.
export const getSecMaster = async (req: RequestWithUser, res: Response) => {
  console.error("getSecMaster");
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
          console.log("test2");
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
      case "seclogin":
        {
          (fetchedData = await secmaster.findAll({
            where: { company_code: requestUser.company_code },
            ...paginationOptions,
          })) as unknown[] as ISecmaster[];
        }
        break;
      case "secmoduledata": {
        (fetchedData = await secmodule.findAll({
          where: { company_code: requestUser.company_code },
          ...paginationOptions,
        })) as unknown[] as ISecmodule[];
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
// export const deletesecMaster = async (req: RequestWithUser, res: Response) => {
//   console.log(req.body);
//   try {
//     const { master } = req.params;
//     const requestUser: IUser = req.user;
//     const { ids } = req.body;
//     if (!ids || ids.length === 0) {
//       throw new Error("Code is required");
//     }

//     switch (master) {
//       case "flow_code":
//         console.log("inside security delete");
//         {
//           await Flowmaster.destroy({
//             where: {
//               company_code: requestUser.company_code,
//               country_code: ids,
//             },
//           });
//         }
//         break;
//       case "rolemaster":
//         {
//            await rolemaster.destroy({
//              where: {
//                company_code: requestUser.company_code,
//                : ids,
//              },
//            });
//         }
//         break;
//       case "seclogin":
//         {
//            await .destroy({
//              where: {
//                company_code: requestUser.company_code,
//                country_code: ids,
//              },
//            });
//         }
//         break;
//     }
//     res.status(constants.STATUS_CODES.OK).json({
//       success: true,
//       message: `${master} is successfully deleted`,
//     });
//     return;
//   } catch (error: any) {
//     res
//       .status(constants.STATUS_CODES.BAD_REQUEST)
//       .json({ success: false, message: error.message });
//     return;
//   }
// };
// //-----
// export const deleteWmsMaster = async (req: RequestWithUser, res: Response) => {
//   try {
//     const { master } = req.params;
//     const requestUser: IUser = req.user;
//     const { ids } = req.body;
//     if (!ids || ids.length === 0) {
//       throw new Error("countryCode is required");
//     }
//     switch (master) {
//       case "country":
//         {
//           await Country.destroy({
//             where: {
//               company_code: requestUser.company_code,
//               country_code: ids,
//             },
//           });
//         }
//         break;
//       case "principal":
//         {
//           await Principal.destroy({
//             where: {
//               company_code: requestUser.company_code,
//               prin_code: ids,
//             },
//           });
//         }
//         break;
//       case "activitygroup":
//         {
//           await activitygroup.destroy({
//             where: {
//               company_code: requestUser.company_code,
//               activity_group_code: ids,
//             },
//           });
//         }
//         break;
//         break;
//       case "department":
//         {
//           await Department.destroy({
//             where: {
//               company_code: requestUser.company_code,
//               dept_code: ids,
//             },
//           });
//         }
//         break;
//       case "territory":
//         {
//           await Territory.destroy({
//             where: {
//               company_code: requestUser.company_code,
//               territory_code: ids,
//             },
//           });
//         }
//         break;
//       case "currency":
//         {
//           await Currency.destroy({
//             where: {
//               company_code: requestUser.company_code,
//               curr_code: ids,
//             },
//           });
//         }
//         break;
//       case "salesman":
//         {
//           await Salesman.destroy({
//             where: {
//               company_code: requestUser.company_code,
//               salesman_code: ids,
//             },
//           });
//         }
//         break;
//     }
//     res.status(constants.STATUS_CODES.OK).json({
//       success: true,
//       message: `${master} is successfully deleted`,
//     });
//     return;
//   } catch (error: any) {
//     res
//       .status(constants.STATUS_CODES.BAD_REQUEST)
//       .json({ success: false, message: error.message });
//     return;
//   }
// };
