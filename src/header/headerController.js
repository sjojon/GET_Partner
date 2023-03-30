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
    updateView();
  }
  
  //tar deg til login
  function goToLogin() {
    model.app.page = 'login'
    updateView();
  }

  //tar deg til register company
  function goToRegister() {
    model.app.page = 'registerCompany'
    updateView();
  }

//
function goToEditProfileStudent() {
  model.app.page = 'editStudentProfile'
  updateView();
}

//
function goToSeeProfileStudent() {
  model.app.page = 'studentProfile'
  updateView();
}