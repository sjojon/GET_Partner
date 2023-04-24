let profileInfo;
// let editButton="Rediger profil"
// let disableingTool=""
function studentProfileView(){
  profileInfo=model.data.accounts.filter(ac=>ac.id==model.data.currentUser.id)
  getSavedTech()
    return /*html*/`
    <div class="pageMinusHeader-editStudent">
    <div class="boxProfile">
    <div><h3 class="pageHeading-editStudent"> Studentprofil:</h3></div>
    <div class="outer-box-editStudent">
    <div class="fillDiv1">
    <div class="oneInputContainerProfile">
    <label for="navn" class="info-element-editStudent infoTitle">Navn:</label> 
    <p  class="ptag">${profileInfo[0].name}<p>
    </div>
    <div class="oneInputContainerProfile">
    <label for="navn" class="info-element-editStudent infoTitle">Bosted:</label> 
    <p  class="ptag">${profileInfo[0].address}</p>
    </div>
    <div class="oneInputContainerProfile">
    <label for="navn" class="info-element-editStudent infoTitle">Fylke:</label> 
    <p  class="ptag">${profileInfo[0].location}</p>
    </div>
    <div class="oneInputContainerProfile">
    <label for="navn" class="info-element-editStudent infoTitle">E-post:</label> 
    <p  class="ptag">${profileInfo[0].email}</p>
    </div>
    <div class="oneInputContainerProfile">
    <label for="navn" class="info-element-editStudent infoTitle">Nytt passord:</label> 
    <p  class="ptag">${profileInfo[0].password}</p>
    </div>
    <div class="oneInputContainerProfile">
    <label for="navn" class="info-element-editStudent infoTitle">Interesser:</label> 
    <p  class="ptag">${profileInfo[0].interests}</p>
    </div>
    <div class="oneInputContainerProfile">
    <label for="navn" class="info-element-editStudent infoTitle">Hva er viktig at bedrifter vet om deg?:</label> 
    <p  class="ptag">${profileInfo[0].importantInfo}</p>
    </div>
    <div class="oneInputContainerProfile">
    <label for="navn" class="info-element-editStudent infoTitle github">Github link:</label> 
    <button class="ptaggithub"  onclick="openDataUrlInNewTabgithub(profileInfo[0].gitHub)">${profileInfo[0].gitHub}</button>
    </div>
    </div>
    <div class="fillDiv2">
    <label for="kodeExpSøkefelt" class="element-editStudent">Kode erfaringer:</label> 
    <div class="kodeErfaringProfile">
    <ol> ${techExpInProfile}</ol>
   </div>
    <p class="element-editStudent">Profilbilde:</p>
    <div class="ImageContainer">
    <img src=${profileInfo[0].pic} alt="" class="profilePicture">
    </div>
    <p class="element-editStudent">CV:</p>
    <button class="cvButton" onclick="openDataUrlInNewTabProfile(profileInfo[0].cv)">link til cv</button>
    </div>
       </div>
       ${showOrHideEditButton()}
       </div>
   </div>
   </div>
    `
} 


    
