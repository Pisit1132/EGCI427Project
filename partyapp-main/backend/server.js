const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Updated to bcryptjs
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Added CORS package
const app = express();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({ // preventer of too many access
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per 15 minutes
});

app.use(limiter);
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


const authLimiter = rateLimit({ // set up the late limmit
    windowMs: 60 * 60 * 10, // 36 seconds window 
    max: 5, // start blocking after 5 requests
    message: "Too many login attempts from this IP, please try again soon"
});




// Signup route
app.post('/signup',authLimiter, async (req, res) => {
    const { email, password } = req.body;

    // Password validation, password should be 6 character long and contains special character
    const passwordRegex = /^(?=.*[!@#$%^&*_-])(?=.{6,})/;
    if (!passwordRegex.test(password)) {
        return res.status(400).send('Password must be at least 6 characters long and contain at least one special character');
    }

    const hashedPassword = await bcrypt.hash(password, 10); // using bcrypt instead of md5 that we learn in class because it is more secure and require much more time to crack 
    
    const user = new User({ email, password: hashedPassword });
    try {
        await user.save();
        res.status(201).send('User created');
    } catch (error) {
        res.status(500).send('Error creating user');
    }
});
// Login route, also apply 
app.post('/login',authLimiter, async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id, surveyCompleted: user.surveyCompleted }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, surveyCompleted: user.surveyCompleted });
    } else {
        res.status(400).send('Invalid credentials');
    }
}); 

// verify JWT
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
