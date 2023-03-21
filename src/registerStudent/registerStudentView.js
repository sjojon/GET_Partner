const registerNewStAccount= model.inputs.registerStudent
let switchInputType="password"
function registerStudentView(){
    return /*html*/`
    <div class="pageMinusHeader">
    <div class="outer-box">
       <h3 class="pageHeading"> Registrer student</h3>
       <label for="navn" class="info-element">Navn</label> 
       <input type="text" name="navn" class="input-element" value="${registerNewStAccount.name}" onchange="registerNewStAccount.name=this.value">
       <label for="e-post" class="info-element">E-mail</label> 
       <input type="text" name="e-post" class="input-element" value="${registerNewStAccount.email}" onchange="registerNewStAccount.email=this.value">
       <label for="passord" class="info-element">Passord</label> 
       <input type=${switchInputType} name="passord" class="input-element passord" value="${registerNewStAccount.password}" onchange="registerNewStAccount.password=this.value">
       <label for="gjenta-passord" class="info-element">Gjenta passord</label> 
       <input type=${switchInputType} name="gjenta-passord" class="input-element passord" value="${registerNewStAccount.repeatedPassword}" onchange="registerNewStAccount.repeatedPassword=this.value">
       <div class="showPasswordDiv">
       <input type="checkbox" name="show-password" class="input-element checkBox" onclick="showPassword(this)">
       <label for="show-password" class="info-element labelCheckBox">Vis passord</label> 
       </div>
       <button onclick="saveProfile()" class="profileButton">Opprett profil</button>
       
       

   </div>
   </div>
    `

}