const pending = model.data.pendingProfileChanges;
const accounts = model.data.accounts;

function handleProfileInfo(id) {
    model.data.currentPendingUser.id = id;
    model.app.page = 'showChangedProfile';
    updateView();
}

function acceptProfileChange(id) {
    for (let i = 0; i <= pending.length; i++) {
        if (id === pending[i].id) {

        }
    }
}