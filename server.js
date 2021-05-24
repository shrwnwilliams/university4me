const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

// const School = require ("./models/School")
// School.create({
//     id: "1",
//     school: "school",
//     city: "city",
//     state: "state",
//     zipcode: "zip",
//     url: "url",
// }).then (schoolModel => console.log(schoolModel))
// .catch (err => console.log(err))


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/schooldb", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });