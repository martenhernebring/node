//https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTP-server/
const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);
