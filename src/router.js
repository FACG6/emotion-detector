const {
  handleHome,
  handleStatic,
  handleImg,
  handleNotFoundError
} = require("./handlers.js");

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === "/") {
    handleHome(req, res);
  } else if (endpoint.includes("/public/")) {
    handleStatic(req, res, endpoint);
  } else if (endpoint === "/search") {
    handleImg(req, res, endpoint);
  } else {
    handleNotFoundError(req, res);
  }
};

module.exports = router;
