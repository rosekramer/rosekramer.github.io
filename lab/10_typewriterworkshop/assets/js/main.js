var container = document.getElementById('container');

var letters = {
    KeyA: {},
    KeyB: {},
    KeyC: {},
    KeyD: {},
    KeyE: {},
    KeyF: {},
    KeyG: {},
    KeyH: {},
    KeyI: {},
    KeyJ: {},
    KeyK: {},
    KeyL: {},
    KeyM: {},
    KeyN: {},
    KeyO: {},
    KeyP: {},
    KeyQ: {},
    KeyR: {},
    KeyS: {},
    KeyT: {},
    KeyU: {},
    KeyV: {},
    KeyW: {},
    KeyX: {},
    KeyY: {},
    KeyZ: {}
};

var bgHue = 0;

for (key in letters) {
	bgHue += Math.floor(360/ (Object.keys(letters).length) );
	letters[key].bgColor = "hsl(" +bgHue+", 100%, 50%)";
};

console.log('hellowworld');
document.addEventListener('keydown', function(event){
	if (event.keyCode >= 65 && event.keyCode <= 90) {

	var div = document.createElement('div');
	div.classList.add('letter');
	if (event.shiftKey == true ){
		div.classList.add('capital');
	};


	div.style.backgroundColor = letters[event.code].bgColor;
	container.appendChild(div);

	// eg. a, b. z
	//console.log("key:" + event.key);

	//eg. KeyA, KeyB, KeyC
	//console.log("code:" + event.code);

	console.log("color:" + letters[event.code])

	//document.documentElement.style.backgroundColor = letters[event.code].bgColor;

	//container.innerHTML += event.key;

	} else if (event.keyCode == 32) {
		var div = document.createElement('div');
		div.classList.add('space');
		container.appendChild(div);
	} else if (event.keyCode == 8) {
		container.removeChild(container.lastChild );
	}
});

