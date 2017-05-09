var container = document.getElementById('container');

var letters = {
    KeyA: {
        url: 'assets/media/alberscopy.jpg',
        number : 'id_a',
    },

    KeyB: {
        url: 'assets/media/basqiuat.jpeg',
        number : 'id_b',
    },
    KeyC: {
        url: 'assets/media/cattelancopy.jpg',
       number : 'id_c',
    },
    KeyD: {
        url: 'assets/media/degascopy.jpg',
        number : 'id_d',
    },
    KeyE: {
        url: 'assets/media/elgortcopy.jpg',
        number : 'id_e',
    },
    KeyF: {
        url: 'assets/media/fischercopy.jpg',
        number : 'id_f',
    },
    KeyG: {
        url: 'assets/media/goldincopy.jpg',
        number : 'id_g',
    },
    KeyH: {
        url: 'assets/media/hockneycopy.jpeg',
        number : 'id_h',
    },
    KeyI: {
        url: 'assets/media/johningle.jpg',
        number : 'id_i',
    },
    KeyJ: {
        url: 'assets/media/jasperjohns.jpg',
        number : 'id_j',
    },
    KeyK: {
        url: 'assets/media/katzcopy.jpg',
        number : 'id_k',
    },
    KeyL: {
        url: 'assets/media/lichtensteincopy.jpg',
        number : 'id_l',
    },
    KeyM: {
        url: 'assets/media/matissecopy.jpg',
        number : 'id_m',
    },
    KeyN: {

        url: 'assets/media/netocopy.jpg',
        number : 'id_n',
    },
    KeyO: {
        url: 'assets/media/okeefe.jpg',
        number : 'id_o',
    },
    KeyP: {
        url: 'assets/media/picassocopy.jpg',
        number : 'id_p',
    },
    KeyQ: {
        url: 'assets/media/marcquinn.jpg',
        number : 'id_q',
    },
    KeyR: {
        url: 'assets/media/rousseaucopy.jpg',
        number : 'id_r',
    },
    KeyS: {
        url: 'assets/media/stellacopy.jpg',
        number : 'id_s',
    },
    KeyT: {
        url: 'assets/media/turrellcopy.jpg',
        number : 'id_t',
    },
    KeyU: {
        url: 'assets/media/uzzle.jpg',
        number : 'id_u',
    },
    KeyV: {
        url: 'assets/media/vermeer.jpg',
        number : 'id_v',
    },
    KeyW: {
        url: 'assets/media/warholcopy.jpg',
        number : 'id_w',
    },
    KeyX: {
        url: 'assets/media/ximeno.jpg',
        number : 'id_x',
    },
    KeyY: {
        url: 'assets/media/yoshida.jpg',
        number : 'id_y',
    },
    KeyZ: {
        url: 'assets/media/zeisler.jpg',
        number : 'id_z',
    }
};



// document.getElementByTagName("container").setAttribute("class", "imageId");
var img = document.createElement('img');


document.addEventListener('keydown', function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var img = document.createElement('img');
       
        // img.id = "imageId";

        img.id = letters[event.code].number;

        // var len = document.getElementsByTagName('img').length;
        //     for (var i = 0; i < len; i++) {
        //         img.id = "imageId" + i;
        // }

        img.src = letters[event.code].url;
        img.style.width = letters[event.code].width;
        container.appendChild(img);
    } 
    else if (event.keyCode == 32) {
        var div = document.createElement('div');
        div.classList.add('space');
        container.appendChild(div);
    } else if (event.keyCode == 8) {
        container.removeChild(container.lastChild );
    }
            hover(img); 


});
    
 function hover(){
        // var allElements = document.querySelectorAll('#imageId');
        // for (var i=0; i<allElements.length; i++) {
        //     allElements[i].addEventListener("mouseover", mouseOver);   
        //     allElements[i].addEventListener("mouseout", mouseOut); 
        // }

        document.getElementById("id_a").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_a").addEventListener("mouseout", mouseOut);
        document.getElementById("id_b").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_b").addEventListener("mouseout", mouseOut);
        document.getElementById("id_c").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_c").addEventListener("mouseout", mouseOut);
        document.getElementById("id_d").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_d").addEventListener("mouseout", mouseOut);
        document.getElementById("id_e").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_e").addEventListener("mouseout", mouseOut);
        document.getElementById("id_f").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_f").addEventListener("mouseout", mouseOut);
        document.getElementById("id_g").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_g").addEventListener("mouseout", mouseOut);
        document.getElementById("id_h").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_h").addEventListener("mouseout", mouseOut);
        document.getElementById("id_i").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_i").addEventListener("mouseout", mouseOut);
        document.getElementById("id_j").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_j").addEventListener("mouseout", mouseOut);
        document.getElementById("id_k").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_k").addEventListener("mouseout", mouseOut);
        document.getElementById("id_l").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_l").addEventListener("mouseout", mouseOut);
        document.getElementById("id_m").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_m").addEventListener("mouseout", mouseOut);
        document.getElementById("id_n").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_n").addEventListener("mouseout", mouseOut);
        document.getElementById("id_o").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_o").addEventListener("mouseout", mouseOut);
        document.getElementById("id_p").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_p").addEventListener("mouseout", mouseOut);
        document.getElementById("id_q").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_q").addEventListener("mouseout", mouseOut);
        document.getElementById("id_r").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_r").addEventListener("mouseout", mouseOut);
        document.getElementById("id_s").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_s").addEventListener("mouseout", mouseOut);
        document.getElementById("id_t").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_t").addEventListener("mouseout", mouseOut);
        document.getElementById("id_u").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_u").addEventListener("mouseout", mouseOut);
        document.getElementById("id_v").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_v").addEventListener("mouseout", mouseOut);
        document.getElementById("id_w").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_w").addEventListener("mouseout", mouseOut);
        document.getElementById("id_x").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_x").addEventListener("mouseout", mouseOut);
        document.getElementById("id_y").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_y").addEventListener("mouseout", mouseOut);
        document.getElementById("id_z").addEventListener("mouseover", mouseOver);   
        document.getElementById("id_z").addEventListener("mouseout", mouseOut);
    }
         

    function mouseOver() {
        // var allElements = document.querySelectorAll('#imageId');
        // for (var i=0; i<allElements.length; i++) {

        //     allElements[i].src = "assets/media/rousseaucopy.jpg";
           
        // }
        document.getElementById("id_a").src = "assets/media/ahov.jpg";
        document.getElementById("id_b").src = "assets/media/basqhover.jpg";
        document.getElementById("id_c").src = "assets/media/catthover.jpg";
        document.getElementById("id_d").src = "assets/media/degashov.jpg";
        document.getElementById("id_e").src = "assets/media/elgorthov.jpg";
        document.getElementById("id_f").src = "assets/media/fhov.jpg";
        document.getElementById("id_g").src = "assets/media/ghov.jpg";
        document.getElementById("id_h").src = "assets/media/hhov.jpg";
        document.getElementById("id_i").src = "assets/media/ihov.jpg";
        document.getElementById("id_j").src = "assets/media/jhov.jpg";
        document.getElementById("id_k").src = "assets/media/khov.jpg";
        document.getElementById("id_l").src = "assets/media/lhov.jpg";
        document.getElementById("id_m").src = "assets/media/mhov.jpg";
        document.getElementById("id_n").src = "assets/media/nhov.jpg";
        document.getElementById("id_o").src = "assets/media/ohov.jpg";
        document.getElementById("id_p").src = "assets/media/phov.jpg";
        document.getElementById("id_q").src = "assets/media/qhov.jpg";
        document.getElementById("id_r").src = "assets/media/rhov.jpg";
        document.getElementById("id_s").src = "assets/media/shov.jpg";
        document.getElementById("id_t").src = "assets/media/thov.jpg";
        document.getElementById("id_u").src = "assets/media/uhov.jpg";
        document.getElementById("id_v").src = "assets/media/vhov.jpg";
        document.getElementById("id_w").src = "assets/media/whov.jpg";
        document.getElementById("id_x").src = "assets/media/xhov.jpg";
        document.getElementById("id_y").src = "assets/media/yhov.jpg";
        document.getElementById("id_z").src = "assets/media/zhov.jpg";          
        
    }

    function mouseOut() {
        // var allElements = document.querySelectorAll('#imageId');
        // for (var i=0; i<allElements.length; i++) {

        //     allElements[i].src = img.src;
        //     // allElements[i].addEventListener("mouseover", mouseOver);   
        //     // allElements[i].addEventListener("mouseout", mouseOut); 
        // }
        document.getElementById("id_a").src = "assets/media/alberscopy.jpg";
        document.getElementById("id_b").src = "assets/media/basqiuat.jpeg";
        document.getElementById("id_c").src = "assets/media/cattelancopy.jpg";
        document.getElementById("id_d").src = "assets/media/degascopy.jpg";
        document.getElementById("id_e").src = "assets/media/elgortcopy.jpg";
        document.getElementById("id_f").src = "assets/media/fischercopy.jpg";
        document.getElementById("id_g").src = "assets/media/goldincopy.jpg";
        document.getElementById("id_h").src = "assets/media/hockneycopy.jpeg";
        document.getElementById("id_i").src = "assets/media/johningle.jpg";
        document.getElementById("id_j").src = "assets/media/jasperjohns.jpg";
        document.getElementById("id_k").src = "assets/media/katzcopy.jpg";
        document.getElementById("id_l").src = "assets/media/lichtensteincopy.jpg";
        document.getElementById("id_m").src = "assets/media/matissecopy.jpg";
        document.getElementById("id_n").src = "assets/media/netocopy.jpg";
        document.getElementById("id_o").src = "assets/media/okeefe.jpg";
        document.getElementById("id_p").src = "assets/media/picassocopy.jpg";
        document.getElementById("id_q").src = "assets/media/marcquinn.jpg";
        document.getElementById("id_r").src = "assets/media/rousseaucopy.jpg";
        document.getElementById("id_s").src = "assets/media/stellacopy.jpg";
        document.getElementById("id_t").src = "assets/media/turrellcopy.jpg";
        document.getElementById("id_u").src = "assets/media/uzzle.jpg";
        document.getElementById("id_v").src = "assets/media/vermeer.jpg";
        document.getElementById("id_w").src = "assets/media/warholcopy.jpg";
        document.getElementById("id_x").src = "assets/media/ximeno.jpg";
        document.getElementById("id_y").src = "assets/media/yoshida.jpg";
        document.getElementById("id_z").src = "assets/media/zeisler.jpg"; 

    }
