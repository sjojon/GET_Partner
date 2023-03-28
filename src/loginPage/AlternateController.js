const accounts = model.data.accounts.allAccounts         
let allUsernames = []                                     


function login() {
    getAllNames()
    let loginUsername = model.inputs.login.username
    let loginPassword = model.inputs.login.password

    if (allUsernames.includes(loginUsername)) {
        if (findAccountPasswordByName(loginUsername) === loginPassword) {
            let userId = findAccountIdByName(loginUsername)
            console.log('user id ' + model.data.currentUser.id)
            console.log('is logged in ' + model.app.isLoggedIn)
            model.app.isLoggedIn = true
            model.data.currentUser.id = userId
            whereIsHome(userId)
        }
        else {
            invalid = 'Brukernavn eller passord er feil, sjekk at du har skrevet begge riktig og prøv på nytt'
            updateView()
            return
        }
    }
    else {
        invalid = 'Brukernavn eller passord er feil, sjekk at du har skrevet begge riktig og prøv på nytt'
        updateView()
        return
    }
    updateView()
    model.inputs.login.username = ""
    model.inputs.login.password = ""
}


//Henter alle navn på accounts in i allUsername()
function getAllNames() {
    allUsernames = []
    for (let key in accounts) {
        allUsernames.push(accounts[key].name)
    }
}


function showLoginPagePassword(input) {
    if (input.checked == true && passwordInput == "password") {
        passwordInput = "text"
    } else if (input.checked == true && passwordInput == "text") {
        passwordInput = "password"
    }
    updateView()
}

