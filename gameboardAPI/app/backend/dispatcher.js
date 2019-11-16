const WebSocket = require('ws');
const clients = [];

//create websocket server
exports.createBackendDispatcher = function(server) {
    const wss = new WebSocket.Server({
        server
    });

    // Listen for client
    wss.on('connection', function connection(ws) {
        //stock client in list
        clients.push(ws);
        console.log('client connected');

        // Listen for messages from the client
        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });

        //delate client from clients'list
        ws.on('close', () => {
            console.log('client leaving');
            clients.splice(clients.indexOf(ws), 1);
        });
    });
};

//notifies clients whenever a game is added to the database
exports.notifyNewGames = function(gameName) {
    for (let client of clients) {
        if (client) {
            client.send('A new game called: ' + gameName + ' is avaiable');
        }
    }
};