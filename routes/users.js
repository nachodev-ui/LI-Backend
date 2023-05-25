const { Router } = require("express");
const router = Router();
const { _findAll, _deleteUser } = require("../controllers/users");
const { deleteUser } = require("../services/users/find");

// GET Oracle users list; localhost:3000/api/users
router.get("/", async (req, res) => {
  try {
    const users = await _findAll();

    return res.status(200).json({
      status: "success",
      message: "Lista de usuarios",
      data: users.sort((a, b) => a.id - b.id),
    });
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

// DELETE Oracle user; localhost:3000/api/users/:id
router.delete("/:id", deleteUser);

module.exports = router;
