const pending = model.data.pendingProfileChanges.accounts;
const accounts = model.data.accounts;
let x;

function handleProfileInfo(id) {
    model.data.currentPendingUser.id = id;
    model.app.page = 'showChangedProfile';
    updateView();
}

function acceptProfileChange(id) {
    for (let i = 0; i <= accounts.length; i++) {
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


    model.app.page = 'acceptPendingProfilePage';
    updateView();
}