// dropdown header funksjon
$(function() {
    $('.dropdown').hover(function() {
      $(this).children('.dropdown-menu').show();
    }, function() {
      $(this).children('.dropdown-menu').hide();
    });
  });