const router = require("express").Router();
const Users = require("./users-model");

// Return a list of users
router.get("/", async (req, res) => {
  try {
    const result = await Users.find();
    res.status(200).json(result);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// Return a list of favorite comments for a user
router.get("/:id/favorites", async (req, res) => {
  const { id } = req.params;

  const result = await Users.findFavorites(id);
  res.status(200).json(result);
});

// Delete a comment by ID
router.delete("/:id/favorites/:comment_id", async (req, res) => {
  const { id, comment_id } = req.params;

  try {
    const result = await Users.removeFavorite(id, comment_id);
    res.status(200).json({ deleted: !!Number(result), id: comment_id });
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
});

// Favorite a comment by ID
router.post("/:id/favorites/:comment_id", async (req, res) => {
  const { id, comment_id } = req.params;

  try {
    const result = await Users.addFavorite(id, comment_id);
    res.status(200).json({
      message: "Add Successful!",
      user_id: id,
      comment_id: comment_id
    });
  } catch {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
