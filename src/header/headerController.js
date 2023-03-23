// dropdown header funksjon
  $(function () {
    $('.dropdown').hover(
      function () {
        $(this).children('.dropdown-menu').show();
      },
      function () {
        $(this).children('.dropdown-menu').hide();
      }
    );
  });
  
  
  //tar deg til hjemme skjermen når du hitter logoen
  function goToHome() {
    model.app.page = 'home';
    console.log(model.app.page);
    updateView()
  }
  
  
  //tar deg til login
  function goToLogin() {
    model.app.page = 'login'
    console.log(model.app.page);
    updateView()
  }


  //logger bruker ut
  function Logout(){

  }