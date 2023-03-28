// Finner account med id som parameter
function findAccountById(id) {
  for (let account of model.data.accounts) {
    if (account.id === id)
      return account
  }
  return null
}


// Finner en ledig id eller lager en ny om det trengs i data.accounts.allAccounts
// Funker bare hvis det er sortert liste etter id
/////////////////////////////////////////////////////////////////////////
/////////////////////////////FIX SOMETIME////////////////////////////////
/////////////////////////////////////////////////////////////////////////
function findAvailableAccountId() {
  const allAccounts = model.data.accounts
  let id = 1
  for (let thisAccount of allAccounts) {

    if (thisAccount.id == id) {
      if (id !== allAccounts.length) {
        id++
      } else {
        id++
        return id
      }
    }
    else {
      return id
    }
  }
}


// Finner passordet til accounten når man bruker brukernavnet som parameter
// Funker ikke riktig hvis det er lov å ha duplicate names på accounts
function findAccountPasswordByName(name) {
  for (let account of model.data.accounts) {
    if (account.name === name) {
      return account.password
    }
  }
  return null
}

// Finner id til accounten når man bruker brukernavnet som parameter
// Funker ikke riktig hvis det er lov å ha duplicate names på accounts
function findAccountIdByName(name) {
  for (let account of model.data.accounts) {
    if (account.name === name) {
      return account.id
    }
  }
  return null
}

// Finner userType når man gir account id som parameter
function findUserTypeById(id) {
  for (let account of model.data.accounts) {
    if (account.id === id) {
      return account.userType
    }
  }
  return null
}

// Sender brukere til riktig homePage basert på account id
function whereIsHome(id) {
  let userType = findUserTypeById(id)
  switch (userType) {
    case 'admin':
      model.app.page = 'adminDash'
      break
    case 'student':
      model.app.page = 'studentProfile'
      break
    case 'company':
      model.app.page = ''
      break
  }
}

//Lager en liste med alle techXp en account har basert på accountId
function findTechsXpByAccountId(id) {
  const relations = model.data.techXpRelations
  const techs = model.data.techXp
  let techIdList = []

  //Lager en liste med alle tech id'ene til accounten
  for (let relation of relations) {
      if (relation.accountId === id) {
          techIdList.push(relation.technologyId)
      }
  }

  //Lager en liste med alle tech navnene
  let techList = []
  for (let searchId of techIdList) {
      for (let techXp of techs) {
          if (searchId == techXp.id) {
              techList.push(techXp.name)
          }
      }
  }
  return techList
}