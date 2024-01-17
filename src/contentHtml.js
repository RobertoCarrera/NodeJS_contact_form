module.exports = `
    <!DOCTYPE html>
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Envio de correo Electronico con NodeJS</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@600&display=swap" rel="stylesheet"/>
            <style>
            html {
                height: 100%;
            }
            body {
                position: absolute;
                bottom: 0;
                right: 0;
                font-family: "Instrument Sans", sans-serif;
            }
            .content {
                top: 0;
                margin: 0 auto;
                width: 40%;
                height: 40vh;
                background-color: #f2f4f8;
            }
            h1 {
                color: #419D78;
                padding: 10px 5px 5px;
                margin: 0;
            }
            section {
                padding: 0px 50px;
            }
            p {
                text-align: justify;
                color: black !important;
            }
            hr {
            border: 1px solid #eee;
            }
            </style>
        </head>
        <body>
            <div class="content">
                <h1 style="text-align: center">
                    ¡Nuevo contacto en tu web!
                    <hr/>
                </h1>
                <section>
                    <h4>Nombre: ${nombre}</h4>
                    <h4>Correo: ${email}</h4>
                    <p>${mensaje}</p>
                </section>
                <img class="logo" src="../assets/logo_verde.png" alt="">
            </div>
        </body>
    </html>`;