const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({
    port: 3434
});

wss.on('connection', (ws) => {

    ws.on('error', console.error);

    ws.on('message', (data) => {
        console.log(data)
    })
    
    ws.send('SOCKET HERE!')
    console.log('user connect!');
});