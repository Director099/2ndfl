'use strict';

$(function() {
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    dots:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        500:{
	            items:2
	        },
	        767:{
	            items:3
	        },
	        1199:{
	            items:4
	        }
	    }
	})
});