const router = require("express").Router();
const { signin, signup } = require("../../controllers/user.js")
// const User = require("../../models/User")

router.post("/signin", signin);
router.post("/signup", signup);
// Create a user for signup
// router.post('/signup',function(req,res){
//   console.log("/api/user/singup")
//     var userObj = new User({
//         userid: req.body.userid,
//         username : req.body.username,
//         password : req.body.password
//     });
//     userObj.save((err)=>{
//         if(err){
//         res.send(err.message)
//         } else
//         res.send('Users credentials added successfully!');
//     })
// });

// // User Login
// router.post('/login', function (req, res, next) {
//     if (req.body.username && req.body.password) {
//      User.authenticate(req.body.username, req.body.password, function (error, user) {
//        if (error || !user) {
//          error.status = 401;
//          return next(error);
//        } else {
//          console.log("You are now signed in!")
//       //  res.send(user);
//       //  res.redirect('/home');
//        }
//      });
//    } else {
//      var err = new Error('Something went wrong!');
//      err.status = 400;
//      return next(err);
//    }
//  });

 module.exports = router;

