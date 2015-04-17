//positioning and interactivity for dynamic sidenav
$(document).ready(function(){
	$('#jsparagraph').html("yay jQuery");

//have sidenav show the labels when user hovers over it
$( "a.link" ).hover(
	function(){
		// $(this).parent().parent().children(".nav-item-text").css("visibility", "visible");
        $(this).parent().css("box-shadow", "0 0 0 7pt #44B8E9");
	}, function() {
		// $(this).parent().parent().children(".nav-item-text").css("visibility", "hidden");
        $(this).parent().css("box-shadow", "none");
	}
 );

    sideNavPosition();

});

/*based on model at http://jsfiddle.net/anjzb/ */
//keeps sidenav under top bar, when page loads, but moves with page as user scrolls down
$(window).scroll(sideNavPosition);

function sideNavPosition(){
    //determine height of all content above the side nav to use for offset
    var sOffset = $(".above-side-nav").offset().top;
    var barheight = $(".above-side-nav").height() + 20; //margin of 20 from top 
    var y = $(this).scrollTop();
    
    //if the at the top of the page, keep sidenav just under the top bar of content
    if (y > sOffset + barheight) {
        // console.log("moving");
        $("#side-nav").css({
            'margin-top': '20px', //20px is space between top bar and the top of the sidenav
        });
    //if the top bar is no longer visible, keep the sidenav at the top of the page, scroll it with the user
    } else {
        $("#side-nav").css({
            'margin-top': ((sOffset+barheight) - y)+ 'px', 
        });
    }

    //have the modules of the sidenav activate and display text when user scrolls to the div that module references
    $('.link').each(function (event) {
        if (y >= $($(this).attr('href')).offset().top - 120) {
           
                // $('.link').not(this).parent().parent().children(".nav-item-text").css("visibility", "hidden");

                // $(this).parent().parent().children(".nav-item-text").css("visibility", "visible");

                $('.link').not(this).parent().css("box-shadow", "none");

                $(this).parent().css("box-shadow", "0 0 0 7pt #44B8E9");
            }
        });
}



