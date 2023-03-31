const editStudentProfileInputs= model.inputs.editStudentProfile
let filSomBleValgt=editStudentProfileInputs.cv
let kodeErfaring= "tomt"
let imgVariable;
let programingExpVariable=""
let currentStudentAccount=accountsToBeChecked.filter(ac=>ac.id==model.data.currentUser.id)
let codeSkillsLibrary;
let classToChange="hidden"
let codeSkillsLibraryShowed;
let editStudentProfileInputsArray=[]

function programingExperienceToChooseFrom(){
    return model.data.techXp.map(xp=>xp.name)
}
function chooseProgramingExperience(input,event){
    event.preventDefault();
    editStudentProfileInputs.codeExp=input.value
    codeSkillsLibraryShowed=""
    if (editStudentProfileInputs.codeExp!=="") {
        console.log("i get in here")
      codeSkillsLibrary= model.data.techXp.map(xp=>xp.name).filter(xp=>xp.toLowerCase().includes(editStudentProfileInputs.codeExp.toLowerCase()))
    } else{
        codeSkillsLibrary=model.data.techXp.map(xp=>xp.name)
    }
    
    for (const el in codeSkillsLibrary) {
        // let div= document.createElement("button")
        
        codeSkillsLibraryShowed+=/*html*/`
    
        <button class="codeSkillCLass">${codeSkillsLibrary[el]} X</button>
        

        `
        
        
    }
    classToChange= "shown"
    
    updateView()
}


// function fetchRightAccount(){
//   currentStudentAccount=
   
// }
function assignAvailableInfo(){
    if (currentStudentAccount&& editStudentProfileInputsArray.length==0) {
        editStudentProfileInputs.name = currentStudentAccount[0].name
        editStudentProfileInputs.location=currentStudentAccount[0].address
        editStudentProfileInputs.email=currentStudentAccount[0].email
        editStudentProfileInputs.password=currentStudentAccount[0].password
        editStudentProfileInputs.repeatedPassword=currentStudentAccount[0].password
        editStudentProfileInputs.interests=currentStudentAccount.interests
        editStudentProfileInputs.importantInfo=currentStudentAccount[0].importantInfo
        editStudentProfileInputs.gitHub=currentStudentAccount[0].gitHub
        editStudentProfileInputs.codeExpList= kodeErfaring
        editStudentProfileInputs.cv=currentStudentAccount[0].cv
        editStudentProfileInputs.profilePicture=currentStudentAccount[0].pic
       

    }
    editStudentProfileInputsArray.push("1")
   
}


