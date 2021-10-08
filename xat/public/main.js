let msgToSend=document.getElementById('msgToSend');
let send = document.getElementById('send');
let leave = document.getElementById('leave');
let msgList = document.getElementById('msgList');
let roomList = document.getElementById('roomList');

let socket=io();
socket.emit('hi', currentRoom, username);

send.addEventListener('click',(event)=>{
  if (msgToSend.value){
    socket.emit('new message',{
      username: username ,
      room: currentRoom,
      message: msgToSend.value
    });
    msgToSend.value='';
  }
});

leave.addEventListener('click',(event)=>{
  if (goToRoom.value){
    let newRoom=goToRoom.value;
    socket.emit('bye', currentRoom, username);
    socket.emit('hi',newRoom, username);
    currentRoom=newRoom;
  }
});

socket.on('new message', function(data) {
  var item = document.createElement('li');
  item.innerHTML = `<strong>${data.username}@${data.room}:</strong> ${data.message}`;
  msgList.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on('update roomList', function (rooms){
  roomList.innerHTML="";
  rooms.forEach((element) => {
    var item = document.createElement('li');
    item.textContent = element;
    roomList.appendChild(item);
  });

});
