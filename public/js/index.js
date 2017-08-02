(function main() {
  const myInput = document.getElementById('myInput');
  const submitColorForm = document.getElementById('inputForm');
  const colorsOptions = document.getElementById('colors');
  var note = document.getElementsByClassName('note')[0];
  var pickedColor = "";
  var sugestions = [];
      /*sugest while typing*/
  myInput.addEventListener('input', function(){
    myChange(myInput.value , (myRes)=>{
      var temp = '';
      sugestions = myRes;
      myRes.forEach((color)=>{
        temp +='<option value="' + color + '">';
      });
      colorsOptions.innerHTML=temp;
      if (myInput.value =="") {
        colorsOptions.innerHTML = "";
      }
    });
  });
  /*Reset SVG colors to gray*/
  setTimeout(()=>{
    const allCircles = Array.from(document.querySelectorAll('circle'));
    allCircles.forEach((oneCircle)=>{
        oneCircle.setAttribute("fill", "gray");

    });
  },0);
  /*Painting the picture*/
  setTimeout(()=>{
    const allCircles = Array.from(document.querySelectorAll('circle'));
    allCircles.forEach((oneCircle)=>{
      oneCircle.addEventListener('click',()=>{
        if (pickedColor =="") {
          note.innerHTML="<h4>Please choose color from the palette";
        }else
          oneCircle.setAttribute("fill", pickedColor);
      });
    });
  },0);
  // Array.prototype.slice.call(document.querySelector('circle')).addEventListener('click',()=> {
  //   console.log('clicked');
  // })

/*Submit the color name and comfirm the changes*/
  if (submitColorForm) {
    submitColorForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const myColor = event.target.firstElementChild.value;
      if (sugestions.indexOf(myColor) !=-1) { // verify that we have this color
        note.innerHTML="<h4>Pick color from the palette and then start painting.</h4>";
        mySearch(myColor , (colorValue)=>{
          document.getElementById('palettesLis').innerHTML=createpaletts(colorValue);
            var allLis = Array.from(document.querySelectorAll('#palettesLis li'));
            allLis.forEach((onePalette)=>{
              onePalette.addEventListener('click' ,()=>{
                const selectedDiv = document.getElementsByClassName('selected')[0];
                if (selectedDiv != undefined) {
                  selectedDiv.classList.remove('selected');

                }
                onePalette.classList.add('selected');
                pickedColor =  onePalette.style.backgroundColor;
              });
              /*Allowing coloring the background*/
              // const mySvg =document.querySelector('svg')
              // mySvg.addEventListener('click',()=>{
              //   mySvg.style.backgroundColor = pickedColor;
              // });
            });
        });
      }else if(sugestions.length){
        note.innerHTML = '<h4 class="error">Sorry :( We dont provide this color : '+ myColor + '</h4>'+
                        '<h4>do you mean <span style="color:'+sugestions[0]+'">'+ sugestions[0] +' </span></h4>'
      }else {
        note.innerHTML = '<h4 class="error">Sorry :( We dont provide this color : '+ myColor + '</h4>';
      }
    });
  }

})();

function myChange(myVal, fn) {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              var myJSONRemote = JSON.parse(this.responseText);
              fn(myJSONRemote);
        }
      }
        xhttp.open("POST", "/valchange", true);
        xhttp.send(myVal);

}
//not ready yet !!!!!!!!!!!!!!!!
function mySearch(myVal, fn) {
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
        xhttp.open("POST", "/search", true);
        xhttp.send(myVal);

}

function createpaletts(rgbColor) {
  // convert rgb to HSL
  var resultColors="";
  const hslColor = rgbToHsl(rgbColor[0] , rgbColor[1] , rgbColor[2]);
  //creating 10 palettes
  for (let i = 0; i < 8; i++) {
    resultColors += '<li style="background: hsl('+hslColor[0]+','+hslColor[1]+'%,'+14.2*i+'%)"> </li>'
  }
  return resultColors;
}

/* Conver RGB to HSL color format*/
function rgbToHsl(r, g, b){
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;
  if(max == min){
    h = s = 0;// achromatic
    }else{
       var d = max - min;
       s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
          case r: h = (g - b) / d + (g < b ? 6 : 0);break;
          case g: h = (b - r) / d + 2;break;
          case b: h = (r - g) / d + 4;break;
        }
        h /= 6;
    }
    return [Math.floor(h * 360), Math.floor(s * 100), Math.floor(l * 100)];
}
module.exports={
  rgbToHsl:rgbToHsl
}
