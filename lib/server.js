//onst express = require('express');
//const config = require('./config');
import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get ('/', (req, res) => {
  res.render('index', { });
});

app.listen(config.port, function listenHandler(){
  console.info('running on ' + config.port);
});

const path = require('path');
app.use(express.static(path.join(__dirname, '/components/styles')));

//app.listen(config.port);


