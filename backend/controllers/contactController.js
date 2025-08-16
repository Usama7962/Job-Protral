import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const submitContactForm = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newContact = new Contact({ firstName, lastName, email, message });
    await newContact.save();

    // Nodemailer Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL, 
        pass: process.env.ADMIN_EMAIL_PASSWORD 
      }
    });

    // Email to Admin
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL, // Admin Email
      subject: "New Contact Form Submission",
      html: `
        <h3>New Message from Contact Form</h3>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    // Thank You Email to User
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: email,
      subject: "Thank You for Contacting Us",
      text: `Hello ${firstName},\n\nThanks for your message! We will get back to you soon.\n\nRegards,\nYour Company`
    });

    res.status(200).json({ message: "Form submitted successfully" });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
