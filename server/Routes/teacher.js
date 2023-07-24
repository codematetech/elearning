const Course = require("../Models/Course");
const Teacher = require("../Models/Teacher");

// get all the teachers

router.get("/teachers", async(req, res) => {
  const teachers = await Teacher.find()
   res.statusCode(201).send({message: teachers})
});

//  get a single teacher

router.get("/teacher/:id", async (req, res) => {
  const teacherId = req.params.id;
  const teacher = await Teacher.findOne({where: { id: teacherId }})
  res.status(200).json({Message: teacher});
});

// create a new teacher

router.post("/new-teacher", async(req, res) => {
    const teacher = await Teacher.create(req.body)
    res.status(201).json(teacher)
  }
);

// updaate a teacher

router.put("/edit-teacher/:id", async (req, res) => {
  Teacher.update({username, disc: req.body})
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

// delete a teacher

router.delete("/delete-teacher/:id", (req, res) => {
     const teacherId = req.params.id;
        Course.destroy({where: { owner: teacherId }, truncate: true})
       .then(() => Teacher.destroy({where: {id: teacherId}}))
       .then(() => res.json({ message: "Teacher Deleted" }))
       .catch((err) => res.status(500).json(err));
  }
);