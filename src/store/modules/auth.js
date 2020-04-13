import db from '../../firebase/init';

const state = {
    currentUser: '',
    singleUser: '',
    userBlogs: []
}
const getters = {
    currentUser() {
        return state.currentUser;
    },
    singleUser() {
        return state.singleUser;
    },
    userBlogs(state) {
        return state.userBlogs
    }
}
const mutations = {
    setCurrentUser(state, payload) {
        state.currentUser = payload
        state.singleUser = payload
    },
    setUserBlogs(state, payload) {
        state.userBlogs = payload
    },
}
const actions = {
    async getCurrentUser({ commit }, payload) {
        await db.collection('users').where('user_id', '==', payload.uid).get().then(snapshot => {
            let user = {};
            snapshot.docs.forEach(doc => {
                user = doc.data()
                user.id = doc.id
            })
            commit('setCurrentUser', user);
        })
    },
    async getUserBlogs({commit}, payload) {
        let blogs = [];
        await db.collection('blogs').where('uid', '==', payload).get().then(snapshot => {
            if(snapshot.docs.length) {
            snapshot.docs.forEach(doc => {
                blogs.push({
                    ...doc.data(),
                    id: doc.id})
                    commit('setUserBlogs', blogs)
            })}
             else {
                    commit('setUserBlogs', [])
            }
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}