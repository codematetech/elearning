const router = require("express").Router();
const Course = require("../Models/Course");
const User = require("../Models/User");
const IDException = require("../utils/invalidIdException");
const pagination = require("../utils/Pagination");

// get sample courses

router.get("/sample-courses", (req, res) => {
  Course.aggregate([{ $sample: { size: 8 } }])
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

// get all courses

router.get("/courses", pagination, async(req, res) => {
  const { page, size } = req.pagination;
  const course = await Course.findAndCountAll({
    limit: size,
    offset: page * size,
  });
  res.send({
    content: course.rows,
    totalPages: Math.ceil(course.count / Number.parseInt(size)),
  });
});

// get courses for a teacher

router.get("/course-by-teacher/:id", async(req, res) => {
  const teacherId = req.params.id;
  const course = await Course.find({ where: { creator: teacherId } });
  res.send(course);
});

// get a single course from the courses .

router.get("/getOneCourse/:id", async(req, res) => {
  const courseId = req.params.id;
  const course = await Course.findOne({ where: { id: courseId } });
  res.send(course);
});

// create course route for posting a course.

router.post("/course", async(req, res) => {
    const {imageUrl,title,lead,category,difficultyLevel,description,whatYouWillLearn,price,duration,requirements,videos,owner} = req.body;

    const mainTopicsArr = whatYouWillLearn.split(",").map((elm) => elm.charAt(0).toUpperCase() + elm.substring(1));
    const requirementsArr = requirements.split(",").map((elm) => elm.charAt(0).toUpperCase() + elm.substring(1));
    const videosArr = videos.split(",");

    const course = await Course.create({
      imageUrl,
      title,
      lead,
      category,
      difficultyLevel,
      description,
      whatYouWillLearn: mainTopicsArr,
      price,
      requirements: requirementsArr,
      videos: videosArr,
      duration,
      owner,
    })
    res.status(200).send(course)
  }
);

// update course informattion with new information about the course.

router.put("/course/:id", async (req, res) => {
  const courseId = req.params.id;
  const { imageUrl,title,lead,category,difficultyLevel,description,whatYouWillLearn,price,videos,requirements,duration,owner} = req.body;

  const mainTopicsArr =
typeof whatYouWillLearn === "string"
      ? whatYouWillLearn
          .split(",")
          .map((elm) => elm.charAt(0).toUpperCase() + elm.substring(1))
      : whatYouWillLearn;
  const requirementsArr =
    typeof requirements === "string"
      ? requirements
          .split(",")
          .map((elm) => elm.charAt(0).toUpperCase() + elm.substring(1))
      : requirements;
  const videosArr = typeof videos === "string" ? videos.split(",") : videos;

  const updateCourse = await Course.findByIdAndUpdate(req.params.id, {
    imageUrl,
    title,
    lead,
    category,
    difficultyLevel,
    description,
    whatYouWillLearn: mainTopicsArr,
    price,
    requirements: requirementsArr,
    videos: videosArr,
    duration,
    owner,
  })
    res.status(200).send(updateCourse)
});

// delete a course from the course database.

router.delete("/deleteCourse/:id", async(req, res) => {
    await Course.destroy({where: {id: courseId}})
    res.sendStatus(201).send({message: "Course successfully deleted from the course database"})
  }
);