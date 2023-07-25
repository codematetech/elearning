const { Model, DataTypes } = require("sequelize");
const sequalize = require("../utils/db");
class Teacher extends Model {}

Teacher.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "unknown",
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "unknown",
    },
    jobOccupation: {
      type: DataTypes.STRING,
      defaultValue: "unknown",
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "unknown",
    },
    imageUrl: {
      type: DataTypes.STRING,
      defaultValue: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    linkedin: { type: DataTypes.STRING},
    website:{ type: DataTypes.STRING},
    youtube:{ type: DataTypes.STRING},
    user: {
        type: DataTypes.STRING,
    },
  },
  {
    sequelize: sequalize,
    modelName: "teacher",
    timestamps: false,
  }
);

module.exports = Teacher;
