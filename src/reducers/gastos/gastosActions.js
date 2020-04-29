
import types from './gastosContants'
import services from '../../services/index'

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
        services.fetchGastos(
            (response) => {
                dispatch(setGastos(response.data))
                dispatch(loadingGastos(false))
            },
            (error) => {
                console.log('Error Actions Gastos', error)
            }
        )
    }
}

export {
    fetchGastos
}

