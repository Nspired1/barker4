const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const Message = require("../models/Message");

// @route   GET api/messages
// @desc    get all messages
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    // for now find all messages
    const messages = await Message.find({})
      .populate("user", {
        name: true,
        username: true,
        profileImageUrl: true,
      })
      .sort({
        date: -1,
      });
    console.log("This is in messages routes in SERVER");
    console.log(messages);
    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/messages
// @desc    Add new messages
// @access  Private
router.post(
  "/",
  [
    auth,

    [
      check("text", "Message is required.")
        .not()
        .isEmpty()
        .isLength({ max: 280 }),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { text } = req.body;
    console.log("This is in POST route in messages at SERVER");
    console.log(text);
    console.log(req.user.id);

    try {
      const newMessage = new Message({
        text,
        user: req.user.id,
      });

      const message = await newMessage.save();

      const foundMessage = await Message.findById(message._id).populate(
        "user",
        {
          name: true,
          username: true,
          profileImageUrl: true,
        }
      );

      const updatedMessage = await foundMessage.save();
      console.log("This is foundMessage");
      console.log(updatedMessage);
      res.json(updatedMessage);

      // res.json(message);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error.");
    }
  }
);

// @route   PUT api/message/:id
// @desc    EDIT new messages or could be RETWEET
// @access  Private
router.put("/:id", (req, res) => {
  res.send("EDIT a message");
});

// @route   DELETE api/message/:id
// @desc    DELETE new messages
// @access  Private

router.delete("/:id", auth, async (req, res) => {
  // auth checks the user
  // user id is attached when a new Message is created
  try {
    const message = await Message.findById(req.params.id);
    if (!message) return res.status(404).json({ msg: "Message not found." });
    // ensure user owns message
    console.log("This is inside messages routes in server");
    console.log(message);
    console.log(message.user);
    if (message.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "That is not authorized" });
    }
    await Message.findByIdAndRemove(req.params.id);
    res.json({ msg: "Message Deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error.");
  }
});

module.exports = router;
