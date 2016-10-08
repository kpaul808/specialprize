var points = 0;

function addPoint(){
	points = points+1; 
	document.getElementById("points").innerHTML = points;
	console.log("test");
	change()
}

function change(){
	if (points == 100) {
		document.getElementById("winbox").innerHTML = "You get a Apple Pen";
		document.getElementById("imagebox").innerHTML = "<img src="pens/apple.jpg">";
	}else if (points == 150) {
		document.getElementById("winbox").innerHTML = "You get a Watermelon Pen";
		document.getElementById("imagebox").innerHTML = "<img src="pens/watermelon.jpg">"
	}else if (points == 200) {
		document.getElementById("winbox").innerHTML = "You get a Orange Pen";
		document.getElementById("imagebox").innerHTML = "<img src="pens/orange.jpg">"
	}else if (points == 250) {
		document.getElementById("winbox").innerHTML = "You get a Pineapple Pen";
		document.getElementById("imagebox").innerHTML = "<img src="pens/pineapple.jpg">"
	}else if (points == 300) {
		document.getElementById("winbox").innerHTML = "You get a Strawberry Pen";
		document.getElementById("imagebox").innerHTML = "<img src="pens/strawberry.jpg">"
	}else if (points == 350) {
		document.getElementById("winbox").innerHTML = "You get a Raspberry Pen";
		document.getElementById("imagebox").innerHTML = "<img src="pens/raspberry.jpg">"
	}else if (points == 400) {
		document.getElementById("winbox").innerHTML = "You get a Pepper Pen";
		document.getElementById("imagebox").innerHTML = "<img src="pens/pepper.jpg">"
	}else if (points == 450) {
		document.getElementById("winbox").innerHTML = "You get a Banana Pen";
		document.getElementById("imagebox").innerHTML = "<img src="pens/banana.jpg">"
	}else if (points == 1000) {
		document.getElementById("winbox").innerHTML = "You get a Pen Pineapple Apple Pen";
		document.getElementById("imagebox").innerHTML = "<img src="pens/ppap.jpg">"
	}
}

