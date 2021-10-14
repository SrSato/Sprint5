const port = process.env.PORT || 8080 ;
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const police = require('./controllers/police');
const socketio = require('socket.io');
/* Static Routing*/
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

/*Routing*/
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.render('login'));
app.post('/', police);

app.listen(port,function(){
    console.log(`Amunt amunt i fora!!! En el puerto ${port}`);
});
