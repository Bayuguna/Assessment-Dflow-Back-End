
import http from 'http'
import {Server, Socket} from 'socket.io' 

const websocket =  (connection) => {
    const server = http.createServer(connection)
    const io = new Server(server)


    io.on("connection", socket => {
        socket.emit("your id", socket.id);
        socket.on("send message", body => {
            io.emit("message", body)
        })
    })


    const port = process.env.WEBSOCKET_PORT || 3003;
    server.listen(port, () => console.log(`Websocket Listening on port:${port}...`));

}

export default websocket;