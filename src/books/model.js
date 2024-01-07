const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");
const Book = sequelize.define("Book", {
    title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
    },
    genre: {
        type: DataTypes.STRING,
    },
});

module.exports = Book;