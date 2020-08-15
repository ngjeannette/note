const router = require('express').Router();
let Note = require('../models/notes.model');

// notes find use
router.route('/finduser').get((req, res) => {
    const {query : {username}} = req; 
    Note.findOne({username})
        .then(note => { return res.json(note) })
        .catch(err => {console.log(err.status(400).json(err + 'note error'))})
});

// notes get headers only 
router.route('/findheader').get((req,res) => {
    const {query: {username}} = req;
   
    return Note.aggregate(
        [
            { $match: {username}},
            {
                $group: {
                    _id: null,
                    header: { $addToSet: '$header'}
                }
            },
            // Unwind it again
            { "$unwind": "$header" },

            // Sort how you want to
            { "$sort": { "header": 1 } },

            // Use $push for a regular array
            { "$group": { "_id": null, "header": { "$push": "$header" } } }

        ])
    .then(note => { console.log(note, 'note'); return res.json(note) })
    .catch(err => { console.log(err) })
});

// find anything related to the note post -> if it matches, update -> if it doens't match, create a new one to paost
router.route('/createnewnote').post((req,res) => {
    const {body: {username, header, color, favourite, showarea, text}} = req;
    const newnote = new Note({
        username,
        header,
        color,
        favourite,
        showarea,
        text
    });
    newnote.save()
        .then((note) => res.json(note))
        .catch((err) => res.status(400).json('errorPOST' + err))
    
});

// find anything with the note post
router.route('/findsectionpage').get((req,res) => {
    const {query: {username, header}} = req;
    Note.find({username,header})
        .then(note => { return res.json(note) })
        .catch(err => { console.log(err.status(400).json(err + 'note error')) })
})
// update savedchanges
router.route('/savedchanges').post((req,res) => {
    const {body: {_id, text, color, header, favourite}} = req;
    Note.findByIdAndUpdate(
        {_id},
        {text,color,header, favourite}
        )
        .then(note => { return res.json(note) })
        .catch(err => { console.log(err.status(400).json(err + 'note error')) })
});

router.route('/removenotes').post((req, res) => {
    Note.remove({})
        .then(conversation => { return res.json(conversation) })
        .catch(error => { console.log(error, 'error') })
});

// remove one note by header 
router.route('/removeNote').post((req,res) => {
    const {body: {username,header}} = req;
    Note.deleteMany({username,header})
    .then(note => {return res.json(note)})
    .catch(err => {console.log(err.status(400).json(err + 'noteerror'))})
})

// update tite
router.route('/updatetitle').post((req,res) => {
    Note.findOneAndUpdate({ header: req.body.prevTitle, username: req.body.username }, {header: req.body.title}, { new: true, useFindAndModify: false })
        .then(note => {return res.json(note)})
        .catch(err => {console.log(err)})
})

// check duplicate
router.route('/checktitleduplicate').get((req,res) => {
    const header = req.query.title;
    Note.findOne({header})
        .then(note => { return res.json(note) })
        .catch(err => { console.log(err) })
});

// get favourites 
router.route('/getfavourites').get((req,res) => {
    const {query: {username}} = req;
    console.log(req.query.username)
    Note.find({username, favourite: true})
        .then(favourite => {return res.json(favourite)})
        .catch(error => {console.log(error,'error')})
})

//find last created post 
router.route('/getrecentlycreated').get((req,res) => {
    const {query: {username}} = req;
    Note.find().limit(1).sort({ $natural: -1 })
    // Note.aggregate(
    //     [
    //         { $match: { username } },
    //         { $limit: 1},
    //         { sort: { $natural: "-1"}}
    //     ])
    .then(favourite => { console.log(favourite, 'favourite'); return res.json(favourite) })
    .catch(error => { console.log(error, 'error') })
})

module.exports = router;