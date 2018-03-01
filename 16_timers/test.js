/*var myMessage = document.getElementById('message');
 function showMessage() {
   myMessage.className = "show";
 }

setTimeout(function () {
  showMessage();
}, 3000);*/

var colorChanger = document.getElementById('color-changer');
var colors = ["red","blue","green","pink"];
var counter = 0;

function changeColor() {
  if(counter>=colors.length){
    counter = 0;
  }
  colorChanger.style.background = colors[counter];
  counter++;
}

var myTimer = setInterval(function () {
  changeColor();
}, 2000);

colorChanger.onclick = function () {
  clearInterval(myTimer);
};
