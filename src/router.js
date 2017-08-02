var handlers = require("./handlers.js");

function router(req , res) {
  var url =req.url;
  if (url === '/') {
      handlers.homeHandler(req, res);
  }
  else if (url === '/css/style.css' || url === '/js/index.js' || url === '/js/svgs.js') {
    handlers.publicHandler(req, res);

  }else if (url === '/valchange') {
    handlers.sugestHandler(req, res);
  }else if (url === '/search') {
    handlers.searchHandler(req, res);
  }
  else {
    handlers.noPageHandler(req,res);
  }

}
module.exports = router;
