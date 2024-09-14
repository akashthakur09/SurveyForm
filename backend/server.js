const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://iamakash0218:l7WIzyAAyizLxjyi@cluster0.sftih.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// API Routes
const surveyRoutes = require('./routes/surveyRoutes');
app.use('/api/survey', surveyRoutes);

// Serve static files from the React frontend app (build folder)
app.use(express.static(path.join(__dirname, 'build')));

// Handle client-side routing for React (catch-all route)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
