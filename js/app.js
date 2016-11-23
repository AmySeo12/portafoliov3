var barra= document.getElementById("barrastyle");
var barraUno= document.getElementById("barrastyleUno");
var barraDos= document.getElementById("barrastyleDos");
var barraTres= document.getElementById("barrastyleTres");
var barraCuatro= document.getElementById("barrastyleCuatro");
var barraCinco= document.getElementById("barrastyleCinco");

var barraProgreso= function(){
	barraUno.value+=5;
	barra.value += 5;
	barraDos.value+= 5;
	barraTres.value +=5;
	barraCuatro.value +=5;
	barraCinco.value +=5;
}

var paperMenu = {
	$window: $('#paper-window'),
	$paperFront: $('#paper-front'),
	$hamburger: $('.hamburger'),
	$menu: $("nav a"),
	offset: 1800,
	pageHeight: $('#paper-front').outerHeight(),
	
	open: function() {
		this.$window.addClass('tilt');
		this.$hamburger.off('click');
		$('#container, .hamburger, nav a').on('click', this.close.bind(this));
		this.hamburgerFix(true);
	},
	close: function() {
		this.$window.removeClass('tilt'); 
		$('#container, .hamburger').off('click');
		this.$hamburger.on('click', this.open.bind(this));
		this.hamburgerFix(false);
	},
	updateTransformOrigin: function() {
		scrollTop = this.$window.scrollTop();
		equation = (scrollTop + this.offset) / this.pageHeight * 100;
		this.$paperFront.css('transform-origin', 'center ' + equation + '%');
	},
	//hamburger icon fix to keep its position
	hamburgerFix: function(opening) {
			if(opening) {
				$('.hamburger').css({
					position: 'absolute',
					top: this.$window.scrollTop() + 30 + 'px'
				});
			} else {
				setTimeout(function() {
					$('.hamburger').css({
						position: 'fixed',
						top: '30px'
					});
				}, 300);
			}
		},
	bindEvents: function() {
		this.$hamburger.on('click', this.open.bind(this));
		$('.close').on('click', this.close.bind(this));
		this.$window.on('scroll', this.updateTransformOrigin.bind(this));
	},
	init: function() {
		this.bindEvents();
		this.updateTransformOrigin();
	},

};

paperMenu.init();

(function(){
	'use strict';
	var bar = document.querySelectorAll('.bar-progress');
	var index;

	setTimeout(function(){
		for(index = 0; index < bar.length; index++){
			var atributos = bar[index].getAttribute('data-total');
			bar[index].style.width = atributos + "%";				
		}
	}, 1500);
	
})();

//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
	
	setInterval(barraProgreso, 100);
	
	/*****************
	 BUILD THE SLIDER
	*****************/
	//set width to be 'x' times the number of slides
	$('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
	/*************************
	 //*> OPTIONAL SETTINGS
	************************/
	//automatic slider
	var autoSlider = setInterval(slideRight, 3000);
	
	//for each slide 
	$.each($('#slider-wrap ul li'), function() { 
	   //set its color
	   var c = $(this).attr("data-color");
	   $(this).css("background",c);	   
	});
	//hide/show controls/btns when hover
	//pause automatic slide when hover
	$('#slider-wrap').hover(
	  function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
	  function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
	);
});//DOCUMENT READY
/***********
 SLIDE LEFT
************/
function slideLeft(){
	pos--;
	if(pos==-1){ pos = totalSlides-1; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 	
}
/************
 SLIDE RIGHT
*************/
function slideRight(){
	pos++;
	if(pos==totalSlides){ pos = 0; }
	$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
}