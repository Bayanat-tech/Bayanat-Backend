import { Response } from "express";
import { Op } from "sequelize";
import constants from "../../helpers/constants";
import { RequestWithUser } from "../../interfaces/cmmon.interfacte";
import { IUser } from "../../interfaces/user.interface";
import Pickwave from "../../models/wms/pickwave_wms.model";
import { pickwaveSchema } from "../../validation/wms/gm.validation"; 

export const createPickwave = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = pickwaveSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { wave_code, company_code } = req.body;

    const pickwave = await Pickwave.findOne({
      where: {
        [Op.and]: [
          { wave_code: wave_code }, 
          { company_code: company_code },
         
        ],
      },
    });

    if (!Pickwave) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.PICKWAVEMASTER_WMS.PICKWAVEMASTER_ALREADY_EXISTS,
      });
      return;
    }
    const createPickwave = await Pickwave.create({
      company_code,
      wave_code,
      created_by: requestUser.loginid,
      updated_by: requestUser.loginid,

      ...req.body,
    });
    if (!createPickwave) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while creating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.PICKWAVEMASTER_WMS.PICKWAVEMASTER_CREATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
export const updatePickwave = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = pickwaveSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { wave_code, company_code } = req.body;

    const pickwave = await Pickwave.findOne({
      where: {
        [Op.and]: [
          { company_code: company_code },
          { wave_code: wave_code },
        ],
      },
    });

    if (!pickwave) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.PICKWAVEMASTER_WMS.PICKWAVEMASTER_CREATED_SUCCESSFULLY,
      });
      return;
    }
    const createPickwave = await Pickwave.update(
      {
        company_code,
        wave_code,
        created_by: requestUser.loginid,
        updated_by: requestUser.loginid,

        ...req.body,
      },
      {
        where: {
          [Op.and]: [
            { company_code: company_code },
            { wave_code: wave_code},
          ],
        },
      }
    );
    if (!createPickwave) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while updating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.COUNTRY_WMS.COUNTRY_UPDATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
// export const deleteCountries = async (req: RequestWithUser, res: Response) => {
//   try {
//     const pickwavesCode = req.body;

//     if (!req.body.length) {
//       res.status(constants.STATUS_CODES.BAD_REQUEST).json({
//         success: false,
//         message: constants.MESSAGES.COUNTRY_WMS.SELECT_AT_LEAST_ONE_COUNTRY,
//       });
//       return;
//     }
//     const pickwaveDeleteResponse = await Pickwave.destroy({
//       where: {
//         wave_code: pickwavesCode,
//       },
//     });
//     if (pickwaveDeleteResponse === 0) {
//       res.status(constants.STATUS_CODES.BAD_REQUEST).json({
//         success: false,
//         message: pickwaveDeleteResponse,
//       });
//       return;
//     }
//     res.status(constants.STATUS_CODES.OK).json({
//       success: true,
//       message: constants.MESSAGES.PICKWAVEMASTER_WMS.PICKWAVEMASTER_DELETED_SUCCESSFULLY,
//     });
//     return;
//   } catch (error: any) {
//     res
//       .status(constants.STATUS_CODES.BAD_REQUEST)
//       .json({ success: false, message: error.message });
//     return;
//   }
// };
