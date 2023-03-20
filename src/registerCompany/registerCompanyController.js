function showPassword() {
    const input = document.getElementById('passwordInput')
    if (input.type === 'password') {
        input.type = 'text'
    } else {
        input.type = 'password'
    }
}

function registerCompanyButton() {
    const company = model.inputs.registerCompany
    if (
        company.name == '' ||
        company.orgNr == '' ||
        company.contactPerson == '' ||
        company.email == '' ||
        company.password == '' ||
        company.repeatedPassword == ''
    ) {
        errorMessage = 'Alle felt må fylles ut!'
        updateView()
}

    else if (company.orgNr.length !== 9){
        errorMessage = 'Orgasnisjonsnr er ikke riktig lengde!'
        updateView()
    }

    else if (company.password !== company.repeatedPassword){
        errorMessage = 'Passordet er ikke likt i begge feltene!'
        updateView()
    }

    else {
        errorMessage = ''
        createCompany()     
        updateView()
    }
}

function createCompany(){
    const company = model.inputs.registerCompany
    const newCompany = {}

    newCompany.id = Object.keys(model.data.accounts.allAccounts).length + 1 // Husk å sette denne linjen i funksjonen som aksepterer firma, så man får riktig id
    
    newCompany.userType = 'company'
    newCompany.name = company.name
    newCompany.orgNr = company.orgNr
    newCompany.contactPerson = company.contactPerson
    newCompany.email = company.email
    newCompany.password = company.password

    model.data.accounts.pendingCompanies.push(newCompany)
    model.app.page = 'registerCompanyCompleted'
}