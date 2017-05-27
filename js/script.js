//var bars = '<div id="bars"><div class="n"></div><div class="n"></div><div class="m"></div><div class="m"></div><div class="m"></div><div class="c"></div></div>' $('#container').prepend(bars).css({paddingTop: 0}); $('body').prepend('<div id="shadow" />')   
//
//
//$('#blog').bind('toggle', function()    
//{   
//    var $blog = $(this);   
//    if ($blog.is(':visible')) $blog.trigger('hide');   
//    else $blog.trigger('show')   
//})   
//    .bind('show', function()   
//    {   
//    $(this).slideDown('show');   
//})   
//    .bind('hide', function()    
//    {   
//    $(this).slideUp('hide');   
//});   
//$('#blogbutton').removeAttr('href').   
//click(function()    
//{   
//    $('#blog').trigger('toggle');   
//});   
//
//
//

jQuery(document).ready(function() {
var offset = 220;
var duration = 500;
jQuery(window).scroll(function() {
if (jQuery(this).scrollTop() > offset) {
jQuery('.back-to-top').fadeIn(duration);
} else {
jQuery('.back-to-top').fadeOut(duration);
}
});

jQuery('.back-to-top').click(function(event) {
event.preventDefault();
jQuery('html, body').animate({scrollTop: 0}, duration);
return false;
})
});
