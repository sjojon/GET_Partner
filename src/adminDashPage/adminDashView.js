//pendingCompanyAccounts, pendingProfileChange, createStudentAccount

function adminDashView() {
  return /*html*/ `
    <div id="adminDash-box-outer">
        <div id="adminDash-tittel-text">Totalt antall brukere:</div>
            <div class="adminDash-info-box">
                <div class="adminDash-box-name">Ventende firmaer: ${countPendingCompany}</div>
            </div>
            <div class="adminDash-info-box">
                <div class="adminDash-box-name">Studenter: ${countStudents}</div>
            </div>
            <div class="adminDash-info-box">
                <div class="adminDash-box-name">Firmaer: ${countCompanies}</div>
            </div>
            <div class="adminDash-info-box">    
                <div class="adminDash-box-name">Administrator: ${countAdmins}</div>
            </div>
        </div>
    </div>   
    `;
}
