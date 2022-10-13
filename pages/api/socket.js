import { Server } from "socket.io";


export default function handler(req, res){
    let io;
    if(res.socket.server.io){
        console.log('Socket is already running');
        io = res.socket.server.io
    }else{
        console.log('Socket is initializing');
        io = new Server(res.socket.server)
        res.socket.server.io = io;
    }

    io.on('connection', socket => {
        socket.on('new-message', msg => {
          socket.broadcast.emit('update-messages', msg)
        })
      })
    res.end();
}