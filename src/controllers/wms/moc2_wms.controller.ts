import { Response } from "express";
import { Op } from "sequelize";
import constants from "../../helpers/constants";
import { RequestWithUser } from "../../interfaces/cmmon.interfacte";
import { IUser } from "../../interfaces/user.interface";
import moc2 from "../../models/wms/moc2_wms.model";
import { moc2Schema } from "../../validation/wms/gm.validation";

export const createMoc2 = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = moc2Schema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { charge_code, company_code } = req.body;

    const moc = await moc2.findOne({
      where: {
        [Op.and]: [
          { company_code: company_code },
          { charge_code: charge_code },
        ],
      },
    });

    if (moc) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.UOM_WMS.UOM_ALREADY_EXISTS,
      });
      return;
    }
    const createMoc = await moc2.create({
      company_code,
      created_by: requestUser.loginid,
      updated_by: requestUser.loginid,

      ...req.body,
    });
    if (!createMoc) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while creating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.UOM_WMS.UOM_CREATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
export const updateMoc2 = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = moc2Schema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { charge_code, company_code } = req.body;

    const moc = await moc2.findOne({
      where: {
        [Op.and]: [
          { company_code: company_code },
          { charge_code: charge_code },
        ],
      },
    });

    if (!moc) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.UOM_WMS.UOM_DOES_NOT_EXISTS,
      });
      return;
    }
    const createMoc = await moc2.update(
      {
        company_code,
        created_by: requestUser.loginid,
        updated_by: requestUser.loginid,

        ...req.body,
      },
      {
        where: {
          [Op.and]: [
            { company_code: company_code },
            { charge_code: charge_code },
          ],
        },
      }
    );
    if (!createMoc) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while updating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.UOM_WMS.UOM_UPDATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
export const deleteCountries = async (req: RequestWithUser, res: Response) => {
  try {
    const countriesCode = req.body;

    if (!req.body.length) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.UOM_WMS.SELECT_AT_LEAST_ONE_UOM,
      });
      return;
    }
    const countriesDeleteResponse = await moc2.destroy({
      where: {
        charge_code: countriesCode,
      },
    });
    if (countriesDeleteResponse === 0) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: countriesDeleteResponse,
      });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.UOM_WMS.UOM_DELETED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
