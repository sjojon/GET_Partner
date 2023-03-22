function acceptCompanyView() {
    return /*html*/`
    <div id="outer">
        <div id="inner">
            ${emptyListOrNot()}
        </div>
    </div>    
    `}

function emptyListOrNot(){
    if(Object.keys(model.data.accounts.pendingCompanies).length > 0){        
        return createCompanyList()
    } else {
        return /*html*/`
        Ingen bedrifter som venter.
        `
        
    }
}

function createCompanyList() {
    let html = '';
    let companies = model.data.accounts.pendingCompanies

    for (let i = 0; i < companies.length; i++) {
        const company = companies[i];
        html += /*html*/ `
            <div class="company-box">
                <div class="company-name">
                    ${company.name}
                </div>
                <div class="company-nr">
                    ${company.orgNr}
                </div>
                <div class="company-person">
                    ${company.contactPerson}
                </div>
                <div class="company-mail">
                    ${company.email}
                </div>
                
                    <div class="accept-button">
                        <button class="button" onclick="acceptCompany(${company.id})">Godta</button>
                    </div>
                    <div class="decline-button">
                        <button class="button" onclick="declineCompany(${company.id})">Avvis</button>
                    </div>
                
            </div>
            `
    }
    return html
}
