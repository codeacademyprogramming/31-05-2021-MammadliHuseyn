import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './weather/reducer';

export const store = createStore(
    reducer,
    applyMiddleware(
        logger,
        thunk
    )
);