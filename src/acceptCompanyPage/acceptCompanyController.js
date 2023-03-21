function acceptCompany(id){
    const company = findPendingCompanyById(id)
    //console.log(Object.keys(model.data.accounts.allAccounts).length)
    //console.log(Object.keys(model.data.accounts.pendingCompanies).length)
    company.id = Object.keys(model.data.accounts.allAccounts).length + 1
    model.data.accounts.allAccounts.push(company)
    model.data.accounts.pendingCompanies.splice(company, 1)
    //console.log(Object.keys(model.data.accounts.allAccounts).length)
    //console.log(Object.keys(model.data.accounts.pendingCompanies).length)
    updateView()
}

function declineCompany(id){
    const company = findPendingCompanyById(id)
    model.data.accounts.pendingCompanies.splice(company, 1)
    updateView()
}
///////////////////////////UTESTET//////////////////////////////

function findPendingCompanyById(id){
    for(let company of model.data.accounts.pendingCompanies){
        if(company.id === id)
        return company
    }
    return null
}

////////////////////////////////////////////////////////////////