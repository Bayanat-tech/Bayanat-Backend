import { Response } from "express";
import { Op } from "sequelize";
import constants from "../../helpers/constants";
import { RequestWithUser } from "../../interfaces/cmmon.interfacte";
import { IUser } from "../../interfaces/user.interface";
import Group from "../../models/wms/productgroup_wms.model";
import { groupSchema } from "../../validation/wms/gm.validation";

export const createGroup = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = groupSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { group_code, company_code } = req.body;

    const group = await Group.findOne({
      where: {
        [Op.and]: [{ company_code: company_code }, { group_code: group_code }],
      },
    });

    if (group) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.GROUP_WMS.GROUP_ALREADY_EXISTS,
      });
      return;
    }
    const createGroup = await Group.create({
      company_code,
      created_by: requestUser.loginid,
      updated_by: requestUser.loginid,

      ...req.body,
    });
    if (!createGroup) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while creating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.GROUP_WMS.GROUP_CREATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
export const updateGroup = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = groupSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { group_code, company_code } = req.body;

    const group = await Group.findOne({
      where: {
        [Op.and]: [{ company_code: company_code }, { group_code: group_code }],
      },
    });

    if (!group) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.GROUP_WMS.GROUP_DOES_NOT_EXISTS,
      });
      return;
    }
    const createGroup = await Group.update(
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
            { group_code: group_code },
          ],
        },
      }
    );
    if (!createGroup) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while updating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.GROUP_WMS.GROUP_UPDATED_SUCCESSFULLY,
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
    const groupiesCode = req.body;

    if (!req.body.length) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.GROUP_WMS.SELECT_AT_LEAST_ONE_GROUP,
      });
      return;
    }
    const countriesDeleteResponse = await Group.destroy({
      where: {
        group_code: groupiesCode,
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
      message: constants.MESSAGES.GROUP_WMS.GROUP_DELETED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
