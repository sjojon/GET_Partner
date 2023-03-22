const model = {

    app: {
        page: 'registerCompany',
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
            codeExp: '',
            codeExpList: [],
            interesets: '',
            importantInfo: '',
            cv: '',
            profilePicture: ''
        },
        studentSearchPage: {
            search: '',
            studentId: '',
            mapLocation: '',
            searchFilters: [],
        },
    },

    data: {
        currentUser: {
            id: '',
            // userType: '' // student, company, admin
        },
        accounts: {
            allAccounts: [
                { id: 1, name: 'admin', password: 'admin', userType: 'admin', countyId: 2 },
                { id: 2, name: 'Student1', password: 'passord1', userType: 'student', email: 'student1@mail.com' },
                { id: 3, name: 'Bedrift1', password: 'passord1', userType: 'company', email: 'bedrift1@mail.com', orgNr: '010010001' },
            ],
            studentAccounts: [
                { id: 2, name: 'Student1', password: 'passord1', userType: 'student', email: 'student1@mail.com' },
            ],
            pendingCompanies: [
                { id: 1, name: 'Nidar', password: '!Freia', userType: 'company', contactPerson: 'Jens Bakkeskam', email: 'jens@nidar.no', orgNr: '101666102' },
                { id: 2, name: 'Freia', password: '!Nidar', userType: 'company', contactPerson: 'Odin van Gjøken', email: 'odin@freia.no', orgNr: '110123001' },
                { id: 3, name: 'Komplett', password: 'Penger', userType: 'company', contactPerson: 'Gjøran Han Gjør', email: 'gjøran@komplett.no', orgNr: '110012241' },
            ],
        },
        interesets: [
            {accountId: 1, technologyId: 1},
            {accountId: 2, technologyId: 1}
        ],
        codeLanguages: [
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
        ],
        frameworks: [
            { id: 1, name: 'Node.js' },
            { id: 2, name: 'React.js' },
            { id: 3, name: 'Angular.js' },
            { id: 4, name: 'Vue.js' },
            { id: 5, name: 'Django' },
            { id: 6, name: 'Apache' },
            { id: 7, name: 'TypeScript' },
            { id: 8, name: '.NET' },
            { id: 9, name: 'Rails' },
            { id: 10, name: 'Express.js' },
        ],

        county: [
            { id: 1, name: 'Oslo' },
            { id: 2, name: 'Viken' },
            { id: 3, name: 'Vestfold og Telemark' },
            { id: 4, name: 'Agder' },
            { id: 5, name: 'Innlandet' },
            { id: 6, name: 'Nordland' },
            { id: 7, name: 'Rogaland' },
            { id: 8, name: 'Troms og Finnmark' },
            { id: 9, name: 'Trøndelag' },
            { id: 10, name: 'Vestland' },
            { id: 11, name: 'Møre og Romsdal' },
        ]

    }







};