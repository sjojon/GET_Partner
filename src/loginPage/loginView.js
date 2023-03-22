let invalid = '';

function loginView() {
    const loginPage = model.inputs.login;
    return /*HTML*/ `
    <div id="outer">
        <div id="header">Logg inn</div>
            <div class="text-box">
                <div class="text-over-box">
                Brukernavn:
                </div>
            </div>
                <input type="text" 
                value="${loginPage.username}" 
                onchange="loginPage.username=this.value">

            <div class="text-box">
                <div class="text-over-box">
                Passord:
                </div>
            </div>
                    <input type="password" 
                    value="${loginPage.password}" 
                    onchange="loginPage.password=this.value">

            <div id="checkbox-box">
            <div class="text-over-box">
                <input 
                    type="checkbox"
                    id="checkbox" 
                    onclick="showPassword()">Vis passord
            </div>
            </div>  

                <button onclick="login()">Logg inn</button><br><br>

                <div>Har du ikke bruker?<br>
                <button onclick="register()">Registrer deg</button>
                </div>
            
            <div>${invalid}</div>
    </div>
    `;
}