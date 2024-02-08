'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        primaryKey: true,
        type: Sequielize.INTEGER,
        autoIncrement: true,
        allowNull: false
      },

      name: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },

      model: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      price: {
        type: Sequelize.DECIMAL(11, 2),
        allowNull: false,

      },

      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
      }
    })
  }
};
