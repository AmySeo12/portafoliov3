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

$(document).ready(function(){
	
	setInterval(barraProgreso, 100);
	$(".hover").mouseleave(
		function () {
			$(this).removeClass("hover");
		}
	);
});