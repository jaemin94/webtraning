let val = 0;
const images = ["./src/login.png", "./src/logout.png","./src/person.png",  "./src/dog.jpg", "./src/logo.png"];
// window.addEventListener('load', function() { _init(); });

// function _init(){
//   let result = document.getElementById("result");
//   result.innerHTML = "";
//   result.innerHTML = val;
// }

function increase(){
//   let result = document.getElementById("result");
//   result.innerHTML = "";
val++;
if(val >= images.length) val=0;
// result.innerHTML = val;
// result.innerHTML += val;
_imagefunc(val);
}
function decrease(){
// let result = document.getElementById("result");
// result.innerHTML = "";
val--;
if(val < 0) val=images.length-1;
// result.innerHTML = val;
// result.innerHTML += val;
_imagefunc(val);
}
function _imagefunc(i){
let imgoutput = document.getElementById("img-output");
imgoutput.src=images[i];
}