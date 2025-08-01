const express = require('express');
const router = express.Router();
const contact = require("../models/contact");
const feedback = require("../models/feedback");
const data = require("../data.js");


//get all recipe details route
router.get('/getallrecipe', async (req, res) => {
  try {
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newContact = new contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/feedback', async (req, res) => {
  try {
    const { name, email, recipeName, feedbackMsg } = req.body;
    if (!name || !email || !recipeName || !feedbackMsg) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newFeedback = new feedback({ name, email, recipeName, feedbackMsg });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback saved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;