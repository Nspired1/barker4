if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }


const express = require("express");
const app = express();
// const database = require("./models");
const PORT = process.env.PORT || 5000;
const IP = process.env.IP;

// database.on("error", console.error.bind(console, "Connection ERROR:"));
// database.once("open", () => {
//   console.log("Mongo Atlas Database connected");
// });

// enable bodyParser which is now part of express
app.use(express.json({ extended: true}));

app.get('/', (req, res) => res.json({message: "Welcome to contactKeeper API"}) );

// app.use("/api/users", require("./routes/users"))
// app.use("/api/auth", require("./routes/auth"))
// app.use("/api/contacts", require("./routes/contacts"))

app.listen(PORT, () => console.log(`App listening intently on PORT: ${PORT} and IP: ${IP}`));