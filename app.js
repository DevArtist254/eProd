const express = require("express");
const path = require("path");

const app = express();

const productsRoute = require('./routes/productRoute');


app.use(express.json({limit: '10kb'}));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use("/v1/products/", productsRoute);

module.exports = app;