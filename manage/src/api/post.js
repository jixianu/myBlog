import api from './api.js'

export default {
	getAll(){
		return api.get('post/getAll')
	}
}