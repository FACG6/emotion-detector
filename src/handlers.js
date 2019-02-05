const path = require("path");
const fs = require("fs");

const handleHome = (req, res) => {
  const homePagePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(homePagePath, (error, file) => {
    if(error){
      handleServerError(req, res);
    }else{
      res.writeHead(200, {'content-type':'text/html'});
      res.write(file);
      res.end();
    }












  });
};

const handleStatic = () => {
























};

const handleImg = () => {};

const handleNotFoundError = () => {



























};

const handleServerError = (req, res) => {
  res.writeHead(500, {'content-type':'text/html'});
  res.write('<h1 style="text-align:center;font-weight:bold;font-family:cursive">Internal Server Error</h1>')
  res.end();























    
};

module.exports = {
  handleHome,
  handleStatic,
  handleImg,
  handleNotFoundError,
  handleServerError
};
