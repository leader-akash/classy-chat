import express from "express";
import dotenv from "dotenv";
import http from "http";
import {Server} from "socket.io";
import authRoutes from "./routes/auth.routes.js"
import path from "path";
import { fileURLToPath } from "url";
import connectToMongoDB from "./db/connectToMongoDB.js";


// Assuming index.html is in the root directory of your project
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.join(__dirname, "index.html");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json()) // to parse the incoming requests with JSON payloads (from req.body)






const port = 4000

app.get('/', (req, res) => {
    res.sendFile(indexPath);
});



app.use("/api/auth", authRoutes)












io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
  });

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
  });


server.listen(port, ()=>{
    connectToMongoDB();
    console.log(`Server listening on *:${port}`);
});

