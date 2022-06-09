import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
 
  try {
    
    await sendgrid.send({
      to: "cindypao27@gmail.com", 
      from: "cindypao27@gmail.com", 
      subject: `${req.body.subject}`,
      html: `
        <div>You've got a mail</div>
        <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
        <p>Message:</p>
        <p>${req.body.message}</p>
        <br>
      `,
    });
    
  } catch (error) {
    console.log(error);
    
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;