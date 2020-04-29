import types from './appConstants'
import services from '../../services'

const selectView = (view) => {
    debugger
    return {
        type: types.SELECT_VIEW,
        view
    }
}

const handleModal = (showModal, modalView) => {
    return {
        type: types.HANDLE_MODAL,
        showModal,
        modalView
    }
}


const login = (email, password) => {
    return (dispatch) => {
        services.login(
            {username: email, password: password},
            (response) => {
                //TODO: set Username
                dispatch(handleModal(false, ''))
            },
            (error) => {
                console.log('Error', error)
            }
        )
    }
} 

export {
    selectView,
    login
}

// /api/v1/users/login

// {
//     "username": "juanpedro",
//     "password": "123123"
//   }


// {
//     "user": {
//       "name": "Juan Pedro",
//       "authToken": TOKEN
//     },
//     "error": null
// }
  