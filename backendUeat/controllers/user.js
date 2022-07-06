const jwt = require("jsonwebtoken");
const users = require('../example.json');
const underscore = require("underscore");


exports.loginUser = (req,res) => {
    var encontro = false;
    const userPayload = req.body;

    underscore.each(users,(user,i) => {
        if (userPayload.email == user.email && userPayload.password == user.password){
            encontro=true;
            const token = jwt.sign(
                {userId:user.id,userEmail:user.email},process.env.JWT_KEY
            );
            const result = {
                ...user,
                token,
            };
            console.log(token);
            res.json(result);
            return;
        }
    });
    if (encontro == false) {
        res.status(404).json({message:"Credenciales invalidos "});
    }
} ;
