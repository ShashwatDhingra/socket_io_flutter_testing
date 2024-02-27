const express = require('express');
const http = require('http');
const {Server} = require('socket.io')
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
var server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST'],
        credentials: true
    }
});

app.use(express.json());
app.use(cors());

io.on('connection', (socket)=>{
    console.log(`Connection Made with ${socket.id}`);
})

server.listen(port, "0.0.0.0", () => {
    console.log('Server Connected');
});