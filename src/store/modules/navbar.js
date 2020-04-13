const state = {
    navLinks: [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Work",
            path: "/work"
        },
        {
            name: "Contact",
            path: "/contact"
        },
        {
            name: "Blog",
            path: "/blog"
        }
    ],
}
const getters = {
    navLinks(state) {
        return state.navLinks
    }
}

export default {
    state,
    getters
}