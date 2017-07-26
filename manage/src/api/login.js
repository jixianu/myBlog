import api from './api_axios'

export default {
	checkLogin(username, password){
		return api.post('login', {username, password})
	}
}