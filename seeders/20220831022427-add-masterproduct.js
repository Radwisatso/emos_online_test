'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('MasterProducts', [
      {
        idproduct: "A001",
        nama_product: "Woods herbal",
        satuan: "Bottle",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idproduct: "A002",
        nama_product: "Woods Kids",
        satuan: "Bottle",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idproduct: "B001",
        nama_product: "Procold",
        satuan: "Tablet",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idproduct: "C001",
        nama_product: "Promag Gazero",
        satuan: "Sachet",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        idproduct: "C002",
        nama_product: "Promag Fast Relief",
        satuan: "Sachet",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MasterProducts', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
