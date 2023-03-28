//Hvilken header som skal vises
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
    header = 'company';
  } else if (page === 'adminDash') {
    header = 'admin';
  } else if (page === 'acceptPendingProfilePage') {
    header = 'student';
  }
  let html = '';
  switch (header) {
    case 'home':
      html = homeHeader();
      break;
    case 'student':
      html = studentHeader();
      break;
    case 'company':
      html = companyHeader();
      break;
    case 'admin':
      html = adminHeader();
      break;
  }
  return html;
}


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
          <button class="list-button" onclick="goToLogin()">Logg inn</button>
          <li class="dropdown">
            <a>Registrer bruker</a>
            <ul class="dropdown-menu">
              <button class="list-button-dropdown" onclick="tekst2()">Firma</button>
              <button class="list-button-dropdown" onclick="tekst2()">Student</button>
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
          <button class="list-button" onclick="tekst2()">Tekst 2</button>
          <li class="dropdown">
            <a>Profil</a>
            <ul class="dropdown-menu">
              <button class="list-button-dropdown" onclick="tekst2()">Se profil</button>
              <button class="list-button-dropdown" onclick="tekst2()">Endre profil</button>
              <button class="list-button-dropdown" onclick="Logout()">Logg ut</button> <!--endre til  dollar tag log inn/ logg ut-->
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
        <button class="list-button" onclick="tekst3()">Logg ut</button>
          <button class="list-button" onclick="tekst4()">Søk</button>
        </ul>
        <div id="header-contact-button">
          <button>Kontakt oss</button>
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
        <button class="list-button" onclick="window.location.href='https://getacademy.no'">GET Academy</button>
          <button class="list-button" onclick="tekst1()">Firmagodkjenning</button>
          <button class="list-button" onclick="tekst2()">Studentgodkjenning</button>
          <button class="list-button" onclick="tekst3()">Studentoversikt</button>
          <button class="list-button" onclick="tekst4()">Logg ut</button>
        </ul>
        <div id="header-contact-button">
          <button>Kontakt oss</button>
        </div>
      </nav>
    </div>
  </header>
    `;
}