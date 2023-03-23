let allUsernames=[]
let allPasswords=[]
let accountsToBeChecked= model.data.accounts.allAccounts
let AccountExcists=true
function getAllNamesAndPasswords(){
    allUsernames=[]
    allPasswords=[]
    for (const key in accountsToBeChecked) {
        allUsernames.push(accountsToBeChecked[key].name) 
       allPasswords.push(accountsToBeChecked[key].password)
    }
    if(!allUsernames.includes(model.inputs.login.username)||!allPasswords.includes(model.inputs.login.password)) {
        alert("Brukernavn eller passord er feil, sjekk at du har skrevet begge riktig og prøv på nytt.")
        console.log(allPasswords )
        console.log(allUsernames)
        return AccountExcists=false

    } else return AccountExcists=true
}
function login() {
    getAllNamesAndPasswords()
    // if (model.inputs.login.username === '') {
    //     if (model.inputs.login.password === '') {
    //         console.log('ja');
    //     }
    //     else {
    //         console.log('Ugyldig brukernavn eller passord');
    //     }
    // }
   if (AccountExcists==true) {
    for (const key in accountsToBeChecked) {
        if ( accountsToBeChecked[key].name.includes(model.inputs.login.username)&&accountsToBeChecked[key].password.includes(model.inputs.login.password)) {
            switch(accountsToBeChecked[key].userType){
                case "admin":
                    model.app.page="adminDash"
                    model.app.isLoggedIn=true
                    break;
                case "student":
                case "pendingStudent":
                    model.app.page="studentProfile"
                    model.app.isLoggedIn=true
                    break;  
                case "company":
                    model.app.page="browseStudentSearch"
                    model.app.isLoggedIn=true
                    break;
                 case "pendingCompany":
                   alert("Konto ikke godkjent ennå, Du får høre fra oss så fort som mulig")
                    break;
            }
           
        } 
         
        }
        
        updateView()
        model.inputs.login.username=""
        model.inputs.login.password=""
   }
    
   
}
function register() {
}

function showLoginPagePassword(input){
    
    if (input.checked==true&&passwordInput=="password") {
        
        passwordInput="text"
       
        
    } else if  (input.checked==true&&passwordInput=="text"){
        console.log("this if is login ")
        passwordInput="password"
       
        
       
        
    } 
    updateView()
    console.log(model.app.page)
}

