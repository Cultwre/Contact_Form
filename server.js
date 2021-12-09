const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const Contact = require("./models/contactSchema");

const db_url = "mongodb+srv://cltwre:root@cluster0.h16iv.mongodb.net/kontaktforma?retryWrites=true&w=majority"

const app = express();

mongoose.connect(db_url, () => {
    console.log("DB connection successful!")
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    Contact.find().then((data) => {
        res.status(200).json({
            data
        })
    }).catch(err => {
        res.status(500).json({
            status: "failed",
            err
        })
    })
})

app.post("/", (req, res) => {
    Contact.create(req.body)
        .then((data) => {
            res.status(200).json({
                status: "success",
                data
            })
        }).catch(err => {
            res.status(500).json({
                status: "failed",
                err
            })
        })
})
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is on!")
});