const express = require('express');
const http = require("http");
const path = require('path');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {});

let players = [];
let roomCode;

app.use(express.static(path.resolve("public")));

app.get("/", (req, res) => {
    return res.sendFile("public/index.html");
});

io.on("connection", (socket) => {
    console.log(`${socket.id} has connected!`);
    players.push(socket.id);

    socket.on("join-code", (enteredCode) => {
        roomCode = enteredCode;
        console.log(roomCode);

        if(players.length <= 2){
            socket.join(roomCode);
            console.log("Joined Successfully ✅ (Server-side)");
        } else {
            console.log("Room is FULL 🌚")
        }
    });

    socket.on("clicked-slot", (colour, row, column) => {
        io.sockets.emit("update-slot", colour, row, column);
    });

    socket.on("game-winner", (colour) => {
        io.sockets.emit("display-winner", colour);
    });

    socket.on("disconnect", () => {
        console.log(`${socket.id} disconnected!`);
        players.pop(socket.id);
        console.log(players);
    });

    console.log(players);
});

server.listen(3000, () => {
    console.log("Server is running on port http://127.0.0.1:3000");
});
