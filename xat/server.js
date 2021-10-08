const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const server = http.createServer(app);
const hbs = require('hbs');
const police = require('./controllers/police');
const chat =require('./chat');
const db = require('./models/db')

/* Static Routing*/
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

/*Routing*/
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.render('login'));
app.post('/', police);

/*DB*/
db.initializeDB();

/* Server UP */
server.listen(3000, () => {
  console.log('listening on *:3000');
});
chat.listen(server);
