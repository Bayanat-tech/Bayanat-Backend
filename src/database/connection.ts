import { Sequelize } from "sequelize";
import constants from "../helpers/constants";

const sequelize = new Sequelize(
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
      .then(() => {
        console.log("✅ Database Connected");

        resolve(true);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
