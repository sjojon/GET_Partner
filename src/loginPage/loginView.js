function loginView() {
    const loginPage = model.inputs.login;
    return /*HTML*/ `
    <div id="outer">
        <h2>Logg inn</h2>
            <h4>
                <div>Brukernavn:<br>
                    <input type="text" 
                    value="${loginPage.username}" 
                    onchange="loginPage.username=this.value">
                </div>

                <div>Passord:<br>
                    <input type="text" 
                    value="${loginPage.password}" 
                    onchange="loginPage.password=this.value">
                </div>

                <button onclick="">Logg inn</button><br><br>

                <div>Har du ikke bruker?<br>
                <button onclick="">Registrer deg</button>
                </div>
            </h4>
    </div>
    `;
}