let errorMessage = ''

function registerCompanyView() {
    return /*html*/`

    <div class="outer">
        <div id="top-margin">
            <h3 id="header-text">
                Registrer ny bedriftskonto
            </h3>
            <div class="text-box">
                <div class="text-over-box">
                    Firmanavn:
                </div>
            </div>
            <input 
            type="text"
            value="${model.inputs.registerCompany.name}"
            onchange="model.inputs.registerCompany.name=this.value"
            >
        </div>
        <div>
            <div class="text-box">
                <div class="text-over-box">
                    Organisasjonsnr:
                </div>
            </div>
            <input 
            type="text"
            value="${model.inputs.registerCompany.orgNr}"
            onchange="model.inputs.registerCompany.orgNr=this.value"
            >
        </div>
        <div>
            <div class="text-box">
                <div class="text-over-box">
                    Kontaktperson:
                </div>
            </div>
            <input 
            type="text"
            value="${model.inputs.registerCompany.contactPerson}"
            onchange="model.inputs.registerCompany.contactPerson=this.value"
            >
        </div>
        <div>
            <div class="text-box">
                <div class="text-over-box">
                    Epost:
                </div>
            </div>
            <input 
            type="text"
            value="${model.inputs.registerCompany.email}"
            onchange="model.inputs.registerCompany.email=this.value"
            >
        </div>
        <div>
            <div class="text-box">
                <div class="text-over-box">
                    Passord:
                </div>
            </div>
            <input 
            type="password"
            value="${model.inputs.registerCompany.password}"
            onchange="model.inputs.registerCompany.password=this.value"
            id="passwordInput"
            >
        </div>
        <div>
            <div class="text-box">
                <div class="text-over-box">
                    Gjenta passord:
                </div>
            </div>
            <input 
            type="password"
            value="${model.inputs.registerCompany.repeatedPassword}"
            onchange="model.inputs.registerCompany.repeatedPassword=this.value"
            id="passwordInput2"
            >
        </div>
        <div>
            <div id="checkbox-box">
            <input 
            id="checkbox"
            type="checkbox"
            oninput="model.inputs.registerCompany.showPassword = this.checked, showRegCompanyPassword()" 
            >Vis passord             
            </div>        
        </div>
        <div id="bottom-margin">
            <button id="reg-button" onclick="registerCompanyButton()">Registrer</button>
            <br> <div id="error-text">${errorMessage}</div>
        </div>   
    </div> 
    `}


function registerCompanyCompletedView() {
    return /*html*/`
    <div class="outer">
        <div>
            Takk for registreringen! <br> Du får en epost når vi har bekreftet informasjonen
        </div>
        <div id="completed-button">
            <button onclick="model.app.page='login', updateView()">OnLick</button>
        </div>
    </div>
    `

}