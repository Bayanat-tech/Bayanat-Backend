import { Response } from "express";
import { RequestWithUser } from "../interfaces/cmmon.interfacte";
import Country from "../models/wms/country_wms.model";
import { IUser } from "../interfaces/user.interface";
import constants from "../helpers/constants";
import { ICountry } from "../interfaces/wms/gm_wms.interface";

export const getWmsMaster = async (req: RequestWithUser, res: Response) => {
  try {
    const { master } = req.params;
    const requestUser: IUser = req.user;
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = Number(page * limit - limit);

    let fetchedData: unknown[] = [];
    switch (master) {
      case "country":
        {
          (fetchedData = await Country.findAll({
            where: { company_code: requestUser.company_code },
            offset: skip,
            limit: limit,
          })) as unknown[] as ICountry[];
        }
        break;
    }
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      data: { tableData: fetchedData, count: fetchedData?.length },
    });
    return;
  } catch (err) {}
  case "industry":
    {
      (fetchedData = await Country.findAll({
        where: { sector_code: requestUser.sector_code },
        offset: skip,
        limit: limit,
      })) as unknown[] as ICountry[];
    }
    break;
}
res.status(constants.STATUS_CODES.OK).json({
  success: true,
  data: { tableData: fetchedData, count: fetchedData?.length },
});
return;
} catch (err) {}
};
