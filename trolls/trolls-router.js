const router = require("express").Router();
const Trolls = require("./trolls-model");

const axios = require("axios");

// Fetch a list of all trolls
router.get("/", async (req, res) => {
  try {
    const result = await Trolls.find();
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/ds", async (req, res) => {
  try {
    const result = await axios.get(
      `https://salty-predictions.herokuapp.com/api/comments`
    );
    const addComment = await result.data.forEach(
      async ({ comment_uuid, is_salty, text, troll_name }) => {
        try {
          const newComment = {
            comment_uuid,
            is_salty,
            troll_name,
            comment_text: text
          };
          const result = await Trolls.addCommentFromDsApi(newComment);
          return result;
        } catch {
          res.status(500);
        }
      }
    );
    res.status(200).json({ message: "Add comment success" });
  } catch {
    res.status(500).json({ err: "Error" });
  }
});

// Adds ds trolls
router.get("/dstrolls", async (req, res) => {
  try {
    const result = await axios.get(
      `https://salty-predictions.herokuapp.com/api/trolls`
    );
    const addTroll = await result.data.map(
      async ({
        comments_total,
        date_created,
        salty_comments,
        salty_rank,
        troll_name
      }) => {
        try {
          const newTroll = {
            name: troll_name,
            date_created,
            salty_rank,
            salty_comments,
            comments_total
          };
          const answer = await Trolls.addTrollFromDsApi(newTroll);
          return answer;
        } catch {
          res.status(500);
        }
      }
    );
    res.status(200).json({ message: "Add troll success" });
  } catch {
    res.status(500).json({ err: "Error" });
  }
});

router.get("/comments", async (req, res) => {
  const result = await Trolls.findAllComments();
  res.status(200).json(result);
});

// Fetch a single troll by name
router.get("/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const result = await Trolls.findBy({ name });
    res.status(200).json(result[0]);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch all comments by troll name
router.get("/:troll_name/comments", async (req, res) => {
  const { troll_name } = req.params;
  try {
    const result = await Trolls.findComment({ troll_name });
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
