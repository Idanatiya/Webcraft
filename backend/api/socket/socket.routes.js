module.exports = connectSockets

function connectSockets(io) {
    //listen to on conenction events
    io.on('connection', socket => {

        socket.on('savedWap', wap => {
            // socket.broadcast.emit('savedWap', wap)
            socket.broadcast.to(socket.wapId).emit('savedWap', wap)
        })

        socket.on('form-submitted', (data) => {
            io.emit('form-submitted', data)
                // socket.broadcast.emit('form-submitted', data)
        })

        socket.on('roomRoute', wapId => {
            console.log(wapId)
            if (socket.wapId) {
                socket.leave(socket.wapId)
            }
            socket.join(wapId)
            console.log('Connected')
            socket.wapId = wapId;
        })
        socket.on('disconnect', () => {
            console.log('Disonnected')
            socket.removeAllListeners('roomRoute');
        });
    })




}