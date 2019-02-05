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

const handleStatic = (req, res, endpoint) => {
    const filePath = path.join(__dirname,"..",...(endpoint.split("/")));
    const fileTypes = {
        css: "text/css",
        js: "text/javascript",
      };
    const ext = path.extname(endpoint).split('.')[1]
      fs.readFile(filePath, (err,file)=>{
          if(err){
            handleServerError(req, res);
          }else{
            res.writeHead(200,{"content-type":`${fileTypes[ext]}`})
            res.write(file)
            res.end()
          }
      })
};

const handleImg = () => {};

const handleNotFoundError = () => {
    response.writeHead(404,{"Content-Type": "text/html"});
      response.write("<h1>404 Page not found !!!</h1>");
      response.end();
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
