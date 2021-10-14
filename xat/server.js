const port = process.env.CHAT || 3000 ;
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const chat =require('./chat');
const db = require('./models/db');
const client = require('./client');


/*DB*/
db.initializeDB();

/* Server UP */
server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
chat.listen(server);
