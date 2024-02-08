'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //ACA HAY QUE CREAR LAS TABLAS

    await queryInterface.createTable('roles', {
        id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },

    })
},

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
