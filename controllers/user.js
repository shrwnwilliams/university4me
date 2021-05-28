const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User.js");

const secret = "test";

module.exports = {
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
