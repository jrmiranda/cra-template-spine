import api from 'services/api'

export default {
	getToken: (data) => {
		return api.post(`/login`, data)
	}
}