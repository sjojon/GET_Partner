let map;
let featureLayer;
let geocoder;
let markers;
let tempLat; //Noen ganger vil ikke results bli spytta ut som et ordentlig objekt :))))))))
let tempLng;
let studentCount;

// Initialize and add the map
function initMap() {//Send inn studentlocations array slik at vi kan se enkeltvis for andre profiler


  // The map, centered at Norway
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: centerOfNorway,
    mapId: 'bd0c37776b4d0d83',
    //mapTypeId: 'roadmap',
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  });

  // Add geocoder
  geocoder = new google.maps.Geocoder();

  markers = [];
  iteratedStudents = [];
  let studentAccountToShow = model.data.mapsState.studentAccountToShow;

  if (studentAccountToShow == 'all') {
    studentCount = model.data.totalStudents;
    for (i in model.data.accounts) {
      if (model.data.accounts[i].userType == 'student') {
        iteratedStudents.push(model.data.accounts[i].id);
        geocode({ address: model.data.accounts[i].address }, model.data.accounts[i].id);
      }
    };
  }

  else { //Vi har en spesifikk studentId
    studentCount = 1;
    const givenAccount = findAccountById(studentAccountToShow);
    geocode({ address: givenAccount.address }, studentAccountToShow);
  }

  // Add a feature layer for localities.
  featureLayer = map.getFeatureLayer('ADMINISTRATIVE_AREA_LEVEL_1');
  //const municipalityLayer = map.getFeatureLayer('ADMINISTRATIVE_AREA_LEVEL_2'); redefiner featureLayer likesågreit!
  // Add the event listener for the feature layer.
  featureLayer.addListener("click", handlePlaceClick);
  applyStyleToSelected();

  infoWindow = new google.maps.InfoWindow({});
};

// Stroke and fill with minimum opacity value.
const styleDefault = {
  strokeColor: "#1239ff",
  strokeOpacity: 0.3,
  strokeWeight: 1.0,
  fillColor: "white",
  fillOpacity: 0.1, // Polygons must be visible to receive click events.
};

// Style for the clicked Administrative Area Level 1 polygon.
const styleClicked = {
  ...styleDefault,
  fillColor: "#1239ff",
  fillOpacity: 0.5,
};

async function handlePlaceClick(event) {
  let feature = event.features[0];

  let county = event.features[0].m;

  if (!feature.placeId) return;

  map.setCenter(countiesCenterCoordinates[county]);
  map.setZoom(countiesZoomLevel[county]);
  //if county not in searchfilter: Searchfilter add county

  // Apply the style to the feature layer.
  applyStyleToSelected(feature.placeId);

  // Add the info window. Se click events dokumentasjon
  let content =
    '<span style="font-size:small">Fylke: ' +
    county +
    "<br/> Antall studenter: " +
    model.data.countiesStudentCount[county] +
    "</span>";

  updateInfoWindow(content, event.latLng);
};

function applyStyleToSelected(placeid) {
  // Apply styles to the feature layer.
  featureLayer.style = (options) => {
    // Style fill and stroke for a polygon.
    if (placeid && options.feature.placeId == placeid) { //Ifølge maps api dokumentasjonen trenger vi ikke filtrere på Norge, siden den vil kun trykke på fylker som allerede er rammet inn.
      return styleClicked;

    }
    // Style only the stroke for the entire feature type.
    if (Object.values(countiesPlaceId).includes(options.feature.placeId)) {
      return styleDefault;
    }

  };
};

function updateInfoWindow(content, center) {
  infoWindow.setContent(content);
  infoWindow.setPosition(center);
  infoWindow.open({
    map,
    shouldFocus: false,
  });
};

function geocode(request, id) {
  geocoder.geocode(request)
    .then((result) => {
      const { results } = result;
      /*if (results[0].geometry.bounds) {
        let bounds = results[0].geometry.bounds;
        tempLat = (bounds.La.hi + bounds.La.lo)/2;
        tempLng = (bounds.fb.hi + bounds.fb.lo)/2;
      }
      else {
        let bounds = results[0].geometry.location;
        tempLat = (bounds.La.hi + bounds.La.lo)/2;
        tempLng = (bounds.fb.hi + bounds.fb.lo)/2;
      }*/
      
      const viewport = results[0].geometry.viewport;
      tempLng = (viewport.Ka.hi + viewport.Ka.lo) / 2;
      tempLat = (viewport.fb.hi + viewport.fb.lo) / 2; //Denne breaka en gang fordi google valgte å bytte fra fb til eb XD

      const parsedLocation = { lat: tempLat, lng: tempLng };

      const newMarker = new google.maps.Marker({
        position: parsedLocation,
        map: map,
      });

      newMarker.addListener('click', function () {
        console.log('clicked maps marker');
        console.log(findAccountById(id));
        model.inputs.studentSearchPage.studentId = id;
        model.app.page = 'studentBrowse';
        updateView();
      });

      markers.push(newMarker);
      if (markers.length == studentCount) {
        const markerCluster = new markerClusterer.MarkerClusterer({ markers, map });
      }

      //console.log(results)
      return results;
    })
    .catch((e) => {
      console.log("Geocode was not successful for the following reason: " + e);
    });
}

// Markers
/*
const royalCastleOfNorway = { lat: 59.9013664, lng: 10.6849891};
const oslo = {lat: 59.9113664, lng: 10.7549891};
const bergen = {lat: 60.3648765, lng: 5.1421188};
const trondheim = {lat: 63.4339814, lng: 10.3628133};
const tromsø = {lat: 69.6652344, lng: 18.9193946};
const kristiansand = {lat: 58.1529584, lng: 7.9614501};
*/
const averageLatitude = 64.57;
const averageLongitude = 17.82;

//const centerOfNorway = { lat: 65.400113, lng: 12.896478};
const centerOfNorway = { lat: averageLatitude + 1, lng: averageLongitude - 2.5 };


const countiesPlaceId = {
  'Agder': 'ChIJD0JSTvhPOEYR8vitVnMQwW0',
  'Rogaland': 'ChIJC9fcKj81OkYRvMAMC7ocBuA',
  'Vestland': 'ChIJv16rc8s5FkYROwJbXfdDQg0',
  'Møre og Romsdal': 'ChIJWcLG1x1UEUYRWmPHRZ1TRJ4',
  'Innlandet': 'ChIJi7dNxCDIakYRGiV44hMlmp8',
  'Viken': 'ChIJcU9uGtfvQEYRag4KtVvjDxo',
  'Oslo': 'ChIJvRIImcJtQUYReQpUuAPqbBA',
  'Vestfold og Telemark': 'ChIJVfIRGaRaR0YReuL0C6KfSvw',
  'Trøndelag': 'ChIJvTic8NUzbUYRflObX3-sL_0',
  'Nordland': 'ChIJU1QPxFM-30URIB3dD6sIAgM',
  'Troms og Finnmark': 'ChIJhwjlWeowz0URUqTmfXklFw8',
};

/* Testdata
const countiesStudentCount = {
  'Agder': '353',
  'Rogaland': '21',
  'Vestland': '9',
  'Møre og Romsdal': '3',
  'Innlandet': '18',
  'Viken': '645',
  'Oslo': '896',
  'Vestfold og Telemark': '223',
  'Trøndelag': '53',
  'Nordland': '9',
  'Troms og Finnmark fylke': '1',
};*/

const countiesZoomLevel = {
  'Agder': 7,
  'Rogaland': 7,
  'Vestland': 6,
  'Møre og Romsdal': 7,
  'Innlandet': 6,
  'Viken': 6,
  'Oslo': 9,
  'Vestfold og Telemark': 7,
  'Trøndelag': 6,
  'Nordland': 5,
  'Troms og Finnmark fylke': 5,
};

const countiesCenterCoordinates = { //Sparer på api-kall
  'Agder': { lat: 58.696484, lng: 7.736577 },
  'Rogaland': { lat: 59.160225, lng: 5.905729 },
  'Vestland': { lat: 61.037559, lng: 6.136326 },
  'Møre og Romsdal': { lat: 62.609717, lng: 7.345671 },
  'Innlandet': { lat: 61.654627, lng: 10.018519 },
  'Viken': { lat: 60.000262, lng: 10.049301 },
  'Oslo': { lat: 60.526252, lng: 10.286417 },
  'Vestfold og Telemark': { lat: 59.438294, lng: 8.778853 },
  'Trøndelag': { lat: 63.995328, lng: 10.733980 },
  'Nordland': { lat: 66.758829, lng: 14.037535 },
  'Troms og Finnmark fylke': { lat: 69.767556, lng: 23.126765 },
}

/*
const testAccounts = 
  [
    { id: 1, name: 'admin', password: 'admin', userType: 'admin', countyId: 2 },
    { id: 2, name: 'Student1', password: 'passord1', userType: 'student', address: 'Porsgrunn', email: 'student1@mail.com', gitHub: 'github.com/dummyaccount/', pic: 'images/bilde.jpg', cv: 'cv.com/cv', counter: 245, },
    { id: 10, name: 'Student2', password: 'passord2', userType: 'pendingStudentProfile', email: 'student2@mail.com', gitHub: 'github.com/dummyaccount/', pic: 'images/bilde.jpg', cv: 'cv.com/cv', counter: 245, },
    { id: 3, name: 'Bedrift1', password: 'passord1', userType: 'company', email: 'bedrift1@mail.com', orgNr: '010010001' },
    { id: 4, name: 'Nidar', password: '!Freia', userType: 'pendingCompany', contactPerson: 'Jens Bakkeskam', email: 'jens@nidar.no', orgNr: '101666102' },
    { id: 5, name: 'Freia', password: '!Nidar', userType: 'pendingCompany', contactPerson: 'Odin van Gjøken', email: 'odin@freia.no', orgNr: '110123001' },
    { id: 6, name: 'Komplett', password: 'Penger', userType: 'pendingCompany', contactPerson: 'Gjøran Han Gjør', email: 'gjøran@komplett.no', orgNr: '110012241' },
    { id: 2, name: 'StudentSkien', password: 'passord1', userType: 'student', address: 'Skien Telemark', email: 'student1@mail.com', gitHub: 'github.com/dummyaccount/', pic: 'images/bilde.jpg', cv: 'cv.com/cv', counter: 245, },
    { id: 2, name: 'StudentHC', password: 'passord1', userType: 'student', address: 'Grensegata 1 Porsgrunn', email: 'student1@mail.com', gitHub: 'github.com/dummyaccount/', pic: 'images/bilde.jpg', cv: 'cv.com/cv', counter: 245, },
    { id: 2, name: 'StudentFiff', password: 'passord1', userType: 'student', address: 'Karl Johans gate 7', email: 'student1@mail.com', gitHub: 'github.com/dummyaccount/', pic: 'images/bilde.jpg', cv: 'cv.com/cv', counter: 245, },
    { id: 2, name: 'StudentSuperfiff', password: 'passord1', userType: 'student', address: 'Holmenkollen Oslo', email: 'student1@mail.com', gitHub: 'github.com/dummyaccount/', pic: 'images/bilde.jpg', cv: 'cv.com/cv', counter: 245, },
    { id: 2, name: 'StudentEnslig', password: 'passord1', userType: 'student', address: 'Finnmark', email: 'student1@mail.com', gitHub: 'github.com/dummyaccount/', pic: 'images/bilde.jpg', cv: 'cv.com/cv', counter: 245, },
    { id: 2, name: 'StudentKristen', password: 'passord1', userType: 'student', address: 'Studentersamfundet Trondheim', email: 'student1@mail.com', gitHub: 'github.com/dummyaccount/', pic: 'images/bilde.jpg', cv: 'cv.com/cv', counter: 245, },
]
*/