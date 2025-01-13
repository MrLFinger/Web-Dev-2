function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   }

   var space = " ";
var pos = 0;
var msg = "User 19";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();

function myFunction() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

  function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

  function myFunction() {
    alert("You pressed a key inside the input field");
  }

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

  function whichButton(event) {
    document.getElementById("demo").innerHTML = event.keyCode;
  }

  function getEventType(event) { 
    document.getElementById("demo").innerHTML = event.type;
  }

  function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }
