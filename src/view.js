const mainPage = document.getElementById("app");

// render whole page
updateView();

function updateView() {
  mainPage.innerHTML = `
  

  ${updateHeader()}
    ${updatePage()}
    `;

  /*if (model.data.mapsState.mapToShow) {
    countStudents();
    initMap();
    mapToShow = false;
  }*/
}


function updatePage() {
  const page = model.app.page;
  //headerVisible = 0 home/not logged in, 1 student, 2 company, 3 admin
  let html = '';
  switch (page) {
    case 'home':
      html = homeView();
      break;
    case 'login':
      html = loginView();
      break;
    case 'registerCompany':
      html = registerCompanyView();
      break;
    case 'registerCompanyCompleted':
      html = registerCompanyCompletedView();
      break;
    case 'registerStudent':
      html = registerStudentView();
      break;
    case 'acceptPendingProfilePage':
      html = acceptPendingStudentView();
      break;
    case 'studentBrowseSearch':
      html = studentBrowseSearchView();
      break;
    case 'editStudentProfile':
      html = editStudentProfileView();
      break;
    case 'studentProfile':
      html = studentProfileView();
      break;
    case 'acceptCompany':
      html = acceptCompanyView();
      break;
    case 'adminDash':
      html = adminDashView();
      break;
  }
  return html;
}