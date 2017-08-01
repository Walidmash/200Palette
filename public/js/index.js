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
