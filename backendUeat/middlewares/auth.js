const jwt = require ("jsonwebtoken");
const {searchUser } = require("../models.js");
const users = require('../example.json');
const underscore = require("underscore");

exports.userIsAutenticated = async (req, res, next) => {
    if (req.headers && req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
            try{
                const decrytedToken = jwt.verify(token,process.env.JWT_KEY);
                var user = false;
                underscore.each(users,(OneUser,i) => {
                    if (decrytedToken.userEmail == OneUser.email){
                        user = true;
                    }
                })
                if (!user) {
                    res.status(401).json({
                        error:true,
                        message:"Credenciales invalidos"
                    });
                }
                else {
                    req.user = decrytedToken;
                    next();
                }
            }
            catch{
                res.status(401).json({
                    error:true,
                    message: "Usuario sin autorizacion"
                });
            }
        }
        else {
            res.status(401).json({
                error:true,
                message: "El usuario no esta autentificado"
            });
        }
    }
    else {
        res.status(401).json({
            error:true,
            message: "El usuario no esta autentificado"
        });
    }
}