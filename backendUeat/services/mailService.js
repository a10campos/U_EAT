const nodemailer = require("nodemailer");

const getTransporter = function () {
    let transporter;
    transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secureConnection: false,
        tls: {
            ciphers:'SSLv3'
        },
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    return transporter;
}

exports.sendWelcomeEmail = async(restaurant) => {
    let transporter = getTransporter();
    await transporter.sendMail({
        from: "eb0tpru@hotmail.com",
        to: restaurant.email,
        subject: "Confirmación de registro de restaurante",
        text: "Muchas gracias por registrar el restaurante " + restaurant.name  + " en nuestra página" +  "\n Ubicado en: " + restaurant.country + ", " + restaurant.province + ".\n  Cerca de la : " + restaurant.university + "."
    })
}