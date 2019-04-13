const express = require('express');
const router = express.Router();
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

module.exports = router;