//jshint esversion:6
 const express = require('express');
 const bodyParser = require('body-parser');
 const ejs = require('ejs');
 const mongoose = require('mongoose');

 const app = express();


 app.use(express.static('public'));
 app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/userDB', {useNewUrlParser: true});

 app.get('/', (req, res) => {
   res.render('home');
 });

 app.get(`/register`, (req, res) => {
   res.render('register');
 });

 app.get('/login', (req, res) => {
   res.render('login');
 });

 app.listen(3000, () => {
   console.log('Server started on port 3000');
 });