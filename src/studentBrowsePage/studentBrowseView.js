const search = model.inputs.studentSearchPage.search
let currentFilters = []
let searchParameters = createSearchParameters()
let filteredParameters
let studentArray = createStudentArray()

model.inputs.studentSearchPage.filteredStudentIds

function createSearchParameters() {
    let techXpValues = model.data.techXp.map(x => x.name)
    let countyValues = model.data.county.map(x => x.name)
    return [].concat(techXpValues, countyValues)
}

function studentBrowseSearchView() {
    return /*HTML*/`
    <div id="student-parent">   
        <div id="student-browse-outer">
            <div id="student-browse-input">
                <div id="student-browse-input-text">
                    Søk:
                    <input type="text" id="input" placeholder="                       fylker / kode erfaringer" oninput="handleInputChange()">${search}</input>
                </div>
                <div id="student-search-options">
                    
                </div>
            </div>
            <div id="student-browse-filters">
                <div id="student-browse-filters-text">
                    Søkefiltre:
                </div>
                <div id="student-browse-filters-filters">
                    ${createStudentFilterHtml()}
                </div>
            </div>
            <div id="student-browse-students">
                ${createStudentBrowseHtml()}
            </div>
        </div>
    </div>
    `
}


function createSearchParametersHtml() {
    let html = ''

    filteredParameters = searchParameters.filter(
        x => x.toLowerCase().startsWith(model.inputs.studentSearchPage.search))
    if (filteredParameters.length < 6) { 
        for (let i = 0; i < filteredParameters.length; i++) {
            html += /*HTML*/ `
                <button class="button-margin" onclick="addFilter(this.innerHTML)">${filteredParameters[i]}</button> 
            `
        }
    }
    return html
}

function createStudentFilterHtml() {
    let html = ''
    for (let i = 0; i < currentFilters.length; i++) {
        html += /*HTML*/ `
            <button class="button-margin" onclick="removeFilter(${i})">
                ${currentFilters[i]}
            </button>
        `
    }
    return html
}



function createStudentBrowseHtml() {
    let html = ''
    model.inputs.studentSearchPage.filteredStudentIds = []

    for (student of studentArray) {
        if (currentFilters.every(value =>
            Object.values(student).includes(value) ||
            findTechsXpByAccountId(student.id).includes(value)
        )) {
            html += /*HTML*/`
            <div class="student-card" onclick="showStudentPage(${student.id})">
                <img class="student-picture" src="${student.pic}"></img>
                <div class="student-name">${student.name}</div>
                <div class="student-location">${student.location}</div>
                <div class="student-tech">${findTechsXpByAccountId(student.id)}</div>
            </div>
        `
        model.inputs.studentSearchPage.filteredStudentIds.push(student.id)
        }
    }
    return html
}