function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
   }

   const element = document.getElementById("myElement");

   element.addEventListener("mouseover", function() {
     this.style.backgroundColor = "green";
   });
   
   element.addEventListener("mouseout", function() {
     this.style.backgroundColor = "red"; // Reset to default color
   });



   const hoverBox = document.getElementById('hoverBox');

   // Change the color when the mouse is over the element
   hoverBox.addEventListener('mouseover', () => {
       hoverBox.style.backgroundColor = 'lightcoral';
       hoverBox.textContent = 'Mouse is over!';
   });
   
   // Revert the color when the mouse leaves the element
   hoverBox.addEventListener('mouseout', () => {
       hoverBox.style.backgroundColor = 'lightblue';
       hoverBox.textContent = 'Hover over me!';
   });