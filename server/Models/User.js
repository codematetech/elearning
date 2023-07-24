const { Model, DataTypes } = require("sequelize");
const sequelize = require("../utils/db")
class User extends Model {}

User.init(
  {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM,
        values: ['Student', 'Teacher', 'Admin'],
        defaultValue: 'Student'
    },
    imageUrl: {
        type: DataTypes.STRING,
        defaultValue: 'https://www.cmcaindia.org/wp-content/uploads/2015/11/default-profile-picture-gmail-2.png'
    },
    favCourses: [{
        type: DataTypes.STRING,
    }],
    favTeachers: [{
        type: DataTypes.STRING,
    }]
  },
  {
    sequelize,
    modelName: " user",
    timestamps: false,
  }
);

module.exports = User;