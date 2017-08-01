
(function main() {
  var myInput = document.getElementById('myInput');
  myInput.onkeyup = function(){
    myChange(myInput.value , (myRes)=>{
      console.log('walid test:',myRes);
    });
  }
})();

function myChange(myVal, fn) {
  var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myJSONRemote = JSON.parse(this.responseText);
            fn(myJSONRemote);
          //   myJSONRemote.data.map(function(myData) {
          //
          // )};
      }
    }
      xhttp.open("POST", "/valchange", true);
      xhttp.send(myVal);

}
/*
    var searchInput = document.querySelector('.search-query');
    var xhr = new XMLHttpRequest();
    var url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=833d1d5ec2084bd8b4d9f10c8a20c307&limit=5";
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log('the res',response);

      }
    };
    xhr.open("POST", '/valchange', true);
    xhr.send('gr');
*/
