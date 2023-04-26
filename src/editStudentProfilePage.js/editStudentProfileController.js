// let model.data.inputs.ed = model.inputs.editStudentProfile;
let filSomBleValgt = model.inputs.editStudentProfile.cv;
let kodeErfaring = "";
let imgVariable;
let programingExpVariable = "";
let currentStudentAccount = model.data.accounts.filter(ac => ac.id == model.data.currentUser.id);
let codeSkillsLibrary;
let classToChange = "hidden";
let codeSkillsLibraryShowed;
let editStudentProfileInputsArray = [];
let searchBar = "";
let hidingtool;
let erfaringarray = [];
let EditPageValues;
let editCompleted = false;
let image;
let pdf;
let editStudentProfileInputsRefresh = true;
let Message = "";
// function focusOnInput(input){
//     if (!(input.focus)) {
//         input.focus();
//       }
//       console.log("i am running")
// }

// function programingExperienceToChooseFrom(){
//     return model.data.techXp.map(xp=>xp.name)
// }
function chooseProgramingExperience(input) {
    model.inputs.editStudentProfile.codeExp = input.value;
    searchBar = input.value;
    codeSkillsLibraryShowed = "";
    if (searchBar == "") {
        return hideProgExp();
    } else {
        // event.preventDefault("scroll")
        // console.log(codeSkillsLibrary)
        if (model.inputs.editStudentProfile.codeExp !== "") {
            codeSkillsLibrary = model.data.techXp.map(xp => xp.name).filter(xp => xp.toLowerCase().includes(model.inputs.editStudentProfile.codeExp.toLowerCase()));
            for (const key in model.inputs.editStudentProfile.codeExpList) {
                if (model.inputs.editStudentProfile.codeExpList.length !== -1) {
                    if (codeSkillsLibrary.includes(model.inputs.editStudentProfile.codeExpList[key])) {
                        console.log(key);
                        codeSkillsLibrary.splice(codeSkillsLibrary.indexOf(model.inputs.editStudentProfile.codeExpList[key]), 1);
                    }
                }
                console.log(codeSkillsLibrary);
                console.log(model.inputs.editStudentProfile.codeExpList);
            }
        } else {
            codeSkillsLibrary = model.data.techXp.map(xp => xp.name);
        }

        for (const el in codeSkillsLibrary) {
            // let div= document.createElement("button")  
            codeSkillsLibraryShowed +=/*html*/`
        <button class="codeSkillCLass" onclick="saveSkill(this)">${codeSkillsLibrary[el]}</button>
        `;
        }
        classToChange = "shown";


        updateView();
        focusOnInput();
    }
}

function hideProgExp() {
    classToChange = "hidden";
    updateView();
}
// function fetchRightAccount(){
//   currentStudentAccount=

// }
function assignAvailableInfo() {
    currentStudentAccount = model.data.accounts.filter(ac => ac.id == model.data.currentUser.id);
    if (currentStudentAccount && editStudentProfileInputsRefresh) {
        editStudentProfileInputsRefresh = false;
        model.inputs.editStudentProfile.name = currentStudentAccount[0].name;
        model.inputs.editStudentProfile.location = currentStudentAccount[0].location;
        model.inputs.editStudentProfile.address = currentStudentAccount[0].address;
        model.inputs.editStudentProfile.email = currentStudentAccount[0].email;
        model.inputs.editStudentProfile.password = currentStudentAccount[0].password;
        model.inputs.editStudentProfile.repeatedPassword = currentStudentAccount[0].password;
        model.inputs.editStudentProfile.interests = currentStudentAccount[0].interests;
        model.inputs.editStudentProfile.importantInfo = currentStudentAccount[0].importantInfo;
        model.inputs.editStudentProfile.gitHub = currentStudentAccount[0].gitHub;
        // model.inputs.editStudentProfile.codeExpList= kodeErfaring
        model.inputs.editStudentProfile.cv = currentStudentAccount[0].cv;
        model.inputs.editStudentProfile.profilePicture = currentStudentAccount[0].pic;
        // for (let i = 0; i < model.data.techXp.length; i++) {
        //  model.data.techXpRelations.filter(el=>el.accountId==model.data.currentUser.id).map(el=>model.data.techXp[i].name)
        model.data.techXpRelations.filter(el => el.accountId == model.data.currentUser.id).map(el => el.technologyId).forEach((el) => {
            for (let i = 0; i < model.data.techXp.length; i++) {
                // console.log(el)
                if (el == model.data.techXp[i].id) {
                    // console.log("ifworking")
                    model.inputs.editStudentProfile.codeExpList.push(model.data.techXp[i].name);
                    erfaringarray.push(model.data.techXp[i].name);
                }
            }

            // editStudentProfileInputs.codeExpList.push(model.data.techXp[indexOf(el.technologyId)])})

            // }



        });
        console.log(model.inputs.editStudentProfile.codeExpList);
        editStudentProfileInputsArray.push("1");
        // EditPageValues=Object.values(model.inputs.editStudentProfile)
        saveSkill();


    }
}
function saveSkill(skill) {
    kodeErfaring = "";
    if (skill) {
        model.inputs.editStudentProfile.codeExpList.push(skill.innerHTML);
        //  EditPageValues.push(skill.innerHTML)
        erfaringarray.push(skill.innerHTML);
    }
    for (const key in model.inputs.editStudentProfile.codeExpList) {
        kodeErfaring +=/*html*/`
    <div class="chosenSkills"><p onclick="deleteSkill(this)">${model.inputs.editStudentProfile.codeExpList[key]}</p><i class="material-icons" style="font-size:14px">delete</i></div>
    `;
    }

    // kodeErfaring+=hidingtool

    // let expListArray=[]
    // if (typeof model.inputs.editStudentProfile.codeExpList=== "string") {
    //     model.inputs.editStudentProfile.codeExpList=[skill.innerHTML]
    // }else{  model.inputs.editStudentProfile.codeExpList.push(skill.innerHTML)}
    updateView();
}
function deleteSkill(choice) {
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
    model.inputs.editStudentProfile["codeExpList"].splice(model.inputs.editStudentProfile.codeExpList.indexOf(choice.innerHTML), 1);
    //    erfaringarray=buffer
    // erfaringarray.splice(erfaringarray.indexOf(choice),1)
    saveSkill();
    // updateView()
}

function allInputsWrittenEditPage() {
    EditPageValues = Object.values(model.inputs.editStudentProfile);
    if (EditPageValues.indexOf(model.inputs.editStudentProfile.codeExp) !== -1) {
        EditPageValues.splice(Object.values(model.inputs.editStudentProfile).indexOf(model.inputs.editStudentProfile.codeExp), 1);

    }
    console.log(EditPageValues);
    if (EditPageValues.includes("")) {
        Message = "*Du må fylle inn alle felt";
    }
    else {
        if (!model.inputs.editStudentProfile.email.includes("@")) {
            Message = "*Du må skrive riktig e-mail";
        } else if (passwordsMtchEditPage()) {
            return true;
        }

    }
    updateView();
}
let techIds;
let v;
function getTechXpRelations() {
    techIds = [];
    //  model.data.techXpRelations=model.data.techXpRelations.filter(el=>el.accountId!==model.data.currentUser.id)

    for (let i = 0; i < model.inputs.editStudentProfile.codeExpList.length; i++) {
        techIds.push((model.data.techXp.filter(el => el.name == (model.inputs.editStudentProfile.codeExpList[i]))).map(el => el.id));
        techIds = [].concat.apply([], techIds);
        model.data.pendingProfileChanges.techXpRelations.push({ accountId: model.data.currentUser.id, technologyId: parseInt(techIds[i]) });



        // console.log(key)



    }
    // v.

    console.log(techIds);
    console.log(model.data.techXpRelations);



}


function focusOnInput() {
    let input = document.querySelector(".kodeExpSøkefelt");
    console.log(input);
    input.focus();
    input.addEventListener("keydown", function () {
        this.setSelectionRange(this.value.indexOf(this.length), this.value.indexOf(this.length));
    });
    //    input.setSelectionRange(2,input.length);
}
function passwordsMtchEditPage() {
    if (model.inputs.editStudentProfile.password !== model.inputs.editStudentProfile.repeatedPassword) {
        Message = "* Begge passord må være like";
        updateView();
    } else return true;
}



function saveChanges() {
    if (allInputsWrittenEditPage()) {
        model.data.pendingProfileChanges.accounts.push({
            id: model.data.currentUser.id, name: model.inputs.editStudentProfile.name,
            password: model.inputs.editStudentProfile.password, userType: 'pendingStudentProfile',
            email: model.inputs.editStudentProfile.email, gitHub: model.inputs.editStudentProfile.gitHub,
            pic: model.inputs.editStudentProfile.profilePicture,
            cv: model.inputs.editStudentProfile.cv, counter: 45, importantInfo: model.inputs.editStudentProfile.importantInfo,
            interests: model.inputs.editStudentProfile.interests, address: model.inputs.editStudentProfile.address,
            location: model.inputs.editStudentProfile.location
        });
        //    currentStudentAccount[0].name=model.inputs.editStudentProfile.name
        //    currentStudentAccount[0].location=model.inputs.editStudentProfile.location
        //    currentStudentAccount[0].address=model.inputs.editStudentProfile.address
        //    currentStudentAccount[0].email= model.inputs.editStudentProfile.email
        //    currentStudentAccount[0].password= model.inputs.editStudentProfile.password
        //    currentStudentAccount[0].interests= model.inputs.editStudentProfile.interests
        //    currentStudentAccount[0].importantInfo=model.inputs.editStudentProfile.importantInfo
        //    currentStudentAccount[0].gitHub=model.inputs.editStudentProfile.gitHub
        //    currentStudentAccount[0].cv= model.inputs.editStudentProfile.cv
        //    currentStudentAccount[0].pic=model.inputs.editStudentProfile.profilePicture
        getTechXpRelations();
        alert("Endringene er lagret og må godkjennes av GET IT før de blir innført");
        //    editButton="venter på godkjenning"
        //    disableingTool="disabled"
        //    currentStudentAccount[0].userType="pendingStudentProfile"
        model.app.page = "studentProfile";

        
        clearInputs();
        updateView();

    }


}
function clearInputs() {
    model.inputs.editStudentProfile.name = "";
    model.inputs.editStudentProfile.location = "";
    model.inputs.editStudentProfile.address = "";
    model.inputs.editStudentProfile.email = "";
    model.inputs.editStudentProfile.password = "";
    model.inputs.editStudentProfile.repeatedPassword = "";
    model.inputs.editStudentProfile.interests = "";
    model.inputs.editStudentProfile.importantInfo = "";
    model.inputs.editStudentProfile.gitHub = "";
    model.inputs.editStudentProfile.cv = "";
    model.inputs.editStudentProfile.profilePicture = "";
    model.inputs.editStudentProfile.codeExpList = [];
    model.inputs.editStudentProfile.codeExp = "";
    editStudentProfileInputsArray = [];
    editStudentProfileInputsRefresh = true;
   
}

function changeImg(fileInput) {
    let file = fileInput.files[0];
    let reader = new FileReader();

    reader.addEventListener('load', () => {
        file = reader.result;
        model.inputs.editStudentProfile.profilePicture = `${file}`;
        console.log(reader.result); // Logger stringen til bildet i consollen
        model.inputs.editStudentProfile.profilePicture = reader.result;
        updateView();
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
        pdf = `${file}`;
        console.log(reader.result); // Logger stringen til bildet i consollen
        model.inputs.editStudentProfile.cv = reader.result;
        updateView();
    });

    reader.readAsDataURL(file);
};

function openDataUrlInNewTab() {
    const dataUrl = model.inputs.editStudentProfile.cv;
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






