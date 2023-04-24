function companyLandingPageView() {
    model.data.mapsState.mapToShow = true;
    model.data.mapsState.studentAccountToShow = 'all';

    return /*HTML*/ `
    <div id="companyPageWrapper">
        <div id="getPartnerInfo">
            GET er insane bra!!!
        </div>    
        <div id="companyPageMapContainer">
            <div id="map">
            </div>
        </div>
    </div>`
    ;
    
}