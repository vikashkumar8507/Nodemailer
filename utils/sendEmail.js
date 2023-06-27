const  nodemailer = require("nodemailer");

const sendEmail = async (to, messageContent)=>{
    try{
        //create transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth:{
                user: '', //gmail id
                pass: ''  //app password
            }
        })

        //message obj
        const message = {
            to,
            subject: "New Message From Nodemailer App",
            html: `
            <h3>You have received a new message from Nodemailer App</h3>
            <p>${messageContent}</p>
            `
        };
        //send the email
        const info = await transporter.sendMail(message);
        console.log('Message Sent', info.messageId);

    }catch(error){
        console.log(error);
        throw new Error("Email could not be sent");
    }
};

module.exports = sendEmail;