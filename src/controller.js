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


// Finner account med id som parameter
function findAccountById(id) {
  for (let account of model.data.accounts.allAccounts) {
    if (account.id === id)
      return account
  }
  return null
}


// Finner en ledig id eller lager en ny om det trengs i data.accounts.allAccounts
function findAvailableAccountId() {
  const allAccounts = model.data.accounts.allAccounts
  let id = 1
  for (let thisAccount of allAccounts) {

    if (thisAccount.id == id) {
      if (id !== allAccounts.length) {
        id++
      } else {
        id++
        return id
      }
    }
    else {
      return id
    }
  }
}
