const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User.js");

const secret = "test";

module.exports = {
  // Logs in User
  signin: async function (req, res) {
    const { username, password } = req.body;
    console.group(username, password);
    try {
      const existingUser = await User.findOne({ username });

      if (!existingUser)
        return res.status(404).json({ message: "User doesn't exist." });

      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Invalid credentials." });

      const token = jwt.sign(
        { username: existingUser.username, id: existingUser._id },
        secret,
        { expiresIn: "1h" }
      );

      res.status(200).json({ result: existingUser, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong." });
      console.log(err);
    }
  },

  // Creates User
  signup: async function (req, res) {
    const { username, password } = req.body;
    console.group(username, password);

    try {
      const existingUser = await User.findOne({ username });

      if (existingUser)
        return res.status(400).json({ message: "User already exists." });

      if (password != password)
        return res.status(400).json({ message: "Wrong password" });

      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await User.create({ username, password: hashedPassword });

      console.log(result);

      const token = jwt.sign(
        { username: result.username, id: result._id },
        secret,
        { expiresIn: "1h" }
      );

      res.status(200).json({ result, token });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong." });
      console.log(err);
    }
  },
  // ACT User input
  actUpdate: function (req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      { $push: { act: req.body } },
      { new: true, runValidators: true }
    )
      .then((dbAct) => res.json(dbAct))
      .catch((err) => res.status(422).json(err));
  },
  // SAT User input
  satUpdate: function (req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      { $push: { sat: req.body } },
      { new: true, runValidators: true }
    )
      .then((dbSat) => res.json(dbSat))
      .catch((err) => res.status(422).json(err));
  },
  // Saved Schools
  schoolsUpdate: function (req, res) {
    User.findOneAndUpdate(
      { username: req.params.username },
      { $push: { schools: req.body } },
      { new: true, runValidators: true }
    )
      .then((dbSchools) => res.json(dbSchools))
      .catch((err) => res.status(422).json(err));
  },
  getUserInfo: function (req, res) {
    User.findOne({ username: req.params.username })
      .then((dbUserID) => res.json(dbUserID))
      .catch((err) => res.status(422).json(err));
  },
};
