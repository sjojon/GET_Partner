function login() {
    if (model.inputs.login.username === '') {
        if (model.inputs.login.password === '') {
            console.log('ja');
        }
        else {
            console.log('Ugyldig brukernavn eller passord');
        }
    }
}
function register() {
}
