// models/Questions.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    question1: { type: String, required: true },
    answer1: { type: Array, required: true },

    question2: { type: String, required: true },
    answer2: { type: Array, required: true },

    question3: { type: String, required: true },
    answer3: { type: Array, required: true },

    question4: { type: String, required: true },
    answer4: { type: Array, required: true },

    question5: { type: String, required: true },
    answer5: { type: Array, required: true },

    question6: { type: String, required: true },
    answer6: { type: Array, required: true },

    question7: { type: String, required: true },
    answer7: { type: Array, required: true },

    question8: { type: String, required: true },
    answer8: { type: Array, required: true },

    question9: { type: String, required: true },
    answer9: { type: Array, required: true },

    question10: { type: String, required: true },
    answer10: { type: Array, required: true },

    question11: { type: String, required: true },
    answer11: { type: Array, required: true },

    question12: { type: String, required: true },
    answer12: { type: Array, required: true },

    question13: { type: String, required: true },
    answer13: { type: Array, required: true },
});

const Questions = mongoose.model('Questions', questionSchema);

module.exports = Questions;
