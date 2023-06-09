
function adminDashView() {
    return /*html*/ `
        <div class="adminDashGrid">
          <div class="adminDash-box-outer">
            <div class="adminDash-info-box">
              <div class="adminDash-box-name">${adminDashShowAlertIconCompany()}&nbsp;&nbsp;Ventende firmaer: ${countPendingCompany}</div>
              <div class="adminDash-box-name">${adminDashShowAlertIconStudent()}&nbsp;&nbsp;Student profil endr: ${countProfileChange}</div>
            </div>
          </div>
          <div class="adminDash-box-outer-2">
            <div class="adminDash-info-box-2">
              <div class="adminDash-box-name-2"><i class="bi bi-building"></i>&nbsp;&nbsp;Firmaer: ${countCompanies}</div> 
              <div class="adminDash-box-name-2"><i class="bi bi-person"></i>&nbsp;&nbsp;Studenter: ${countStudents}</div> 
              <div class="adminDash-box-name-2"><i class="bi bi-person-workspace"></i>&nbsp;&nbsp;Administratorer: ${countAdmins}</div>
            </div>
          </div>
          <div class="adminDash-box-outer2">
            <div id="adminDash-button-grid-box">
                <button class="adminDash-button-box" onclick="goToAcceptPendingProfilePage()">Godkjenne student profil endringer</button>
                <button class="adminDash-button-box" onclick="goToAcceptCompany()">Godkjenne bedrifter</button>
            </div>
          </div>
          <div class="adminDash-box-outer3">
            <div id="adminDash-button-grid-box3">
                <button class="adminDash-button-box" onclick="goToRegisterStudent()">Opprett ny student bruker</button>
                <button class="adminDash-button-box" onclick="goToRegisterCompany()">Opprett ny bedrift konto</button>
                <button class="adminDash-button-box" onclick="goToStudentBrowseSearch()">Se student profiler</button>
                <button class="adminDash-button-box" onclick="goToHome()">Se alle bedrifter (debug)</button>
                <button class="adminDash-button-box" onclick="">Fjern en student konto (debug)</button>
                <button class="adminDash-button-box" onclick="">Fjern en bedrift konto (debug)</button>
            </div>
          </div>
    </div>
    `;
}

//bytter ikon om det er pendingCompanies eller studentChanges
function adminDashShowAlertIconCompany(){
    if (countPendingCompany > 0) {
        return /*html*/ `<i style="color:red;" class="bi bi-exclamation-circle"></i>`;
    } else {
        return /*html*/ `<i class="bi bi-building-gear"></i>`;
    }
}
function adminDashShowAlertIconStudent(){
    if (countProfileChange > 0) {
        return /*html*/ `<i style="color:red;" class="bi bi-exclamation-circle"></i>`;
    } else {
        return /*html*/ `<i class="bi bi-person-gear"></i>`;
    }
}