import axios from "axios"

const service = axios.create({
    baseURL:"http://localhost:7002",
    timeout: 5000
})
service.interceptors.request.use(
    config => {
        config.headers['username'] = localStorage.username
        config.headers['password'] = localStorage.password
        config.headers['token'] = localStorage.password
        return config
    }
)
service.interceptors.response.use(
    response => {
        return response.data
    }
)
export default service