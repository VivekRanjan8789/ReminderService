const express = require('express')
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');

const TicketController = require('./controllers/ticket-controller');
const jobs = require('./utils/job');

const setUpAndStartServer = () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets',TicketController.create);

    app.listen(PORT, async () => {
         console.log("Server started at", PORT);

         jobs();
    })

    // sendBasicEmail(
    //     'support@admin.com',
    //     'vivekranjan8789@gmail.com',
    //     'This is a testing email',
    //     'Madarchoda. But i love u baby'
    // )
}

setUpAndStartServer();

