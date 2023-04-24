//Hvilken header som skal vises
function updateHeader() {
  if (!model.app.isLoggedIn) {
    return homeHeader();
  } else {
    // finner account med riktig id
    const currentUser = model.data.accounts.find(user => user.id === model.data.currentUser.id);
    // Check the userType of the logged-in user
    if (currentUser.userType === 'admin') {
      return adminHeader();
    } else if (currentUser.userType === 'company') {
      return companyHeader();
    } else if (currentUser.userType === 'student' || 'pendingStudentProfile') {
      return studentHeader();
    }
  }
}

//home/not logged in header
function homeHeader() {
  return /*html*/ `
    <header>
    <div id="header-box">
      <nav>
        <div id="header-logo">
          <img src="images/GETPartner_logo_header.png"/>
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
          <img src="images/GETPartner_logo_header.png"/>
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
          <img src="images/GETPartner_logo_header.png""/>
        </div>
        <ul>
        <button class="list-button" onclick="window.location.href='https://getacademy.no'">GET Academy</button>
        <li class="dropdown">
        <a>Studenter</a>
        <ul class="dropdown-menu">
          <button class="list-button-dropdown" onclick="goToStudentSearchFilter()">Filter søk</button>
          <button class="list-button-dropdown" onclick="goToStudentSewarchMap()">Kart søk</button>
        </ul>
      </li>
      <button class="list-button" onclick="logout()">Logg ut</button>
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
          <img src="images/GETPartner_logo_header.png"/>
        </div>
        <ul>
        <button class="list-button" onclick="goToAdminDash()">Admin</button>
        <button class="list-button" onclick="logout()">Logg ut</button>
        </ul>
      </nav>
    </div>
  </header>
    `;
}