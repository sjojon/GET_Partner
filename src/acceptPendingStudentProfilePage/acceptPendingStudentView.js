function acceptPendingStudentView() {
    const acceptStudent = model.data.accounts.allAccounts.filter(obj => obj.userType === 'student');
    // console.log(acceptStudent);
    return /*HTML*/ `
    <div>
        <div>
        ${isStudentProfilePendingListEmpty()}
        </div>
    </div>
    `;
}

function isStudentProfilePendingListEmpty() {
    const acceptStudent = model.data.accounts.allAccounts.filter(obj => obj.userType === 'student');
    if (myObj.isEmpty())
}
