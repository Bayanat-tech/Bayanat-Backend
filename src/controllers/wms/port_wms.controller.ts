import { Response } from "express";
import { Op } from "sequelize";
import constants from "../../helpers/constants";
import { RequestWithUser } from "../../interfaces/cmmon.interfacte";
import { IUser } from "../../interfaces/user.interface";
import { portSchema } from "../../validation/wms/gm.validation";
import Port from "../../models/wms/port_wms.model";

export const createPort = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = portSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { port_code, company_code } = req.body;

    const port = await Port.findOne({
      where: {
        [Op.and]: [{ company_code: company_code }, { port_code: port_code }],
      },
    });

    if (port) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.PORT_WMS.PORT_ALREADY_EXISTS,
      });
      return;
    }
    const createPort = await Port.create({
      company_code,
      created_by: requestUser.loginid,
      updated_by: requestUser.loginid,

      ...req.body,
    });
    if (!createPort) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while creating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.PORT_WMS.PORT_CREATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
export const updatePort = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = portSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { port_code, company_code } = req.body;

    const port = await Port.findOne({
      where: {
        [Op.and]: [{ company_code: company_code }, { port_code: port_code }],
      },
    });

    if (!port) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.PORT_WMS.PORT_DOES_NOT_EXISTS,
      });
      return;
    }
    const createPort = await Port.update(
      {
        company_code,
        created_by: requestUser.loginid,
        updated_by: requestUser.loginid,

        ...req.body,
      },
      {
        where: {
          [Op.and]: [{ company_code: company_code }, { port_code: port_code }],
        },
      }
    );
    if (!createPort) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while updating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.PORT_WMS.PORT_UPDATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
export const deletePorts = async (req: RequestWithUser, res: Response) => {
  try {
    const PortsCode = req.body;

    if (!req.body.length) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.PORT_WMS.SELECT_AT_LEAST_ONE_PORT,
      });
      return;
    }
    const PortsDeleteResponse = await Port.destroy({
      where: {
        port_code: PortsCode,
      },
    });
    if (PortsDeleteResponse === 0) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: PortsDeleteResponse,
      });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.PORT_WMS.PORT_DELETED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
