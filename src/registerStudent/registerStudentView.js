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
                    Brukernavn:
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
            <button id="reg-button-rsv" onclick="saveProfile()">Registrer</button>
            <br> <div id="error-text-rsv">${errorMessage}</div>
        </div>   
    </div> 
    `}




    // function registerStudentView() {
    //     return /*html*/ `
    //       <link rel="stylesheet" href="src/registerStudent/registerStudentStyle.css" />
    //       <div class="pageMinusHeader">
    //         <div class="outer-box">
    //           <h3 class="pageHeading">Registrer student</h3>
      
    //           <label for="navn" class="info-element">Navn</label><br>
    //           <input type="text" name="navn" class="input-element" value="${registerNewStAccount.name}" onchange="registerNewStAccount.name=this.value"><br>
      
      
    //           <label for="e-post" class="info-element">E-mail</label> <br>
    //           <input type="text" name="e-post" class="input-element" value="${registerNewStAccount.email}" onchange="registerNewStAccount.email=this.value"><br>
      
      
    //           <label for="passord" class="info-element">Passord</label> <br>
    //           <input type=${switchInputType} name="passord" class="input-element passord" value="${registerNewStAccount.password}" onchange="registerNewStAccount.password=this.value"><br>
      
      
    //           <label for="gjenta-passord" class="info-element">Gjenta passord</label> <br>
    //           <input type=${switchInputType} name="gjenta-passord" class="input-element passord" value="${registerNewStAccount.repeatedPassword}" onchange="registerNewStAccount.repeatedPassword=this.value"><br>
      
      
    //           <div class="showPasswordDiv">
    //             <input type="checkbox" name="show-password" class="checkBox" onclick="showPassword(this)">
    //             <label for="show-password" class="info-element labelCheckBox">Vis passord</label> 
    //           </div>
      
              
    //           <button onclick="saveProfile()" class="profileButton">Opprett profil</button>
    //         </div>
    //       </div>
    //     `;
    //   }
      