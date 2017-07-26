import api from './api_axios'

export default {
	createToken(username, password){
		return api.post('login', {username, password})
	}
}