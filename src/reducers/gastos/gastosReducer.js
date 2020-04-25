import types from './gastosContants'

const initialState = {
    loadingGastos: false,
    gastos: []
}

const gastosReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOADING_GASTOS:
            return {
                ...state,
                loadingGastos: action.loadingGastos
            }

        case types.SET_GASTOS:
            return {
                ...state,
                gastos: action.gastos
            }
        default: 
            return state
    }
}

export default gastosReducer;