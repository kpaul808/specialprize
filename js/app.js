var points = 0;

function addPoint(){
	points = points+1; 
	document.getElementById("points").innerHTML = points;
	console.log("test");
	change()
}

function change(){
	if (points == 100) {
		document.getElementById("winbox").innerHTML = "You get a Pen";
		console.log(Apple)
	}else if (points == 200) {
		document.getElementById("winbox").innerHTML = "You get a Apple Pen";
	}else if (points == 300) {
		document.getElementById("winbox").innerHTML = "You get a Pineapple Pen";
	}else if (points == 500) {
		document.getElementById("winbox").innerHTML = "You get a Pen Pineapple Apple Pen";
	}
}

