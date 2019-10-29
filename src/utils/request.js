import axios from "axios"

const service = axios.create({
    // baseURL:"http://localhost:3000",
    timeout: 5000
})
service.interceptors.request.use(
    config => {
        config.headers['username'] = localStorage.username
        config.headers['password'] = localStorage.password
        return config
    }
)
service.interceptors.response.use(
    response => {
        return response.data
    }
)
export default service