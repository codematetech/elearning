const router = require("express").Router()
const Article = require("../Models/Article")
const pagination = require("../utils/Pagination")

// create article route

router.post("/article", async(req, res) => {
    await Article.create(req.body)
    res.status(201).send("Posted Successfully.")
})

// get all article route

router.get("/article", pagination, async (req, res) => {
  const {page, size} = req.pagination
  const article = await Article.findAndCountAll({limit: size, offset: page * size,});
  res.send({ content: article.rows, totalPages: Math.ceil(article.count / Number.parseInt(size)),});
});

// get article id

router.get("/article/:id", async(req, res) => {
   const articleId = req.params.id;
   const article = await Article.findOne({ where: { id: articleId } });
   res.send(article);
})

// update article

router.put("/article/:id", async(req, res) => {
 const articleId = Number.parseInt(req.params.id);
 const article = await Article.findOne({ where: { id: articleId } });
 article.title = req.body.title;
 await article.save();
 res.send("Updated successfully!");
})

// delete user route

router.delete("/article/:id", async (req, res) => {
  const articleId = req.params.id;
  await Article.destroy({ where: { id: articleId } });
  res.send("Deleted Successfully!");
});

module.exports = router