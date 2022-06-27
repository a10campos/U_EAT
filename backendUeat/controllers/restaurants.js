const restaurants = require('../restaurants.json');
const underscore = require("underscore");
const fs = require('fs');


exports.registRest = async (req,res) => {
    const {nombre, correo,telefono,rangoPrecios} = req.body;
    if (nombre && correo && telefono && rangoPrecios) {
        const id = restaurants.length+1;
        const newRestaurant = {id,...req.body};
        restaurants.push(newRestaurant);
        console.log(restaurants);

        const newrest = JSON.stringify(newRestaurant)
        //fs.writeFile(restaurants, newrest, (err) => {
        //console.log(restaurants);
        await sendWelcomeEmail(correo,nombre);
        res.status(204).send();
        //}
    }
    else {
        res.status(401).send("Faltan campos por completar");
    }

};