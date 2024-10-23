import { DataTypes, Model } from "sequelize";
import { ICompany } from "../../interfaces/wms/company_wms";
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";

class Company extends Model<ICompany> {}

Company.init(
  {
    company_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    company_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    address1: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    address2: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    address3: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    bl_section_1: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    bl_section_2: {
      type: DataTypes.STRING(50),
    },
    stmt_of_accounts: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    app_license_001: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    picking_path: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    mail_server: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    mail_email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    mail_pwd: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    bill_auth_pwd: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Company",
    tableName: constants.TABLE.MS_COMPANY,
    timestamps: false,
  }
);

Company.removeAttribute("id");

export default Company;
