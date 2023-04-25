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

//tar deg til rediger student profil
function goToEditProfileStudent() {
  pendigAccountExists= model.data.pendingProfileChanges.accounts.filter(ac=>ac.id==model.data.currentUser.id)
  if (pendigAccountExists.length>0){
    return
  } else{
    model.app.page = 'editStudentProfile'
    updateView();
  }
}

//tar deg til student profil
function goToSeeProfileStudent() {
  model.app.page = 'studentProfile'
  updateView();
}

//tar deg til filter søk
function goToStudentSearchFilter() {
  model.app.page = 'studentBrowseSearch'
  updateView();
}

//tar deg til map søk
function goToStudentSearchMap() {
  model.app.page = 'companyLandingPage'
  updateView();
}