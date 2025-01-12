// Install dependencies: express, nodemailer, body-parser
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com", // Replace with your Gmail
        pass: "your-app-password",    // Use an app password, not your actual password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: "your-email@gmail.com", // Your Gmail to receive the message
      subject: `New Message from ${name}`,
      text: message,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send message.");
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
