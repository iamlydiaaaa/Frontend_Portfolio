$(document).ready(function(){
	 $('.visual-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		dots:true,
        fade:true,
        cssEase: 'linear',
		nextArrow: $('.btn_next'), 
		prevArrow: $('.btn_prev'),
	}); 
});
