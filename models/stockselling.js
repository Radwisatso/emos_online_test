'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StockSelling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  StockSelling.init({
    user: DataTypes.STRING,
    idproduct: DataTypes.STRING,
    selling_in: DataTypes.INTEGER,
    selling_out: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StockSelling',
  });
  return StockSelling;
};