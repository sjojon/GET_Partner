// dropdown header funksjon
$(function() {
  $('.dropdown').hover(
    function() {
      $(this).children('.dropdown-menu').show();
    },
    function() {
      $(this).children('.dropdown-menu').hide();
    }
  );
});


//tar deg til hjemme skjermen når du hitter logoen
function clickLogoGoHome() {
  if (model.app.page !== 'homePage') {
      model.app.page = 'homePage';
      console.log(model.app.page);
      updateView()
  }
}