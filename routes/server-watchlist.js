const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const app = express();
const bcrypt = require('bcrypt')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/*
put watchlist here 
*/

router.post(`/id/:email/:password`, (req, res) => {
    var email = req.params.email;
    var password = req.params.password;
    console.log(`watchlist request ${email} ${password}`)


    userModel.findOne({ email: email }, (err, documents) => {
        if (err) {
            res.send(err);
        }
        else if (documents === null) {
            res.send([{ Ticker: 'aapl', Market: 'NASDAQ' }, { Ticker: 'pltr', Market: 'NYSE' }, { Ticker: 'tsla', Market: 'NASDAQ' }]);
        } else {
            if (bcrypt.compareSync(password, documents.pass)) {
                console.log(`authenticated user ${email} ${password}`)
                res.send(documents.stock);
            }
            else {
                res.send('incorrect password');
            }

        }
    })
});

router.post(`/add/:ticker/:email/:pass`, (req, res) => {
    var password = req.params.pass;
    var email = req.params.email;
    var ticker = req.params.ticker;

    console.log(`attempting to add stock ${email} ${password} ${ticker}`);
    userModel.findOne({ email: email }, (err, documents) => {
        if (err) {
            console.log('ran into err')
            res.send(err);
        }
        else if (documents.length === 0) {
            console.log('no userfound')
            res.send("no user found");
        } else {
            if (bcrypt.compareSync(password, documents.pass)) {

                var tempStock = {
                    Notes: [],
                    Ticker: ticker.toUpperCase(),
                    Market: "NASDAQ"
                }
                console.log("Attempting to add stock");
                if (documents.stock.some(stock => stock.Ticker === ticker)) {
                    console.log('repeat');
                    res.send('ticker already exists');
                } else {
                    userModel.findOneAndUpdate({ email: email }, { $push: { stock: tempStock } }, (err) => {
                        if (err) {
                            res.send(err)
                        } else {
                            res.send("Successfully added stock");
                        }
                    })
                    console.log(`end of adding`)
                }

            } else {
                console.log('password incorrect')
                res.send("passowrd incorrect");
            }

        }
    })
})

router.post(`/remove/:email/:pass/:stock`, (req, res) => {
    var email = req.params.email
    var pass = req.params.pass
    var tempStock = req.params.stock



    userModel.findOneAndUpdate({ email: email }, { $pull: { stock: { Ticker: tempStock } } }, (documents, err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(documents)
        }
    })
})



router.get('/', (req, res) => {

    userModel.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

module.exports = router; 