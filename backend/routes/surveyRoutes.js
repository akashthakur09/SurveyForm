// routes/questions.js
const express = require('express');
const Questions = require('../models/Questions');
const router = express.Router();

// Endpoint to create a question set
router.post('/questions', async (req, res) => {
    const {
        answer1,answer2, answer3,answer4,answer5,answer6,answer7, answer8, answer9,answer10,answer11,answer12,answer13
    } = req.body;
    const question1='What age group do you belong to?'
    const question2='How often do you experience stress, anxiety, or other mental health challenges?'
    const question3='Have you ever sought mental health support? '
    const question4='What are the biggest barriers that prevent you from seeking mental health support? (Select all that apply)'
    const question5='Would you be interested in using an AI-based mental health support tool that provides real-time support and therapy recommendations? '
    const question6='What would you most like to see in a mental health platform like Mannmuktt? (Select up to 3) '
    const question7='How much would you be willing to pay for personalized mental health services per month? '
    const question8='How comfortable are you with sharing your mental health data (e.g., mood tracking, emotional analysis) with an AI-powered platform like Mannmuktt?'
    const question9='Would you prefer speaking with a human therapist, using an AI chatbot, or a combination of both for mental health support? '
    const question10='Any additional thoughts or feedback about mental health platforms and how they can help you? (Open-ended response)'
    const question11='Mannmuktt offers features like AI-driven therapy suggestions, facial expression recognition, and speech analysis. Which of these features would you find most useful? (Select up to 2)'
    const question12='If Mannmuktt offers its advanced features (e.g., real-time AI support, personalized therapy recommendations, access to therapists), would you be willing to try it?'
    const question13='If Mannmuktt offers these advanced features, how much would you be willing to pay monthly for full access'


    try {
        const newQuestionSet = new Questions({
            question1, answer1, question2, answer2,question3, answer3,
            question4, answer4, question5, answer5, question6, answer6,
            question7, answer7, question8, answer8, question9, answer9,
            question10, answer10,question11, answer11,question12, 
            answer12,question13, answer13
        });
        await newQuestionSet.save();
        res.status(201).json({newQuestionSet,success:true});
    } catch (error) {
        res.status(400).json({ error: error.message,success:false });
    }
});

module.exports = router;
