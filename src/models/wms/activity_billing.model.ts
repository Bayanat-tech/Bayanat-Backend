import { DataTypes, Model } from "sequelize";
import { IActivityBilling } from "../../interfaces/wms/activity_billing_wms.interface";
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";

class ActivityBilling extends Model<IActivityBilling> {};

ActivityBilling.init(
  {
    PRIN_CODE: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true, // Assuming PRIN_CODE is the primary key
    },
    act_code: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    wip_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    cost: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    income_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    bill_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    jobtype: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    company_code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    freeze_flag: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    mandatory_flag: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    validate_flag: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    uoc: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    moc: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    moc1: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    moc2: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    cust_code: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    start_point: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    end_point: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    customer_type: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    vtype_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    serial_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    serial_no2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    updated_by: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
   
    created_by: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ActivityBilling",
    tableName: constants.TABLE.MS_ACTIVITY_BILLING, 
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default ActivityBilling;
