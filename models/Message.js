const mongoose = require("mongoose");
const User = require("./User");

const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      maxLength: 280,
    },
    //note change author to user for testing features
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },

  {
    timestamps: true,
  }
);

MessageSchema.pre("remove", async function (next) {
  try {
    let user = await User.findById(this.user);
    user.messages.remove(this.id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("message", MessageSchema);
