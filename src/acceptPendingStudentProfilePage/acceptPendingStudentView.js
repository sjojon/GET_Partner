function acceptPendingStudentView() {
    const acceptStudent = model.data.accounts.allAccounts.filter(obj => obj.userType === 'student');
    return /*HTML*/ `
    console.log(acceptStudent);
    
    `;
}

'\n    console.log(acceptStudent);\n    \n    ';