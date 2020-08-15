const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    username: { type: String, required: true, trim: true },
    header: {type: String, required: true},
    color: { type: String, required: true },
    text: { type: String, required: true },
    showarea: {type: Boolean},
    favourite: { type: Boolean, required: true},
}, { timestamps: true })

const Notes = mongoose.model('Notes', notesSchema);
module.exports = Notes;