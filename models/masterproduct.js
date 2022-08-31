'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MasterProduct.init({
    idproduct: DataTypes.STRING,
    nama_product: DataTypes.STRING,
    satuan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MasterProduct',
  });
  return MasterProduct;
};