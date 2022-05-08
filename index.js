require("dotenv").config();
const express  =  require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const dataRoutes = require("./routes/data");
const newsRoutes = require("./routes/news");
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/data", dataRoutes);
app.use("/api/news", newsRoutes);


app.listen(PORT, () => {
    console.log("Server started at port", PORT);
})

 