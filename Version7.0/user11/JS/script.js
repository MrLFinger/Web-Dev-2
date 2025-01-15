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
function show_coords(event) {
    document.getElementById("demo").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
  }
function myFunction() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }
function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("You prefer browsing internet with " + prefer);
  }
  show_coords()