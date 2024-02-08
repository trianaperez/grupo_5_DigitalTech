'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //ACA HAY QUE CREAR LAS TABLAS

    await queryInterface.createTable('orders', {
      id: {
        primaryKey: true,
        type: Sequielize.INTEGER,
        autoIncrement: true,
        allowNull: false
      },

      users_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        reference: {
          model: "users",
          key: "id"
        }
      },

      delivered: {
        type: DataTypes.BOOLEAN,
        allowNull: false,

      },
    })

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
