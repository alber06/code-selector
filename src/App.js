import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import thunk from 'redux-thunk'
import createHistory from 'history/createHashHistory'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import reducers from 'reducers'
import Api from 'api/api-service'

import Main from 'containers/main/Main'

const history = createHistory({
  basename: '',
})

const routerMiddlewareInstance = routerMiddleware(history)

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(Api), routerMiddlewareInstance)
  )
)

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/main" component={Main} />
              <Redirect to="/main" />
            </Switch>
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

export default App
