import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/connection";
import constants from "../helpers/constants";
import { IFiles } from "../interfaces/cmmon.interface";

class Files extends Model<IFiles> {}

Files.init(
  {
    company_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    request_number: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    sr_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    file_name: {
      type: DataTypes.STRING(180),
      allowNull: false,
      primaryKey: true,
    },
    extensions: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    org_file_name: {
      type: DataTypes.STRING(400),
      allowNull: false,
    },
    aws_file_locn: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    flow_level: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    modules: {
      type: DataTypes.STRING(50),
      allowNull: false,
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
  },
  {
    sequelize,
    modelName: "Files",
    tableName: constants.TABLE.UPLOADED_FILES_DLTS,
    timestamps: false,
  }
);

export default Files;
