// students = model.data.accounts.allAccounts.filter(obj => obj.userType === 'student') // for studentBrowseSearch


function browseStudentView() {
    let techList = findTechsXpByAccountId(parseInt(model.inputs.studentSearchPage.studentId)) 
    let student = model.data.accounts[2] //DUMMY
    return /*HTML*/`
    <div class="outer">
        <div class="left">
            <div class="student-name">Navn: ${student.name}</div>
            <div class="student-pic">${student.pic}</div>
            <div class="bosted">Addresse: ${student.address}</div>
            <div class="tech-xp">Tech: ${createTechListHtml(techList)}</div>
            <div class="xp">Viktig informasjon: ${student.importantInfo}</div>
            <div class="interests">Interesser: ${student.interests}</div>
            <div class="email">Email: ${student.email}</div>
        </div>
        <div class="links">
            <a href="${student.gitHub}" target="_new">githubPlaceholder</a>
            <div>${student.cv}</div>
        </div>
        <div class="right">
            <div class="map"></div>
        </div>

    </div>
    
    `}


function createTechListHtml(list){
    let html = ''
    for(let i = 0; i < list.length; i++){
        html += `${list[i]}`
        if(i !== (list.length - 1)){
            html += `, `
        }
    }
    return html
}