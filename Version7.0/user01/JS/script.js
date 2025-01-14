function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
}

// Countdown Timer
function startCountdown() {
    const countDownDate = new Date("Jan 1, 2026 00:00:00").getTime();

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}
startCountdown();

// Change Background Color
function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFC300", "#FF33A8"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Form Validation
function validateForm() {
    const name = document.getElementById("nameInput").value;
    if (name == "") {
        document.getElementById("formError").innerText = "Name must be filled out!";
        return false;
    }
    alert("Hello, " + name);
    return true;
}

// Modal Popup
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Image Slideshow
let images = [
    "https://preview.redd.it/for-the-record-anyone-who-thought-shadow-with-a-gun-was-v0-jqe9alrd623e1.jpg?width=400&format=pjpg&auto=webp&s=4e91920dd64ae32a4f0dcab634f389c08d359bcf",
    "https://gifdb.com/images/high/shrek-dancing-energetic-body-shake-sp8h86dnwt5n929t.gif",
    "https://media1.tenor.com/m/nVsnTj_elCMAAAAd/shrek-dance.gif"
];

let index = 0;

function changeImage() {
    index = (index + 1) % images.length;
    document.getElementById("slideshow").src = images[index];
}

setInterval(changeImage, 2000);

// Random Joke Generator
function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
        document.getElementById("joke").innerHTML = data.setup + " " + data.punchline;
    });
}

// Scroll to Top Button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
