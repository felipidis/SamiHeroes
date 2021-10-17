import axios from 'axios'

const token = '4459255044188564'

const api = axios.create({
	baseURL: `https://superheroapi.com/api.php/${token}`,
})

export default api
