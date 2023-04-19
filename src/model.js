const model = {

    app: {
        header: '',  //home,student,company,admin
        page: 'loginPage',
        isLoggedIn: false,
    },

    inputs: {
        login: {
            username: '',
            password: '',
        },
        registerCompany: {
            name: '',
            orgNr: '',
            contactPerson: '',
            email: '',
            password: '',
            repeatedPassword: '',
            showPassword: false,
        },
        registerStudent: {
            name: '',
            email: '',
            password: '',
            repeatedPassword: '',
        },
        editStudentProfile: {
            name: '',
            email: '',
            password: '',
            repeatedPassword: '',
            location: '',
            address: '',
            codeExp: '',
            codeExpList: [],
            interests: '',
            importantInfo: '',
            cv: '',
            profilePicture: '',
            gitHub: ""
        },
        studentSearchPage: {
            search: '',
            studentId: 2, // '2' er dummy input for browseStudent
            mapLocation: '',
            searchFilters: [],
        },
    },

    data: {
        currentUser: {
            id: 2,
            // userType: '' // student, company, admin
        },

        mapsState: {
            mapToShow: false,
            studentAccountToShow: 'all' //Blir til studentId hvis vi skal se på en spesifikk en
        },

        accounts: [
            { id: 1, name: 'admin', password: 'admin', userType: 'admin', countyId: 2 },
            { id: 2, name: 'Student1', password: 'passord', userType: 'student', email: 'student1@mail.com', gitHub: 'github.com/dummyaccount1/', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Pqhsyl0AMubS8TOtQ-obqHiDb2NfeqnKxw&usqp=CAU', cv: 'cv.com/cv', counter: 45, importantInfo: 'B menneske', interests: 'fiske', address: 'Amtmann Michelets vei 5', location: "Vestfold og Telemark" },
            { id: 7, name: 'Student2', password: 'passord', userType: 'pendingStudentProfile', email: 'student2@mail.com', gitHub: 'github.com/dummyaccount2/', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Pqhsyl0AMubS8TOtQ-obqHiDb2NfeqnKxw&usqp=CAU', cv: 'cv.com/cv', counter: 25, importantInfo: 'A menneske', interests: 'liker natur', address: 'Iver Jernskjeggs vei 3', location: "Vestfold og Telemark" },
            { id: 3, name: 'Bedrift1', password: 'passord', userType: 'company', email: 'bedrift1@mail.com', orgNr: '010010001' },
            { id: 4, name: 'Nidar', password: 'passord', userType: 'pendingCompany', contactPerson: 'Jens Bakkeskam', email: 'jens@nidar.no', orgNr: '101666102' },
            { id: 5, name: 'Freia', password: 'passord', userType: 'pendingCompany', contactPerson: 'Odin van Gjøken', email: 'odin@freia.no', orgNr: '110123001' },
            { id: 6, name: 'Komplett', password: 'passord', userType: 'pendingCompany', contactPerson: 'Gjøran Han Gjør', email: 'gjøran@komplett.no', orgNr: '110012241' },
            { id: 8, name: 'Student3', password: 'passord', userType: 'student', email: 'student3@mail.com', gitHub: 'github.com/dummyaccount3/', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Pqhsyl0AMubS8TOtQ-obqHiDb2NfeqnKxw&usqp=CAU', cv: 'cv.com/cv', counter: 52, importantInfo: 'A menneske', interests: 'fiske', address: 'Skien Telemark', location: 'Vestfold og Telemark' },
            { id: 9, name: 'Student4', password: 'passord', userType: 'student', email: 'student4@mail.com', gitHub: 'github.com/dummyaccount4/', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Pqhsyl0AMubS8TOtQ-obqHiDb2NfeqnKxw&usqp=CAU', cv: 'cv.com/cv', counter: 35, importantInfo: 'A menneske', interests: 'kode, gaming', address: 'Grensegata 1 Porsgrunn', location: 'Vestfold og Telemark' },
            { id: 10, name: 'Student5', password: 'passord', userType: 'student', email: 'student5@mail.com', gitHub: 'github.com/dummyaccount5/', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Pqhsyl0AMubS8TOtQ-obqHiDb2NfeqnKxw&usqp=CAU', cv: 'cv.com/cv', counter: 45, importantInfo: 'A menneske', interests: 'ingenting', address: 'Karl Johans gate 7', location: 'Oslo' },
            { id: 11, name: 'Student6', password: 'passord', userType: 'student', email: 'student6@mail.com', gitHub: 'github.com/dummyaccount6/', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Pqhsyl0AMubS8TOtQ-obqHiDb2NfeqnKxw&usqp=CAU', cv: 'cv.com/cv', counter: 51, importantInfo: 'X menneske', interests: 'være lat', address: 'Holmenkollen Oslo', location: 'Oslo' },
            { id: 12, name: 'Student7', password: 'passord', userType: 'student', email: 'student7@mail.com', gitHub: 'github.com/dummyaccount7/', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Pqhsyl0AMubS8TOtQ-obqHiDb2NfeqnKxw&usqp=CAU', cv: 'cv.com/cv', counter: 22, importantInfo: 'B menneske', interests: 'trene', address: 'Finnmark', location: 'Troms og Finnmark fylke' },
            { id: 13, name: 'Student8', password: 'passord', userType: 'student', email: 'student8@mail.com', gitHub: 'github.com/dummyaccount8/', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Pqhsyl0AMubS8TOtQ-obqHiDb2NfeqnKxw&usqp=CAU', cv: 'cv.com/cv', counter: 24, importantInfo: 'B menneske', interests: 'lage god mat fra bunn av', address: 'Studentersamfundet Trondheim', location: 'Trøndelag' },
            { id: 14, name: 'Student9', password: 'passord', userType: 'student', email: 'student9@mail.com', gitHub: 'github.com/dummyaccount9/', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Pqhsyl0AMubS8TOtQ-obqHiDb2NfeqnKxw&usqp=CAU', cv: 'cv.com/cv', counter: 12, importantInfo: 'B menneske', interests: 'jakte hjortedyr', address: 'Skien Telemark', location: 'Vestfold og Telemark' },
        ],

        techXpRelations: [
            { accountId: 2, technologyId: 1 },
            { accountId: 2, technologyId: 2 },
            { accountId: 2, technologyId: 10 },
            { accountId: 7, technologyId: 1 },
            { accountId: 7, technologyId: 4 },
            { accountId: 7, technologyId: 14 },
            { accountId: 8, technologyId: 1 },
            { accountId: 8, technologyId: 5 },
            { accountId: 8, technologyId: 11 },
            { accountId: 9, technologyId: 1 },
            { accountId: 9, technologyId: 4 },
            { accountId: 10, technologyId: 1 },
            { accountId: 10, technologyId: 13 },
            { accountId: 11, technologyId: 2 },
            { accountId: 11, technologyId: 6 },
            { accountId: 11, technologyId: 17 },
            { accountId: 12, technologyId: 1 },
            { accountId: 13, technologyId: 3 },
            { accountId: 13, technologyId: 5 },
            { accountId: 13, technologyId: 9 },
            { accountId: 14, technologyId: 6 },
        ],

        techXp: [
            { id: 1, name: 'JavaScript' },
            { id: 2, name: 'Java' },
            { id: 3, name: 'C' },
            { id: 4, name: 'C++' },
            { id: 5, name: 'C#' },
            { id: 6, name: 'Python' },
            { id: 7, name: 'Kotlin' },
            { id: 8, name: 'Julia' },
            { id: 9, name: 'PHP' },
            { id: 10, name: 'SQL' },
            { id: 11, name: 'Ruby' },
            { id: 12, name: 'Assembly' },
            { id: 13, name: 'Node.js' },
            { id: 14, name: 'React.js' },
            { id: 15, name: 'Angular.js' },
            { id: 16, name: 'Vue.js' },
            { id: 17, name: 'Django' },
            { id: 18, name: 'Apache' },
            { id: 19, name: 'TypeScript' },
            { id: 20, name: '.NET' },
            { id: 21, name: 'Rails' },
            { id: 22, name: 'Express.js' },
        ],

        county: [
            { id: 1, name: 'Oslo' },
            { id: 2, name: 'Viken' },
            { id: 3, name: 'Vestfold og Telemark' },
            { id: 4, name: 'Agder' },
            { id: 5, name: 'Innlandet' },
            { id: 6, name: 'Nordland' },
            { id: 7, name: 'Rogaland' },
            { id: 8, name: 'Troms og Finnmark fylke' },
            { id: 9, name: 'Trøndelag' },
            { id: 10, name: 'Vestland' },
            { id: 11, name: 'Møre og Romsdal' },
        ],

        countiesStudentCount: {
            'Agder': '0',
            'Rogaland': '0',
            'Vestland': '0',
            'Møre og Romsdal': '0',
            'Innlandet': '0',
            'Viken': '0',
            'Oslo': '0',
            'Vestfold og Telemark': '0',
            'Trøndelag': '0',
            'Nordland': '0',
            'Troms og Finnmark fylke': '0',
          },

        totalStudents: 0,

    }

};