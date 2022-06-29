const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const server = express();
server.use(express.json());
server.use(cors());
server.set('json spaces',2);

const userRoutes = require("./routes/user");
const restRoutes = require("./routes/restaurant");

//Mount Routes 
server.use(userRoutes);
server.use(restRoutes);



server.listen(process.env.PORT||7500);
console.log(`Server running at http://localhost:${process.env.PORT || 7500}`)