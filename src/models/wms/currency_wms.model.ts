import { DataTypes, Model } from "sequelize";
import { ICurrency } from "../../interfaces/wms/currency_wms.interface";
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";

class Currency extends Model<ICurrency> {}

Currency.init(
  {
    curr_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
    },
    curr_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ex_rate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    division: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    subdivision: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    company_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    curr_sign: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    updated_by: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Currency",
    tableName: constants.TABLE.MS_CURRENCY,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Currency;
