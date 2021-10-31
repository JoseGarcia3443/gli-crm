const state = {
    managers: [
        {
            "id": 1,
            "name": "Leanne Graham",
            "area": "Bret",
            "email": "Sincere@april.biz",
            "status": "activo",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "area": "Antonette",
            "email": "Shanna@melissa.tv",
            "status": "activo",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "area": "Samantha",
            "email": "Nathan@yesenia.net",
            "status": "inactivo",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "area": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "status": "activo",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "area": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "status": "inactivo",
        },
        {
            "id": 6,
            "name": "Mrs. Dennis Schulist",
            "area": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "status": "activo",
        },
        {
            "id": 7,
            "name": "Kurtis Weissnat",
            "area": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "status": "inactivo",
        },
        {
            "id": 8,
            "name": "Nicholas Runolfsdottir V",
            "area": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "status": "activo",
        },
        {
            "id": 9,
            "name": "Glenna Reichert",
            "area": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "status": "inactivo",
        },
        {
            "id": 10,
            "name": "Clementina DuBuque",
            "area": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "status": "activo",
        }
    ]
};

const mutations = {}
const actions = {}

const getters = {
    managers: (state) => state.managers
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};