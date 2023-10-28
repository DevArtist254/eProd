require('dotenv').config({path : './env.config'});
const app = require('./app');

const port = process.env.PORT || 3303;


app.listen(port,() => {
    console.log(`The server is running on port ${port}`);
});