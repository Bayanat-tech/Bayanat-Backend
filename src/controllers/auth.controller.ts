import { Request, Response } from "express";
import { Op, QueryTypes } from "sequelize";
import constants from "../helpers/constants";
import {
  buildTree,
  comparePassword,
  generateToken,
} from "../helpers/functions";
import { loginSchema } from "../validation/auth.validation";
import { sequelize } from "../database/connection";
import User from "../models/user";
import { permissionsListQuery, userPermissionQuery } from "../utils/query";
import { StructuredResult } from "../interfaces/auth.interface";
import { RequestWithUser } from "../interfaces/cmmon.interfacte";

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
      data: { token },
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

export const me = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser = req.user;

    if (!requestUser) {
      res.status(constants.STATUS_CODES.UNAUTHORIZED).json({
        success: false,
        message: constants.MESSAGES.USER.USER_NOT_FOUND,
      });
      return;
    }

    const user = await User.findOne({
      where: { email_id: requestUser.email_id },
      attributes: { exclude: ["userpass"] },
    });

    if (!user) {
      res.status(constants.STATUS_CODES.NOT_FOUND).json({
        success: false,
        message: constants.MESSAGES.USER.USER_NOT_FOUND,
      });
      return;
    }

    //-----------list of all permissions that user have------output:[1,42,3,4,66]
    let userSerialNumber: { serial_numbers: string }[] = await sequelize.query(
      userPermissionQuery,
      {
        type: QueryTypes.SELECT,
        replacements: { loginid: user.dataValues.loginid }, // Replace with the actual login ID
      }
    );

    const user_permission =
      userSerialNumber[0]?.serial_numbers
        ?.split(",")
        ?.filter(Boolean)
        ?.map(Number) ?? [];

    //----------------------list of all permission that  a application will have--------output:wms:{serial_no:1,app_code:"WMS",childer:{}}
    const allPermissions: {
      menu: string;
      serial_no: string;
      app_code: string;
    }[] = await sequelize.query(permissionsListQuery, {
      type: QueryTypes.SELECT,
    });

    const permissions: StructuredResult =
      allPermissions.reduce((acc, curr) => {
        const { menu, serial_no, app_code } = curr;

        const serialNumber = Number(serial_no);

        if (serialNumber > 0) {
          if (!acc[app_code]) {
            acc[app_code] = {
              serial_number: serialNumber,
              app_code: app_code,
              children: {},
            };
          }

          if (menu !== app_code) {
            acc[app_code].children[menu] = {
              serial_number: serialNumber,
              app_code,
            };
          }
        }

        return acc;
      }, {} as StructuredResult) ?? {};

    //--------------tree view -----------------
    let permissionBasedMenuTree = {};
    if (user_permission) {
      const menuTreeQuery = `SELECT * FROM SEC_MODULE_DATA
      WHERE SERIAL_NO IN (${user_permission
        ?.map((sn) => `'${sn}'`)
        .join(",")})`;

      const menuTreeData = await sequelize.query<any>(menuTreeQuery, {
        type: QueryTypes.SELECT,
      });

      if (menuTreeData)
        permissionBasedMenuTree = buildTree(menuTreeData, permissions);
    }

    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      data: {
        user,
        permissionBasedMenuTree,
        permissions,
        user_permission,
      },
    });
    return;
  } catch (error: any) {
    res.status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
    return;
  }
};
