var n = 0;
var whatever = 4;


function setup() {
    var canvas = createCanvas(1000, 1000);
    canvas.parent('dots-container-id');
}

var body = document.querySelector('#background');
var dots = document.querySelector("#dots-container-id");
var backgroundContainer = document.querySelector("#dots");
var textCorner = document.querySelector("#click-anywhere");

backgroundContainer.addEventListener("click", function(event) {
	var xPosition = event.clientX - backgroundContainer.getBoundingClientRect().left - (dots.clientWidth / 2);
    var yPosition = event.clientY - backgroundContainer.getBoundingClientRect().top - (dots.clientHeight / 2);
    var randomShade = Math.floor(Math.random() * 256) + 1;
    var randomBackground = Math.floor(Math.random() * 101);
    backgroundContainer.style.backgroundColor = "rgba(255, 255, 255, 0." + randomBackground + ")";
    fill(randomShade);
	dots.style.left = xPosition + "px";
    dots.style.top = yPosition + "px";
    textCorner.style.opacity = 0;
	}
);



function draw() {
    var a = n * 137.5;
    var radius = whatever * sqrt(n);
    var xxx = radius * cos(a) + width/2;
    var yyy = radius * sin(a) + height/2;
     
      ellipse (xxx,yyy,5,5);
     
      
    n++
    }