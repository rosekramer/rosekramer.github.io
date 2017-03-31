// Debt Button 
// ________________
var html = document.documentElement;


var myDebt = 0;

var myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {

	myDebt += 100;
	// mydebt =mydebt plus 100
	console.log("my debt = $" + myDebt);
	event.stopPropagation();
});

// END OF DEBT BUTTON

//COLOR CHANGE

var bgButton = document.getElementById("bg-button");


bgButton.addEventListener("click", function() {
	if (html.style.backgroundColor != "lightpink") {
		html.style.backgroundColor = "lightpink";
	}else{
		html.style.backgroundColor = "white";
	}
	event.stopPropagation();
	
});

//end of color change button



var simpsonButton = document.getElementById("simpson-button");
var simpsonWrapper = document.getElementById("simpson-wrapper");

var simpsons = [];
simpsons[0] = "media/fake_bart.png";
simpsons[1] = "media/krusty.gif";
simpsons[2] = "media/milhouse.gif";
simpsons[3] = "media/prince_lisa.png";


//var arrayName = "hajsj", "yagsg", "hdn";


simpsonButton.addEventListener("click", function(){
	var img = document.createElement("img");
	img.src = simpsons[Math.floor(Math.random()*4)];
	simpsonWrapper.appendChild(img);

	event.stopPropagation();

});
///end of simpson


html.addEventListener("click", function(event){
	console.log(event.clientX + "," + event.clientY);

	var sticker = document.createElement("div");
	sticker.classList.add("sticker");
	html.appendChild(sticker);
	sticker.style.left = (event.clientX - 10) + "px";
	sticker.style.top = (event.clientY - 10) + "px";
});





