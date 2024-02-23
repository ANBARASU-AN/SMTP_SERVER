

require('dotenv').config();

const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Use the provided port or default to 2015
const port = process.env.PORT || 2015;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json()); // Parse JSON requests

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE ? Boolean(process.env.SMTP_SECURE === 'true') : false,
  auth: {
    user: process.env.SMTP_USER || 'allsmart.org@gmail.com',
    pass: process.env.SMTP_PASS || 'wzks xdld dccc yvzj',
  },
  tls: {
    ciphers: process.env.SMTP_CIPHERS || 'SSLv3',
  },
});

app.post('/sendMailWithAttachment', upload.single('attachment'), async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  try {
    const { recipient, subject, msgBody } = req.body;
    const attachment = req.file;

    const mailOptions = {
      from: process.env.SMTP_FROM || 'allsmart.org@gmail.com',
      to: recipient,
      subject: subject,
      text: msgBody,
      attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : [],
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!', info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error while sending email.' });
  }
});





/*

require('dotenv').config();

const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Allow CORS
app.use(cors());

// Use the provided port or default to 2015
const port = process.env.PORT || 2015;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json()); // Parse JSON requests

app.use((req, res, next) => {
  console.log(`Received request from ${req.method} ${req.url}`);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE ? Boolean(process.env.SMTP_SECURE === 'true') : false,
  auth: {
    user: process.env.SMTP_USER || 'allsmart.org@gmail.com',
    pass: process.env.SMTP_PASS || 'wzks xdld dccc yvzj',
  },
  tls: {
    ciphers: process.env.SMTP_CIPHERS || 'SSLv3',
  },
});

app.post('/sendMailWithAttachment', upload.single('attachment'), async (req, res) => {
  try {
    const { recipient, subject, msgBody } = req.body;
    const attachment = req.file;

    const mailOptions = {
      from: process.env.SMTP_FROM || 'allsmart.org@gmail.com',
      to: recipient,
      subject: subject,
      text: msgBody,
      attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : [],
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!', info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error while sending email.' });
  }
});




/*

require('dotenv').config();

const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Allow CORS
app.use(cors());

// Use the provided port or default to 2015
const port = process.env.PORT || 2015;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Update CORS configuration
// Update CORS configuration
app.use((req, res, next) => {
  console.log(`Received request from ${req.method} ${req.url}`);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000','*'); // Allow requests from localhost:3000 and any other origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});



const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE ? Boolean(process.env.SMTP_SECURE === 'true') : false,
  auth: {
    user: process.env.SMTP_USER || 'allsmart.org@gmail.com',
    pass: process.env.SMTP_PASS || 'wzks xdld dccc yvzj',
  },
  tls: {
    ciphers: process.env.SMTP_CIPHERS || 'SSLv3',
  },
});

app.use(express.json()); // Parse JSON requests

app.post('/sendMailWithAttachment', upload.single('attachment'), async (req, res) => {
  try {
    const { recipient, fullname, subject, msgBody } = req.body;
    const attachment = req.file;

    const mailOptions = {
      from: process.env.SMTP_FROM || 'allsmart.org@gmail.com',
      to: recipient,
      subject: subject,
      text: `Full Name: ${fullname}\n\n${msgBody}`,
      attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : [],
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!', info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error while sending email.' });
  }
});

module.exports = app;





/*


require('dotenv').config();

const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Allow CORS (*) during development
app.use(cors());

// Use the provided port or default to 2015
const port = process.env.PORT || 2015;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Update CORS configuration
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_ORIGIN || 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE ? Boolean(process.env.SMTP_SECURE === 'true') : false,
  auth: {
    user: process.env.SMTP_USER || 'allsmart.org@gmail.com',
    pass: process.env.SMTP_PASS || 'wzks xdld dccc yvzj',
  },
  tls: {
    ciphers: process.env.SMTP_CIPHERS || 'SSLv3',
  },
});

app.use(express.json()); // Parse JSON requests

app.post('/sendMailWithAttachment', upload.single('attachment'), async (req, res) => {
  try {
    const { recipient, fullname, subject, msgBody } = req.body;
    const attachment = req.file;

    const mailOptions = {
      from: process.env.SMTP_FROM || 'allsmart.org@gmail.com',
      to: recipient,
      subject: subject,
      text: `Full Name: ${fullname}\n\n${msgBody}`,
      attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : [],
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!', info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error while sending email.' });
  }
});

module.exports = app;


/*
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Allow CORS (*) during development
app.use(cors());

// Use the provided port or default to 2014
const port = process.env.PORT || 2014;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Update CORS configuration
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_ORIGIN || 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE ? Boolean(process.env.SMTP_SECURE === 'true') : false,
  auth: {
    user: process.env.SMTP_USER || 'allsmart.org@gmail.com',
    pass: process.env.SMTP_PASS || 'wzks xdld dccc yvzj',
  },
  tls: {
    ciphers: process.env.SMTP_CIPHERS || 'SSLv3',
  },
});

app.use(express.json()); // Parse JSON requests

app.post('/sendMailWithAttachmentAndSave', upload.single('attachment'), async (req, res) => {
  try {
    const { recipient, fullname, subject, msgBody } = req.body;
    const attachment = req.file;

    const mailOptions = {
      from: process.env.SMTP_FROM || 'allsmart.org@gmail.com',
      to: recipient,
      subject: subject,
      text: `Full Name: ${fullname}\n\n${msgBody}`,
      attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : [],
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!', info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error while sending email.' });
  }
});

module.exports = app;


/*

const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors()); // Enable CORS


// Use the provided port or default to 2014
const port = process.env.PORT || 2014;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


// Allow CORS (*) - place it at the top
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_SECURE ? Boolean(process.env.SMTP_SECURE === 'true') : false,
  auth: {
    user: process.env.SMTP_USER || 'allsmart.org@gmail.com',
    pass: process.env.SMTP_PASS || 'wzks xdld dccc yvzj',
  },
  tls: {
    ciphers: process.env.SMTP_CIPHERS || 'SSLv3',
  },
});

app.use(express.json()); // Parse JSON requests

app.post('/sendMailWithAttachmentAndSave', upload.single('attachment'), async (req, res) => {
  try {
    const { recipient, fullname, subject, msgBody } = req.body;
    const attachment = req.file;

    const mailOptions = {
      from: process.env.SMTP_FROM || 'allsmart.org@gmail.com',
      to: recipient,
      subject: subject,
      text: `Full Name: ${fullname}\n\n${msgBody}`,
      attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : [],
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!', info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error while sending email.' });
  }
});

module.exports = app;





/*

const express = require('express');
const app = express();
const multer = require('multer');
const nodemailer = require('nodemailer');

 // Use the provided port or default to 2014
const port = process.env.PORT || 2014;

// Allow CORS (*) - place it at the top
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use TLS
  auth: {
    user: 'allsmart.org@gmail.com',
    pass: 'wzks xdld dccc yvzj',
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json()); // Parse JSON requests

app.post('/sendMailWithAttachmentAndSave', upload.single('attachment'), async (req, res) => {
  try {
    const { recipient, fullname, subject, msgBody } = req.body;
    const attachment = req.file;

    const mailOptions = {
      from: 'allsmart.org@gmail.com',
      to: recipient,
      subject: subject,
      text: `Full Name: ${fullname}\n\n${msgBody}`,
      attachments: attachment ? [{ filename: attachment.originalname, content: attachment.buffer }] : [],
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!', info });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error while sending email.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*

*/