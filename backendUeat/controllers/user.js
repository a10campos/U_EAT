const users = require('../example.json');
const underscore = require("underscore");
exports.loginUser = (req,res) => {
    var encontro = false;
    const userPayload = req.body;

    underscore.each(users,(user,i) => {
        if (userPayload.email == user.email && userPayload.password == user.password){
            console.log("Se encontro");
            encontro=true;
            res.status(204).send();
            return;
        }
    });
    if (encontro == false) {
        res.status(401).send("Credenciales invalidos");
    }
} ;
