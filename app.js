// variables
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

// the rectangles on the screen
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
ctx.fill();
ctx.closePath();


//function that moves the ball
function drawBall() {
   ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "rgba(194,249,112)";
    ctx.fill();
    ctx.closePath();
}
function moveBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall()
    x += dx;
    y += dy;
}
setInterval(moveBall,10)