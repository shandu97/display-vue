const state = {
	iframe:
	"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.373311648183!2d-73.9870428842872!3d40.731810444339644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599e42df3ea5%3A0xcd5c3b896484157c!2s222+2nd+Ave%2C+New+York%2C+NY+10003%2C+USA!5e0!3m2!1sen!2s!4v1550562644493"
}
const getters = {
	iframe(state) {
		return state.iframe
	}
}

export default {
	state,
	getters
}