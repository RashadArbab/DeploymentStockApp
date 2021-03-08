require('dotenv').config()) 

// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const users = require('./routes/api')
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 8080; // Step 1
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Step 2
const MONGODB_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI , {
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


app.use(express.static('client/build'));

app.get("/*", (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})




// HTTP request logger
app.use(morgan('tiny'));
app.use('/api/users', users);



app.listen(PORT, console.log(`Server is starting at ${PORT}`));


//Change package.json to //"proxy": "https://limitless-castle-40490.herokuapp.com"
