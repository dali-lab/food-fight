//click events for interactive food label pictures 
$(document).ready(function(){
	console.log("yolololo");
	$('.label-button').click(function(){
		console.log("button clicked");

		//testing
		$('.label-click-info').text($(this).attr('id'));
		//testing

		//Armin: uncomment this switch statement
		// switch($(this).attr('id')) {
			// //red label
			// case 'USDA-organic':
			// 	$('.label-click-info').text($(this).attr('id'));
			// 	break;
			// // yellow label
			// case 'all-natural':
			// 	$('.label-click-info').text($(this).attr('id'));
			// 	break;
			// //grey label
			// case 'no-antibiotics':
			// 	$('.label-click-info').text($(this).attr('id'));
			// 	break;
			// //green label
			// case 'free-roaming':
			// 	$('.label-click-info').text($(this).attr('id'));
			// 	break;
			// case 'no-hormones':
			// 	$('.label-click-info').text($(this).attr('id'));
			// 	break;
			// // yellow label
			// case 'grade-a':
			// 	$('.label-click-info').text($(this).attr('id'));
			// 	break;
			// //grey label
			// case 'omega-3':
			// 	$('.label-click-info').text($(this).attr('id'));
			// 	break;
			// //green label
			// case 'saturated-fat':
			// 	$('.label-click-info').text($(this).attr('id'));
			// 	break;
			// case 'vitamin-e':
			// 	$('.label-click-info').text($(this).attr('id'));
			// 	break;
		// }
	});

});