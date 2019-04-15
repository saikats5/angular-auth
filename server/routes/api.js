const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb://admin1:admin1@ds135796.mlab.com:35796/angauthdb";

mongoose.connect(db, err => {
    if (err) {
        console.log('ERROR!' + err);
    } else {
        console.log('Connected to MongoDB');
    }
});

router.get('/', (req, res) => {
    res.send('From API route');
})

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser);
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid email');
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password');
                } else {
                    res.status(200).send(user);
                }
            }
        }
    })
})

router.get('/events', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "ABC",
            "description": "abc",
            "date": "01/01/2019"
        },
        {
            "_id": "2",
            "name": "DEF",
            "description": "def",
            "date": "02/02/2019"
        },
        {
            "_id": "3",
            "name": "GHI",
            "description": "ghi",
            "date": "03/03/2019"
        },
        {
            "_id": "4",
            "name": "JKL",
            "description": "jkl",
            "date": "04/04/2019"
        },
        {
            "_id": "5",
            "name": "MNO",
            "description": "mno",
            "date": "05/05/2019"
        }
    ]
    res.json(events);
})

router.get('/special', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "ABC",
            "description": "abc",
            "date": "01/01/2019"
        },
        {
            "_id": "2",
            "name": "DEF",
            "description": "def",
            "date": "02/02/2019"
        },
        {
            "_id": "3",
            "name": "GHI",
            "description": "ghi",
            "date": "03/03/2019"
        },
        {
            "_id": "4",
            "name": "JKL",
            "description": "jkl",
            "date": "04/04/2019"
        },
        {
            "_id": "5",
            "name": "MNO",
            "description": "mno",
            "date": "05/05/2019"
        }
    ]
    res.json(events);
})

module.exports = router;