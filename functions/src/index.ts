import * as functions from 'firebase-functions';
import * as  admin from 'firebase-admin';
import * as nodemailer from 'nodemailer';
import EmailDto from './email.dto';

const cors = require('cors')({ origin: true });

admin.initializeApp();

/**
 * Here we're using Gmail to send
 */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email.service.sabrosu@gmail.com',
    pass: 'fbyatysufdqqedcm'
  }
});

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    // getting dest email by query string
    const emailDto = req.body as EmailDto;

    const mailOptions = {
      from: emailDto.from,
      to: 'dragoiuraul2009@gmail.com',
      subject: emailDto.subject,
      html: `<p style="font-size: 16px;">Message</p>
            <p>${ emailDto.message }</p>`
    };

    transporter.sendMail(mailOptions, (erro) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send('Sended');
    });
  });
});
