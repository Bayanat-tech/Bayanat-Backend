 import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";
import { IDepartment } from "../../interfaces/wms/gm_wms.interface";

class Department extends Model<IDepartment> {}


Department.init(
  {
    dept_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
    },
    dept_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    inv_flag: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    jobno_seq: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    invno_seq: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    company_code: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    operation_type: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    div_code: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    ac_div_code: {
      type: DataTypes.STRING(5),
      allowNull: true,
    },
    dept_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  dn_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

   grn_email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

  inv_gen: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },

  inb_oub_related: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
 inv_prefix: {
      type: DataTypes.STRING(2),
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
    modelName: "Department",
    tableName: constants.TABLE.MS_DEPARTMENT,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Department;


