// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1



// Step 2
const MONGODB_URI = process.env.MONGODB_URI ; 
mongodb+srv://RashadArbab:Admn6392!@cluster0.3gbxy.mongodb.net/StockApp?retryWrites=true&w=majority

mongoose.connect(MONGODB_URI || 'mongodb://localhost/stock-app-deployment', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


// HTTP request logger
app.use(morgan('tiny'));

const login = require('./routes/server-login');
app.use ('/login' , login); 

const register = require('./routes/server-register');
app.use ('/register' , register); 

const watchlist = require('./routes/server-watchlist');
app.use ('/watchlist' , watchlist); 

const notes = require('./routes/server-notes');
app.use ('/notes' , notes); 



app.listen(PORT, console.log(`Server is starting at ${PORT}`));