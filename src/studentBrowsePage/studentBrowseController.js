
function handleInputChange() {
    let input = document.getElementById('input');
    let searchOptions = document.getElementById('student-search-options');
    model.inputs.studentSearchPage.search = input.value;
    searchOptions.innerHTML = createSearchParametersHtml();
}

function addFilter(parameter) {
    currentFilters.push(parameter)
    let index = searchParameters.indexOf(parameter)
    searchParameters.splice(index, 1)

    model.inputs.studentSearchPage.search = ''
    updateView()
}

function removeFilter(index) {
    let removedFilter = currentFilters.splice(index, 1)[0]
    searchParameters.push(removedFilter)
    updateView()
}

function showStudentPage(id) {
    model.inputs.studentSearchPage.searchFilters = currentFilters
    model.inputs.studentSearchPage.studentId = id
    model.app.page = 'studentBrowse'

    updateView()
}