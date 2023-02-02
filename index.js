 const express = require('express');
 require('./model/database');
 const port = 3000;
 const app = express();
 app.use(express.json());

const routercrud = require('./routes/crud');
app.use('/app',routercrud);


 app.listen(port,(err)=>{
    console.log('listening on port 3000')
    
});