    function changeText1() {
    document.getElementById("textChange1").innerHTML="Thanks for liking my photo";
   }
   function changeText2() {
    document.getElementById("textChange2").innerHTML="Thanks for liking my photo";
   }
   function changeText3() {
    document.getElementById("textChange3").innerHTML="Thanks for liking my photo";
   }
   function changeText4() {
    document.getElementById("textChange1").innerHTML="Thanks for unliking my photo";
   }
   function changeText5() {
    document.getElementById("textChange2").innerHTML="Thanks for unliking my photo";
   }
   function changeText6() {
    document.getElementById("textChange3").innerHTML="Thanks for unliking my photo";
   }
   var space = " ";
var pos = 0;
var msg = "What is a Javascript.";

function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);

pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();


