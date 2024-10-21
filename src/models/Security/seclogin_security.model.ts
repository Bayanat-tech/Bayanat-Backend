import { DataTypes, Model } from "sequelize";
import { ISecmaster } from "../../interfaces/Security/Security.interfae"; 
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";

class secmaster extends Model<ISecmaster> {}

secmaster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    contact_no: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    userpass: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email_id: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    company_code: {
      type: DataTypes.STRING(10),
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Secmaster",
    tableName: constants.TABLE.SEC_LOGIN, 
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default secmaster;