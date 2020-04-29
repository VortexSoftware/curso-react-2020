import types from './appConstants'

const initialState = {
    view: '',
    modalView: 'Login',
    showModal: true
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SELECT_VIEW: 
            return {
                ...state,
                view: action.view
            }

        case types.HANDLE_MODAL: 
            return {
                ...state,
                modalView: action.modalView,
                showModal: action.showModal
            }

        default:
            return state

    }
}

export default appReducer