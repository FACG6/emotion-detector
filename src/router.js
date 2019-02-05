const {
  handleHome,
  handleStatic,
  handleImg,
  handleNotFoundError
} = require("./handlers.js");

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === "/") {
    handleHome(request, response);
  } else if (endpoint.includes("/public/")) {
    handleStatic(request, response, endpoint);
  } else if (endpoint === "/search") {
    handleImg(request, response, endpoint);
  } else {
    handleNotFoundError(request, response);
  }
};

module.exports = router;
