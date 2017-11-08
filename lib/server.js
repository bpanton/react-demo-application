import express from 'express';
import config from './config';
import fs from 'fs';
import https from 'https';

const options = {
    key: fs.readFileSync( './certs/38383667-localhost_8099.key' ),
    cert: fs.readFileSync( './certs/38383667-localhost_8099.cert' ),
    requestCert: false,
    rejectUnauthorized: false
};

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get ('/', (req, res) => {
  res.render('index', { });
});

const server = https.createServer(options, app);

server.listen(config.port, function () {
  console.log('Express server listening on port ' + server.address().port);
});

const path = require('path');
app.use(express.static(path.join(__dirname, '/components/styles')));


