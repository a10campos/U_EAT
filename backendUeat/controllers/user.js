const jwt = require("jsonwebtoken");

const users = require('../example.json');
const underscore = require("underscore");
exports.loginUser = (req,res) => {
    var encontro = false;
    const userPayload = req.body;

    underscore.each(users,(user,i) => {
        if (userPayload.email == user.email && userPayload.password == user.password){
            console.log("Se encontro");
            encontro=true;
            const token = jwt.sign(
                {userEmail:user.email},process.env.JWT_KEY
            );
            const result = {
                //...user.email.toJSON(),
                token,
            }
            res.json(result);
            return;
        }
    });
    if (encontro == false) {
        res.status(401).send("Credenciales invalidos");
    }
} ;
