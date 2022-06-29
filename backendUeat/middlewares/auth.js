const jwt = require ("jsonwebtoken");

exports.userIsAutenticated = async (req, res, next) => {
    if (req.headers && req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
            try{
                const decrytedToken = jwt.verify(token,process.env.JWT_KEY);
                const user = {"email":"a10campos","password":"ueat123"};
                if (!user) {
                    res.status(401).json({
                        error:true,
                        message:"Credenciales invalidas"
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
                    message: "Credenciales invalidas"
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