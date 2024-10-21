import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";
import { IPickWave } from "../../interfaces/wms/pickwave_wms.interface";


class Pickwave extends Model<IPickWave> {}

Pickwave.init(
  {
    wave_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
    },
    wave_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    col_name: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    company_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    indicator: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    seq_order: {
      type: DataTypes.STRING(2),
      allowNull: true,
    },
    //updated_at: {
     //  type: DataTypes.DATE,
      // allowNull: false,
    //},
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
    modelName: "Pickwave",
    tableName: constants.TABLE.MS_PICKWAVE,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Pickwave;


