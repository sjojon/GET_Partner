
function adminDashView() {
    return /*html*/ `
        <div class="adminDashGrid">
          <div class="adminDash-box-outer">
            <div class="adminDash-info-box">
            <div class="adminDash-box-name">${adminDashShowAlertIconCompany()}&nbsp;&nbsp;Ventende firmaer: ${countPendingCompany}</div>
            <div class="adminDash-box-name">${adminDashShowAlertIconStudent()}&nbsp;&nbsp;Student profil endr: ${countProfileChange}</div>
            <br>
              <div class="adminDash-box-name"><i class="bi bi-building"></i>&nbsp;&nbsp;Firmaer: ${countCompanies}</div> 
              <div class="adminDash-box-name"><i class="bi bi-person"></i>&nbsp;&nbsp;Studenter: ${countStudents}</div> 
              <div class="adminDash-box-name"><i class="bi bi-person-workspace"></i>&nbsp;&nbsp;Administrator: ${countAdmins}</div>
            </div>
          </div>
          <div class="adminDash-box-outer2">
            <div id="adminDash-button-grid-box">
                <button class="adminDash-button-box" onclick="">Godk. student profil endr.</button>
                <button class="adminDash-button-box" onclick="">Godkjenne bedrifter</button>
                <button class="adminDash-button-box" onclick="">Opprett ny student bruker</button>
                <button class="adminDash-button-box" onclick="">Opprett ny bedrift konto</button>
                <button class="adminDash-button-box" onclick="">Fjern en student konto</button>
                <button class="adminDash-button-box" onclick="">Fjern en bedrift konto</button>
                <button class="adminDash-button-box" onclick="">knapp</button>
                <button class="adminDash-button-box" onclick="">knapp</button>
            </div>
          </div>
          <div class="adminDash-box-outer3">
            <div id="adminDash-button-grid-box3">
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
                <button class="adminDash-button-box" onclick=""></button>
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