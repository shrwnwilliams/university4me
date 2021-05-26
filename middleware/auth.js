const jwt = require("jsonwebtoken");

const secret = "test";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);

    let decodedData = jwt.verify(token, secret);
    req.userID = decodedData?.id;

    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = auth;
