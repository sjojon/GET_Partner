//finner antall accounts
let countStudents = 0;
let countCompanies = 0;
let countPendingCompany = 0;
let countAdmins = 0;
let countProfileChange = 0;

for (let account of model.data.accounts) {
  if (account.userType === 'student') {
    countStudents++;
  } else if (account.userType === 'company') {
    countCompanies++;
  } else if (account.userType === 'pendingCompany') {
    countPendingCompany++;
  } else if (account.userType === 'admin') {
    countAdmins++;
  }
}

for (let account of model.data.pendingProfileChanges.accounts) {
    if (account.userType === 'pendingStudentProfile') {
    countProfileChange++;
  }
}