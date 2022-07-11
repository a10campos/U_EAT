const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "U Eat - API",
    description: "Este es el API del proyecto U Eat",
  },
  host: "api.ueat.ucr.ac.cr",
  schemes: ["http", "https"],
  definitions: {
    CreateUser: {
      "name": "Johnny",
      "lastName": "Depp",
      "email": "johnny@correo.com",
      "username": "johnnyRocks",
      "telephone": 85471222,
      "password": "johnnyRocks123"
    },
    LoginUser: {
      "email": "johnny@correo.com",
      "password": "johnnyRocks123"
    },
    CreateRest: {
        "name": "Johnny Rocket",
        "email": "jrocket@gmail.com",
        "phone": 22541287,
        "rangePrice": "2500-7000",
        "country": "Costa Rica",
        "province": "Heredia",
        "university": "UNA"
      },
      CreateReview: {       
          "stars": 5,
          "details": "Muy buena comida, me encanta",
          "restId": 1
      },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./server.js");
});
