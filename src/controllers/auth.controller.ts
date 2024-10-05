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

export const me = async (req: RequestWithUser, res: any) => {
  try {
    const requestUser = req.user;

    if (!requestUser) {
      return res.status(constants.STATUS_CODES.UNAUTHORIZED).json({
        success: false,
        message: "User is not authenticated",
      });
    }

    const user: User | null = await User.findOne({
      where: { email_id: requestUser.email_id },
      attributes: { exclude: ["userpass"] },
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
        permissionBasedMenuTree: [
          {
            id: "1",
            title: "WMS",
            type: "collapse",
            icon: "AbcIcon",
            url_path: "wms",
            children: [
              {
                id: "2",
                title: "MASTER",
                type: "collapse",
                icon: "AbcIcon",
                children: [
                  {
                    id: "3",
                    title: "GM",
                    url_path: "wms/master/gm",
                    type: "item",
                    icon: "AbcIcon",
                  },
                ],
              },
              {
                id: "9",
                title: "TRANSACTION",
                type: "collapse",
                children: [
                  {
                    id: "10",
                    title: "INBOUND",
                    type: "item",
                    url_path: "wms/transaction/inbound",
                  },
                ],
              },
            ],
          },
          {
            id: "17",
            title: "Finance",
            type: "collapse",
            icon: "AbcIcon",
            url_path: "finance",
            children: [
              {
                id: "18",
                title: "ACCOUNTS",
                type: "collapse",
                icon: "AbcIcon",
                children: [
                  {
                    id: "20",
                    title: "A/C TREE",
                    type: "item",
                    url_path: "/finance/accounts/ac_tree",
                    icon: "AccountTreeIcon",
                  },
                  {
                    id: "21",
                    title: "BANK CODE SETTING",
                    type: "item",
                    url_path: "/finance/accounts/bank_code_setting",
                    icon: "AccountBalanceIcon",
                  },
                  {
                    id: "22",
                    title: "EXPENSE TYPE",
                    type: "item",
                    url_path: "/finance/accounts/expense_type",
                    icon: "MoneyOffIcon",
                  },
                ],
              },
              // {
              //   id: "26",
              //   title: "TRANSACTION",
              //   type: "collapse",
              //   icon: "AbcIcon",
              //   children: [
              //     {
              //       id: "27",
              //       title: "CHEQUE PAYMENT",
              //       type: "item",
              //       url_path: "/finance/transaction/cheque_payment",
              //       icon: "PaymentIcon",
              //     },
              //     {
              //       id: "28",
              //       title: "CHEQUE RECEIPT",
              //       type: "item",
              //       url_path: "/finance/transaction/cheque_receipt",
              //       icon: "ReceiptIcon",
              //     },
              //     {
              //       id: "29",
              //       title: "PETTY CASH PAYMENT",
              //       type: "item",
              //       url_path: "/finance/transaction/petty_cash_payment",
              //       icon: "LocalAtmIcon",
              //     },
              //   ],
              // },
            ],
          },
        ],
        permissions: {
          wms: { level: 1, serial_number: 1 },
          master: { level: 2, serial_number: 2 },
          gm: { level: 3, serial_number: 3 },
          company: { level: 4, serial_number: 5 },
          country: { level: 4, serial_number: 100 },

          city: { level: 4, serial_number: 6 },
          currency: { level: 4, serial_number: 7 },
          state: { level: 4, serial_number: 8 },
          transaction: { level: 2, serial_number: 9 },
          inbound: { level: 3, serial_number: 10 },
          job_creation: { level: 4, serial_number: 11 },
          container: { level: 4, serial_number: 12 },
          packing_list: { level: 4, serial_number: 13 },
          clearance: { level: 4, serial_number: 14 },
          putaway: { level: 4, serial_number: 15 },
          confirmation: { level: 4, serial_number: 16 },
          finance: { level: 1, serial_number: 17 },
          accounts: { level: 2, serial_number: 18 },
          ac_tree: { level: 3, serial_number: 19 },
          bank_code_setting: { level: 4, serial_number: 20 },
          expense_type: { level: 4, serial_number: 21 },
          budget_version: { level: 4, serial_number: 22 },
          budget_ac_group: { level: 4, serial_number: 23 },
          budget_ac_wise: { level: 4, serial_number: 24 },
          cheque_payment: { level: 4, serial_number: 25 },
          cheque_receipt: { level: 4, serial_number: 26 },
          petty_cash_payment: { level: 4, serial_number: 27 },
          cash_receipt: { level: 4, serial_number: 28 },
          journal: { level: 4, serial_number: 29 },
          lpo: { level: 4, serial_number: 30 },
          cpo: { level: 4, serial_number: 31 },
        },

        user_permission: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 91, 100,
        ],
      },
    });
  } catch (error: any) {
    return res.status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
