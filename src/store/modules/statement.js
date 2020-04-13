const state = {
    statement:
  `<h3>mission statement</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, 
  vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. 
  Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
  Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.</p>`,
    facts: `<h3>fun facts</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
  faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit
  amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
  Pellentesque pellentesque arcu a elit congue lacinia.</p>
    `,
}
const getters = {
    statement(state) {
        return state.statement
    },
    facts(state) {
        return state.facts
    }
}

export default {
    state,
    getters
}