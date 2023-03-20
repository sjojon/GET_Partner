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
  let html = ''
  switch (page) {
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
  }
  return html
}