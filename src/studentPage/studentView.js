function studentBrowseView() {
    let techList = findTechsXpByAccountId(parseInt(model.inputs.studentSearchPage.studentId))
    let student = findAccountById(model.inputs.studentSearchPage.studentId) //DUMMY

    model.data.mapsState.mapToShow = true;
    model.data.mapsState.studentAccountToShow = 2; //Sett til studentens id
    return /*HTML*/`
    <div class="student-outer">
        <div class="student-inner">
            <div class="student-info">
                <div class="student-name">${student.name}</div>
                <img class="student-pic" src="${student.pic}">
                <div class="student-address">
                    Addresse: 
                    <div class="student-address-inner">${student.address}</div>
                </div>
                <div class="student-email">
                    Email: 
                    <div class="student-email-inner">${student.email}</div>
                </div>
                <div class="student-tech-xp">
                    Kode erfaring: 
                    <div class="student-tech-xp-inner">${createTechListHtml(techList)}</div>
                </div>
                <div class="student-xp">
                    Informasjon: 
                    <div class="student-xp-inner">${student.importantInfo}</div>
                </div>
                <div class="student-interests">
                    Interesser: 
                    <div class="student-interests-inner">${student.interests}</div>
                </div>
            </div>
            <div class="student-map">
                <div id="map">
                </div>
            </div>
            <div class="student-links">
                <img width="25px" style="margin-bottom: 4px" src="images/Github_logo.png" >
                <a class="github-link" href="${student.gitHub}" target="_new">
                    Github
                </a> 
                <a class="cv-link" href="${student.cv}">
                    CV
                </a>
            </div>
            <div class="student-buttons">
                <i class="bi bi-caret-left student-navigate" onclick="previousStudent()"></i> 
                <i class="bi bi-search student-navigate" onclick="backToStudentBrowse()"></i>
                <i class="bi bi-caret-right student-navigate" onclick="nextStudent()"></i>
            </div>
        </div>
    </div>
    
    `}


function createTechListHtml(list) {
    let html = ''
    for (let i = 0; i < list.length; i++) {
        html += `${list[i]}`
        if (i !== (list.length - 1)) {
            html += `, `
        }
    }
    return html
}