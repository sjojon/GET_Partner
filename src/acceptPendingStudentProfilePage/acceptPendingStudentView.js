const pendingStudentAccounts = model.data.accounts.filter(obj => obj.userType === 'pendingStudentProfile');
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
                <button onclick="showProfileChange(student.id)">Se endring</button>
            </div>
        </div>
        `;
    }
    return html;
}

