$(document).ready(function(){
	$('#jsparagraph').html("yay jQuery");
});


//taken from http://jsfiddle.net/anjzb/
// ADDS ACTIVE CLASS TO LINKS WHEN SECTION WITH THE SAME SELECTOR AS THE HREF IS REACHED (CLASS .LINK IS NEEDED ON ALL <a> TAGS)

// $(document).ready(function () {
//     $(window).scroll(function () {

//         var y = $(this).scrollTop();

//         $('.list-group-item').each(function (event) {
//             if (y >= $($(this).attr('href')).offset().top - 40) {
//                 $('.list-group-item').not(this).setAttribute("aria-expanded", false);
//                 $(this).setAttribute("aria-expanded", true);
//             }
//         });

//     });
// });

// // SMOOTH SCROLLING (with negative scroll of 40 for header)

// $(function () {
//     $('a[href*=#]:not([href=#])').click(function () {
//         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: (target.offset().top - 40)
//                 }, 850);
//                 return false;
//             }
//         }
    });
});