function acceptCompany(id){
    let company = findPendingCompanyById(id)
}

function declineCompany(id){

}

function findPendingCompanyById(id){
    for(let company of model.data.accounts.pendingCompanies){
        if(company.id === id)
        return company
    }
    return null
}