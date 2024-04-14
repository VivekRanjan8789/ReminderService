const express = require('express')
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service');

const setUpAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, async () => {
         console.log("Server started at", PORT);
    })

    sendBasicEmail(
        'support@admin.com',
        'vivekranjan8789@gmail.com',
        'This is a testing email',
        'Madarchoda. But i love u baby'
    )
}

setUpAndStartServer();

