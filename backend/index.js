import express from "express";
import dotenv from "dotenv";
import http from "http";
import {Server} from "socket.io";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import path from "path";
import { fileURLToPath } from "url";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";

// Assuming index.html is in the root directory of your project
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexPath = path.join(__dirname, "index.html");

const app = express();

dotenv.config();

const server = http.createServer(app);


const io = new Server(server, {
  cors:{
      origin: "*",
  }
})

app.use(express.json()) // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());





const port = 4000

app.get('/', (req, res) => {
    res.sendFile(indexPath);
});



app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


io.on('connection', (socket) => {
  console.log('a user connected', socket.id)

  //sokcet.on() is used to listen to the events. can be used both on client and server side.
  socket.on("disconnect", () => {
      console.log("user disconnected", socket.id)
  })
})


server.listen(port, ()=>{
  connectToMongoDB();
  console.log(`Server listening on *:${port}`);
});






//  ***** Socket website documentation implementation  ***** 

// io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

// io.on('connection', (socket) => {
//     socket.broadcast.emit('hi');
//   });

//   io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//         console.log('message: ' + msg);
//       io.emit('chat message', msg);
//     });
//   });



