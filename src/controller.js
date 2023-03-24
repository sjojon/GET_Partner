// Finner account med id som parameter
function findAccountById(id) {
  for (let account of model.data.accounts.allAccounts) {
    if (account.id === id)
      return account
  }
  return null
}


// Finner en ledig id eller lager en ny om det trengs i data.accounts.allAccounts
function findAvailableAccountId() {
  const allAccounts = model.data.accounts.allAccounts
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
  for (let account of model.data.accounts.allAccounts) {
    if (account.name === name) {
      return account.password
    }
  }
  return null
}

// Finner id til accounten når man bruker brukernavnet som parameter
// Funker ikke riktig hvis det er lov å ha duplicate names på accounts
function findAccountIdByName(name)  {
  for (let account of model.data.accounts.allAccounts) {
    if (account.name === name) {
      return account.id
    }
  }
  return null
}