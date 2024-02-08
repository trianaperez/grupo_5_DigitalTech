'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        //ACA HAY QUE CREAR LAS TABLAS
        await queryInterface.createTable('users', {
            id: {
                primaryKey: true,
                type: Sequielize.INTEGER,
                autoIncrement: true,
                allowNull: false
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,


            },

            password: {
                type: Sequelize.TEXT,
                allowNull: false,

            },

            roles_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "role",
                    key: "id"
                }
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