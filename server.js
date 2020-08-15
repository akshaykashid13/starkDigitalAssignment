const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose.connect('mongodb://localhost:27017/Demo', 
{useNewUrlParser: true, 
    useUnifiedTopology: true}).then(() => console.log("MongoDb Connected Successfully"))
    .catch(err => console.log(err))

const api = require('./routes/routes');
app.use('/api', api)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})