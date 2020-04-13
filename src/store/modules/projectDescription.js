const state = {
  description: `<h3>A Couple of Our Featured Projects</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, 
    faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, 
    quis tincidunt eros.</p>`,
}
const getters = {
  description(state) {
    return state.description
  }
}

export default {
  state,
  getters
}