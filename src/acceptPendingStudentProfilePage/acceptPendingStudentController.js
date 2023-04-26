// const model.data.accounts = model.data.accounts;
// const  model.data.accounts = model.data.accounts;
// const techXpRelations = model.data.techXpRelations;
// const newTechXpRelations = model.data.pendingProfileChanges.techXpRelations;
let x;

function handleProfileInfo(id) {
    model.data.currentPendingUser.id = id;
    model.app.page = 'showChangedProfile';
    updateView();
}

function acceptProfileChange(id) {
    for (let i = 0; i <  model.data.accounts.length; i++) {
        if (id ===  model.data.accounts[i].id) {
             model.data.accounts.splice(i, 1);
        }
    }

    for (let i = 0; i <= model.data.pendingProfileChanges.accounts.length; i++) {
        if (id === model.data.pendingProfileChanges. accounts[i].id) {
            model.data.pendingProfileChanges. accounts[i].userType = 'student';
             model.data.accounts.push(model.data.pendingProfileChanges.accounts[i]);
            model.data.pendingProfileChanges.accounts.splice(i, 1);
        }
    }

    // techXpRelations
    let filtered = model.data.techXpRelations.filter(x => x.accountId === id);
    filtered.forEach(x => {
        let index = model.data.techXpRelations.indexOf(x);
        model.data.techXpRelations.splice(index, 1);
    });

    let newFilter =model.data.pendingProfileChanges.techXpRelations.filter(x => x.accountId === id);
    newFilter.forEach(x => {
        let newIndex =model.data.pendingProfileChanges.techXpRelations.indexOf(x);
        model.data.techXpRelations.push(x);
       model.data.pendingProfileChanges.techXpRelations.splice(newIndex, 1);
    });

    model.data.techXpRelations.sort((a, b) => {
        return a.accountId - b.accountId;
    });

    model.app.page = 'acceptPendingProfilePage';
    updateView();
}

function denyProfileChanges(id) {
    for (let i = 0; i <= model.data.pendingProfileChanges.accounts.length; i++) {
        if (id === model.data.pendingProfileChanges.accounts[i].id) {
            model.data.pendingProfileChanges.accounts[i].userType = 'student';
            model.data.pendingProfileChanges.accounts.splice(i, 1);
        }
    }

    let newFilter =model.data.pendingProfileChanges.techXpRelations.filter(x => x.accountId === id);
    newFilter.forEach(x => {
        let newIndex =model.data.pendingProfileChanges.techXpRelations.indexOf(x);
       model.data.pendingProfileChanges.techXpRelations.splice(newIndex, 1);
    });

    model.app.page = 'acceptPendingProfilePage';
    updateView();
}