const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Routes
router.get('/', (req, res) => {

    userModel.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});



router.post('/save', (req, res) => {
    const data = req.body;

    const newBlogPost = new userModel(data);

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});


router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});



module.exports = router;