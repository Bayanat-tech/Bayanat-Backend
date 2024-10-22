import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";
import { IGroup } from "../../interfaces/wms/gm_wms.interface";

class Group extends Model<IGroup> {}

Group.init(
  {
    group_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
    },
    group_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    company_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    prin_code: {
      type: DataTypes.STRING(20),
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
    modelName: "Group",
    tableName: constants.TABLE.MS_PRODGROUP,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Group;
