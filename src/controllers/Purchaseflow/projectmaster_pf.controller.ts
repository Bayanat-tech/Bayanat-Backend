import { Response } from "express";
import { Op } from "sequelize";
import constants from "../../helpers/constants";
import { RequestWithUser } from "../../interfaces/cmmon.interface";
import { IUser } from "../../interfaces/user.interface";
import Projectmaster from "../../models/Purchaseflow/projectmaster_pf_model";
import { projectmasterSchema } from "../../validation/Purchaseflow/Purchaseflow.validation";

export const createprojectmaster  = async (req: RequestWithUser, res: Response) => {
    try {
      const requestUser: IUser = req.user;
  
      const { error } = projectmasterSchema(req.body);
      if (error) {
        res
          .status(constants.STATUS_CODES.BAD_REQUEST)
          .json({ success: false, message: error.message });
        return;
      }
      const { project_code, project_name,company_code,prno_pre_fix,flag_proj_department } = req.body;
  
      const projectmasterData  = await Projectmaster.findOne({
        where: {
          [Op.and]: [
            { company_code: company_code },
            { project_code: project_code },
          ],
        },
      });
  
      if (projectmasterData ) {
        res.status(constants.STATUS_CODES.BAD_REQUEST).json({
          success: false,
           message: constants.MESSAGES.COSTMASTER_PF.COSTMASTER_ALREADY_EXISTS,
        });
        return;
      }
  
      const createprojectmaster  = await Projectmaster.create({
        project_code,
        project_name,
        company_code,
        prno_pre_fix,
        flag_proj_department,
        created_by: requestUser.loginid,
        updated_by: requestUser.loginid
  
      });
      
      
      if (!createprojectmaster ) {3
        res
          .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
          .json({ success: false, message: "Error while Cost code" });
        return;
      }
      res.status(constants.STATUS_CODES.OK).json({
        success: true,
            message: constants.MESSAGES.COSTMASTER_PF.COSTMASTER_CREATED_SUCCESSFULLY,
      });
      return;
    } catch (error: any) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
  };
  export const updateprojectmaster  = async (req: RequestWithUser, res: Response) => {
    try {
      const requestUser: IUser = req.user;
  
      const { error } = projectmasterSchema(req.body);
      if (error) {
        res
          .status(constants.STATUS_CODES.BAD_REQUEST)
          .json({ success: false, message: error.message });
        return;
      }
      const { project_code, project_name,company_code} = req.body;
  
      const projectmasterData  = await Projectmaster.findOne({
        where: {
          [Op.and]: [
            { company_code: company_code },
            { project_code: project_code },
          ],
        },
      });
  
      if (!projectmasterData ) {
        res.status(constants.STATUS_CODES.BAD_REQUEST).json({
          success: false,
         message: constants.MESSAGES.COSTMASTER_PF.COSTMASTER_DOES_NOT_EXISTS,
          
        });
        return;
      }
      const createprojectmaster  = await Projectmaster.update(
        {
          company_code,
          created_by: requestUser.loginid,
          updated_by: requestUser.loginid,
  
          ...req.body,
        },
        {
          where: {
            [Op.and]: [
              { company_code: company_code },
              { project_code: project_code },
            ],
          },
        }
      );
      if (!createprojectmaster ) {
        res
          .status(constants.STATUS_CODES.INTERNAL_SERVER_ERROR)
          .json({ success: false, message: "Error while updating company" });
        return;
      }
      res.status(constants.STATUS_CODES.OK).json({
        success: true,
        message: constants.MESSAGES.COSTMASTER_PF.COSTMASTER_UPDATED_SUCCESSFULLY,
      });
      return;
    } catch (error: any) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
  };
  export const deleteprojectmaster = async (req: RequestWithUser, res: Response) => {
    try {
      const projectmastercode = req.body;
  
      if (!req.body.length) {
        res.status(constants.STATUS_CODES.BAD_REQUEST).json({
          success: false,
           message: constants.MESSAGES.COSTMASTER_PF.SELECT_AT_LEAST_ONE_COSTMASTER,
        });
        return;
      }
      const ProjectmasterDeleteResponse = await Projectmaster.destroy({
        where: {
          project_code: projectmastercode,
        },
      });
      if (ProjectmasterDeleteResponse === 0) {
        res.status(constants.STATUS_CODES.BAD_REQUEST).json({
          success: false,
          message: ProjectmasterDeleteResponse,
        });
        return;
      }
      res.status(constants.STATUS_CODES.OK).json({
        success: true,
     message: constants.MESSAGES.COSTMASTER_PF.COSTMASTER_DELETED_SUCCESSFULLY,
      });
      return;
    } catch (error: any) {
      res
        .status(constants.STATUS_CODES.BAD_REQUEST)
        .json({ success: false, message: error.message });
      return;
    }
  };