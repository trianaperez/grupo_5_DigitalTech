'use strict';
const bcrypt = require('bcryptjs');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        img: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: 'default-avatar.png'
        },
        roles_id: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        hooks: {
            beforeCreate: (user, options) => {
                user.password = bcrypt.hashSync(user.password, 10);
            }
        }
    });
    return User;
};