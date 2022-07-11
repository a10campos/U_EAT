const reviews = require('../review.json');

exports.sendReview = async (req,res) => {
    // #swagger.tags = ['Reviews']
          /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Add a review to restaurant',
                schema: { $ref: '#/definitions/CreateReview' }
        } */
    const {stars, details,restId} = req.body;
    if (stars && details && restId) {
        const id = reviews.length+1;
        const newReview = {id,...req.body};
        reviews.push(newReview);
        res.status(204).send("Se registro correctamente la review");
    }
    else {
        res.status(401).json({message:"Faltan campos por completar "});
    }

};