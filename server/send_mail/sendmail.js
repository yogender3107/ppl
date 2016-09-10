var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "gmail",
    auth: {
        user: "demomailer0812@gmail.com",
        pass: "chandu@1234"
    }
});

function sendmail(email, sub, content) {
	console.log("aa to ra hi hga");
    /*xxxxx sending email  xxxxxx*/
    content = content + "\n\nNote: Please dont reply to this mail.";
    var mailoptions = {
        to: email,
        subject: sub,
        text: content
    }
    smtpTransport.sendMail(mailoptions, function(err, data) {
        if (err){return "error";}
        else{
                return "sent";
            }
    });
}
module.exports = sendmail;