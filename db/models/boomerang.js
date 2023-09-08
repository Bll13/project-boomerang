"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Boomerang extends Model {
    static associate() {}
  }
  Boomerang.init(
    {
      Player: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      Scores: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Boomerang",
    }
  );
  return Boomerang;
};
