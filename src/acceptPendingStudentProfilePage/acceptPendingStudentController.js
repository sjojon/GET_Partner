const pending = model.data.pendingProfileChanges.accounts;
const accounts = model.data.accounts;
const techXpRelations = model.data.techXpRelations;
const newTechXpRelations = model.data.pendingProfileChanges.techXpRelations;
let x;

function handleProfileInfo(id) {
    model.data.currentPendingUser.id = id;
    model.app.page = 'showChangedProfile';
    updateView();
}

function acceptProfileChange(id) {
    for (let i = 0; i < accounts.length; i++) {
        if (id === accounts[i].id) {
            accounts.splice(i, 1);
        }
    }

    for (let i = 0; i <= pending.length; i++) {
        if (id === pending[i].id) {
            pending[i].userType = 'student';
            accounts.push(pending[i]);
            pending.splice(i, 1);
        }
    }

    // techXpRelations
    let filtered = techXpRelations.filter(x => x.accountId === id);
    filtered.forEach(x => {
        let index = techXpRelations.indexOf(x);
        techXpRelations.splice(index, 1);
    });

    let newFilter = newTechXpRelations.filter(x => x.accountId === id);
    newFilter.forEach(x => {
        let newIndex = newTechXpRelations.indexOf(x);
        techXpRelations.push(x);
        newTechXpRelations.splice(newIndex, 1);
    });

    techXpRelations.sort((a, b) => {
        return a.accountId - b.accountId;
    });

    updateAdminCounter();
    model.app.page = 'acceptPendingProfilePage';
    updateView();
}

function backToAdminPage() {
    model.app.page = 'adminDash';
    updateView();
}