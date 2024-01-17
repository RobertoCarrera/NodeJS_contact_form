const express = require('express'); 
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const router = express.Router();

router.post('/send-email', (req, res) => {

    const {nombre, telefono, email, mensaje} = req.body;
    const contentHtml = require('../contentHtml')(nombre, telefono, email, mensaje); 
    
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const REDIRECT_URI = process.env.REDIRECT_URI;
    const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

    const oAuth2Client = new google.auth.OAuth2(
        CLIENT_ID, 
        CLIENT_SECRET, 
        REDIRECT_URI
        );

    oAuth2Client.setCredentials({refresh_token: REFRESH_TOKEN});

    async function sendMail(){

        try{

            const accesToken = await oAuth2Client.getAccessToken();

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth:{
                    type:'OAuth2',
                    user:'robertocarreratech@gmail.com',
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accesToken
                }
            });

            const mailOptions = {

                from: "Libera tus Creencias",
                to: "robertocarreratech@gmail.com",
                subject: "Nuevo contacto en la web",
                html: contentHtml
            };

            const result = await transporter.sendMail(mailOptions);

            return result;

        }catch(err){

            console.log(err);
            res.status(500).send('Hubo un error al enviar el correo');
        }
    }

    sendMail()
        .then(result => res.status(200).send('Mensaje enviado'))
        .catch((error) => {
            console.log(error.message);
            res.status(500).send('Hubo un error al realizar la llamada al servidor');
        });
});

module.exports = router;