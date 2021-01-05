const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const app = express();
const bcrypt = require('bcrypt')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.post(`/add/:email/:pass/:stock/:note`, (req, res) => {
    var email = req.params.email
    var pass = req.params.pass
    var note = req.params.note
    var tempStock = req.params.stock


    userModel.findOne({ email: email, 'stock.Ticker': tempStock }, (err, documents) => {
        if (err) {
            res.send(err);
        }
        else if (documents === null) {
            res.send('user not found');
        } else if (bcrypt.compareSync(pass, documents.pass)) {
            userModel.findOneAndUpdate({ email: email, "stock.Ticker": tempStock }, { $push: { "stock.$.Notes": note } }, (documents, err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send(documents.stock);
                }
            })
        }
    })
})

router.post(`/get/:email/:pass/:stock`, (req, res) => {
    var email = req.params.email
    var pass = req.params.pass
    var tempStock = req.params.stock
    console.log("get working")
    userModel.findOne({ email: email, 'stock.Ticker': tempStock }, (documents, err) => {
        if (err) {
            res.send(err)
        } else {
            res.send(documents.email)

        }
    })
})

router.post(`/remove/:email/:pass/:stock/:note`, (req, res) => {
    var email = req.params.email
    var pass = req.params.pass
    var note = req.params.note
    var tempStock = req.params.stock

    console.log(`remove api`)

    userModel.findOneAndUpdate({ email: email }, { $pull: { "stock.$.Notes": note } }, (documents, err) => {
        if (err) {
            res.send(err);
        } else {
            res.send('it worked');
        }
    })
})




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