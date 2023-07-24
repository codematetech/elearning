// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../utils/db");
// class Course extends Model {}

// Course.init({
//     imageUrl: {
//       type: DataTypes.STRING,
//       defaultValue: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull:false,
//     },
//     lead: DataTypes.STRING,
//     category: {
//       type: DataTypes.ENUM,
//       values: ["Design", "Development", "Marketing", "Music", "Other"],
//       defaultValue: "Other",
//     },
//     difficultyLevel: {
//       type: DataTypes.ENUM,
//       values: ["Beginner", "Intermidiate", "Advanced", "All levels"],
//       defaultValue: "All levels",
//     },
//     description: {
//       type: DataTypes.STRING,
//       defaultValue: "Unknown",
//     },
//     whatYouWillLearn: {
//       type: [String],
//       default: "Unknown",
//     },
//     price: {
//       type: DataTypes.NUMBER,
//       defaultValue: 0,
//     },
//     duration: {
//       type: DataTypes.NUMBER,
//       allowNull: false,
//     },
//     requirements: {
//       type: [String],
//       default: "unknown",
//     },
//     videos: {
//       type: [String],
//       default: "https://www.youtube.com/watch?v=I_jSd4Wf7ck",
//     },
//     owner: {
//       type: DataTypes.STRING,  // teacher identifier (id)
//     },
//   },
//   {
//     sequelize,
//     modelName: "course",
//     timestamps: false,
//   });

// module.exports = Course;
