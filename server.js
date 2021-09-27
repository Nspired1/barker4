if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const database = require("./models");
const PORT = process.env.PORT || 5000;
const IP = process.env.IP;
const path = require("path");

const morgan = require("morgan");

database.on("error", console.error.bind(console, "Connection ERROR:"));
database.once("open", () => {
  console.log("Mongo Atlas Database CONNECTED!");
});

// http request logger, dev setting colorizes output logs
app.use(morgan("dev"));

// enable bodyParser which is now part of express
app.use(express.json({ extended: true }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/messages", require("./routes/messages"));

// serve static assets in production
if (process.env.NODE_ENV === "production") {
  //set static folder (that react built)
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// to run server at the command line type: "nodemon" or "node server.js" or "npm start"
// to run frontend client at the prompt type: "npm run client"
// to run both server and frontend client at prompt type "npm run dev"
app.listen(PORT, () =>
  console.log(`App listening intently on PORT: ${PORT} and IP: ${IP}`)
);
