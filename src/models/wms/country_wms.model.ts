import { DataTypes, Model } from "sequelize";
import { ICountry } from "../../interfaces/wms/country_wms.interface";
import { sequelize } from "../../database/connection";
import constants from "../../helpers/constants";

class Country extends Model<ICountry> {}

Country.init(
  {
    country_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
    },
    country_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    country_gcc: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    company_code: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    short_desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    nationality: {
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
    modelName: "Country",
    tableName: constants.TABLE.MS_COUNTRY,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Country;
