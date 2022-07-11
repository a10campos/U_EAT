const jwt = require("jsonwebtoken");
const users = require('../example.json');
const underscore = require("underscore");


exports.loginUser = (req,res) => {
    // #swagger.tags = ['Users']
          /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Login',
                schema: { $ref: '#/definitions/LoginUser' }
        } */
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
            res.json(result);
            res.status(204).send("Credenciales correctos");
            return;
        }
    });
    if (encontro == false) {
        res.status(404).json({message:"Credenciales invalidos "});
    }
} ;

exports.registerUser = async (req,res) => {
    // #swagger.tags = ['Users']
      /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Add a user',
                schema: { $ref: '#/definitions/CreateUser' }
        } */
    const {name, lastName, email, username, telephone, password} = req.body;
    if (name && lastName && email && username && telephone && password) {
        let mailTaken = false;
        for(let i = 0; i < users.length && !mailTaken; ++i){
            if(email == users[i].email){
                mailTaken = true;
            }
        }
        if(mailTaken == false){
            const id = users.length+1;
            const newUser = {id,...req.body};
            users.push(newUser);
            console.log(users);
    
            const newrest = JSON.stringify(newUser);
            //await sendWelcomeEmail(email,name);
            //res.status(204).send();
            res.status(200).json({message:"!Su cuenta se ha creado con exito! Ahora inicie sesión"});
        }
        else{
            res.status(401).json({message:"El correo ingresado ya ha sido registrado anteriormente"});
        }
    }
    else {
        res.status(401).json({message:"Faltan campos por completar"});
    }

};
