import db from '../../firebase/init'

const state = {
  logo: "",
}
const getters = {
  img(state) {
    return state.logo
  },
}
const mutations = {
  setLogo(state, payload) {
    state.logo = payload
  }
}
const actions = {
  getLogo({ commit }) {
    db.collection('logo').get().then(
      snapshot => {
        let logo = []
        snapshot.docs.forEach(
          doc => logo.push(doc.data())
        )
        commit('setLogo', logo)
      }
    )
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}