import { DataTypes } from "@sequelize/core";
import sequelize from "./_index";

export const GameEvent = sequelize.define("event", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  image: { type: DataTypes.TEXT, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  japanese_name: { type: DataTypes.STRING, allowNull: false },
  i_type: { type: DataTypes.STRING, allowNull: false },
  start_date: { type: DataTypes.DATE, allowNull: false },
  end_date: { type: DataTypes.DATE, allowNull: false },
  english_image: {
    type: DataTypes.TEXT,
  },
  english_start_date: {
    type: DataTypes.DATE,
  },
  english_end_date: {
    type: DataTypes.DATE,
  },
  taiwanese_image: {
    type: DataTypes.STRING,
  },
  taiwanese_start_date: {
    type: DataTypes.DATE,
  },
  taiwanese_end_date: {
    type: DataTypes.DATE,
  },
  korean_image: {
    type: DataTypes.STRING,
  },
  korean_start_date: {
    type: DataTypes.DATE,
  },
  korean_end_date: {
    type: DataTypes.DATE,
  },
  main_card: { type: DataTypes.INTEGER },
  secondary_card: { type: DataTypes.INTEGER },
  i_boost_attribute: { type: DataTypes.STRING },
  i_boost_stat: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  c_versions: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
});
