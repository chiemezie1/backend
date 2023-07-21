const express = require('express')
const bodyParser = require('body-parser');
const request = require('request');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
  });

  app.post('/', (req, res) => {
    // res.send(req.body.cryto)
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/all?crypto=BTC&fiat=USD,EUR", (error, response, body) => {
      res.send(response.statusCode)
    })
  })

app.listen(port, () => {

  console.log(`Example app listening on port ${port}`)
});

