$(document).ready(function(){
	$('#jsparagraph').html("yay jQuery");
$( "a.link" ).hover(
	function(){
		$(this).parent().parent().children(".nav-item-text").css("visibility", "visible");
	}, function() {
		$(this).parent().parent().children(".nav-item-text").css("visibility", "hidden");
	}
 );
    sideNavPosition();
});

/*taken from http://jsfiddle.net/anjzb/ */
$(window).scroll(sideNavPosition);

function sideNavPosition(){
        var sOffset = $(".above-side-nav").offset().top;
    var barheight = $(".above-side-nav").height() + 60; //add 60 to account for margin
    var y = $(this).scrollTop();
    

    if (y > sOffset + barheight) {
        console.log("moving");
        $("#side-nav").css({
            'margin-top': '20px',
        });
    } else {
        $("#side-nav").css({
            'margin-top': (310 - y)+ 'px', //310 is height of all top bars above side nav
        });
    }

    $('.link').each(function (event) {
        if (y >= $($(this).attr('href')).offset().top - 100) {
                // $('.link').not(this).removeClass('active');
                $('.link').not(this).parent().parent().children(".nav-item-text").css("visibility", "hidden");
                // $(this).addClass('active');
                $(this).parent().parent().children(".nav-item-text").css("visibility", "visible");
            }
        });
}

/*taken from http://jsfiddle.net/anjzb/ */
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top)
                }, 850);
                return false;
            }
        }
    });
});


