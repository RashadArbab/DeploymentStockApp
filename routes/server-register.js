const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const app = express();
const bcrypt = require('bcrypt')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



router.post(`/newUser/:name/:email/:pass/stock/:ticker/:market/Notes/:note`, (req, res) => {
    console.log(`sign up called`)
   
    var name = req.params.name;
    var email = req.params.email;
    var pass = bcrypt.hashSync(req.params.pass, 5);
    var stock = {
        Ticker: req.params.ticker,
        Market: req.params.market,
        Notes: req.params.note.split(',')
    }
    var newUser = new userModel({ name: name, email: email, pass: pass, stock: stock });

    userModel.findOne({email : email} , (documents , err)=>{
        if (err){
            console.log(`find err: ${err}`);
        }else if (!documents){
            newUser.save((err , documents)=>{
                if(err){
                    console.log(err);
                    res.send(err); 
                }else {
                    res.send(`welcome ${documents.name}`)
                }
            })
        }
        else {
            res.send(`user already exists ${email}`);
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