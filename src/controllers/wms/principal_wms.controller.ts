import { Response } from "express";
import { Op } from "sequelize";
import constants from "../../helpers/constants";
import { RequestWithUser } from "../../interfaces/cmmon.interfacte";
import PrincipalContactDetl from "../../models/wms/principal_contact_details_wms.model";
import Principal from "../../models/wms/principal_wms.model";
import { principalSchema } from "../../validation/wms/gm.validation";

export const createPrincipal = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser = req.user;
    const { error } = principalSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }

    const isPrincipalDataExists = await Principal.findOne({
      where: {
        [Op.and]: [
          { company_code: requestUser.company_code },
          { prin_code: req.body.prin_code },
        ],
      },
    });

    if (isPrincipalDataExists) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: "Principal " + constants.MESSAGES.ALREADY_EXISTS,
      });
      return;
    }

    const {
        prin_cont1,
        prin_cont2,
        prin_cont3,
        prin_cont_email1,
        prin_cont_email2,
        prin_cont_email3,
        prin_cont_telno1,
        prin_cont_telno2,
        prin_cont_telno3,
        prin_cont_faxno1,
        prin_cont_faxno2,
        prin_cont_faxno3,
        prin_cont_ref1,
        ...prinicipalPayload
      } = req.body,
      created_by = requestUser.loginid,
      updated_by = requestUser.loginid;

    const principalData = await Principal.create({
      created_by,
      updated_by,
      ...prinicipalPayload,
    });
    if (!principalData) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Principal data creation failed" });
      return;
    }
    console.log("principalData", principalData);

    const contactDetails = await PrincipalContactDetl.create({
      company_code: req.body.company_code,
      prin_code: req.body.prin_code,
      prin_cont1,
      prin_cont2,
      prin_cont3,
      prin_cont_email1,
      prin_cont_email2,
      prin_cont_email3,
      prin_cont_telno1,
      prin_cont_telno2,
      prin_cont_telno3,
      prin_cont_faxno1,
      prin_cont_faxno2,
      prin_cont_faxno3,
      prin_cont_ref1,
      created_by,
      updated_by,
    });
    console.log("contactDetails", contactDetails);

    if (!contactDetails) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Principal data creation failed" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: `Principal ${constants.MESSAGES.CREATED_SUCCESSFULLY}`,
    });
    return;
  } catch (error: unknown) {
    const knownError = error as { message: string };
    res
      .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: knownError.message });
  }
};
export const updatePrincipal = async (req: RequestWithUser, res: Response) => {
  try {
    const requestUser = req.user;
    const { prin_code } = req.params;
    const { error } = principalSchema(req.body);
    if (error) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }

    const {
        prin_cont1,
        prin_cont2,
        prin_cont3,
        prin_cont_email1,
        prin_cont_email2,
        prin_cont_email3,
        prin_cont_telno1,
        prin_cont_telno2,
        prin_cont_telno3,
        prin_cont_faxno1,
        prin_cont_faxno2,
        prin_cont_faxno3,
        prin_cont_ref1,
        ...prinicipalPayload
      } = req.body,
      updated_by = requestUser.loginid;
    const country = await Principal.findOne({
      where: {
        [Op.and]: [{ prin_code: prin_code }, { prin_status: "Y" }],
      },
    });

    if (!country) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: "Principal " + constants.MESSAGES.DOES_NOT_EXISTS,
      });
      return;
    }
    const principalData = await Principal.update(
      {
        updated_by,
        prin_code,
        ...prinicipalPayload,
      },
      {
        where: { prin_code: req.body.prin_code },
      }
    );
    if (!principalData) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Principal data updation failed" });
      return;
    }

    const contactDetails = await PrincipalContactDetl.update(
      {
        company_code: req.body.company_code,
        prin_code: req.body.prin_code,
        prin_cont1,
        prin_cont2,
        prin_cont3,
        prin_cont_email1,
        prin_cont_email2,
        prin_cont_email3,
        prin_cont_telno1,
        prin_cont_telno2,
        prin_cont_telno3,
        prin_cont_faxno1,
        prin_cont_faxno2,
        prin_cont_faxno3,
        prin_cont_ref1,
        updated_by,
      },
      { where: { prin_code, company_code: req.body.company_code } }
    );
    if (!contactDetails) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Principal data updation failed" });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: `Principal ${constants.MESSAGES.UPDATED_SUCCESSFULLY}`,
    });
    return;
  } catch (error: unknown) {
    const knownError = error as { message: string };
    res
      .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: knownError.message });
  }
};
export const getPrincipal = async (req: RequestWithUser, res: Response) => {
  try {
    const { prin_code } = req.params;
    const principalData = await Principal.findOne({
      where: { prin_code, prin_status: "Y" },
    });
    const contactdetails = await PrincipalContactDetl.findOne({
      where: { prin_code },
    });
    if (!principalData || !contactdetails) {
      res.status(constants.STATUS_CODES.NOT_FOUND).json({
        success: false,
        message: "Principal " + constants.MESSAGES.DOES_NOT_EXISTS,
      });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: { ...principalData, ...contactdetails },
    });
    return;
  } catch (error: unknown) {
    const knownError = error as { message: string };
    res
      .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: knownError.message });
  }
};
export const getPrincipalCode = async (req: RequestWithUser, res: Response) => {
  try {
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      data: { prin_code: Math.floor(Math.random() * 1000) },
    });
  } catch (error: unknown) {
    const knownError = error as { message: string };
    res
      .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: knownError.message });
  }
};
