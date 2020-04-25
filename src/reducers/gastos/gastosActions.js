
import types from './gastosContants'
import axios from 'axios'

const loadingGastos = (loadingGastos) => {
    return {
        type:  types.LOADING_GASTOS,
        loadingGastos
    }
}

const setGastos = (gastos) => {
    return {
        type: types.SET_GASTOS,
        gastos
    }
}

const fetchGastos = () => {
    return (dispatch) => {
        dispatch(loadingGastos(true))
        const axiosRequest = {
            method: 'GET',
            url: 'http://dev.expenses.vortexsoftware.com.ar/api/v1/transactions/myExpenses',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTU4Nzc2MjU4MywiZXhwIjoxNjE5Mjk4NTgzfQ.f0-eO1h710_Nj51qtip4X1cr8_dRYJOdspKqdzKuHyI'
            }
        }

        axios(axiosRequest)
            .then((response) => {
                dispatch(setGastos(response.data))
                dispatch(loadingGastos(false))
            })
            .catch((error) => {
                console.log('error', error)
            })
    }
}

export {
    fetchGastos
}




