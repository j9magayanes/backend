const express = require('express');
const router = express.Router();
const Book = require('../models/books')


router.get('/', (req,res) => {
    console.log("test")
    res.send("done")
})
 module.exports = router;