/*
 * Scrolling to top
 * Author: Saint Johann
 * Source: [[:ru:Участник:Saint Johann/topscroll.js]]
 */
$('body').append("<div class='to-top' title='Өйдөгө'>↑</div>");
 
$(window).scroll( function() {
   if ( $(this).scrollTop() > $(window).height() ) {
      $('.to-top').fadeIn();
   }   else   {
      $('.to-top').fadeOut();
   }
});
 
$('.to-top').on('click', function() {
   $('html, body').animate({scrollTop : 0}, 800);
   return false;
});
 
mw.util.addCSS('.to-top { position: fixed; top: 0; bottom: 0; left: 0; padding:.3em; font:20px PT Sans,Tahoma,Verdana,sans-serif; color:#4d7285; height:100%; -moz-opacity: 0.3; filter: alpha(opacity=30); opacity: 0.3; display:none; } .to-top:hover { -moz-opacity: 0.9; filter: alpha(opacity=90); opacity: 0.9; cursor: pointer; background: #e9e9e9; }');