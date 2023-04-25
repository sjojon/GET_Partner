let invalid = '';
let passwordInput = "password";
let loginPage = model.inputs.login;

function loginView() {
    return /*HTML*/ `
    <div id="outer-login">
        <div id="header">Logg inn</div>
            <div class="text-box">
                <div class="text-over-box">
                Brukernavn:
                </div>
            </div>
                <input type="text" value="${loginPage.username}" oninput="loginPage.username=this.value" onkeydown = " if (event.keyCode == 13) document.getElementById('passwordField').focus()">

            <div class="text-box">
                <div class="text-over-box">
                Passord:
                </div>
            </div>
                    <input id="passwordField" type="${passwordInput}" value="${loginPage.password}" oninput="loginPage.password=this.value" onkeydown = " if (event.keyCode == 13) login()">

            <div id="checkbox-box">
            <div class="text-over-box">
                <input type="checkbox" id="checkbox" onclick="showLoginPagePassword(this)">Vis passord
            </div>
            </div>  

            <div>${invalid}</div>
            <button id="margin-button" onclick="login()">Logg inn</button>
            
            
            <div>Har du en bedrift uten bruker?</div>
            <button id="margin-button" onclick="register()">Registrer deg</button>
        
    </div>
    `;
}