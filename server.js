if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const database = require("./models");
const PORT = process.env.PORT || 5000;
const IP = process.env.IP;

const morgan = require("morgan");

database.on("error", console.error.bind(console, "Connection ERROR:"));
database.once("open", () => {
  console.log("Mongo Atlas Database CONNECTED!");
});

// http request logger, dev setting colorizes output logs
app.use(morgan("dev"));

// enable bodyParser which is now part of express
app.use(express.json({ extended: true }));

app.get("/", (req, res) => res.json({ message: "Welcome to Barker4 API" }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/messages", require("./routes/messages"));

app.listen(PORT, () =>
  console.log(`App listening intently on PORT: ${PORT} and IP: ${IP}`)
);
