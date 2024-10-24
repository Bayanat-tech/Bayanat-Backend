import { DataTypes, Model } from "sequelize";
import { IVProjectmaster } from "../../interfaces/Purchaseflow/Purucahseflow.interface";
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";

class VProjectmaster extends Model<IVProjectmaster> {}

VProjectmaster.init(
  {
    project_code: {
      type: DataTypes.STRING(15),
      primaryKey: true,
      allowNull: true,
    },
    project_name: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    div_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_project_cost: {
      type: DataTypes.DECIMAL(15, 2),
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
    modelName: "ProjectmasterPfView",
    tableName: constants.VIEW.VW_MS_PS_PROJECT_MASTER,
    timestamps: false,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default VProjectmaster;
