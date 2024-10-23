import { NextFunction, Response } from "express";
import { RequestWithUser } from "../interfaces/cmmon.interface";
import { IUser } from "../interfaces/user.interface";
import constants from "../helpers/constants";
import Company from "../models/wms/company_wms";

export const checkPassword = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const requestUser: IUser = req.user;
  const { activityPassword } = req.body;
  const company = await Company.findOne({
    where: { company_code: requestUser.company_code },
  });
  if (company?.dataValues.bill_auth_pwd !== activityPassword) {
    res.status(constants.STATUS_CODES.UNAUTHORIZED).json({
      success: false,
      message: constants.MESSAGES.UNAUTHORIZED,
    });
    return;
  }
  next();
};
