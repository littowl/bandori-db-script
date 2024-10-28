import { DataTypes } from "@sequelize/core";
import sequelize from "./_index";

export const Member = sequelize.define("Member", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  japanese_name: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  square_image: {
    type: DataTypes.STRING,
  },
  i_band: {
    type: DataTypes.STRING,
  },
  school: {
    type: DataTypes.STRING,
  },
  i_school_year: {
    type: DataTypes.STRING,
  },
  romaji_CV: {
    type: DataTypes.STRING,
  },
  CV: {
    type: DataTypes.STRING,
  },
  birthday: {
    type: DataTypes.STRING,
  },
  food_like: {
    type: DataTypes.STRING,
  },
  food_dislike: {
    type: DataTypes.STRING,
  },
  i_astrological_sign: {
    type: DataTypes.STRING,
  },
  instrument: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
});
