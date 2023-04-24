const registerNewStAccount = model.inputs.registerStudent;
let switchInputType = "password";


function registerStudentView() {
    return /*html*/`

    <div class="outer-rsv">
        <div id="top-margin-rsv">
            <h3 id="header-text-rsv">
                Registrer student
            </h3>
            <div class="text-box-rsv">
                <div class="text-over-box-rsv">
                    Navn:
                </div>
            </div>
            <input 
                type="text"
                value="${registerNewStAccount.name}"
                onchange="registerNewStAccount.name=this.value">
        </div>
        <div>
            <div class="text-box-rsv">
                <div class="text-over-box-rsv">
                    E-mail:
                </div>
            </div>
            <input 
                type="text"
                value="${registerNewStAccount.email}"
                onchange="registerNewStAccount.email=this.value">
        </div>
        <div>
            <div class="text-box-rsv">
                <div class="text-over-box-rsv">
                Passord:
                </div>
            </div>
            <input 
                type=${switchInputType}
                value="${registerNewStAccount.password}"
                onchange="registerNewStAccount.password=this.value">
        </div>
        <div>
            <div class="text-box-rsv">
                <div class="text-over-box-rsv">
                Gjenta passord:
                </div>
            </div>
            <input 
                type=${switchInputType}
                value="${registerNewStAccount.repeatedPassword}"
                onchange="registerNewStAccount.repeatedPassword=this.value">
        </div>
        <div>
            <div id="checkbox-box-rsv">
                <input 
                    id="checkbox-rsv"
                    type="checkbox"
                    oninput="showPassword(this)">
                Vis passord             
            </div>        
        </div>
        <div id="bottom-margin-rsv">
            <button id="reg-button-rsv" onclick="registerCompanyButton()">Registrer</button>
            <br> <div id="error-text-rsv">${errorMessage}</div>
        </div>   
    </div> 
    `}