const express = require("express");
const router = express.Router();

//Index
router.get("/", (req, res) => {
  res.send("get for posts");
});

//show-
router.get("/:id", (req, res) => {
  res.send("get for  posts id");
});

//POST
router.post("/", (req, res) => {
  res.send("DELETE for posts id ");
});

//delete
router.delete("/:id", (req, res) => {
  res.send("POST for posts");
});

module.exports = router;
