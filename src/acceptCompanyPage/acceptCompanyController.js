function acceptCompany(id) {
    const company = findAccountById(id);
    company.userType = 'company';
    updateAdminCounter();
    updateView();
}

function declineCompany(id) {
    const company = findAccountById(id);
    const accounts = model.data.accounts;
    model.data.accounts = accounts.filter(obj => obj.id !== company.id);
    updateAdminCounter();
    updateView();
}
