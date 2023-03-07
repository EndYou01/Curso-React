
import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { uiReducer } from '../reducers/uiReducer';

// import { authReducer } from '../reducers/authReducer'
// import { notesReducer } from '../reducers/notesReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    // auth: authReducer,
    ui: uiReducer,
    // notes: notesReducer,
})

export const store = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(
        applyMiddleware( thunk )
    )
)
