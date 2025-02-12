const nodemailer = require('nodemailer');
const mailSchema = require('../models/MailModel');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yashgohel2047@gmail.com",
      pass: "Y@sh2004",
    },
  });
