import { NextFunction, Response } from "express";
import { RequestWithUser } from "../interfaces/cmmon.interface";
import { IUser } from "../interfaces/user.interface";
import constants from "../helpers/constants";

export const checkPassword = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const requestUser: IUser = req.user;
  const activityPassword = req.body;
  if (requestUser.userpass !== req.body.userpass) {
    res.status(constants.STATUS_CODES.UNAUTHORIZED).json({
      success: false,
      message: constants.MESSAGES.UNAUTHORIZED,
    });
    return;
  }
  next();
};
