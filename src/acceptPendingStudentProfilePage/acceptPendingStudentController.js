function handleProfileInfo(id) {
    model.data.currentPendingUser.id = id;
    model.app.page = 'showChangedProfile';
    updateView();
}