const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    },
  });

io.on('connection', (socket, req) => {
  socket.on('new message', message => {
    socket.emit('new message', message);
  });
});

server.listen(3001, () => {
  console.log('Server running on port 3001');
});
