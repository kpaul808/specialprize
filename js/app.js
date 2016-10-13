var points = 0;

function press(){
	points = points+1; 
	document.getElementById("points").innerHTML = points;
	console.log("test");
	change()
}

function change(){
	if (points == 10) {
		document.getElementById("winbox").innerHTML = "You get a Apple Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/apple.jpg'>";
		var apen = document.createElement("IMG");
		console.log("apen")
		apen.setAttribute("src", "pens/apple.jpg")
		apen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(apen)
	}else if (points == 50) {
		document.getElementById("winbox").innerHTML = "You get a Watermelon Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/watermelon.jpg'>"
		var wpen = document.createElement("IMG");
		console.log("wpen")
		wpen.setAttribute("src", "pens/watermelon.jpg")
		wpen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(wpen)
	}else if (points == 100) {
		document.getElementById("winbox").innerHTML = "You get a Orange Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/orange.jpg'>"
		var Open = document.createElement("IMG");
		console.log("Open")
		Open.setAttribute("src", "pens/Orange.jpg")
		Open.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(Open)
	}else if (points == 150) {
		document.getElementById("winbox").innerHTML = "You get a Pineapple Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/pineapple.jpg'>"
		var ppen = document.createElement("IMG");
		console.log("ppen")
		ppen.setAttribute("src", "pens/pineapple.jpg")
		ppen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(ppen)
	}else if (points == 200) {
		document.getElementById("winbox").innerHTML = "You get a Strawberry Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/strawberry.jpg'>"
		var spen = document.createElement("IMG");
		console.log("spen")
		spen.setAttribute("src", "pens/strawberry.jpg")
		spen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(spen)
	}else if (points == 250) {
		document.getElementById("winbox").innerHTML = "You get a Raspberry Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/raspberry.jpg'>"
		var rpen = document.createElement("IMG");
		console.log("rpen")
		rpen.setAttribute("src", "pens/raspberry.jpg")
		rpen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(rpen)
	}else if (points == 300) {
		document.getElementById("winbox").innerHTML = "You get a Pepper Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/pepper.jpg'>"
		var peppen = document.createElement("IMG");
		console.log("peppen")
		peppen.setAttribute("src", "pens/pepper.jpg")
		peppen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(peppen)
	}else if (points == 350) {
		document.getElementById("winbox").innerHTML = "You get a Banana Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/banana.jpg'>"
		var bpen = document.createElement("IMG");
		console.log("bpen")
		bpen.setAttribute("src", "pens/banana.jpg")
		bpen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(bpen)
	}else if (points == 1000) {
		document.getElementById("winbox").innerHTML = "You get a Pen Pineapple Apple Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/ppap.jpg'>"
		var ppappen = document.createElement("IMG");
		console.log("ppappen")
		ppappen.setAttribute("src", "pens/ppap.jpg")
		ppappen.style.width = "100vw";
		document.getElementById("InventoryPics").appendChild(ppappen)
		celebrate()
	}else{
		console.log("error :(            JK")
	}
}
















