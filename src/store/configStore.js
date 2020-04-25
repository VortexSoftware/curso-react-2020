import thunk from 'redux-thunk'
import { compose, applyMiddleware, createStore } from 'redux'
import reducers from '../reducers/rootReducer'

const configStore = (initialState) => {
    const middleware = [thunk]
    const createStoreWithMiddleware = compose(
        applyMiddleware(...middleware)
    )(createStore)

    const store = createStoreWithMiddleware(reducers, initialState)
    return store
}

export default configStore