function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }
  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
  function show_coords(event) {
    document.getElementById("demo").innerHTML = "X= " + event.clientX + "<br>Y= " + event.clientY;
  }