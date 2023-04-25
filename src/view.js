const mainPage = document.getElementById("app");

// render whole page
updateView();

function updateView() {
  mainPage.innerHTML = `
  

  ${updateHeader()}
    ${updatePage()}
    `;

  /*if (model.data.mapsState.mapToShow) {
    //countTotalStudents();
    initMap();
    mapToShow = false;
  }*/
}


function updatePage() {
  const page = model.app.page;
  //headerVisible = 0 home/not logged in, 1 student, 2 company, 3 admin
  let html = '';
  switch (page) {
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
      countTotalStudents();
      html = studentBrowseSearchView();
      break;
    case 'companyLandingPage':
      countTotalStudents();
      html = companyLandingPageView();
      break;
    case 'studentBrowse':
      html = studentBrowseView();
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
      updateAdminCounter();
      html = adminDashView();
      break;
    case 'showChangedProfile':
      html = showChangedProfile();
      break;
  }
  return html;
}