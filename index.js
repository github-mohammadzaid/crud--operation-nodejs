 const express = require('express');
 require('./database');
 const port = 3000;
 const app = express();
 app.use(express.json());

const routercrud = require('./crud');
app.use('/app',routercrud);


 app.listen(port,(err)=>{
    console.log('listening on port 3000')
    
});
