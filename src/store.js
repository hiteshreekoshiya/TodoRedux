import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;
