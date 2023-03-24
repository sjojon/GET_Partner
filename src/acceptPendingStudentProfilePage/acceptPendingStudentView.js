const pendingStudentAccounts = model.data.accounts.allAccounts.filter(obj => obj.userType === 'pendingStudentProfile');

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
    const acceptStudent = pendingStudentAccounts;
    if (acceptStudent.length === 0) {
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
    const acceptStudent = pendingStudentAccounts;
    for (let i = 0; i < acceptStudent.length; i++) {
        const student = acceptStudent[i];
        html += /*html*/ `
        <div>
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

function showProfileChange(id) {

}