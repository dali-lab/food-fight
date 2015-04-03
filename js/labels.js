//click events for interactive food label pictures 
$(document).ready(function(){
	console.log("yolololo");
	$('.label-button').click(function(){
		console.log("button clicked");
		switch($(this).attr('id')) {
			//red label
			case 'red':
				$('#label-click-info').text("red label clicked");
				break;
			// yellow label
			case 'yellow':
				$('#label-click-info').text("yellow label clicked");
				break;
			//grey label
			case 'grey':
				$('#label-click-info').text("grey label clicked");
				break;
			//green label
			case 'green':
				$('#label-click-info').text("green label clicked");
				break;
		}
	});

});