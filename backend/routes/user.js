const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/adduser', (req, res) => {
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        company: req.body.company,
        department: req.body.department,
        position: req.body.position,
        email: req.body.email,
    });
    newUser
    .save()
    .then(user => {
        res.json(user)
    });
})

router.get('/getuser', (req, res) => {
    User
    .find({})
    .then(user => {
        res.json(user)
    });
})

module.exports = router;