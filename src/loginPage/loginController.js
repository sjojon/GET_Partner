let allUsernames=[]
let allPasswords=[]
let accountsToBeChecked= model.data.accounts.allAccounts
let AccountExcists=true
let passwordIsCorrect=false
let usernameIndex;
function getAllNamesAndPasswords(){
    allUsernames=[]
    allPasswords=[]
    for (const key in accountsToBeChecked) {
        allUsernames.push(accountsToBeChecked[key].name) 
       allPasswords.push(accountsToBeChecked[key].password)
    }
    usernameIndex= allUsernames.indexOf(model.inputs.login.username)
}
function checkIfAccountExcists(){
    getAllNamesAndPasswords()
    if((!allUsernames.includes(loginPage.username))) {
        alert("Brukernavn er ikke registrert hos oss.")
        console.log(allPasswords )
        console.log(allUsernames)
        return AccountExcists=false

    } else return AccountExcists=true
    
}
function checkIfPasswordIsWrong(){
 
checkIfAccountExcists()
if (AccountExcists==true) {
     if (!allPasswords.includes(loginPage.password)) {
         alert("Passord er feil, Prøv på nytt")
    } else if (allPasswords[usernameIndex]!==loginPage.password) {
        alert("Passord er feil, Prøv på nytt")
        }
      else{ return passwordIsCorrect=true}
    }
}
function login() {
    checkIfPasswordIsWrong()
   if (passwordIsCorrect==true) {
    for (const key in accountsToBeChecked) {
        if ( accountsToBeChecked[key].name.includes(loginPage.username)
        &&accountsToBeChecked[key].password.includes(loginPage.password)) {
            switch(accountsToBeChecked[key].userType){
                case "admin":
                    model.app.page="adminDash"
                    model.app.isLoggedIn=true
                    break;
                case "student":
                case "pendingStudentProfile":
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
        loginPage.username=""
        loginPage.password=""
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

