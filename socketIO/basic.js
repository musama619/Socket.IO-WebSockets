const http = require('http')
const socketio = require('socket.io')

const server = http.createServer((req, res) => {
    res.end("Socket.io Connected")
})

const io = socketio(server, {
    cors: {
      origin: '*',
    },
  });
io.on('connection', (socket, req) => {
    socket.emit('data', 'Welcome to socket-io server')
    socket.on('message', (data) => {
        console.log(data)
    })
})

server.listen(8000);