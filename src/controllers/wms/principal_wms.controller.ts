import { Response } from "express";
import { Op } from "sequelize";
import constants from "../../helpers/constants";
import { IFiles, RequestWithUser } from "../../interfaces/cmmon.interface";
import PrincipalContactDetl from "../../models/wms/principal_contact_details_wms.model";
import Principal from "../../models/wms/principal_wms.model";
import { principalSchema } from "../../validation/wms/gm.validation";
import Files from "../../models/files.model";
import { sequelize } from "../../database/connection";

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
        files,
        ...prinicipalPayload
      } = req.body,
      created_by = requestUser.loginid,
      updated_by = requestUser.loginid;

    const principalData = await Principal.create({
      created_by,
      updated_by,
      prin_code: "",
      ...prinicipalPayload,
    });
    if (!principalData) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Principal data creation failed" });
      return;
    }
    const getSessionCode: { code: string }[][] = (await sequelize.query(
      `SELECT code from GT_SESSION_INFO WHERE USERID='${req.user.loginid}'`
    )) as { code: string }[][];

    const contactDetails = await PrincipalContactDetl.create({
      company_code: req.body.company_code,
      prin_code: getSessionCode[0][0].code,
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

    if (!contactDetails) {
      res
        .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Principal data creation failed" });
      return;
    }
    if (!!files && files.length) {
      await Files.bulkCreate(
        (files as IFiles[]).map((eachFile) => {
          return {
            ...eachFile,
            request_number: "PRI" + getSessionCode[0][0].code,
          };
        })
      );
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
    console.log(prin_code);

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
        files,
        ...prinicipalPayload
      } = req.body,
      updated_by = requestUser.loginid;

    const existingPrincipalData = await Principal.findOne({
      where: {
        [Op.and]: [{ prin_code: prin_code }],
      },
    });

    if (!existingPrincipalData) {
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
        where: { prin_code },
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
    if (!!files && files.length) {
      await Files.bulkCreate(files);
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
      where: { prin_code },
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
      data: { ...principalData.dataValues, ...contactdetails.dataValues },
    });
    return;
  } catch (error: unknown) {
    const knownError = error as { message: string };
    res
      .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: knownError.message });
  }
};
