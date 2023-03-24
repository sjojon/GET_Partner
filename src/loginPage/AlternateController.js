let allUsernames = []                                     //Let på de man vil endre
const accounts = model.data.accounts.allAccounts          //Const på de man aldri vil endre
const loginUsername = model.inputs.login.username
const loginPassword = model.inputs.login.password

//Henter alle navn på accounts in i allUsername()
function getAllNames() {
    allUsernames = []
    for (let key in accounts) {
        allUsernames.push(accounts[key].name)
    }
}


function login() {

    getAllNames()
    if (allUsernames.includes(loginUsername)) {
        if (findAccountPasswordByName(loginUsername) === loginPassword) {
            model.app.isLoggedIn = true
            model.data.currentUser.id = findAccountIdByName(loginUsername)
            //Trenger en funksjom som finner ut hvilken page de skal til
        }
        else {
            alert("Brukernavn eller passord er feil, sjekk at du har skrevet begge riktig og prøv på nytt.")
            return
        }
    }
    else {
        alert("Brukernavn eller passord er feil, sjekk at du har skrevet begge riktig og prøv på nytt.")
        return
    }
    updateView()
    model.inputs.login.username = ""
    model.inputs.login.password = ""
}