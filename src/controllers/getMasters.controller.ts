// import { Response } from "express";
// import { sequelize } from "../database/connection";
// import constants from "../helpers/constants";
// import { RequestWithUser } from "../interfaces/request.interface";

// export const getMasters = async (req: RequestWithUser, res: Response) => {
//   try {
//     let { app_code, level1, level2 } = req.params;
//     const requestUser = req.user;

//     app_code = app_code.toUpperCase();
//     level1 = level1.toUpperCase();
//     level2 = level2.toUpperCase();

//     const masterList = await sequelize.query(`
//         SELECT * FROM SEC_MODULE_DATA;
//         SELECT * FROM SEC_MODULE_DATA WHERE  SERIAL_NO IN (
//         SELECT a.SERIAL_NO
// FROM SEC_ROLE_APP_ACCESS a,
// SEC_ROLE_FUNCTION_ACCESS_USER b where  a.role_id = b.SERIAL_NO_OR_ROLE_ID and b.loginid = '${requestUser.loginid}'
// union
// SELECT a.SERIAL_NO_OR_ROLE_ID
// FROM SEC_ROLE_FUNCTION_ACCESS_USER a  where a.loginid = '${requestUser.loginid}' AND SERIAL_NO_OR_ROLE_ID < 90001)  and
// app_code = '${app_code}' AND
// LEVEL1 = '${level1}' AND
// LEVEL2 = '${level2}'`);

//     res.status(constants.STATUS_CODES.OK).json({
//       success: true,
//       data: [
//         { label: "Country", value: "country" },
//         { label: "City", value: "city" },
//         { label: "State", value: "state" },
//         { label: "Currency", value: "currency" },
//       ],
//     });
//     return;
//   } catch (error) {}
// };
