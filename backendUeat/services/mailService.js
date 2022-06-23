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

exports.sendWelcomeEmail = async(userEmail,nombreRest) => {
    let transporter = getTransporter();
    await transporter.sendMail({
        from: "eb0tpru@hotmail.com",
        to: userEmail,
        subject: "Confirmacion de registro de restaurante",
        text: "Muchas gracias por registrar el restaurante en" + nombreRest + " en nuestra pagina"
    })
}