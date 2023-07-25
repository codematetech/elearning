const { Model, DataTypes } = require("sequelize");
const sequelize = require("../utils/db");
class Article extends Model {}

Article.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.NUMBER,
    },
    disc: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.STRING,
    },
    like: {
      type: DataTypes.STRING,
    },
    dislike: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    modelName: "article",
    timestamps: false,
  }
);

module.exports = Article;
