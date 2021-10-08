const socketio = require('socket.io');
const Message = require('./models/message');

let listedRooms=[];

function reviewListedRooms(candidate){
  if(!listedRooms.includes(candidate)){
    listedRooms.push(candidate);
    return true;
  }
  return false;
}

exports.listen = (server) => {
  const io = socketio(server);

  io.on('connection', (socket) => {
    console.log(`A user connected in socket: ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`Socket ${socket.id} disconnected`);
    });

    socket.on('new message',(data) => {
      io.to(data.room).emit('new message',data);
      const messageToSave = new Message({
        username: data.username,
        room: data.room,
        message: data.message
      });
      messageToSave.save()
    });

    socket.on('hi', async (room,username)=> {
      socket.join(room);
      let isNew = reviewListedRooms(room);
      io.emit('update roomList',listedRooms);

      socket.broadcast.to(room).emit('new message', {
        username:"admin",
        room: room,
        message: `${username} acaba de entrar en la sala`
      });


      socket.emit('new message',{
        username: "admin",
        room: room,
        message: `Resumen de lo dicho hasta ahora en ${room}... `
      })
      let oldMessages = await Message.find({room: room});
      oldMessages.forEach((element) => {
        socket.emit('new message',{
          username: element.username,
          room: element.room,
          message: element.message
        })
      });


      socket.emit('new message',{
        username: "admin",
        room: room,
        message: `Bienvenido a ${room}`
      });
      console.log(`User at socket: ${socket.id} identified as ${username} currently at ${room}`);
    });

    socket.on('bye', (room,username)=>{
      socket.broadcast.to(room).emit('new message', {
        username:"admin",
        room: room,
        message: `${username} acaba de salir de la sala`
      });
      socket.leave(room);
    })
  });
};
