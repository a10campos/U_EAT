const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const swaggerUI = require("swagger-ui-express");
dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());
server.set('json spaces',2);

aws.config.update({
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_KEY_SECRET,
    region: "us-east-1",
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3,
        acl: "public-read",
        bucket: "ci0137",
        key: function (req, file,cb ){
            cb (null,`U-eat/restaurants/${file.originalname}`)

        }
    })
})



const userRoutes = require("./routes/user");
const restRoutes = require("./routes/restaurant");
const reviewRoutes = require("./routes/review");

const swaggerFile = require('./swagger.json')

//Mount Routes 
server.use(userRoutes);
server.use(restRoutes);
server.use(reviewRoutes);

//Documentation setup
server.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));


server.post("/upload",upload.single("file"), function(req, res){
    const file = req.file;
    res.send({
        message:"Uploaded!",
        url: file.location,
        name: file.key,
        type: file.mimetype,
        size: file.size,
    });
});

server.listen(process.env.PORT||7500);
console.log(
    `The server is running at http://localhost:${process.env.PORT || 7500}
     You can find the docs at http://localhost:${process.env.PORT || 7500}/docs`
  );