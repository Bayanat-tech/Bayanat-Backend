import { Response } from "express";
import { Op } from "sequelize";
import constants from "../../helpers/constants";
import { RequestWithUser } from "../../interfaces/cmmon.interface";
import { IUser } from "../../interfaces/user.interface";
//import Department from "../../models/wms/department_wms.model";
import Supplier from "../../models/wms/supplier_wms.model";
//import { departmentSchema } from "../../validation/wms/gm.validation";
import { supplierSchema } from "../../validation/wms/gm.validation";

export const createsupplier = async (req: RequestWithUser, res: Response) => {
  try {
    console.log("data aaya ki nhi in function bakend..yesr", req.body);
    const requestUser: IUser = req.user;
    console.log("tt", requestUser);
    const { error } = supplierSchema(req.body);

    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    console.log("called0");

    const { supp_code, company_code } = req.body;
    const supplier = await Supplier.findOne({
      where: {
        [Op.and]: [{ company_code: company_code }, { supp_code: supp_code }],
      },
    });

    if (supplier) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.SUPPLIER_WMS.SUPPLIER_ALREADY_EXISTS,
      });
      return;
    }
    const createsupplier = await Supplier.create({
      company_code,
      created_by: requestUser.loginid,
      updated_by: requestUser.loginid,
      ...req.body,
    });
    if (!createsupplier) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while creating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.SUPPLIER_WMS.SUPPLIER_CREATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
export const updatesupplier = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser: IUser = req.user;
    const { error } = supplierSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
    const { supp_code, company_code } = req.body;

    const supplier = await Supplier.findOne({
      where: {
        [Op.and]: [{ company_code: company_code }, { supp_code: supp_code }],
      },
    });

    if (!supplier) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: constants.MESSAGES.SUPPLIER_WMS.SUPPLIER_DOES_NOT_EXISTS,
      });
      return;
    }
    const createsupplier = await supplier.update(
      {
        company_code,
        created_by: requestUser.loginid,
        updated_by: requestUser.loginid,
        ...req.body,
      },
      {
        where: {
          [Op.and]: [{ company_code: company_code }, { supp_code: supp_code }],
        },
      }
    );
    if (!createsupplier) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Error while updating company" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.SUPPLIER_WMS.SUPPLIER_UPDATED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
