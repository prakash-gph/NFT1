import nodemailer from "nodemailer"
import dotenv from"dotenv"
dotenv.config()

const transport = nodemailer.createTransport({
    host:"smtp-relay.brevo.com",
    port:587,
    secure:false,
    auth:{
        user: process.env.SMTP_USER,  
        pass:process.env.SMTP_PASSWORD,
      
    }
})

export default transport
/////
