let errorMessage = ''

function registerCompanyView() {
    const regCompany = model.inputs.registerCompany
    return /*html*/`
    <div id="outer">
        <div>
            <div class="text-box">
                <div>Firmanavn:</div>
            </div>
            <input 
            type="text"
            value="${regCompany.name}"
            onchange="regCompany.name=this.value"
            >
        </div>
        <div>
            <div class="text-box">
                <div>
                    Organisasjonsnr:
                </div>
            </div>
            <input 
            type="text"
            value="${regCompany.orgNr}"
            onchange="regCompany.orgNr=this.value"
            >
        </div>
        <div>
            <div class="text-box">
                <div>
                    Kontaktperson:
                </div>
            </div>
            <input 
            type="text"
            value="${regCompany.contactPerson}"
            onchange="regCompany.contactPerson=this.value"
            >
        </div>
        <div>
            <div class="text-box">
                <div>
                    Epost:
                </div>
            </div>
            <input 
            type="text"
            value="${regCompany.email}"
            onchange="regCompany.email=this.value"
            >
        </div>
        <div>
            <div class="text-box">
                <div>
                    Passord:
                </div>
            </div>
            <input 
            type="password"
            value="${regCompany.password}"
            onchange="regCompany.password=this.value"
            id="passwordInput"
            >
        </div>
        <div>
            <div class="text-box">
                <div>
                    Gjenta passord:
                </div>
            </div>
            <input 
            type="password"
            value="${regCompany.repeatedPassword}"
            onchange="regCompany.repeatedPassword=this.value"
            id="passwordInput2"
            >
        </div>
        <div>
            <div id="checkbox-box">
                <input 
                    type="checkbox"
                    id="checkbox" 
                    onclick="showPassword()"> Vis passord
                </div>        
            </div>
        <div>
            <button id="reg-button" onclick="registerCompanyButton()">Registrer</button>
            <br> ${errorMessage} 
        </div>   
    </div> 
    `}


function registerCompanyCompletedView() {
    return /*html*/`
    <div>
        Takk for registreringen, du vil få en epost når vi har fått bekreftet informasjonen. <br>
        God dag videre fra oss i GetPartner!
    </div>
    `

}