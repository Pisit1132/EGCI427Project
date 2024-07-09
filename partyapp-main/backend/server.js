const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Updated to bcryptjs
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Added CORS package
const app = express();

app.use(express.json());
app.use(cors()); // Enable CORS

const uri = "mongodb+srv://yun12348:Yun051245@cluster0.xyrqju1.mongodb.net/User?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    surveyCompleted: { type: Boolean, default: false } // Added surveyCompleted field
}, { collection: 'User' });

const User = mongoose.model('User', UserSchema);

// Survey model
const SurveySchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    question: String,
    answer: String
});

const Survey = mongoose.model('Survey', SurveySchema);

// JWT secret key
const JWT_SECRET = '1234'; 

// Signup route
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({ email, password: hashedPassword });
    await user.save();
    
    res.status(201).send('User created');
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id, surveyCompleted: user.surveyCompleted }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, surveyCompleted: user.surveyCompleted });
    } else {
        res.status(400).send('Invalid credentials');
    }
});

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.userId = verified.userId;
        req.surveyCompleted = verified.surveyCompleted;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
};

// Store survey route 
app.post('/survey', verifyToken, async (req, res) => {
    const { question, answer } = req.body;
    const survey = new Survey({ userId: req.userId, question, answer });
    await survey.save();
    
    await User.updateOne({ _id: req.userId }, { surveyCompleted: true }); // Update surveyCompleted flag
    res.status(201).send('Survey stored');
});

app.listen(3000, () => console.log('Server running on port 3000'));
