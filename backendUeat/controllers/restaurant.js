const restaurants = require('../restaurant.json');
const underscore = require("underscore");
const reviews = require("../review.json");
const { sendWelcomeEmail } = require('../services/mailService');
const { find } = require('underscore');

exports.registRest = async (req,res) => {
    // #swagger.tags = ['Restaurants']
      /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Add a restaurant',
                schema: { $ref: '#/definitions/CreateRest' }
        } */
    const {name, email,phone,rangePrice,country,province,university} = req.body;
    if (name && email && phone && rangePrice && country && province && university) {
        const id = restaurants.length+1;
        const newRestaurant = {id,...req.body};
        restaurants.push(newRestaurant);
        console.log(restaurants);
        const newrest = JSON.stringify(newRestaurant)
        await sendWelcomeEmail(newRestaurant);
        res.status(204).send();
    }
    else {
        res.status(401).json({message:"Faltan campos por completar "});
    }

};

exports.getRestaurants = async (req,res) => {
    // #swagger.tags = ['Restaurants']
    try{
        var result = [];
        var aux = [];
        const priceParams = parseInt(req.query.price);
        if(!priceParams){
            res.json(restaurants);
        }
        else {
            underscore.each(restaurants,(rest,i) => {
                const prices = rest.rangePrice.split('-');
                const price = parseInt(prices[1])
                if (price <= priceParams){
                   result.push(rest);
                    console.log("rest: "+ prices[1]);
                }
            });
            res.json(result);
        }
    }
    catch(error){
        res.status(500).json({message:"Error al traer los restaurantes"});
    }
};
exports.getRestaurantById = async (req,res) => {
    // #swagger.tags = ['Restaurants']
    try{
        const restId = parseInt(req.params.id);
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

exports.getReviewByRestaurant = async (req,res) => {
    // #swagger.tags = ['Restaurants']
    try {
        const restId = parseInt(req.params.id);
        const result =[];
        underscore.each(reviews,(review) => {
            if (review.restId == restId) {
                result.push(review);
            }
        });
        res.json(result);
    } catch (error) {
        res.status(500).json("Error in the server" + error)
    }
};