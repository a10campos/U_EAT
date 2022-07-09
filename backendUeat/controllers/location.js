// const countries = require('../countries.json');
// const restaurants = require('../states.json');
// const restaurants = require('../universities.json');

exports.sendReview = async (req,res) => {
    const {points, details} = req.body;
    if (points && details) {
        const id = reviews.length+1;
        const newReview = {id,...req.body};
        reviews.push(newReview);
        console.log(reviews);
        res.status(204).send();
    }
    else {
        res.status(401).json({message:"Faltan campos por completar "});
    }

};