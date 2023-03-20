let errorMessage = ''

function registerCompanyView() {
    return /*html*/`
    <div class="outer">
        <div>
            <div class="text-box">
                <div>Firmanavn:</div>
            </div>
            <input 
            type="text"
            value="${model.inputs.registerCompany.name}"
            onchange="model.inputs.registerCompany.name=this.value"
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
            value="${model.inputs.registerCompany.orgNr}"
            onchange="model.inputs.registerCompany.orgNr=this.value"
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
            value="${model.inputs.registerCompany.contactPerson}"
            onchange="model.inputs.registerCompany.contactPerson=this.value"
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
            value="${model.inputs.registerCompany.email}"
            onchange="model.inputs.registerCompany.email=this.value"
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
            value="${model.inputs.registerCompany.password}"
            onchange="model.inputs.registerCompany.password=this.value"
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
            value="${model.inputs.registerCompany.repeatedPassword}"
            onchange="model.inputs.registerCompany.repeatedPassword=this.value"
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
    <div class="outer">
        <div>
            Takk for registreringen! <br> Du får en epost når vi har bekreftet informasjonen
        </div>
    </div>
    `

}