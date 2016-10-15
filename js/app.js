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
		document.getElementById("imagebox").innerHTML = "<img src='pens/apple.png'>";
		var apen = document.createElement("IMG");
		console.log("apen")
		apen.setAttribute("src", "pens/apple.png")
		apen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(apen)
	}else if (points == 50) {
		document.getElementById("winbox").innerHTML = "You get a Watermelon Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/watermelon.png'>"
		var wpen = document.createElement("IMG");
		console.log("wpen")
		wpen.setAttribute("src", "pens/watermelon.png")
		wpen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(wpen)
	}else if (points == 100) {
		document.getElementById("winbox").innerHTML = "You get a Orange Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/orange.png'>"
		var Open = document.createElement("IMG");
		console.log("Open")
		Open.setAttribute("src", "pens/Orange.png")
		Open.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(Open)
	}else if (points == 150) {
		document.getElementById("winbox").innerHTML = "You get a Pineapple Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/pineapple.png'>"
		var ppen = document.createElement("IMG");
		console.log("ppen")
		ppen.setAttribute("src", "pens/pineapple.png")
		ppen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(ppen)
	}else if (points == 200) {
		document.getElementById("winbox").innerHTML = "You get a Strawberry Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/strawberry.png'>"
		var spen = document.createElement("IMG");
		console.log("spen")
		spen.setAttribute("src", "pens/strawberry.png")
		spen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(spen)
	}else if (points == 250) {
		document.getElementById("winbox").innerHTML = "You get a Raspberry Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/raspberry.png'>"
		var rpen = document.createElement("IMG");
		console.log("rpen")
		rpen.setAttribute("src", "pens/raspberry.png")
		rpen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(rpen)
	}else if (points == 300) {
		document.getElementById("winbox").innerHTML = "You get a Pepper Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/pepper.png'>"
		var peppen = document.createElement("IMG");
		console.log("peppen")
		peppen.setAttribute("src", "pens/pepper.png")
		peppen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(peppen)
	}else if (points == 350) {
		document.getElementById("winbox").innerHTML = "You get a Banana Pen";
		document.getElementById("imagebox").innerHTML = "<img src='pens/banana.png'>"
		var bpen = document.createElement("IMG");
		console.log("bpen")
		bpen.setAttribute("src", "pens/banana.png")
		bpen.style.width = "50px";
		document.getElementById("InventoryPics").appendChild(bpen)
	}else if (points == 1000) {
		document.getElementById("winbox").innerHTML = "You get a Pen Pineapple Apple Pen";
		var ppapvid = document.createElement("iframe");
		console.log("ppappen")
		var ppapvidsrc = document.createElement("source")
		ppapvid.appendChild(ppapvidsrc)
		ppapvid.src = "https://www.youtube.com/embed/JoV3wzO2qLQ?autoplay=1"
		ppapvid.style.height = "720px"
		ppapvid.style.width = "1280px"	
		document.getElementById("imagebox").appendChild(ppapvid)
	}else{
		console.log("error :(            JK")
	}
}
















