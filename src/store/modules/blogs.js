import db from '../../firebase/init';

const state = {
	blogs: [],
	lastBlogPost: null
}
const getters = {
	blogs(state) {
		return state.blogs
	},
	lastBlogPost(state) {
		return state.lastBlogPost;
	}
}
const mutations = {
	setBlogs(state, payload) {
		payload.forEach(article => {
			state.blogs.push(article)
		})
	},
	setlastBlogPost(state, payload) {
		state.lastBlogPost = payload
	},
	setEmptyBlog(state, payload) {
		state.blogs = payload;
	},
}
const actions = {
	getBlogs({ commit }, config) {
		let query = db.collection("blogs").orderBy('title', 'desc');
		if (config && config.loadMore) {
			query = query.startAfter(state.lastBlogPost)
		}
		query
			.limit(1)
			.get()
			.then((snapshot) => {
				let blogs = []
				let lastBlogPost = snapshot.docs[snapshot.docs.length - 1]
				snapshot.docs.forEach(doc => {
					blogs.push({ ...doc.data(), id: doc.id });
				});
				// console.log(blogs);
				commit("setBlogs", blogs);
				commit('setlastBlogPost', lastBlogPost);
			});
	},
	emptyBlog({ commit }, payload) {
		commit('setEmptyBlog', payload)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}   