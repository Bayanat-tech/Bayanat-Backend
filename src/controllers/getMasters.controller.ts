import { Request, Response } from "express";
import constants from "../helpers/constants";

export const getMasters = (req: Request, res: Response) => {
  try {
    res.status(constants.STATUS_CODES.OK).json({
      success: true,
      data: [
        { label: "Country", value: "country" },
        { label: "City", value: "city" },
        { label: "State", value: "state" },
        { label: "Currency", value: "currency" },
      ],
    });
    return;
  } catch (error) {}
};
