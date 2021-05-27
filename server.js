const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const routes = require("./routes");
const path = require("path");
// const School = require ("./models/School")

const PORT = process.env.PORT || 3001;

// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static("client/build"));
// app.get("/api/config", (req, res) => {
//   res.json({
//     success: true,
//   });
// });
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/schooldb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

var conn = mongoose.connection;

conn.on("connected", () => {
  console.log("MongoDB connected");
});

conn.on("error", (err) => {
  if (err) console.log(err);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
