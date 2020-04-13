const state = {
  items: [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec.' }
  ]
}
const getters = {
  items(state) {
    return state.items
  }
}
const mutations = {

}
const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}