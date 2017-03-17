console.log('hello world');

var myStudentDebt = 800;

myStudentDebt = myStudentDebt - 100;

var myLuckyNumbers = [4, 7, 8, 16];

console.log(myLuckyNumbers);


myLuckyNumbers[2] = 36;
console.log(myLuckyNumbers[2]);

function addFive(x) {
	return x + 5;
}

function add(x, y) {
	console.log(x + y);
}

var myAge = 19;

if (myAge < 21) {
	console.log("u cant party");
} else {
	console.log("party on");
}

function addFive(x){
	return x + 5;
}

function add(x, y){
	x + y;
}

var hamburgers = 0;


//for loops
for (var i = 0; i < 10; i = i + 1) {

	hamburgers = hamburgers + 1;
	console.log(hamburgers);
}


console.log("How many licks does it tske to get to the center of a tootsie pop??");



function askMrOwl(numOfLicks) {
	for(var licks = 1; licks <= numOfLicks; licks++) {
	if (licks < numOfLicks) {
		console.log("ahhh " + licks);
	} else {
		console.log("CRUNCH!!")
	}
	}
}

askMrOwl(18);



//# # # #

//# # # #
//# # # #
//# # # #


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










//*addFive(10);
//*add(8,9);
//*add("Bryant" + "Wells")