import { Sequelize } from "sequelize";
import constants from "../helpers/constants";

export const sequelize = new Sequelize(
  constants.DATABASE.NAME,
  constants.DATABASE.USER,
  constants.DATABASE.PASSWORD,
  {
    host: constants.DATABASE.HOST,
    dialect: "mysql",
  }
);

export const databaseConnection = () => {
  return new Promise((resolve, reject) => {
    sequelize
      .authenticate()
      .then(async () => {
        console.log("✅ Database Connected");
        await sequelize.sync({ alter: false });

        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
