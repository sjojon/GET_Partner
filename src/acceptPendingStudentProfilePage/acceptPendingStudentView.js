const pendingStudentAccounts = model.data.pendingProfileChanges.accounts;
let student;

function acceptPendingStudentView() {
    // console.log(acceptStudent);
    return /*HTML*/ `
    <div class="outerFrame">
        <div class="inner">
            ${isStudentProfilePendingListEmpty()}
        </div>
    </div>
    `;
}

function isStudentProfilePendingListEmpty() {
    // const acceptStudent = pendingStudentAccounts;
    if (pendingStudentAccounts.length === 0) {
        return /*HTML*/ `
        <div>
        Ingen oppdateringer tilgjengelig!
        </div>
        `;
    }
    else {
        return pendingStudentList();
    }
}

function pendingStudentList() {
    html = '';
    // const acceptStudent = pendingStudentAccounts;
    for (let i = 0; i < pendingStudentAccounts.length; i++) {
        student = pendingStudentAccounts[i];
        html += /*html*/ `
        <div class="studentEditDiv">
            <div class ="studentDiv">
                ${student.name} 
            </div>
            <div class="studentButton">
                <button onclick="handleProfileInfo(student.id)">Se endring</button>
            </div>
        </div>
        `;
    }
    return html;
}

function showChangedProfile() {
    let x = findPendingProfileAccountById(model.data.currentPendingUser.id);
    let techList = findTechsXpByAccountId(parseInt(model.data.currentPendingUser.id));

    return /*HTML*/ `
    <div class="student-outer">
        <div class="student-inner">
            <div class="student-info">
                <div class="student-name">${x.name}</div>
                <img class="student-pic" src="${x.pic}">
                <div class="student-address">
                    Addresse: 
                    <div class="student-address-inner">${x.address}</div>
                </div>
                <div class="student-email">
                    Email: 
                    <div class="student-email-inner">${x.email}</div>
                </div>
                <div class="student-tech-xp">
                    Kode erfaring: 
                    <div class="student-tech-xp-inner">${createTechListHtml(techList)}</div>
                </div>
                <div class="student-xp">
                    Informasjon: 
                    <div class="student-xp-inner">${x.importantInfo}</div>
                </div>
                <div class="student-interests">
                    Interesser: 
                    <div class="student-interests-inner">${x.interests}</div>
                </div>
            </div>
            <div class="student-map">
                <div id="map">
                </div>
            </div>
            <div class="student-links">
                
                <a class="github-link" href="${x.gitHub}" target="_new">
                    <i class="bi bi-github"></i> 
                    Github
                </a>
                <a class="cv-link" href="${x.cv}" target="_new">
                    CV
                </a>
            </div>
        </div>
        <div>
        <button onclick="acceptProfileChange(model.data.currentPendingUser.id)">Godkjenn</button>
        <button onclick="backToAdminPage()">Avslå</button>
        </div>
    </div>
    `;
}