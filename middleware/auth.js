const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try{
const token = req.headers.authorization.split(" ")[1];


let decodedData = jwt.verify(token, 'test');
req.userID = decodedData?.id;


    } catch (err) {
        console.log(err)
    }
}

module.exports = auth;