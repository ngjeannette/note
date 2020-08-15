const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false  }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// require routes
const userRouter = require('./routes/users');
const notesRouter = require('./routes/notes');
const sendRouter = require('./routes/sendemail');

//set pathing
app.use('/user', userRouter);
app.use('/notes', notesRouter);
app.use('/email', sendRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});