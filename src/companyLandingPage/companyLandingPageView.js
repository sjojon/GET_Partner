function companyLandingPageView() {
    model.data.mapsState.mapToShow = true;
    model.data.mapsState.studentAccountToShow = 'all';

    return /*HTML*/ `
    <div id="companyPageWrapper">
        <div id="companyPageInner">
            <div id="getPartnerInfo">
                <h2>Velkommen til GET-partner!</h2>
                <p>Ved hjelp av GET-partner finner du akkurat de studentene du trenger til bedriften din.</p> 
                <p>GET sine studenter bor over hele landet, og du finner kontaktinformasjonen deres ved hjelp av verktøyet.</p>
                <p id="companyLandingPageSearchLink" onclick="goToStudentSearchFilter()">Søk etter studenter</p>
            </div>    
            <div id="companyPageMapContainer">
                <div id="map">
                </div>
            </div>
        </div>
    </div>`
    ;
    
}