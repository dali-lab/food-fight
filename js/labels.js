//click events for interactive food label pictures 
$(document).ready(function(){
	$('.label-button').click(function(){
		console.log("button clicked");
		switch($(this).attr('id')) {
			//red label
			case 'u723':
				$('.label-click-info').children().text("red label");
				break;
			// yellow label
			case 'u724':
				$('.label-click-info').children().text("yellow label");
				break;
			//grey label
			case 'u725':
				$('.label-click-info').children().text("grey label");
				break;
			//green label
			case 'u726':
				$('.label-click-info').children().text("green label");
				break;
		}
	});

});