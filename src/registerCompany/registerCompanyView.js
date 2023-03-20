let errorMessage = ''

function registerCompanyView() {
    const html = document.getElementById('app')
    html.innerHTML = /*html*/`
    <div>
    <div>Firmanavn:</div>
    <input 
    type="text"
    value="${model.inputs.registerCompany.name}"
    onchange="model.inputs.registerCompany.name=this.value">
</div>
<div>
    <div>Organisasjonsnr:</div>
    <input 
    type="text"
    value="${model.inputs.orgNr.orgNr}"
    onchange="model.inputs.registerCompany.orgNr=this.value">
</div>
<div>
    <div>Kontaktperson:</div>
    <input 
    type="text"
    value="${model.inputs.contactPerson.contactPerson}"
    onchange="model.inputs.registerCompany.contactPerson=this.value">
</div>
<div>
    <div>Epost:</div>
    <input 
    type="text"
    value="${model.inputs.registerCompany.email}"
    onchange="model.inputs.registerCompany.email=this.value">
</div>
<div>
    <div>Passord:</div>
    <input 
    type="password"
    value="${model.inputs.registerCompany.password}"
    onchange="model.inputs.registerCompany.password=this.value">
</div>
<div>
    <div>Gjenta passord:</div>
    <input 
    type="password"
    value="${model.inputs.registerCompany.repeatedPassword}"
    onchange="model.inputs.registerCompany.repeatedPassword=this.value"
    id="passwordInput">
</div>
<div>
    <input type="checkbox" onclick="showPassword()"> Vis passord
</div>
<div>
    <button onclick="registerCompanyButton()">Registrer</button>
    <br> ${errorMessage} 
</div>    
    `}


function registerCompanyCompletedView(){
    const html = document.getElementById('app')
    html.innerHTML = /*html*/`
    <div>
        Takk for registreringen, du vil få en epost når vi har fått bekreftet informasjonen deres. <br>
        God dag videre fra oss i GetAcademy!
    </div>
    `

}