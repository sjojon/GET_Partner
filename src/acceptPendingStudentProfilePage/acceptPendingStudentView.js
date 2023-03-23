function acceptPendingStudentView() {
    const acceptStudent = model.data.accounts.allAccounts.filter(obj => obj.userType === 'student');
    // console.log(acceptStudent);
    return /*HTML*/ `
    <div class="outer">
        <div class="inner">
        ${isStudentProfilePendingListEmpty()}
        </div>
    </div>
    `;
}

function isStudentProfilePendingListEmpty() {
    const acceptStudent = model.data.accounts.allAccounts.filter(obj => obj.userType === 'student');
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

}
