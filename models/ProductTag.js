const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
  //   CREATE TABLE ProductTag(
  //     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  //     product_id INT,
  //     tag_id INT,
  //     FOREIGN KEY (product_id) REFERENCES Product(id),
  //     FOREIGN KEY (tag_id) REFERENCES Tag(id)
  // );
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
