const editStudentProfileInputs= model.inputs.editStudentProfile
let filSomBleValgt=editStudentProfileInputs.cv
let kodeErfaring=""
let imgVariable;
let programingExpVariable=""
let currentStudentAccount=model.data.accounts.filter(ac=>ac.id==model.data.currentUser.id)
let codeSkillsLibrary;
let classToChange="hidden"
let codeSkillsLibraryShowed;
let editStudentProfileInputsArray=[]
let searchBar=""
let hidingtool;
let erfaringarray=[]
let EditPageValues;
let editCompleted=false
let image;
let pdf;
let editStudentProfileInputsRefresh=true
let Message=""
// function focusOnInput(input){
//     if (!(input.focus)) {
//         input.focus();
//       }
//       console.log("i am running")
// }

// function programingExperienceToChooseFrom(){
//     return model.data.techXp.map(xp=>xp.name)
// }
function chooseProgramingExperience(input){
    editStudentProfileInputs.codeExp=input.value
    searchBar=input.value
    codeSkillsLibraryShowed=""
    if (searchBar=="") {
        return hideProgExp()
    } else{
    // event.preventDefault("scroll")
    // console.log(codeSkillsLibrary)
    if (editStudentProfileInputs.codeExp!=="") {
      codeSkillsLibrary= model.data.techXp.map(xp=>xp.name).filter(xp=>xp.toLowerCase().includes(editStudentProfileInputs.codeExp.toLowerCase()))
      for (const key in editStudentProfileInputs.codeExpList) {
        if (editStudentProfileInputs.codeExpList.length!==-1) {
            if (codeSkillsLibrary.includes(editStudentProfileInputs.codeExpList[key])) {
                console.log(key)
                codeSkillsLibrary.splice(codeSkillsLibrary.indexOf(editStudentProfileInputs.codeExpList[key]),1)
            }
        }
        console.log(codeSkillsLibrary)
        console.log(editStudentProfileInputs.codeExpList)
      }
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
    focusOnInput()
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
    currentStudentAccount=model.data.accounts.filter(ac=>ac.id==model.data.currentUser.id)
    if (currentStudentAccount&& editStudentProfileInputsRefresh) {
        editStudentProfileInputsRefresh=false
        editStudentProfileInputs.name = currentStudentAccount[0].name
        editStudentProfileInputs.location=currentStudentAccount[0].location
        editStudentProfileInputs.address=currentStudentAccount[0].address
        editStudentProfileInputs.email=currentStudentAccount[0].email
        editStudentProfileInputs.password=currentStudentAccount[0].password
        editStudentProfileInputs.repeatedPassword=currentStudentAccount[0].password
        editStudentProfileInputs.interests=currentStudentAccount[0].interests
        editStudentProfileInputs.importantInfo=currentStudentAccount[0].importantInfo
        editStudentProfileInputs.gitHub=currentStudentAccount[0].gitHub
        // editStudentProfileInputs.codeExpList= kodeErfaring
        editStudentProfileInputs.cv=currentStudentAccount[0].cv
        editStudentProfileInputs.profilePicture=currentStudentAccount[0].pic
        // for (let i = 0; i < model.data.techXp.length; i++) {
        //  model.data.techXpRelations.filter(el=>el.accountId==model.data.currentUser.id).map(el=>model.data.techXp[i].name)
        model.data.techXpRelations.filter(el=>el.accountId==model.data.currentUser.id).map(el=>el.technologyId).forEach((el)=>
        { for (let i = 0; i < model.data.techXp.length; i++) {
            // console.log(el)
            if (el==model.data.techXp[i].id) {
                // console.log("ifworking")
            editStudentProfileInputs.codeExpList.push(model.data.techXp[i].name)
            erfaringarray.push(model.data.techXp[i].name) 
            }
        }
           
            // editStudentProfileInputs.codeExpList.push(model.data.techXp[indexOf(el.technologyId)])})
            
        // }
       
       

    })
    console.log(editStudentProfileInputs.codeExpList)
    editStudentProfileInputsArray.push("1")
    // EditPageValues=Object.values(model.inputs.editStudentProfile)
    saveSkill()

   
}}
function saveSkill(skill){
    kodeErfaring=""
    if (skill) {
     editStudentProfileInputs.codeExpList.push(skill.innerHTML)  
    //  EditPageValues.push(skill.innerHTML)
     erfaringarray.push(skill.innerHTML) 
    }
    for (const key in editStudentProfileInputs.codeExpList) {
        kodeErfaring+=/*html*/`
    <div class="chosenSkills"><p onclick="deleteSkill(this)">${editStudentProfileInputs.codeExpList[key]}</p><i class="material-icons" style="font-size:14px">delete</i></div>
    `
    }
   
    // kodeErfaring+=hidingtool
    
    // let expListArray=[]
    // if (typeof editStudentProfileInputs.codeExpList=== "string") {
    //     editStudentProfileInputs.codeExpList=[skill.innerHTML]
    // }else{  editStudentProfileInputs.codeExpList.push(skill.innerHTML)}
updateView()
}
function deleteSkill(choice){
    // console.log(erfaringarray)
    // let buffer= erfaringarray.filter(el=>el=!choice.innerHTML)
//    erfaringarray.slice(indexOf(choice))
//    console.log(erfaringarray)
// kodeErfaring.splice
// kodeErfaring=/*html*/`
// ${erfaringarray.map(el=>el)}
// `
// console.log(choice.innerHTML)
// console.log(buffer)
// console.log(erfaringarray.indexOf(choice.innerHTML))
editStudentProfileInputs["codeExpList"].splice(editStudentProfileInputs.codeExpList.indexOf(choice.innerHTML),1)
//    erfaringarray=buffer
// erfaringarray.splice(erfaringarray.indexOf(choice),1)
saveSkill()
// updateView()
}

function allInputsWrittenEditPage(){
    EditPageValues = Object.values(model.inputs.editStudentProfile)
    if (EditPageValues.indexOf(editStudentProfileInputs.codeExp)!==-1) {
        EditPageValues.splice(Object.values(model.inputs.editStudentProfile).indexOf(editStudentProfileInputs.codeExp),1)
       
    }
    console.log(EditPageValues)
    if (EditPageValues.includes("")) {
        Message="*Du må fylle inn alle felt"
    } 
    else{
     if (!editStudentProfileInputs.email.includes("@")){
        Message="*Du må skrive riktig e-mail"
     } else if(passwordsMtchEditPage()){
         return true
     }
     
    } 
    updateView()
}
    let techIds;
    let v;
function getTechXpRelations(){
     techIds=[]
    //  model.data.techXpRelations=model.data.techXpRelations.filter(el=>el.accountId!==model.data.currentUser.id)
    
    for (let i = 0; i < editStudentProfileInputs.codeExpList.length; i++) { 
       techIds.push((model.data.techXp.filter(el=>el.name==(editStudentProfileInputs.codeExpList[i]))).map(el=>el.id));
       techIds=[].concat.apply([],techIds);
       model.data.pendingProfileChanges.techXpRelations.push({ accountId: model.data.currentUser.id, technologyId: parseInt(techIds[i] )})
     
       
    
        // console.log(key)
        
          
           
    }
    // v.
    
    console.log(techIds)
    console.log( model.data.techXpRelations)
    
    

}


function focusOnInput(){
    let input= document.querySelector(".kodeExpSøkefelt")
     console.log(input)
   input.focus()
   input.addEventListener("keydown", function(){
    this.setSelectionRange(this.value.indexOf(this.length),this.value.indexOf(this.length))
   })
//    input.setSelectionRange(2,input.length);
}
function passwordsMtchEditPage(){
    if (editStudentProfileInputs.password!==editStudentProfileInputs.repeatedPassword) {
        Message="* Begge passord må være like"
        updateView()
    } else return true
}



function saveChanges(){
   if (allInputsWrittenEditPage()) {
    model.data.pendingProfileChanges.accounts.push(  { id: model.data.currentUser.id, name: editStudentProfileInputs.name,
         password:editStudentProfileInputs.password, userType: 'pendingStudentProfile',
     email: editStudentProfileInputs.email, gitHub:editStudentProfileInputs.gitHub,
      pic:editStudentProfileInputs.profilePicture,
       cv: editStudentProfileInputs.cv, counter: 45, importantInfo: editStudentProfileInputs.importantInfo, 
       interests: editStudentProfileInputs.interests, address: editStudentProfileInputs.address,
        location:editStudentProfileInputs.location })
//    currentStudentAccount[0].name=editStudentProfileInputs.name
//    currentStudentAccount[0].location=editStudentProfileInputs.location
//    currentStudentAccount[0].address=editStudentProfileInputs.address
//    currentStudentAccount[0].email= editStudentProfileInputs.email
//    currentStudentAccount[0].password= editStudentProfileInputs.password
//    currentStudentAccount[0].interests= editStudentProfileInputs.interests
//    currentStudentAccount[0].importantInfo=editStudentProfileInputs.importantInfo
//    currentStudentAccount[0].gitHub=editStudentProfileInputs.gitHub
//    currentStudentAccount[0].cv= editStudentProfileInputs.cv
//    currentStudentAccount[0].pic=editStudentProfileInputs.profilePicture
   getTechXpRelations()
   alert("Endringene er lagret og må godkjennes av GET IT før de blir innført")
//    editButton="venter på godkjenning"
//    disableingTool="disabled"
//    currentStudentAccount[0].userType="pendingStudentProfile"
   model.app.page="studentProfile"
   
 updateView()
 clearInputs()

   }
    
   
}
function clearInputs(){
        editStudentProfileInputs.name = ""
        editStudentProfileInputs.location= ""
        editStudentProfileInputs.address= ""
        editStudentProfileInputs.email= ""
        editStudentProfileInputs.password= ""
        editStudentProfileInputs.repeatedPassword= ""
        editStudentProfileInputs.interests= ""
        editStudentProfileInputs.importantInfo= ""
        editStudentProfileInputs.gitHub= ""
        editStudentProfileInputs.cv= ""
        editStudentProfileInputs.profilePicture= ""
        editStudentProfileInputs.codeExpList=[]
        editStudentProfileInputs.codeExp=""
        editStudentProfileInputsArray=[]
        editStudentProfileInputsRefresh=true
}

function changeImg(fileInput) {
   let file = fileInput.files[0];
    let reader = new FileReader();

    reader.addEventListener('load', () => {
        file = reader.result;
        editStudentProfileInputs.profilePicture=`${file}`
        console.log(reader.result); // Logger stringen til bildet i consollen
        editStudentProfileInputs.profilePicture= reader.result
        updateView()
    });

    reader.readAsDataURL(file);
  
}

// document.addEventListener('DOMContentLoaded', uploadCv(cvFile), false);

function uploadCv(cvFile) {
    // cvFile.addEventListener('change', ()=>{
    //     const file = cvFile.files[0];

    //     const reader = new FileReader();
    //     reader.onload = function(event) {
    //       const base64String = event.target.result.split(',')[1];
    //       pdf= base64String
    //       console.log(base64String); // log the Base64 string to the console
    //       console.log(pdf)
    //     };
    //     reader.readAsDataURL(file);
    //     // updateView()
    // });
    // let file = cvFile.files[0];
    // let reader = new FileReader();
    // reader.addEventListener('load', () => {
    //     file = reader.result;
    //    let replaceFile= file.split((`,`),[0])
    //    let sixFourString= file.replace(replaceFile+`,`,"")
    //    pdf=sixFourString
    //    console.log(sixFourString)
        // console.log(reader.result); // Logger stringen til bildet i consollen
        // updateView()
    let file = cvFile.files[0];
    let reader = new FileReader();

    reader.addEventListener('load', () => {
        file = reader.result;
        pdf=`${file}`
        console.log(reader.result); // Logger stringen til bildet i consollen
        editStudentProfileInputs.cv=reader.result
        updateView()
    });

    reader.readAsDataURL(file);
    };
    
    function openDataUrlInNewTab() {
        const dataUrl =editStudentProfileInputs.cv
        const htmlContent = /*html*/`
          <html>
            <head>
              <title>Data URL Viewer</title>
              <style>
              body, html {
                margin: 0;
                padding: 0;
              }
              object, iframe {
                display: block;
                width: 100%;
                height: 100%;
                border: none;
                margin: 0;
                padding: 0;
              }
            </style>
            </head>
            <body>
              <object data="${dataUrl}" type="application/pdf">
                // <embed src="${dataUrl}" type="application/pdf" />
              </object>
            </body>
          </html>
        `;
      
        const newTab = window.open();
        newTab.document.open();
        newTab.document.write(htmlContent);
        newTab.document.close();
        
      }
      
      
      
      
      
      
      