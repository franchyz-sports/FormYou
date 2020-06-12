import rootReducer from './reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware))
)

store.subscribe(() => console.log(store.getState()));

export default store
