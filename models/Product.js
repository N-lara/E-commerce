// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // CREATE TABLE Product(
    //   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //   category_name VARCHAR(50) NOT NULL,
    //   price DECIMAL NOT NULL, --HOW TO VALIDATE IF DECIMAL?????
    //   stock INT NOT NULL DEFAULT(10),  -- HOW TO VALIDATE IF NUMERIC????
    //   category_id INT, 
    //   FOREIGN KEY (category_id) REFERENCES Category(id)
    //   );
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 10,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
