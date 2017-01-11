/**
 * Created by ChristopherBorum on 11/01/2017.
 */
var socket = io();
io.on('connection', function(socket){
    console.log('a user connected');

    socket.emit('chat message', 'Hello World');

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });

});

//<script src="/socket.io/socket.io.js"></script>