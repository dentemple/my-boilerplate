import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { routerMiddleware } from 'react-router-redux'

import history from '../util/history'
import reducers from '../reducers'

function configureStore(preloadedState) {
  const middlewares = [thunk, routerMiddleware(history)]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const storeEnhancers = [middlewareEnhancer]
  const composedEnhancer = composeWithDevTools(...storeEnhancers)

  const store = createStore(reducers, preloadedState, composedEnhancer)

  // Extends Hot Module Reloading to the Redux store
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        const newreducers = require('../reducers').default
        store.replaceReducer(newreducers)
      })
    }
  }

  return store
}

export default configureStore
