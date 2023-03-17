const model = {

    app: {
        page: 'login',
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
            repeatedPassword: ''
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
            interesets: '',
            cv: '',
            profilePicture: ''
        },
        studentPage: {
            search: '',
            studentId: ''
        },
    },

    data: {
        currentUser: {
            id: '',
            // userType: '' // student, company, admin
        },
        accounts: [
            { id: 1, name: 'admin', password: 'admin', userType: 'admin' },
            { id: 2, name: 'Eilert Rygh', password: 'Hunter2', userType: 'student', email: 'eilert1@live.com' },
            { id: 3, name: 'Freia', password: '!Nidar', userType: 'company', email: 'freia@mondelez.com', orgNr: '010010001' }
        ],

        pendingCompanies: [
            { name: 'Nidar', password: '!Freia', userType: 'company', email: 'nidar@orkla.com', orgNr: '110010001' }
        ],

    }







}