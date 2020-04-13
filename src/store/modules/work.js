const state = {
    projects: [
        {
          category: "print",
          name: "Bill Gates",
          url: "images/1.png"
        },
        {
          category: "print",
          name: "Bawdqwefwqefq",
          url: "images/2.png"
        },
        {
          category: "print",
          name: "Bkoknjokjnoi",
          url: "images/3.png"
        },
        {
          category: "web",
          name: "Bilwefvwecvs",
          url: "images/4.png"
        },
        {
          category: "web",
          name: "efcwecvwev",
          url: "images/5.png"
        },
        {
          category: "web",
          name: "Biwefwevcwes",
          url: "images/6.png"
        },
        {
          category: "applications",
          name: "Bewfw3erv3wvs",
          url: "images/7.png"
        },
        {
          category: "applications",
          name: "ewf3wfvw",
          url: "images/8.png"
        },
        {
          category: "applications",
          name: "wfwevwevevs",
          url: "images/9.png"
        }
      ],
  }
  const getters = {
    projects(state) {
        return state.projects
      },
  }
  
  export default {
    state,
    getters
  }