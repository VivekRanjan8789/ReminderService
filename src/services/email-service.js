const sender = require('../config/emailConfig');

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response =await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
         });
         console.log(response);
         return response;
    } catch (error) {
        console.log(error);
    }
    
}


module.exports = {
    sendBasicEmail
}

/**
 * SMTP -> a@b.com
 * receiver -> c@d.com
 * 
 * from: support@comp.com
 */