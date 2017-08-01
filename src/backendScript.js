const db = require('./db.json');
const dbKeys=Object.keys(db);
function suggest(sugName) {
  var result = dbKeys.filter(function(item) {
    return item.startsWith(sugName);

});
return result;
}

function searchResult(color) {
return db[color];
}

module.exports={
  suggest:suggest,
  searchResult:searchResult
}
