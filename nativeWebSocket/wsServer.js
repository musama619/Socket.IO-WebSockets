// core node module
const http = require('http');

// 3rd party module
const webSocket = require('ws')

const server = http.createServer((req, res) => {
    res.end("Connected")
})

const wss = new webSocket.WebSocketServer({server});

// events
wss.on('headers', (headers, req) => {
    console.log(headers)
})
wss.on('connection', (ws, req) => {
    ws.send('Welcome to websocket server')
    ws.on('message', (data) => {
        console.log(data.toString())
    })
})

server.listen(8000);