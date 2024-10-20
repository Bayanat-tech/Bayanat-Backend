import { Response } from "express";
import { RequestWithUser } from "../interfaces/cmmon.interface";
import constants from "../helpers/constants";
import Files from "../models/files.model";

export const getFiles = async (req: RequestWithUser, res: Response) => {
  try {
    const { request_number } = req.params;
    if (request_number === undefined) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: true,
        message: constants.MESSAGES.BAD_REQUEST,
      });
      return;
    }
    const files = await Files.findAll({
      where: { company_code: req.user.company_code, request_number },
    });
    console.log(files);

    res.status(constants.STATUS_CODES.OK).json({ sucess: true, data: files });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
export const deleteFiles = async (req: RequestWithUser, res: Response) => {
  try {
    const { file_name } = req.query;
    if (file_name === undefined) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: true,
        message: constants.MESSAGES.BAD_REQUEST,
      });
      return;
    }
    const deleteOprResponse = await Files.destroy({ where: { file_name } });
    if (deleteOprResponse === 0) {
      res.status(constants.STATUS_CODES.BAD_REQUEST).json({
        success: false,
        message: deleteOprResponse,
      });
      return;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      message: constants.MESSAGES.DELETED_SUCCESSFULLY,
    });
    return;
  } catch (error: any) {
    res
      .status(constants.STATUS_CODES.BAD_REQUEST)
      .json({ success: false, message: error.message });
    return;
  }
};
