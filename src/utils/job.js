const cron = require('node-cron');
const emailService  = require('../services/email-service');
const sender = require('../config/emailConfig');

/**
 * 10:00am 
 * Every 5 minutes
 * we will check are their any pending emails which was expected to be sent
 * by now 5  and is pending
 */

const setupJobs =  () => {
    cron.schedule('*/1 * * * *', async () => {
           const response = await emailService.fetchPendingEmails();
          //     
        response.forEach(email => {
            sender.sendMail({
                  to: email.recepientEmail,
                  subject: email.subject,
                  text: email.content
            }, async (err, data) => {
                if(err){
                  console.log(err);
                } else {
                  // console.log(data);
                  await emailService.updateTicket(email.id, {status: "SUCCESS"}); // here email is the object that is being fetched from the db when we have sent the mail
                  console.log("emails are", email);
                }
             }); 
            
          });
          // console.log(response);
    });
    
}
 
module.exports = setupJobs;
