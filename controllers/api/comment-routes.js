const router = require("express").Router();
const Comment = require("../../models/Comment");

// route to create/add a blog
router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment_name: req.body.comment_name,
      description: req.body.description,
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put("/:id", async (req, res) => {
  try {
    const comment = await Comment.update(
      {
        comment_name: req.body.comment_name,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
