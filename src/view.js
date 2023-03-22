const mainPage = document.getElementById("app")

// render whole page
updateView()

function updateView() {
  mainPage.innerHTML = `
    ${updateHeaderView()}
    ${updatePage()}
    `;
}

// render header
function updateHeaderView() {
  return /*html*/ `
  <header>
  <div id="header-box">
    <nav>
      <div id="header-logo">
        <img src="images/GETPartner_logo_header.png" onclick="goToHome()"/>
      </div>
      <ul>
      <button class="list-button" onclick="tekst2()">Tekst 1</button>
        <button class="list-button" onclick="tekst2()">Tekst 2</button>
        <li class="dropdown">
          <a>Profil</a>
          <ul class="dropdown-menu">
            <button class="list-button-dropdown" onclick="tekst2()">Se profil</button>
            <button class="list-button-dropdown" onclick="tekst2()">Endre profil</button>
            <button class="list-button-dropdown" onclick="goToLogin()">Log inn/ut</button> <!--endre til  dollar tag log inn/ logg ut-->
          </ul>
        </li>
        <button class="list-button" onclick="tekst3()">Søk</button>
      </ul>
      <div id="header-contact-button">
        <button>Kontakt oss</button>
      </div>
    </nav>
  </div>
</header>
  `;
}


function updatePage() {
  const page = model.app.page
  let html = ''
  switch (page) {
    case 'home':
      html = homeView()
      break
    case 'login':
      html = loginView()
      break
    case 'registerChoice':
      html = registerChoiceView()
      break
    case 'registerCompany':
      html = registerCompanyView()
      break
    case 'registerCompanyCompleted':
      html = registerCompanyCompletedView()
      break
    case 'registerStudent':
      html = registerStudentView()
      break
    case 'browseStudentSearch':
      html = studentSearchView()
      break
    case 'browseStudent':
      html = browseStudentView()
      break
    case 'editStudentProfile':
      html = editStudentProfileView()
      break
    case 'studentProfile':
      html = studentProfileView()
      break
    case 'acceptCompany':
      html = acceptCompanyView()
      break
    case 'adminDash':
      html = adminDashView()
      break
  }
  return html
}