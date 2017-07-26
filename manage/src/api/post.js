// import api from './api'
import api from './api_axios'

export default {
	getAll(){
		return api.get('post/getAll')
	}
}