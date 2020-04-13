const state = {
    aboutUs:
  `<img src="/images/img.png" class="float-left"></img>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris.
   Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros.
   Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
   Pellentesque pellentesque arcu a elit congue lacinia.</p>
      <p>
   Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
   Pellentesque pellentesque arcu a elit congue lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, 
   vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Lorem ipsum dolor sit amet, 
   consectetur adipiscing elit.</p>`,
}
const getters = {
    aboutUs(state) {
        return state.aboutUs
    },
}

export default {
    state,
    getters
}