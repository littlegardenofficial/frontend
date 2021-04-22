import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import rootReducer from "./reducers/rootReducer";
import rootSaga from '../saga/rootSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer , applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default  store;