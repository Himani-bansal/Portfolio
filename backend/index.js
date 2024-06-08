const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactForm', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a schema and model
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// API endpoint to handle form submissions
app.post('/api/contact', (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save()
        .then(() => res.status(200).json('Contact saved!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
