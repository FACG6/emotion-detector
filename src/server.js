const http = require('http');
const router = require('./router.js');

const PORT = process.env.PORT || 7425;
const localhost = process.env.localhost || 'localhost';

http.createServer(router).listen(PORT, localhost, () => console.log(`server is up on ${localhost}:${PORT}`))