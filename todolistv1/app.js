const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
   // res.sendFile(__dirname + "/index.html");

   var today = new Date();
   if(today.getDay() === 6 || today.getDay() === 0){
      res.sendFile(__dirname + "/index.html");
    //   res.send('yeah it weekend')
   } else {
      res.sendFile(__dirname + "/index.html");
     // res.send('yeah it work day')

   }
});


app.listen(3000, () => {
    console.log('Server started on localhost:3000');
});