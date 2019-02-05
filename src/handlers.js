const path = require("path");
const fs = require("fs");

const handleHome = () => {



















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

   

























};

module.exports = {
  handleHome,
  handleStatic,
  handleImg,
  handleNotFoundError,
  handleServerError
};
