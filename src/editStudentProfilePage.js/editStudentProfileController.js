const editStudentProfileInputs= model.inputs.editStudentProfile
let filSomBleValgt=editStudentProfileInputs.cv
let kodeErfaring=""
let imgVariable;
let programingExpVariable=""
let currentStudentAccount=accountsToBeChecked.filter(ac=>ac.id==model.data.currentUser.id)
let codeSkillsLibrary;
let classToChange="hidden"
let codeSkillsLibraryShowed;
let editStudentProfileInputsArray=[]
let searchBar=""
let hidingtool;
let erfaringarray=[]

function programingExperienceToChooseFrom(){
    return model.data.techXp.map(xp=>xp.name)
}
function chooseProgramingExperience(input){
    editStudentProfileInputs.codeExp=input.value
    searchBar=input.value
    codeSkillsLibraryShowed=""
    if (searchBar=="") {
        return hideProgExp()
    } else{
    // event.preventDefault("scroll")
    if (editStudentProfileInputs.codeExp!=="") {
        console.log("i get in here")
      codeSkillsLibrary= model.data.techXp.map(xp=>xp.name).filter(xp=>xp.toLowerCase().includes(editStudentProfileInputs.codeExp.toLowerCase()))
    } else{
        codeSkillsLibrary=model.data.techXp.map(xp=>xp.name)
    }
    
    for (const el in codeSkillsLibrary) {
        // let div= document.createElement("button")  
        codeSkillsLibraryShowed+=/*html*/`
        <button class="codeSkillCLass" onclick="saveSkill(this)">${codeSkillsLibrary[el]}</button>
        `
    }
    classToChange= "shown"
    
    updateView()
}
}

function hideProgExp(){
    classToChange="hidden"
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
        editStudentProfileInputs.interests=currentStudentAccount[0].interests
        editStudentProfileInputs.importantInfo=currentStudentAccount[0].importantInfo
        editStudentProfileInputs.gitHub=currentStudentAccount[0].gitHub
        editStudentProfileInputs.codeExpList= kodeErfaring
        editStudentProfileInputs.cv=currentStudentAccount[0].cv
        editStudentProfileInputs.profilePicture=currentStudentAccount[0].pic
       

    }
    editStudentProfileInputsArray.push("1")
   
}
function saveSkill(skill){
    hidingtool=/*html*/`
    <p class="chosenSkills" onclick="deleteSkill(this)">${skill.innerHTML} <i class="material-icons" style="font-size:14px">delete</i></p>
    `
    kodeErfaring+=hidingtool
    erfaringarray.push(hidingtool)
updateView()
}
function deleteSkill(choice){
    // console.log(erfaringarray)
   let buffer= erfaringarray.filter(el=>!el.includes(choice.innerHTML))
   erfaringarray=buffer
//    erfaringarray.slice(indexOf(choice))
//    console.log(erfaringarray)
kodeErfaring=/*html*/`
${buffer.map(el=>el)}
`
updateView()
}


