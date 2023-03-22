function showPassword() {
    const input = document.getElementById('passwordInput')
    const input2 = document.getElementById('passwordInput2')
    if (!model.inputs.registerCompany.showPassword) {
        input.type = 'text'
        input2.type = 'text'
    } else {
        input.type = 'password'
        input2.type = 'password'
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
    const pending = model.data.accounts.pendingCompanies
    const newCompany = {}

    newCompany.id = Object.keys(pending).length + 1    
    newCompany.userType = 'company'
    newCompany.name = company.name
    newCompany.orgNr = company.orgNr
    newCompany.contactPerson = company.contactPerson
    newCompany.email = company.email
    newCompany.password = company.password

    pending.push(newCompany)
    model.app.page = 'registerCompanyCompleted'
}