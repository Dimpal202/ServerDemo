const http = require('http');
const express = require('express');
const { Server } = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = new Server(server);


io.on('connection', (socket) => {
    console.log('A user is connected');

    socket.on('message', (msg) => {
        io.emit('message', msg);
        console.log("MESSGE:", msg);
    });


    socket.on('disconnect', () => {
        console.log('One user left');
    });
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});