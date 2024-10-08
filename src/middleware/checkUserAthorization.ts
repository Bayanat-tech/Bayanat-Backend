import { NextFunction, Response } from "express";
import { RequestWithUser } from "../interfaces/cmmon.interfacte";
import { IUser } from "../interfaces/user.interface";
import constants from "../helpers/constants";

export const checkUserAuthorization = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const requestUser: IUser = req.user;

  if (requestUser.active_flag === "N") {
    res.status(constants.STATUS_CODES.NOT_FOUND).json({
      success: false,
      message: constants.MESSAGES.USER.USER_NOT_FOUND,
    });
    return;
  }

  if (requestUser.no_of_days === 0) {
    res.status(constants.STATUS_CODES.NOT_FOUND).json({
      success: false,
      message: constants.MESSAGES.USER.USER_NOT_FOUND,
    });
    return;
  }

  next();
};
