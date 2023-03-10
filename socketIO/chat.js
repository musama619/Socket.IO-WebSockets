const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(9000);

const io = socketio(expressServer);
io.on("connection", (socket) => {
    socket.emit("messageFromServer", "This from server");
    socket.on("messageToServer", (dataFromServer) => {
        console.log(dataFromServer);
    });
});
