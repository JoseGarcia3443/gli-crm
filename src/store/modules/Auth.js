const state = {
    user: {
        name: 'Adrian Stefan',
        area: 'Recursos Humanos',
        thumbnail: require('@/assets/example.png')
    },
};

const mutations = {}
const actions = {}

const getters = {
    user: (state) => state.user
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};