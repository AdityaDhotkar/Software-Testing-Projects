const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json'); // Tumhara data yahan link ho gaya
const middlewares = jsonServer.defaults();

// Port 3001 set kiya hai jaisa tum chahte the
const port = 3001;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running on port ' + port);
  console.log('Check URL: http://localhost:3001/persons');
});