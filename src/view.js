const mainPage = document.getElementById("app")

//renders the client
updateView()
function updateView() {
  mainPage.innerHTML = /*html*/`
    hello world hello world hello world<br>
    hello world hello world hello world<br>
    hello world hello world hello world<br><br>
    <button>trykk her</button><br>
    <button>rediger</button><br>
    <button>slett</button><br><br><br><br>
    <button>fritt stående knapp</button>
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