const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CRUD',{ useNewUrlParser: true},(err)=>
{
     if(!err) {console.log('connected successfully to database')}
    else{
       console.log(err);
    }
})