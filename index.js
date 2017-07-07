
document.getElementById("placeholderThree").addEventListener("animationend",fadeCircle);
document.getElementById("placeholderTwo").addEventListener("animationend",fadePosition);
document.getElementById("bar").addEventListener("animationend",fadeName);
document.getElementById("placeholder").addEventListener("animationend",changeHeight);
document.getElementById("full").addEventListener("click",getFull);
document.getElementById("back").addEventListener("click",getBack);
document.getElementById("front").addEventListener("click",getFront);
document.getElementById("fullFront").addEventListener("click",getFront);
document.getElementById("fullBack").addEventListener("click",getBack);
document.getElementById("backFull").addEventListener("click",getFull);
document.getElementById("backFront").addEventListener("click",getFront);
document.getElementById("frontFull").addEventListener("click",getFull);
document.getElementById("frontBack").addEventListener("click",getBack);
document.getElementById("circle").addEventListener("animationend",moveBackground);
document.getElementById("backProject1").addEventListener("mouseover",()=>{ 
document.getElementById("backCover1").style.height = "0%";
});

document.getElementById("backProject1").addEventListener("mouseout",()=>{ 
document.getElementById("backCover1").style.height = "100%";
});

document.getElementById("frontProject1").addEventListener("mouseover",()=>{ 
document.getElementById("frontCover1").style.height = "0%";
});

document.getElementById("frontProject2").addEventListener("mouseout",()=>{ 
document.getElementById("frontCover2").style.height = "100%";
});
var x = document.getElementsByClassName("home");
for(var i = 0; i < x.length;i++){
	x[i].addEventListener("click",goHome);
}
function goHome(){
	var front = document.getElementById("frontContent");
	var back = document.getElementById("backContent");
	var full = document.getElementById("fullContent");
	
	front.style.height = "0%";
	front.style.width = "0%";
	back.style.height = "0%";
	back.style.width = "0%";
	full.style.height = "0%";
	full.style.width = "0%";
	
}
document.getElementById("frontProject2").addEventListener("mouseover",()=>{ 
document.getElementById("frontCover2").style.height = "0%";
});

document.getElementById("frontProject3").addEventListener("mouseout",()=>{ 
document.getElementById("frontCover3").style.height = "100%";
});

document.getElementById("frontProject3").addEventListener("mouseover",()=>{ 
document.getElementById("frontCover3").style.height = "0%";
});

document.getElementById("frontProject4").addEventListener("mouseout",()=>{ 
document.getElementById("frontCover4").style.height = "100%";
});

document.getElementById("frontProject4").addEventListener("mouseover",()=>{ 
document.getElementById("frontCover4").style.height = "0%";
});

document.getElementById("frontProject5").addEventListener("mouseout",()=>{ 
document.getElementById("frontCover5").style.height = "100%";
});

document.getElementById("frontProject5").addEventListener("mouseover",()=>{ 
document.getElementById("frontCover5").style.height = "0%";
});

document.getElementById("frontProject6").addEventListener("mouseout",()=>{ 
document.getElementById("frontCover6").style.height = "100%";
});

document.getElementById("frontProject6").addEventListener("mouseover",()=>{ 
document.getElementById("frontCover6").style.height = "0%";
});

document.getElementById("frontProject7").addEventListener("mouseout",()=>{ 
document.getElementById("frontCover7").style.height = "100%";
});

document.getElementById("frontProject7").addEventListener("mouseover",()=>{ 
document.getElementById("frontCover7").style.height = "0%";
});

document.getElementById("frontProject1").addEventListener("mouseout",()=>{ 
document.getElementById("frontCover1").style.height = "100%";
});

document.getElementById("fullProject1").addEventListener("mouseover",()=>{ 
document.getElementById("fullCover1").style.height = "0%";
});

document.getElementById("fullProject1").addEventListener("mouseout",()=>{ 
document.getElementById("fullCover1").style.height = "100%";
});

document.getElementById("fullProject2").addEventListener("mouseover",()=>{ 
document.getElementById("fullCover2").style.height = "0%";
});

document.getElementById("fullProject2").addEventListener("mouseout",()=>{ 
document.getElementById("fullCover2").style.height = "100%";
});




function changeHeight(){
	document.getElementById("bar").style.animation = "height .5s forwards";	
	document.getElementById("placeholderFour").style.animation="opacity .5s forwards";
}

function getFront(){
	var x = document.getElementById("frontContent");
	x.style.width = "100%";
	x.style.height = "100%";
	x.style.zIndex = "2";
	x.style.overflow = "scroll";
	x.style.overflowX = "hidden";
	document.getElementById("backContent").style.zIndex = "1";
	document.getElementById("fullContent").style.zIndex = "1";
	document.getElementById("backContent").style.overflow = "hidden";
	document.getElementById("fullContent").style.overflow = "hidden";
	getSmaller("backContent");
	getSmaller("fullContent");
}

function getSmaller(x){
	var z = document.getElementById(x);
	z.style.width = "0%";
	z.style.height = "0%";
}

function getBack(){
	var x = document.getElementById("backContent");
			x.style.width = "100%";
			x.style.height = "100%";
			x.style.zIndex = "2";
	x.style.overflow = "scroll";
	x.style.overflowX = "hidden";
			document.getElementById("frontContent").style.zIndex = "1";
			document.getElementById("fullContent").style.zIndex = "1";
	document.getElementById("frontContent").style.overflow = "hidden";
			document.getElementById("fullContent").style.overflow = "hidden";
			getSmaller("fullContent");
			getSmaller("frontContent");
}

function getFull(){
			var x = document.getElementById("fullContent");
			x.style.width = "100%";
			x.style.height = "100%";
			x.style.zIndex = "2";
	x.style.overflow = "scroll";
	x.style.overflowX = "hidden";
			document.getElementById("backContent").style.zIndex = "1";
			document.getElementById("frontContent").style.zIndex = "1";
	document.getElementById("backContent").style.overflow = "hidden";
			document.getElementById("frontContent").style.overflow = "hidden";
			getSmaller("backContent");
			getSmaller("frontContent");
}

function fadeName(){
	document.getElementById("placeholderTwo").style.animation = "opacity .3s forwards";
}

function fadePosition(){
	document.getElementById("placeholderThree").style.animation = "opacity .3s forwards";
}
function fadeCircle(){
	document.getElementById("circle").style.animation = "circle .7s forwards";
}

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction; 
  translate = 'translate(' + x + 'px, ' + y + 'px)';
  $('#homeTitle').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {
  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;
});


