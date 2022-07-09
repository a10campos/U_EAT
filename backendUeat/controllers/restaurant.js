const restaurants = require('../restaurant.json');
const underscore = require("underscore");
const { sendWelcomeEmail } = require('../services/mailService');

exports.registRest = async (req,res) => {
    const {name, email,phone,rangePrice,country,province,university} = req.body;
    if (name && email && phone && rangePrice && country && province && university) {
        const id = restaurants.length+1;
        const newRestaurant = {id,...req.body};
        restaurants.push(newRestaurant);
        console.log(restaurants);
        const newrest = JSON.stringify(newRestaurant)
        //await sendWelcomeEmail(email,name);
        res.status(204).send();
    }
    else {
        res.status(401).json({message:"Faltan campos por completar "});
    }

};
exports.getRestaurants = async (req,res) => {
    try{
        res.json(restaurants);
    }
    catch(error){
        res.status(500).json({message:"Error al traer loa restaurantes"});
    }
};
exports.getRestaurantById = async (req,res) => {
    try{
        const restId = parseInt(req.params.id)
        underscore.each(restaurants,(rest,i) => {
            if (rest.id == restId) {
                const result = rest;
                res.json(result);
            }
        });
    } catch (error) {
        res.status(500).json("Error in the server" + error);
    }

};