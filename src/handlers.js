
const fs = require('fs');
const backendScript = require('./backendScript.js');

function homeHandler (req, res) {
  fs.readFile(__dirname + '/../public/index.html', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Internal Server Error</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}

function sugestHandler(req,res) {
  var allTheData = '';
  req.on('data', function (chunkOfData) {
    allTheData += chunkOfData;
  });
  req.on('end', function () {
    var resu= backendScript.suggest(allTheData);
    res.end(JSON.stringify(resu));
  });
}

function searchHandler(req,res) {
  var allTheData = '';
  req.on('data', function (chunkOfData) {

      allTheData += chunkOfData;
  });

  req.on('end', function () {
    var resu= backendScript.searchResult(allTheData);
  res.end(JSON.stringify(resu));
  });

}

function publicHandler (req, res) {
  var url = req.url;
  var parts = url.split('.');
  var fileExtention = parts[parts.length - 1];

  var contentTypes = {
    css: 'text/css',
    html: 'text/html',
    js: 'application/javascript'
  };
console.log(url);
  fs.readFile(__dirname + '/../public' + url, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Internal Server Error</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': contentTypes[fileExtention] });
      res.end(data);
    }
  });
}


function noPageHandler(req,res) {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<h1>Not found</h1>');
}

module.exports={
  homeHandler:homeHandler,
  publicHandler:publicHandler,
  sugestHandler:sugestHandler,
  searchHandler:searchHandler,
  noPageHandler:noPageHandler
}
