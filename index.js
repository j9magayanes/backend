const express  =  require("express");
const mongoose = require('mongoose');
const booksRoute = require('./routes/books');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/books', booksRoute);

mongoose.connect( process.env.MONGO_URL, {
  keepAlive: true
}).catch(error => {
    console.log(error)
});

app.listen(PORT, () => {
    console.log("Server started at port", PORT);
})

 