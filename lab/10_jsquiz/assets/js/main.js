console.log('helloworld');

var html = document.documentElement;

var checkerBoard = document.getElementById("checkerboard");


checkerBoard.addEventListener("click", function() {
	if (html.style.backgroundColor != "lightpink") {
		html.style.backgroundColor = "lightpink";
	}else{
		html.style.backgroundColor = "white";
	}
	
});

var pyramidRo = document.getElementById("pyramid");

pyramidRo.addEventListener("click", function() {

	
});

function checkerboard(width, height) {
	var checkerboard = "";

	for (var j = 0; j < height; j++) {
		if (j % 2) {
			for (var i = 0; i < width; i++) {
				if ( i % 2 ) {
					checkerboard = checkerboard + "#";
				} else {
					checkerboard = checkerboard + " ";
				}
			}
		} else {
			for (var i = 0; i < width; i++) {
				if ( i % 2){
					checkerboard = checkerboard + " ";
				} else {
					checkerboard = checkerboard + "#";
				}
			}
		}

		checkerboard = checkerboard + "\n";
	}
	console.log(checkerboard);
}

function triangle(width, height) {
	var triangle = "";

	for (var j = 0; j < height; j++) {
		if (j % 2) {
			for (var i = 0; i < width; i++) {
				if ( i % 2 ) {
					triangle = triangle + "#";
				} else {
					triangle = triangle + " ";
				}
			}
		} else {
			for (var i = 0; i < width; i++) {
				if ( i % 2){
					triangle = triangle + " ";
				} else {
					triangle = triangle + "#";
				}
			}
		}

		triangle = triangle + "\n";
	}
	console.log(triangle);
}




