const express = require("express")
const router = express.Router()

//load data module
const Data = require('../models/data')

router.get('/', (req, res) => {
    res.send("Hello World")
  })

router.get("/getdata", (req, res) => {

    function isPrime(num) {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
      }

    var date = new Date()
    var result = isPrime(date.getDate())
    console.log(result)
    if(result == false) {
        Data.find().then(info => {
            if(info) {
                res.send(info)
            } else {
                res.send("No info found")
            }
        }).catch(err => {
            response.send("Error Occured")
        })
    } else {
        console.log("Current date is prime")
    }

})

module.exports = router;
