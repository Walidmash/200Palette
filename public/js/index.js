(function main() {
  var myInput = document.getElementById('myInput');
  myInput.onkeyup = function(){
    myChange(myInput.value , (myRes)=>{
      console.log(myRes);
    });
  }
})();

function myChange(myVal) {
  var xhttp = new XMLHttpRequest();
    var myInput = document.getElementsByClassName("search-query")[0].value;
      myImgs = "";
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var myJSONRemote = JSON.parse(this.responseText);
            myJSONRemote.data.map(function(myData) {
              fn(myJSONRemote);
          }
      };
      xhttp.open("POST", "/valchange", true);
      xhttp.send(myVal);
}
