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
function Blur() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }
function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Hello " + fname + "! You will now be redirected to www.w3Schools.com");
function onCLick() {
    document.getElementById("demo").innerHTML = "Hello World";
}
function onLoad() {
    alert("Page is loaded");
}
function show_coords(event) {
    document.getElementById("demo").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
}
function PressDown() {
    alert("You pressed a key inside the input field");
}
function DoubleClick() {
    document.getElementById("demo").innerHTML = "Hello World";
}
function isKeyPressed(event) {
    var text = "The shift key was NOT pressed!";
    if (event.shiftKey == 1) {
      text = "The shift key was pressed!";
    }
    document.getElementById("demo").innerHTML = text;
}