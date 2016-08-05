import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import reducer from './reducers';


// Create a logger.
const logger = createLogger();

// Export our store with the applied middlewares.
const store = createStore(reducer, applyMiddleware(thunk, promise, logger));
export default store;
