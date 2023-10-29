const express = require('express');

const Router = express.Router();

Router.get('/', (req,res) => {
    res.send('<h1>Hello world</h1>');
})

Router.post('/', (req,res) => {
    const fName = req.body.name;

    res.status(200).json({
        firstName : fName,
    })
})


module.exports = Router