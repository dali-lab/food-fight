$(document).ready(function(){
	$('#jsparagraph').html("yay jQuery");
$( "a.link" ).hover(
	function(){
		var myclass = $(this).parent().children(".nav-item-text");
		$(this).parent().parent().children(".nav-item-text").css("visibility", "visible");
		console.log(myclass);
	}, function() {
		$(this).parent().parent().children(".nav-item-text").css("visibility", "hidden");
	}
 );

/*taken from http://jsfiddle.net/anjzb/ */
$(window).scroll(function () {

        var y = $(this).scrollTop();

        $('.link').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 200) {
                // $('.link').not(this).removeClass('active');
                $('.link').not(this).parent().parent().children(".nav-item-text").css("visibility", "hidden");
                // $(this).addClass('active');
                $(this).parent().parent().children(".nav-item-text").css("visibility", "visible");
            }
        });

    });

});

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