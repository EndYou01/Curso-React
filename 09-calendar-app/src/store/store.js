
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
// import { calendarReducer } from '../reducers/calendarReducer';
import { rootReducer } from '../reducers/rootReducer';
// import { uiReducer } from '../reducers/uiReducer';

// import { authReducer } from '../reducers/authReducer'
// import { notesReducer } from '../reducers/notesReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



export const store = createStore(
    rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeEnhancers(
        applyMiddleware( thunk )
    )
)
