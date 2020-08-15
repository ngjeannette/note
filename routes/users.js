const router = require('express').Router();
let User = require('../models/users.model');

// create user -- POST
router.route('/createuser').post((req,res) => {
    const {body: {username, password, email}} = req;
    const newUser = new User({
    username,
    password,
    email
    })
    newUser.save()
        .then(() => res.json('User Added'))
        .catch((err) => res.status(400).json('errorPOST' + err))
});

//create user -- CHECK
router.route('/checkuser').get((req,res) => {
    const {query: {username, email}} = req;
    User.find({ $or : [{email}, {username}] })
        .then(user => {return res.json(user)})
        .catch(err => res.status(400).json(err + 'checkuser') )
});

// login to user -- GET FIND
router.route('/login').get((req,res) => {
    const {query: {username, password}} = req;
    User.findOne({username, password})
        .then(user => {return res.json(user)})
        .catch(err => res.status(400).json(err + 'errLOGIN'))
});

// login forgot password -- GET FIND
router.route('/forgotpassword').get((req,res) => {
    const {query: {email}} = req;
    User.findOne({email})
        .then(email =>  {console.log(email,'email');return res.json(email)})
        .catch(err => res.status(400).json(err + 'forgotpassword'))
})



// router.route('/allusers').get((req, res) => {
//     console.log(req.query, 'req.query')
//     User.find({ username: { $ne: req.query.username } })
//         .then(username => { return (res.json(username)) })
//         .catch(err => res.status(400).json('allusers error'))
// })

// router.route('/checkemail').get((req, res) => {
//     const { query: { email, username } } = req;
//     User.find({ $or: [{ email }, { username }] })
//         // User.findOne({ email })
//         .then(email => { return res.json(email) })
//         .catch(err => res.status(400).json('duplicate created' + err))
// });

// router.route('/login').get((req, res) => {
//     const { query: { isgoogleauthenticate, username, password } } = req;
//     User.findOne({ email, password })
//         .then(email => { return res.json(email) })
//         .catch(err => res.status(400).json('cannot log in' + err))
// })

// router.route('/createuser').post((req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;
//     const email = req.body.email;
//     const isgoogleauthenticate = req.body.isgoogleauthenticate;
//     const newUser = new User({
//         username,
//         password,
//         email,
//         isgoogleauthenticate
//     })
//     newUser.save()
//         .then(() => res.json('User Added'))
//         .catch((err) => res.status(400).json('errorPOST' + err))
// });

// // remove all from database
// router.route('/removeuser').post((req, res) => {
//     User.remove({})
//         .then(user => { return res.json(user) })
//         .catch(error => { console.log(error, 'error') })
// });

module.exports = router;