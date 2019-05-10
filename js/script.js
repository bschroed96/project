$(document).scroll(function(){ /*SCROLL FUNCTION, NOT READY FUNCTION*/

	var y = $(document).scrollTop(); /*scroll top meausures scroll distance*/

	// $(".update").html(y);

	if (y >= 310) {
		$(".fact").fadeOut();
	}
		else if (y < 310){
			$(".fact").fadeIn();
		}
	if (y >= 499) {
		$(".quest").fadeOut();
	}
		else if (y < 501) {
			$(".quest").fadeIn();
		}
	if (y > 500) {
		$(".container").addClass("unblur");	
		$(".container").removeClass("blur");
	}
		else if (y <= 500){
			$(".container").removeClass("unblur");
			$(".container").addClass("blur");	
		}
 		
 	if (y > 9400) {
 		$(".summary").fadeIn();
 	}
 		else if (y<9400)
 		{
 			$(".summary").fadeOut();
 		}
 ///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////JUMP TO SECTION | PAGE 1//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
$('.first').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 700}, 900);
		
	});
$('.second').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 2000}, 900);
		
	});
$('.third').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 3500}, 900);
		
	});
$('.fourth').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 5026}, 900);
		
	});

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////ARROW SELECTORS | PAGE 1///////////////////////////////////////
//////////////////////////////////////////UP//////////////////////////////////////////////////


		if (y >= 1500 && y < 2300) {
	$('.up2').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 700}, 900);
	});
	 
	}

	if (y >= 2300 && y < 3800) {
	$('.up2').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 2000}, 900);
	});
	 
	}

	if (y >= 3800 && y < 5027) {
	$('.up2').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 3500}, 900);
	});
	 
	}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////ARROW SELECTORS | PAGE 1///////////////////////////////////////
//////////////////////////////////////////DOWN//////////////////////////////////////////////////

	if (y >= 0 && y < 700) {
	$('.down2').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 700}, 900);
	});
	 
	}

	if (y >= 700 && y < 2000) {
	$('.down2').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 2000}, 900);
	});
	 
	}

	if (y >= 2000 && y < 3500) {
	$('.down2').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 3500}, 900);
	});
	 
	}

	if (y >= 3500 && y < 5000) {
	$('.down2').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 5026}, 900);
	});
	 
	}

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////side menu selector | PAGE 1//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
							if (y >= 0 && y < 1500)
						 			{
						 				$(".first").addClass("select");
						 				$(".second").removeClass("select");
						 			}
						 				else if ( y > 1500)
						 					{
						 						$(".first").removeClass("select");
						 					}
						 		if (y > 1500 )
						 			{
						 				$(".second").addClass("select");
						 			}
						 				 if ( y > 3000)
						 					{
						 						$(".second").removeClass("select");
						 					}
						 		if (y > 3000 && y < 4500)
						 			{
						 				$(".third").addClass("select");
						 			}
						 			if (y < 3000)
						 				$(".third").removeClass("select");
						 				else if ( y > 4500)
						 					{
						 						$(".third").removeClass("select");
						 					}
						 		if (y > 4500 && y < 6000)
						 			{
						 				$(".fourth").addClass("select");
						 				$(".third").removeClass("select");
						 			}
						 			if (y < 4500)
						 					$(".fourth").removeClass("select");
						 				else if ( y > 6000)
						 					{
						 						$(".fourth").removeClass("select");
						 					}
////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////PAGE2//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
						 	if (y >= 0 && y < 1500)
						 			{
						 				$(".C").addClass("select");
						 				$(".B").removeClass("select");
						 			}
						 				else if ( y > 1500)
						 					{
						 						$(".C").removeClass("select");
						 					}
						 	if (y > 1500 )
						 			{
						 				$(".B").addClass("select");
						 			}
						 				 if ( y > 3000)
						 					{
						 						$(".B").removeClass("select");
						 					}
						 	if (y > 3000 && y < 4500)
						 			{
						 				$(".S").addClass("select");
						 			}
						 			if (y < 3000)
						 				$(".S").removeClass("select");
						 				else if ( y > 4500)
						 					{
						 						$(".S").removeClass("select");
						 					}
						 	if (y > 4500 && y < 6000)
						 			{
						 				$(".W").addClass("select");
						 				$(".S").removeClass("select");
						 			}
						 			if (y < 4500)
						 					$(".W").removeClass("select");
						 				else if ( y > 6000)
						 					{
						 						$(".W").removeClass("select");
						 					}
						 	if (y > 6000 && y < 7200)
						 			{
						 				$(".L").addClass("select");
						 			}
						 				if (y < 6000)
						 					$(".L").removeClass("select");
						 				else if ( y > 7250)
						 					{
						 						$(".L").removeClass("select");
						 					}
						 	if (y > 7250 && y < 8250)
						 			{
						 				$(".V").addClass("select");
						 			}
						 			if (y < 7250)
						 				$(".V"). removeClass("select");
						 				else if ( y > 8250)
						 					{
						 						$(".V").removeClass("select");
						 					}
						 	if (y > 8250 && y < 9250)
						 			{
						 				$(".SE").addClass("select");
						 			}
						 			if (y < 8250)
						 				$(".SE").removeClass("select");
						 				else if ( y > 9250)
						 					{
						 						$(".SE").removeClass("select");
						 					}
						 	if (y > 9250 && y < 9750)
						 			{
						 				$(".SU").addClass("select");
						 			}
						 			if (y < 9250)
						 				$(".SU").removeClass("select");

						 				
////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////ARROW UP PAGE 2////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
	$(document).ready(function(){

	var up = 0;
		if (y > 1500 && y < 3000) {
	$('.up').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 0}, 900);
	});
	 
	}
		if (y > 1500 && y < 3000) {
	$('.up').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 300}, 900);
	});
	 up = up - 1;
	}
		if (y > 3000 && y < 4500) {
	$('.up').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 1690}, 900);
	});
	 up = up - 1;
	}
		if (y > 4500 && y < 6000) {
	$('.up').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 3160}, 900);
	});
	 up = up - 1;
	}
		if (y > 6000 && y <7200) {
	$('.up').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 5005}, 900);
	});
	 up = up - 1;
	}
		if (y > 7200 && y < 8250) {
	$('.up').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 6084}, 900);
	});
	 
	}
		if (y > 8250 && y < 9250) {
	$('.up').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 7430}, 900);
	});
	 up = up - 1;
	}
		if (y > 9250 && y < 10050) {
	$('.up').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 8480}, 900);
	});
	 up = up - 1;
	}
		if (y > 10050) {
	$('.up').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 9970}, 900);
	});
	 up = up - 1;
	}
	////////////////////////////////DOWN/////////////////////////////////////	

	var up = 0;
	if (y < 300) {
	$('.down').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 300}, 900);
	});
	 up = up - 1;
	}
		if (y > 300 && y < 1500) {
	$('.down').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 1690}, 900);
	});
	 
	}
		if (y > 1500 && y < 3000) {
	$('.down').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 3160}, 900);
	});
	 up = up - 1;
	}
		if (y > 3000 && y < 4500) {
	$('.down').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 5005}, 900);
	});
	 up = up - 1;
	}
		if (y > 4500 && y < 6000) {
	$('.down').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 6084}, 900);
	});
	 up = up - 1;
	}
		if (y > 6000 && y <7200) {
	$('.down').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 7430}, 900);
	});
	 up = up - 1;
	}
		if (y > 7200 && y < 8250) {
	$('.down').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 8480}, 900);
	});
	 
	}
		if (y > 8250 && y < 9250) {
	$('.down').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 9970}, 900);
	});
	 up = up - 1;
	}
		

////////////////////////////////////////////////////////////////////////////////

	$('.C').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 300}, 900);
		up = 1;
	});

	$('.B').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 1690}, 900);
		up = 2;
	});

	$('.S').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 3160}, 900);
		up = 3;
	});

	$('.W').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 5005}, 900);
		up = 4;
	});

	$('.L').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 6085}, 900);
		up = 5;
	});

	$('.V').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 7430}, 900);
		up = 6;
	});

	$('.SE').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 8480}, 900);
		up = 7;
	});

	$('.SU').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 9970}, 900);
		up = 8;
	});

	$('.totop').click(function(){
		$('html, body').stop(true, false).animate({scrollTop: 0}, 900);
		up = 9;
	});

});


});

