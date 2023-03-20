const mainPage = document.getElementById("app")

// render whole page
updateView()

function updateView() {
  mainPage.innerHTML = `
    ${updateHeaderView()}
  `;
}

// render header
function updateHeaderView() {
  return /*html*/ `
    <nav>
      <ul>
        <li>tekst1</li>
        <li>tekst2</li>
        <li class="dropdown">
          <a>dropdown</a>
          <ul class="dropdown-menu">
            <li><onclick>tekst4</onclick></li>
            <li><onclick>tekst5</onclick></li>
            <li><onclick>tekst6</onclick></li>
          </ul>
        </li>
        <li>tekst3</li>
      </ul>
    </nav>
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