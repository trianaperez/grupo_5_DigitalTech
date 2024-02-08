'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('orders-has-products', {


            orders_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                reference: {
                    model: "orders",
                    key: "id"
                }
            },

            products_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                reference: {
                    model: "products",
                    key: "id"
                }
            },

            quantity: {
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
