import { DataTypes, Model } from "sequelize";
import { ILocation } from "../../interfaces/wms/location_wms.interface";
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";

class Location extends Model<ILocation> {}

Location.init(
  {
    location_code: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
    },
    loc_desc: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    loc_type: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    loc_stat: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    asile: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    column_no: {
      type: DataTypes.NUMBER(),
      allowNull: false,
    },
    height: {
      type: DataTypes.NUMBER(),
      allowNull: false,
    },
    job_no: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    prod_code: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    prin_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    stk_stat: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    pref_prin: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    pref_prod: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    pref_group: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    pref_brand: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    put_seqno: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    pick_seqno: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    push_level: {
      type: DataTypes.STRING(3),
      allowNull: false,
    },
    max_qty: {
      type: DataTypes.FLOAT(12,1),
      allowNull: false,
    },
    uom: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    reorder_qty: {
      type: DataTypes.FLOAT(12,1),
      allowNull: false,
    },
    company_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    barcode: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    prod_type: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    depth: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    check_digit: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
    assigned_prin_code: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    assigned_prodgroup: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    assigned_userid: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    location_code_002: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    volume_cbm: {
      type: DataTypes.FLOAT(18,4),
      allowNull: false,
    },
    height_cm: {
      type: DataTypes.FLOAT(18,4),
      allowNull: false,
    },
    breadth_cm: {
      type: DataTypes.FLOAT(18,4),
      allowNull: false,
    },
    length_cm: {
      type: DataTypes.FLOAT(18,4),
      allowNull: false,
    },
    blockcyc: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    trolly_no: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    bonded_area_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    location_reserved_for: {
      type: DataTypes.STRING(30),
      allowNull: false,
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
    modelName: "Location",
    tableName: constants.TABLE.MS_LOCATION,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Location;
