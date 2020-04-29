import axios from 'axios'
import endPoints from './endPoints'

const executeService = (url, method, data) => {
    const request = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
        },
    }

    if(data && method === 'POST') {
        request.data = data
    }

    if(data && method === 'GET') {
        request.params = data
    }

    return axios(request)
        .then((response) => {
            console.log('Response in axios', response)
            return response
        })
}

// definimos las llamadas a backend

const fetchGastos = (success, error) => {
    executeService(endPoints.FETCH_GASTOS, 'GET')
        .then(success)
        .catch(error)
}

const login = (data, success, error) => {
    executeService(endPoints.LOGIN, 'POST', data)
        .then((response) => {
            const { data: { user: { authToken: token } } } = response
            axios.defaults.headers.common = { 'Authorization': `${token}`}
            return success(response)
        })
        .catch(error)
}


export default {
    fetchGastos,
    login
}