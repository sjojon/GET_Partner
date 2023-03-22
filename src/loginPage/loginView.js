let invalid = '';

function loginView() {
    const loginPage = model.inputs.login;
    return /*HTML*/ `
    <div id="outer">
        <div id="header">Logg inn</div>
            <h4>
                <div>Brukernavn:<br>
                    <input type="text" 
                    value="${loginPage.username}" 
                    onchange="loginPage.username=this.value">
                </div>

                <div>Passord:<br>
                    <input type="password" 
                    value="${loginPage.password}" 
                    onchange="loginPage.password=this.value">
                </div>

                <button onclick="login()">Logg inn</button><br><br>

                <div>Har du ikke bruker?<br>
                <button onclick="register()">Registrer deg</button>
                </div>
            </h4>
            <div>${invalid}</div>
    </div>
    `;
}