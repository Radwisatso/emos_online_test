'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TokoSelling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TokoSelling.init({
    user: DataTypes.STRING,
    idproduct: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    no_faktur_toko: DataTypes.STRING,
    tgl_transaksi: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'TokoSelling',
  });
  return TokoSelling;
};