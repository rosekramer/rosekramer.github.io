$(".text").on({
    mouseover: function() {
        $(".coshover").stop().show();
        console.log("hello");
    },
    
    mouseout: function() {
        $(".coshover").stop().hide();
    }
})

$(".text1").on({
    mouseover: function() {
        $(".maghover").stop().show();
    },
    
    mouseout: function() {
        $(".maghover").stop().hide();
    }
})

$(".text").on({
    mouseover: function() {
        $(".prohover").stop().show();
    },
    
    mouseout: function() {
        $(".prohover").stop().hide();
    }
})

$(".text").on({
    mouseover: function() {
        $(".movhover").stop().show();
    },
    
    mouseout: function() {
        $(".movhover").stop().hide();
    }
})


$(".text").on({
    mouseover: function() {
        $(".stylehover").stop().show();
    },
    
    mouseout: function() {
        $(".stylehover").stop().hide();
    }
})

$(".text").on({
    mouseover: function() {
        $(".racehover").stop().show();
    },
    
    mouseout: function() {
        $(".racehover").stop().hide();
    }
})

$(".text").on({
    mouseover: function() {
        $(".rechover").stop().show();
    },
    
    mouseout: function() {
        $(".rechover").stop().hide();
    }
})
$(".text").on({
    mouseover: function() {
        $(".carhover").stop().show();
    },
    
    mouseout: function() {
        $(".carhover").stop().hide();
    }
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  

}


