const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: "yason",
        pass:"123password"
    }
})

module.exports = transporter;
// transport.sendMail({
//     to: "",
//     frome: "",
//     subject: "",
//     text:""
// })