// model.inputs.editStudentProfile = model.inputs.editStudentProfile;
function editStudentProfileView() {
    assignAvailableInfo();
    return /*html*/`
    <div class="pageMinusHeader-editStudent">
    <div class="box">
    <div><h3 class="pageHeading-editStudent"> Rediger studentprofil:</h3></div>
    <div class="outer-box-editStudent">
    <div class="fillDiv1">
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Navn:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${model.inputs.editStudentProfile.name}" onchange="model.inputs.editStudentProfile.name=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Bosted:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${model.inputs.editStudentProfile.address}" onchange="model.inputs.editStudentProfile.address=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Fylke:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${model.inputs.editStudentProfile.location}" onchange="model.inputs.editStudentProfile.location=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">E-post:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${model.inputs.editStudentProfile.email}" onchange="model.inputs.editStudentProfile.email=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Nytt passord:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${model.inputs.editStudentProfile.password}" onchange="model.inputs.editStudentProfile.password=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Bekreft nytt passord:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${model.inputs.editStudentProfile.repeatedPassword}" onchange="model.inputs.editStudentProfile.repeatedPassword=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Interesser:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${model.inputs.editStudentProfile.interests}" onchange="model.inputs.editStudentProfile.interests=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Hva er viktig at bedrifter vet om deg?:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${model.inputs.editStudentProfile.importantInfo}" onchange="model.inputs.editStudentProfile.importantInfo=this.value">
    </div>
    <div class="oneInputContainer">
    <label for="navn" class="info-element-editStudent">Github link:</label> 
    <input type="text" name="navn" class="input-element-editStudent" value="${model.inputs.editStudentProfile.gitHub}" onchange="model.inputs.editStudentProfile.gitHub=this.value">
    </div>
    </div>
    <div class="fillDiv2">
    <label for="kodeExpSøkefelt" class="element-editStudent">Kode erfaringer:</label> 
    <input type="text" name="kodeExpSøkefelt" class="kodeExpSøkefelt"  value="${searchBar}" oninput="chooseProgramingExperience(this)" placeHolder="søk her">
    <div class="${classToChange}">${codeSkillsLibraryShowed}</div>
    <div class="erfaringDiv">${kodeErfaring}</div>
    <p class="element-editStudent">Profilbilde:</p>
    <div class="ImageContainer">
    <img src=${model.inputs.editStudentProfile.profilePicture} alt="" class="profilePicture">
    <input type="file" id="fileInput" class="uploadInputs" onchange="changeImg(this)">
    </div>
    <p class="element-editStudent">CV:</p>
    <input type="file" id="fileInput" class="uploadInputs" onchange="uploadCv(this)" accept=".pdf">
    <button class="cvButton" onclick="openDataUrlInNewTab(this)">link til cv</button>
    </div>
       </div>
       <p class="message">${Message}</p>
       <button class="buttonStyle margin" onclick="saveChanges()">Lagre endringer</button>
       </div>
   </div>
   </div>
    `;
}

