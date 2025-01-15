var startTime=new Date();
var endTime=new Date();
var startPressed=false;
var bgChangeStarted=false;
var maxWait=20;
var timerID;

function startTest()
{
 document.body.style.background=document.response.bgColorChange.options[document.response.bgColorChange.selectedIndex].text;
 bgChangeStarted=true;
 startTime=new Date();
}

function remark(responseTime)
{
 var responseString="";
 if (responseTime < 0.20)
 responseString="Well done!";
 if (responseTime >= 0.20 && responseTime < 0.30)
 responseString="Nice!";
 if (responseTime >=0.40 && responseTime < 0.50)
 responseString="Could be better...";
 if (responseTime >=0.50 && responseTime < 0.80)
 responseString="Keep practicing!";
 if (responseTime >=0.80 && responseTime < 1.1)
 responseString="Have you been day dreaming again?";
 if (responseTime >=1.1)
 responseString="Did you fall asleep?";
 return responseString;
}

function stopTest()
{
 if(bgChangeStarted)
 {
 endTime=new Date();
 var responseTime=(endTime.getTime()-startTime.getTime())/1000;

 document.body.style.background="white"; 
 alert("Your response time is: " + responseTime + " seconds " + "\n" + remark(responseTime));
 startPressed=false;
 bgChangeStarted=false;
 }
 else
 {
 if (!startPressed)
 {
 alert("press start first to start test");
 }
 else
 { 
 clearTimeout(timerID);
 startPressed=false; 
 alert("cheater! you pressed too early!");
 } 
 }
}

var randMULTIPLIER=0x015a4e35;
var randINCREMENT=1;
var today=new Date();
var randSeed=today.getSeconds();

function randNumber()
{
 randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
 return((randSeed >> 15) & 0x7fff) / 32767;
}

function startit()
{
 if(startPressed)
 {
 alert("Already started. Press stop to stop");
 return;
 }
 else
 {
 startPressed=true; 
 timerID=setTimeout('startTest()', 6000*randNumber());
 }
}
document.addEventListener('DOMContentLoaded', () => {
    let clicks = 0;
    let timeLeft = 5;
    let gameStarted = false;
    let timerInterval;
    const clickButton = document.getElementById('clickButton');
    const timerElement = document.getElementById('timer');
    const scoreElement = document.getElementById('score');
    const cpsElement = document.getElementById('cps');
    const startButton = document.getElementById('startButton');
    const messageElement = document.getElementById('message');
  
    // Hide the "Click Me!" button until the game starts
    clickButton.style.display = 'none';
  
    // Start the game when the "Start Game" button is clicked
    startButton.addEventListener('click', () => {
      clicks = 0;
      timeLeft = 5;
      gameStarted = true;
      scoreElement.textContent = `Clicks: 0`;
      cpsElement.textContent = `CPS: 0.0`;
      timerElement.textContent = `Time left: 5`;
      messageElement.textContent = '';
      startButton.style.display = 'none'; // Hide start button
  
      // Show the "Click Me!" button
      clickButton.style.display = 'inline-block';
  
      // Start the countdown timer
      timerInterval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          timerElement.textContent = `Time left: ${timeLeft}`;
        } else {
          clearInterval(timerInterval);
          gameStarted = false;
          clickButton.style.display = 'none'; // Hide the button after time's up
          let cps = (clicks / 5).toFixed(2); // Calculate CPS
          cpsElement.textContent = `CPS: ${cps}`;
          messageElement.textContent = `Game over! You clicked ${clicks} times.`;
          startButton.style.display = 'inline-block'; // Show the start button to play again
        }
      }, 1000);
    });
  
    // Count clicks when the "Click Me!" button is clicked
    clickButton.addEventListener('click', () => {
      if (gameStarted) {
        clicks++;
        scoreElement.textContent = `Clicks: ${clicks}`;
      }
    });
  });  