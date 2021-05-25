const router = require("express").Router();
const { User } = require("../../models")

// Create a user for signup
router.post('/signup',function(req,res){
    var userObj = new User({
        username : req.body.username,
        password : req.body.password
    });
    userObj.save((err)=>{
        if(err){
        res.send(err.message)
        } else
        res.send('Users credentials added successfully!');
    })
});

// User Login
router.post('/login', function (req, res, next) {
    if (req.body.username && req.body.password) {
     User.authenticate(req.body.username, req.body.password, function (error, user) {
       if (error || !user) {
         error.status = 401;
         return next(error);
       } else {
       //res.send(user);
       res.redirect('/home');
       }
     });
   } else {
     var err = new Error('Something went wrong!');
     err.status = 400;
     return next(err);
   }
 });

