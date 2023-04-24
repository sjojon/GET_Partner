//logger bruker ut
function logout() {
  model.app.page = 'home';
  model.app.isLoggedIn = false;
  model.data.currentUser.id = '';
  updateHeader();
  updateView();
}

// Finner account med id som parameter
function findAccountById(id) {
  for (let account of model.data.accounts) {
    if (account.id === id)
      return account;
  }
  return null;
}

function findPendingProfileAccountById(id) {
  for (let account of model.data.pendingProfileChanges) {
    if (account.id === id)
      return account;
  }
  return null;
}


// Finner en ledig id eller lager en ny om det trengs i data.accounts.allAccounts
function findAvailableAccountId() {
  const allAccounts = model.data.accounts;
  allAccounts.sort((a, b) => a.id - b.id);
  let id = 1;
  for (let thisAccount of allAccounts) {

    if (thisAccount.id == id) {
      if (id !== allAccounts.length) {
        id++;
      } else {
        id++;
        return id;
      }
    }
    else {
      return id;
    }
  }
}


// Finner passordet til accounten når man bruker brukernavnet som parameter
// Funker ikke riktig hvis det er lov å ha duplicate names på accounts
function findAccountPasswordByName(name) {
  for (let account of model.data.accounts) {
    if (account.name === name) {
      return account.password;
    }
  }
  return null;
}

// Finner id til accounten når man bruker brukernavnet som parameter
// Funker ikke riktig hvis det er lov å ha duplicate names på accounts
function findAccountIdByName(name) {
  for (let account of model.data.accounts) {
    if (account.name === name) {
      return account.id;
    }
  }
  return null;
}

// Finner userType når man gir account id som parameter
function findUserTypeById(id) {
  for (let account of model.data.accounts) {
    if (account.id === id) {
      return account.userType;
    }
  }
  return null;
}

// Sender brukere til riktig homePage basert på account id
function whereIsHome(id) {
  let userType = findUserTypeById(id);
  switch (userType) {
    case 'admin':
      model.app.page = 'adminDash';
      break;
    case 'student':
      model.app.page = 'studentProfile';
      break;
    case 'company':
      model.app.page = '';
      break;
  }
}

//Lager en liste med alle techXp en account har basert på accountId
function findTechsXpByAccountId(id) {
  const relations = model.data.techXpRelations;
  const techs = model.data.techXp;
  let techIdList = [];

  //Lager en liste med alle tech id'ene til accounten
  for (let relation of relations) {
    if (relation.accountId === id) {
      techIdList.push(relation.technologyId);
    }
  }

  //Lager en liste med alle tech navnene
  let techList = [];
  for (let searchId of techIdList) {
    for (let techXp of techs) {
      if (searchId == techXp.id) {
        techList.push(techXp.name);
      }
    }
  }
  return techList;
}

//Lager en liste med alle studenter
function createStudentArray() {
  return model.data.accounts.filter(
    obj =>
      obj.userType == 'student' ||
      obj.userType == 'pendingStudentProfile'
  );
}

//Teller antall studenter generelt, og per fylke
function countTotalStudents() {
  model.data.totalStudents = 0;
  for (i in model.data.countiesStudentCount) {
    model.data.countiesStudentCount[i] = 0;
  }

  for (i in model.data.accounts) {
    if (model.data.accounts[i].userType == 'student') { //Det var bare en '=' og ikke '==' her, så det ødela koden min lolol.
      model.data.totalStudents++;
      model.data.countiesStudentCount[model.data.accounts[i].location]++;
    }
  }
}

//goTo funksjoner
function goToAcceptPendingProfilePage() {
  model.app.page = 'acceptPendingProfilePage';
  updateView();
}

function goToAcceptCompany() {
  model.app.page = 'acceptCompany';
  updateView();
}

function goToRegisterStudent() {
  model.app.page = 'registerStudent';
  updateView();
}

function goToRegisterCompany() {
  model.app.page = 'registerCompany';
  updateView();
}

function goToRegisterCompanyCompleted() {
  model.app.page = 'registerCompanyCompleted';
  updateView();
}

function goToBrowseStudentSearch() {
  model.app.page = 'browseStudentSearch';
  updateView();
}

function goToBrowseStudent() {
  model.app.page = 'browseStudent';
  updateView();
}

function goToEditStudentProfile() {
  model.app.page = 'editStudentProfile';
  updateView();
}

function goToStudentProfile() {
  model.app.page = 'studentProfile';
  updateView();
}

function goToAdminDash() {
  model.app.page = 'adminDash';
  updateView();
}