function backToStudentBrowse() {
    studentId = 0
    model.app.page = 'studentBrowseSearch'
    updateView()
}

function nextStudent() {
    let studentId = model.inputs.studentSearchPage.studentId
    let studentIds = createStudentArray().map(obj => obj.id).sort((a,b) => a - b)
    let result
    let endOfArray = false;
    
    for (let i = 0; i < studentIds.length; i++) {           //Looper stigende gjennom liste av student id'er
        if (studentIds[i] > studentId) {                    //Til vi finner en id som er større en 'studentId'
            result = studentIds[i];                         //Lagrer id som er større
            endOfArray = false;                             //Passer på at funksjonen ikke alltid gir den laveste id'en
            break;                                          //Stopper loopen hvis vi finner en id som er større en 'studentId' 
        } else if (studentIds[i] === studentId) {           //Finner ut om vi er på slutten av listen
            endOfArray = true;
        }
    }
    if (endOfArray) {                                       //Hvis vi er på slutten av listen
        result = studentIds[0];                             //Lagrer id til den første id'en i listen
    }
    model.inputs.studentSearchPage.studentId = result
    updateView()
}

function previousStudent() {
    let studentId = model.inputs.studentSearchPage.studentId;
    let studentIds = createStudentArray().map(obj => obj.id).sort((a, b) => a - b);
    let result
    let startOfArray = false;
                                                            //Looper synkene gjennom liste av student id'er
    for (let i = studentIds.length - 1; i >= 0; i--) {      //studentIds.length - 1 pga vi skal ha indexen til studentIds, og den starter på 0
        if (studentIds[i] < studentId) {                    //Til vi finner en id som er lavere enn 'studenId' 
            result = studentIds[i];                         //Lagrer id som er lavere
            startOfArray = true;                            //Passer på at funksjonen ikke alltid gir den høyeste id'en
            break;
        }
    }

    if (!startOfArray) {                                    //Hvis vi er på starten av listen
        result = studentIds[studentIds.length - 1];         //Lagrer id til den siste id'en i listen
    }

    model.inputs.studentSearchPage.studentId = result;
    updateView();
}
