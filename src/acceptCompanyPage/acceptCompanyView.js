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
                    Org Nr: ${company.orgNr}
                </div>
                <div class="company-person">
                    Kontaktperson: ${company.contactPerson}
                </div>
                <div class="company-mail">
                    Email: ${company.email}
                </div>
                <div class="buttons">
                    <div class="accept-buttons">
                        <button onclick="acceptCompany(${company.id})">Godta</button>
                    </div>
                    <div class="decline-buttons">
                        <button onclick="declineCompany(${company.id})">Avvis</button>
                    </div>
                </div>
            </div>
            `
    }
    return html
}
