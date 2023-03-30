//Hvilken header som skal vises
function updateHeader() {
  if (model.data.currentUser.id === '') {
    return homeHeader();
  } else {

    // finner account med riktig id
    const currentUser = model.data.accounts.find(user => user.id === model.data.currentUser.id);
    // Check the userType of the logged-in user
    if (currentUser.userType === 'admin') {
      return adminHeader();
    } else if (currentUser.userType === 'company') {
      return companyHeader();
    } else if (currentUser.userType === 'student'){
      return studentHeader();
    }
  }
}


/* //Hvilken header som skal vises
function updateHeader() {
  let header = model.app.header;
  const page = model.app.page;
  //home,student,company,admin
  if (page === 'home') {
    header = 'home';
  } else if (page === 'login') {
    header = 'home';
  } else if (page === 'registerChoice') {
    header = 'home';
  } else if (page === 'registerCompany') {
    header = 'home';
  } else if (page === 'registerCompanyCompleted') {
    header = 'company';
  } else if (page === 'registerStudent') {
    header = 'home';
  } else if (page === 'browseStudentSearch') {
    header = 'company';
  } else if (page === 'browseStudent') {
    header = 'company';
  } else if (page === 'editStudentProfile') {
    header = 'student';
  } else if (page === 'studentProfile') {
    header = 'student';
  } else if (page === 'acceptCompany') {
    header = 'admin';
  } else if (page === 'adminDash') {
    header = 'admin';
  } else if (page === 'acceptPendingProfilePage') {
    header = 'student';
  }

  let html = '';
  if (header === 'home') {
    html = homeHeader();
  } else if (header === 'student') {
    html = studentHeader();
  } else if (header === 'company') {
    html = companyHeader();
  } else if (header === 'admin') {
    html = adminHeader();
  }
  
  return html;
  
}
 */

//home/not logged in header
function homeHeader() {
  return /*html*/ `
    <header>
    <div id="header-box">
      <nav>
        <div id="header-logo">
          <img src="images/GETPartner_logo_header.png" onclick="goToHome()"/>
        </div>
        <ul>
        <button class="list-button" onclick="window.location.href='https://getacademy.no'">GET Academy</button>
          <button class="list-button" onclick="goToRegister()">Registrer</button>
          <button class="list-button" onclick="goToLogin()">Logg inn</button>
        </ul>
        <div id="header-contact-button">
        <button onclick="window.location.href='https://getacademy.no/kontakt'">Kontakt oss</button>
        </div>
      </nav>
    </div>
  </header>
    `;
}


//student header
function studentHeader() {
  return /*html*/ `
    <header>
    <div id="header-box">
      <nav>
        <div id="header-logo">
          <img src="images/GETPartner_logo_header.png" onclick="goToHome()"/>
        </div>
        <ul>
        <button class="list-button" onclick="window.location.href='https://getacademy.no'">GET Academy</button>
          <li class="dropdown">
            <a>Profil</a>
            <ul class="dropdown-menu">
              <button class="list-button-dropdown" onclick="goToSeeProfileStudent()">Se profil</button>
              <button class="list-button-dropdown" onclick="goToEditProfileStudent()">Endre profil</button>
              <button class="list-button-dropdown" onclick="logout()">Logg ut</button>
            </ul>
          </li>
          <button class="list-button" onclick="tekst3()">Søk</button>
        </ul>
        <div id="header-contact-button">
          <button onclick="window.location.href='https://getacademy.no/kontakt'">Kontakt oss</button>
        </div>
      </nav>
    </div>
  </header>
    `;
}


//company header
function companyHeader() {
  return /*html*/ `
    <header>
    <div id="header-box">
      <nav>
        <div id="header-logo">
          <img src="images/GETPartner_logo_header.png" onclick="goToHome()"/>
        </div>
        <ul>
        <button class="list-button" onclick="window.location.href='https://getacademy.no'">GET Academy</button>
        <li class="dropdown">
        <a>Studenter</a>
        <ul class="dropdown-menu">
          <button class="list-button-dropdown" onclick="tekst1()">Filter søk</button>
          <button class="list-button-dropdown" onclick="tekst2()">Kart søk</button>
        </ul>
      </li>
      <button class="list-button-dropdown" onclick="logout()">Logg ut</button>
          <button class="list-button" onclick="tekst4()">Søk</button>
        </ul>
        <div id="header-contact-button">
        <button onclick="window.location.href='https://getacademy.no/kontakt'">Kontakt oss</button>
        </div>
      </nav>
    </div>
  </header>
    `;
}


//admin header
function adminHeader() {
  return /*html*/ `
    <header>
    <div id="header-box">
      <nav>
        <div id="header-logo">
          <img src="images/GETPartner_logo_header.png" onclick="goToHome()"/>
        </div>
        <ul>
        <button class="list-button" onclick="logout()">Logg ut</button>
        </ul>
      </nav>
    </div>
  </header>
    `;
}