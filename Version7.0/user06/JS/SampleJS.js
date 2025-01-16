function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
  function show_coords(event) {
    document.getElementById("demo").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
  }
(event) 
    var text = "The shift key was NOT pressed!";
    if (event.shiftKey == 1) {
      text = "The shift key was pressed!";
    }
    function myFunction() {
        alert("You pressed a key inside the input field");
      }