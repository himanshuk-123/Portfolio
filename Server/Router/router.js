import express from 'express';
import { PortfolioData } from '../Models/Schema.js'; // ✅ Correct import path

const router = express.Router();

router.post('/hire', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new PortfolioData({ name, email, message });

    await newMessage.save();
    console.log(newMessage); // ✅ Log the message for debugging
    return res.status(200).json({ message: "Message sent successfully", success: true });
  } catch (error) {
    console.error(error); // ✅ Log the error for debugging
    return res.status(500).json({ error: "Server error, please try again later" });
  }
});

export default router;
