let allInputsWrittenBoolean=false
let bothPasswordsMatchBoolean=false
let registerInputValues=[]
let newMadeAccount= model.data.accounts
// let errorMessage;
function showPassword(input){
    
        if (input.checked==true&&switchInputType=="password") {
            
            switchInputType="text"
           
            
        } else if  (input.checked==true&&switchInputType=="text"){
            switchInputType="password"
           
            
           
            
        } 
        updateView()
}
function allInputsWritten(){
   registerInputValues= Object.values(registerNewStAccount)
   if (registerInputValues.includes("")) {
    errorMessage="Du må fylle inn alle felt"
    updateView()
   } 
   else{
    if (!registerNewStAccount.email.includes("@")){
        errorMessage="Du må skrive riktig e-mail"
        updateView()
    } else{
        return true
    }
    
   } 
  
}
function bothPasswordsMatch(){
    if (registerNewStAccount.password==registerNewStAccount.repeatedPassword) {
        return true
    } else{errorMessage="Gjentatt passord samsvarer ikke med passord."
    updateView()
}
    
}
/*save new profile*/
function saveProfile(){
    
    
    if (allInputsWritten()&&bothPasswordsMatch()) {
        let newStudentAccountId= findAvailableAccountId()
        newMadeAccount.push({
            id:newStudentAccountId,
            name:registerNewStAccount.name,
            password:registerNewStAccount.password, 
            userType:"student", 
            email:registerNewStAccount.email, 
            gitHub: '', pic: '', cv: '', 
            counter: 0,importantInfo: '',
             interests: '', address: '', location:''})
       alert("Profil opprettet. Brukernavn: "+ registerNewStAccount.name +" Passord: " + registerNewStAccount.password)
        updateView()
        clearInputFiles()
        
    }
}

function clearInputFiles(){
    Object.keys(registerNewStAccount).forEach(function(key){ registerNewStAccount[key] = "" });
        // bothPasswordsMatchBoolean=false
        // allInputsWrittenBoolean=false
            errorMessage=""
       

      updateView() 
    }
    
