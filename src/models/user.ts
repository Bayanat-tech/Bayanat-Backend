import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connection";
import { UserAttribute } from "../interfaces/user.interface";
import constants from "../helpers/constants";

class User extends Model<UserAttribute> {}

User.init(
  {
    company_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    loginid: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false,
    },
    email_id: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    contact_name: {
      type: DataTypes.STRING(100),
    },
    contact_no: {
      type: DataTypes.STRING(100),
    },
    contact_email: {
      type: DataTypes.STRING(1000),
    },
    updated_at: {
      type: DataTypes.DATE,
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
    userpass: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    no_of_days: {
      type: DataTypes.INTEGER,
    },
    active_flag: {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: constants.TABLE.SEC_LOGIN,
    timestamps: false, // Disable Sequelize's auto timestamps as you have custom fields
  }
);

export default User;
