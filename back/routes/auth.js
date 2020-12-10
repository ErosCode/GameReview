const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation }= require('../validation');
const auth = require('../middlewares/auth');


router.post('/register', async (req, res) => {
    // Validate the data before add a new user
    const {error} = registerValidation(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    // Checking if user is already in the database
    const emailExist = await User.findOne({
        email: req.body.email
    });
    if(emailExist) {
        return res.status(400).send('Email already exists');
    };
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // Create a new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save();
        res.send({ user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
});

// Login
router.post('/login', async (req,res) => {
     // Validate the data before add a new user
    const {error} = loginValidation(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    // Checking if the email exists
    const user = await User.findOne({
        email: req.body.email
    });
    if(!user) {
        return res.status(400).send('Email is not found');
    };
    // Password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
        return res.status(400).send('Invalid password');
    };

    // Create and assign a token
    const token = jwt.sign({ id: user._id}, process.env.TOKEN_SECRET);
    res.json({token, user: {
        id: user._id,
        email: user.email,
        username: user.name,
        role: user.role,
    }});
});

router.delete("/user/delete", auth, async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.user);
      res.json(deletedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

router.post('/user/tokenIsValid', async (req, res) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.json(false);

        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        if(!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);

        return res.json(true);

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

router.get('/user/', auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
        id: user._id,
        username: user.name,
        email: user.email,
        role: user.role,
    });
})


module.exports = router;