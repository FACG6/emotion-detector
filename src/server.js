const http = require('http');
const router = require('./router.js');

const PORT = process.env.PORT || 7425;

http.createServer(router).listen(PORT, () => console.log(`server is up on ${localhost}:${PORT}`))