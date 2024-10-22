import { Response } from "express";
import { Op } from "sequelize";
import constants from "../../helpers/constants";
import { RequestWithUser } from "../../interfaces/cmmon.interface";
import { IUser } from "../../interfaces/user.interface";
import secmaster from "../../models/Security/seclogin_security.model";
import { secmasterSchema } from "../../validation/Security/Security.validation"; 


export const createsecmaster  = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = secmasterSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { id, username, contact_no, email_id, userpass,company_code } = req.body;

    const secmasterData  = await secmaster.findOne({
      where: {
       [Op.and]: [
          { company_code: company_code },
          { id: id },
          { contact_no: contact_no},
          { email_id : email_id},
          { userpass : userpass},
          { username : username},
        ],
      },
    });

    if (secmasterData ) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
         message: constants.MESSAGES.ROLEMASTER_WMS.ROLEMASTER_ALREADY_EXISTS,
      });
      return;
    }
    const createrolemaster  = await secmaster.create({
      company_code,
      id,
      contact_no,
      email_id,
      username,
      userpass,
      created_by: requestUser.loginid,
      updated_by: requestUser.loginid

    });
    if (!createrolemaster ) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while Industry Sector" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
          message: constants.MESSAGES.ROLEMASTER_WMS.ROLEMASTER_CREATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
export const updatesecmaster  = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;

    const { error } = secmasterSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { id, company_code} = req.body;

    const secmasterData  = await secmaster.findOne({
      where: {
        [Op.and]: [
          { company_code: company_code },
          { id: id },
        ],
      },
    });

    if (!secmasterData ) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
   	message: constants.MESSAGES.ROLEMASTER_WMS.ROLEMASTER_DOES_NOT_EXISTS,
        
      });
      return;
    }
    const createsecmaster  = await secmaster.update(
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
            { id: id },
          ],
        },
      }
    );
    if (!createsecmaster ) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while updating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.ROLEMASTER_WMS.ROLEMASTER_UPDATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
export const deletesecmaster = async (req: RequestWithUser, res: Response) => {
  try {
    const rolemastercode = req.body;

    if (!req.body.length) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
         message: constants.MESSAGES.ROLEMASTER_WMS.SELECT_AT_LEAST_ONE_ROLEMASTER,
      });
      return;
    }
    const RolemasterDeleteResponse = await secmaster.destroy({
      where: {
        id: rolemastercode,
      },
    });
    if (RolemasterDeleteResponse === 0) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: RolemasterDeleteResponse,
      });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
   message: constants.MESSAGES.ROLEMASTER_WMS.ROLEMASTER_DELETED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
