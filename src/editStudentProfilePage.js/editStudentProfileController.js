const editStudentProfileInputs= model.inputs.editStudentProfile
let filSomBleValgt=editStudentProfileInputs.cv
let kodeErfaring= editStudentProfileInputs.codeExpList.join(",")
let imgVariable= "images/terje_profile_pic.png"
let programingExpVariable=""
let currentStudentAccount=accountsToBeChecked.filter(ac=>ac.id==model.data.currentUser.id)


function chooseProgramingExperience(){

}

// function fetchRightAccount(){
//   currentStudentAccount=
   
// }
function assignAvailableInfo(){
    if (currentStudentAccount) {
        editStudentProfileInputs.name = currentStudentAccount[0].name
        editStudentProfileInputs.email=currentStudentAccount[0].email
        editStudentProfileInputs.password=currentStudentAccount[0].password
        editStudentProfileInputs.repeatedPassword=currentStudentAccount[0].password
        editStudentProfileInputs.importantInfo=currentStudentAccount[0].importantInfo
        editStudentProfileInputs.codeExpList=currentStudentAccount[0].codeExpList
        editStudentProfileInputs.cv=currentStudentAccount[0].cv
        editStudentProfileInputs.profilePicture=currentStudentAccount[0].pic
    }
   
}
