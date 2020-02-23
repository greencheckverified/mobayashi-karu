import { combineReducers, compose, createStore } from 'redux';
import { ApplicationState, reducers } from './';

export default function configureStore(initialState?: ApplicationState) {   
    const rootReducer = combineReducers({
        ...reducers
    });

    const enhancers = [];
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(
        rootReducer,
        initialState,
        compose(...enhancers)
    );
}
