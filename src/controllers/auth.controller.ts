import { Request, Response } from "express";
import { Op } from "sequelize";
import constants from "../helpers/constants";
import { comparePassword, generateToken } from "../helpers/functions";
import { loginSchema } from "../validation/auth.validation";

import User from "../models/user";
import { RequestWithUser } from "../interfaces/request.interface";

export const login = async (req: Request, res: Response) => {
  try {
    const { error } = loginSchema(req.body);
    if (error) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: error.message,
      });
      return;
    }
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        [Op.or]: [{ email_id: email }, { loginid: email }],
      },
    });
    if (!user) {
      res.status(constants.STATUS_CODES.NOT_FOUND).json({
        message: "User does not exist.",
        success: false,
      });
      return;
    }
    const { userpass } = user.dataValues;

    const isPassowordMatched = await comparePassword({
      password,
      hashedPassword: userpass,
    });

    if (!isPassowordMatched) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: true,
        message: constants.MESSAGES.USER.INVALID_PASSWORD,
      });
      return;
    }
    const token = await generateToken({
      username: user.dataValues.username,
      email_id: user.dataValues.email_id,
      loginid: user.dataValues.loginid,
    });

    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      data: { user, token },
    });
    return;
  } catch (err: any) {
    res.status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "An error occurred",
      error: err.message || err,
    });
    return;
  }
};

export const me = async (req: RequestWithUser, res: any) => {
  try {
    const requestUser = req.user;
    console.log("user", requestUser);

    if (!requestUser) {
      return res.status(constants.STATUS_CODES.UNAUTHORIZED).json({
        success: false,
        message: "User is not authenticated",
      });
    }

    const user: User | null = await User.findOne({
      where: { email_id: requestUser.email_id },
    });

    if (!user) {
      return res.status(constants.STATUS_CODES.NOT_FOUND).json({
        success: false,
        message: constants.MESSAGES.USER.USER_NOT_FOUND,
      });
    }

    return res.status(constants.STATUS_CODES.OK).json({
      success: true,
      data: {
        user,
        // Add other properties if necessary
      },
    });
  } catch (error: any) {
    return res.status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
