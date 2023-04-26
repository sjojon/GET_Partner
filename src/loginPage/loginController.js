let allUsernames=[]
let allPasswords=[]
// let accountsToBeChecked= model.data.accounts
let AccountExcists=true
let passwordIsCorrect=false
let usernameIndex;
function getAllNamesAndPasswords(){
    allUsernames=[]
    allPasswords=[]
    for (const key in model.data.accounts) {
        allUsernames.push(model.data.accounts[key].name.toLowerCase()) 
       allPasswords.push(model.data.accounts[key].password)
    }
    usernameIndex= allUsernames.indexOf(model.inputs.login.username.toLowerCase())
}
function checkIfAccountExcists(){
    getAllNamesAndPasswords()
    if((!allUsernames.includes(model.inputs.login.username.toLowerCase()))) {
       invalid="Brukernavn er ikke registrert hos oss."
       updateView()
        console.log(allPasswords )
        console.log(allUsernames)
        return AccountExcists=false

    } else return true
    
}
function checkIfPasswordIsWrong(){
 

if (checkIfAccountExcists()) {
     if (!allPasswords.includes(model.inputs.login.password)) {
        console.log("førsteIf")
        invalid="Passord er feil, Prøv på nytt"
        updateView()
    } else if (allPasswords[usernameIndex]!==model.inputs.login.password) {
        console.log("andreIf")
       invalid="Passord er feil, Prøv på nytt"
       updateView()
        }
      else{ return true}
    }
}
function login() {
    model.data.accounts= model.data.accounts
    
   if (checkIfPasswordIsWrong()) {
    for (const key in model.data.accounts) {
        if ( model.data.accounts[key].name.toLowerCase().includes(model.inputs.login.username.toLowerCase())
        &&model.data.accounts[key].password.includes(model.inputs.login.password)) {
            switch(model.data.accounts[key].userType){
                case "admin":
                    model.app.page = "adminDash"
                    model.app.isLoggedIn = true
                    model.data.currentUser.id=model.data.accounts[key].id
                    break;
                case "student":
                case "pendingStudentProfile":
                    model.app.page="studentProfile"
                    model.app.isLoggedIn=true
                    model.data.currentUser.id=model.data.accounts[key].id
                    break;  
                case "company":
                    model.app.page = "companyLandingPage"
                    model.app.isLoggedIn = true
                    model.data.currentUser.id=model.data.accounts[key].id
                    break;
                case "pendingCompany":
                   invalid="Kontoen er enda ikke godkjent, du hører fra oss når kontoen er godkjent." 
                   updateView()
                    break;
            }
            // model.data.currentUser.id=model.data.accounts[key].id
            //endre den delen slik at id til pending company ikke lagres i currentUser.
        } 
         
        }
       
        updateView()
        clearLoginInputs()
       
   }
   
}

function clearLoginInputs(){
    if (model.app.page!=="login") {
        model.inputs.login.username=""
        model.inputs.login.password=""
    }
}

function register() {
}

function showLoginPagePassword(input) {

    if (input.checked == true && passwordInput == "password") {

        passwordInput = "text"


    } else if (input.checked == true && passwordInput == "text") {
        console.log("this if is login ")
        passwordInput = "password"




    }
    updateView()
    console.log(model.app.page)
}

function register(){
    model.app.page= "registerCompany"
    updateView()
}



