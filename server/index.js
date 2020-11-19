const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');

const usersRoute = require('./routes/User')

const mongoURL = 'mongodb+srv://testDemo:test1@cluster0.mmvv8.mongodb.net/Angular?retryWrites=true&w=majority'

mongoose.connect(mongoURL,{useNewUrlParser:true})
        .then(()=> console.log('mongoConnected'))
        .catch(err => console.log(err))

app.use(bodyParser.json());
app.use(cors())

app.use('/users', usersRoute);
                                                                                                                                                                                                                                                                                                                            
const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
    console.log('I am working..')
})

