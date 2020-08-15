const router = require('express').Router();
const User = require('../models/users.model'); ''

const sendEmail = require('../send');

// check in database if it exists first 


router.route('/send').post((req, res) => {
    const {
        body: {
            email,
            password
        },
    } = req;
    
    User.findOne({ email })
        .then(user => {
            const {
                email,
                username,
                password,
            } = user;
            const subject = 'NotesApp Password recovery';
            const body = `Your username is ${user.username}! Your password is ${user.password}!`;
            sendEmail([user.email], subject, body);
            return res.json('Success');
        })
        .catch(err => res.json(null))
})

module.exports = router;