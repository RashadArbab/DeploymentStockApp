const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const app = express();
const bcrypt = require('bcrypt')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.post(`/id/:email/:password`, (req, res) => {
    var email = req.params.email;
    var password = req.params.password;
    console.log(`login request ${email} ${password}`)


    userModel.findOne({ email: email }, (err, documents) => {
        if (err) {
            res.send(err);
        }
        else if (documents === null) {
            res.send('user does not exist');
        } else {
            if (bcrypt.compareSync(password, documents.pass)) {
                console.log(`authenticated user ${email} ${password}`)
                res.send([`access granted`, documents.name]);
            }
            else {
                console.log(documents.pass)
                console.log(password);
                console.log('incorrect passoword');
                res.send('incorrect password');
            }


        }
    })
});


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
module.exports = router; 