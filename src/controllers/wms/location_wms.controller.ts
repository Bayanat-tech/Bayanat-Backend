import { Response } from "express";
import { Op } from "sequelize";
import constants from "../../helpers/constants";
import { RequestWithUser } from "../../interfaces/cmmon.interfacte";
import { IUser } from "../../interfaces/user.interface";
import Location from "../../models/wms/location_wms.model";
import { locationSchema } from "../../validation/wms/location.validation";

export const createLocation = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = locationSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { location_code, company_code } = req.body;

    const location = await Location.findOne({
      where: {
        [Op.and]: [
          { company_code: company_code },
          { location_code: location_code },
        ],
      },
    });

    if (location) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.COUNTRY_WMS.COUNTRY_ALREADY_EXISTS,
      });
      return;
    }
    const createLocation = await Location.create({
      company_code,
      created_by: requestUser.loginid,
      updated_by: requestUser.loginid,

      ...req.body,
    });
    if (!createLocation) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while creating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.COUNTRY_WMS.COUNTRY_CREATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
export const updateLocation = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = locationSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { location_code, company_code } = req.body;

    const location = await Location.findOne({
      where: {
        [Op.and]: [
          { company_code: company_code },
          { location_code: location_code },
        ],
      },
    });

    if (!location) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.COUNTRY_WMS.COUNTRY_DOES_NOT_EXISTS,
      });
      return;
    }
    const createLocation = await Location.update(
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
            { location_code: location_code },
          ],
        },
      }
    );
    if (!createLocation) {
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
export const deleteCountries = async (req: RequestWithUser, res: Response) => {
  try {
    const locationsCode = req.body;

    if (!req.body.length) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.LOCATION_WMS.SELECT_AT_LEAST_ONE_LOCATION,
      });
      return;
    }
    const locationsDeleteResponse = await Location.destroy({
      where: {
        location_code: locationsCode,
      },
    });
    if (locationsDeleteResponse === 0) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: locationsDeleteResponse,
      });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.COUNTRY_WMS.COUNTRY_DELETED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
