const state = {
    video: "/images/video.png",
    popUp:
    `<h4>Get To Know Us a Little Better!</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
    faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, 
    luctus a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
    </p>
    <p>Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. 
    Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
    Pellentesque pellentesque arcu a elit congue lacinia.</p>
    `
}
const getters = {
    video(state) {
        return state.video
    },
    popUp(state) {
        return state.popUp
    },
}

export default {
    state,
    getters
}