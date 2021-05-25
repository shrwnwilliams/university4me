const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const routes = require("./routes");
const path = require("path")
// const School = require ("./models/School")

const PORT = process.env.PORT || 3001;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false}))
app.use(cors())

app.use(routes);

// School.create({
//     id: "1",
//     school: "school",
//     city: "city",
//     state: "state",
//     zipcode: "zip",
//     url: "url",
// }).then (schoolModel => console.log(schoolModel))
// .catch (err => console.log(err))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/schooldb", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

var conn = mongoose.connection;

conn.on('connected',()=>{
    console.log('MongoDB connected')
});

conn.on('error',(err)=>{
    if(err)
    console.log(err)
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });