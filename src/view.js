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
        <img src="images/GETPartner_logo_header.png" />
      </div>
      <ul>
        <li>Tekst 1</li>
        <li>Tekst 2</li>
        <li class="dropdown">
          <a>Dropdown</a>
          <ul class="dropdown-menu">
            <li><onclick>Valg1</onclick></li>
            <li><onclick>Valg2</onclick></li>
            <li><onclick>Valg3</onclick></li>
          </ul>
        </li>
        <li>Tekst 3</li>
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
  switch (page) {
    case 'login':
      loginView()
      break
    case 'registerChoice':
      registerChoiceView()
      break
    case 'registerCompany':
      registerCompanyView()
      break
    case 'registerCompanyCompleted':
      registerCompanyCompletedView()
      break
    case 'registerStudent':
      registerStudentView()
      break
    case 'browseStudentSearch':
      studentSearchView()
      break
    case 'browseStudent':
      browseStudentView()
      break
    case 'editStudentProfile':
      editStudentProfileView()
      break
    case 'studentProfile':
      studentProfileView()
      break
    case 'acceptCompany':
      acceptCompanyView()
      break
  }
}