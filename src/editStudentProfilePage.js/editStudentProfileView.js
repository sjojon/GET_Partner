function editStudentProfileView(){
    assignAvailableInfo()
    return /*html*/`
    <div class="pageMinusHeader-editStudent">
    <div class="box">
    <div><h3 class="pageHeading-editStudent"> Rediger studentprofil:</h3></div>
    <div class="outer-box-editStudent">
    <div class="fillDiv1">
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Navn:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${editStudentProfileInputs.name}" onchange="editStudentProfileInputs.name=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Bosted:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${editStudentProfileInputs.address}" onchange="editStudentProfileInputs.address=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Fylke:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${editStudentProfileInputs.location}" onchange="editStudentProfileInputs.location=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">E-post:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${editStudentProfileInputs.email}" onchange="editStudentProfileInputs.email=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Nytt passord:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${editStudentProfileInputs.password}" onchange="editStudentProfileInputs.password=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Bekreft nytt passord:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${editStudentProfileInputs.repeatedPassword}" onchange="editStudentProfileInputs.repeatedPassword=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Interesser:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${editStudentProfileInputs.interests}" onchange="editStudentProfileInputs.interests=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Hva er viktig at bedrifter vet om deg?:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${editStudentProfileInputs.importantInfo}" onchange="editStudentProfileInputs.importantInfo=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Github link:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${editStudentProfileInputs.gitHub}" onchange="editStudentProfileInputs.gitHub=this.value">
    </div>
    </div>
    <div class="fillDiv2">
    <label for="kodeExpSøkefelt" class="element-editStudent">Kode erfaringer:</label> 
    <input type="text" name="kodeExpSøkefelt" class="kodeExpSøkefelt"  value="${searchBar}" oninput="chooseProgramingExperience(this)" placeHolder="søk her">
    <div class="${classToChange}">${codeSkillsLibraryShowed}</div>
    <div class="erfaringDiv">${kodeErfaring}</div>
    <p class="element-editStudent">Profilbilde:</p>
    <div class="ImageContainer">
    <img src=${editStudentProfileInputs.profilePicture} alt="" class="profilePicture">
    <button onclick="changeImg()" class="buttonStyle">Last opp nytt bilde</button>
    </div>
    <p class="element-editStudent">CV:</p>
    <p>${editStudentProfileInputs.cv}</p>
    <button onclick="uploadCv()" class="buttonStyle">Last opp fil</button>
    </div>
       </div>
       <button class="buttonStyle margin" onclick="saveChanges()">Lagre endringer</button>
       </div>
   </div>
   </div>
    `
} 

