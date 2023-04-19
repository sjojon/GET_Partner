let allInputsWrittenBoolean=false
let bothPasswordsMatchBoolean=false
let registerInputValues=[]
let newMadeAccount= model.data.accounts
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
    alert("Du må fylle inn alle felt")
   } 
   else{
    if (!registerNewStAccount.email.includes("@")){
        alert("Du må skrive riktig e-mail")
    } else{
        return allInputsWrittenBoolean=true
    }
    
   } 
  
}
function bothPasswordsMatch(){
    if (registerNewStAccount.password==registerNewStAccount.repeatedPassword) {
        return bothPasswordsMatchBoolean=true
    } else{alert("Gjentatt passord samsvarer ikke med passord.")}
    
}
/*save new profile*/
function saveProfile(){
    allInputsWritten()
    bothPasswordsMatch()
    if (bothPasswordsMatchBoolean==true&&allInputsWrittenBoolean==true) {
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
        clearInputFiles()
        
    }
}

function clearInputFiles(){
    Object.keys(registerNewStAccount).forEach(function(key){ registerNewStAccount[key] = "" });
        bothPasswordsMatchBoolean=false
        allInputsWrittenBoolean=false

      updateView() 
    }
    
