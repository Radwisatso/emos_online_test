'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('StockSellings', [
      {
        user: "Andi",
        idproduct: "C001",
        selling_in: 120,
        selling_out: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: "Beni",
        idproduct: "B001",
        selling_in: 50,
        selling_out: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: "Beni",
        idproduct: "C001",
        selling_in: 500,
        selling_out: 450,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user: "Lala",
        idproduct: "A002",
        selling_in: 50,
        selling_out: 15,
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
    await queryInterface.bulkDelete('StockSellings', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
