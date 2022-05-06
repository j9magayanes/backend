const express  =  require("express");
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000

mongoose.connect( process.env.MONGO_URL, {
  keepAlive: true
}).catch(error => {
    console.log(error)
});

app.listen(PORT, () => {
    console.log("Server started at port", PORT);
})

 