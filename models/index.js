const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.set("debug", true); //only for development. Otherwise set to false

mongoose
  .connect(process.env.MONGO_ATLAS_SECRET, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    console.error(err.message);
  });

const db = mongoose.connection;

module.exports = db;
