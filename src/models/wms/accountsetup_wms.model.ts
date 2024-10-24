import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";
import { IAccountsetup } from "../../interfaces/wms/gm_wms.interface";

class Accountsetup extends Model<IAccountsetup> {}

Accountsetup.init(
  {
    ac_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
    },
    ac_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    company_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    // updated_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    updated_by: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    // created_at: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    modelName: "Accountsetup",
    tableName: constants.TABLE.MS_AC_SETUP,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Accountsetup;
