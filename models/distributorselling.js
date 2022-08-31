'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DistributorSelling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DistributorSelling.init({
    user: DataTypes.STRING,
    idproduct: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    no_faktur_distribusi: DataTypes.STRING,
    tgl_transaksi: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'DistributorSelling',
  });
  return DistributorSelling;
};