import { DataTypes, Model } from "sequelize";
import { IHrdivision } from "../../interfaces/Purchaseflow/Purucahseflow.interface";
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";

class Hrdivision extends Model<IHrdivision> {}

Hrdivision.init(
  {
    div_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true,
    },
    div_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Hrdivision",
    tableName: constants.TABLE.MS_HR_DIVISION, 
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Hrdivision;