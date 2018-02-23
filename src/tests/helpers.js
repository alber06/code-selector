import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Api from 'api/api-service'

const middlewares = [thunk.withExtraArgument(Api)]
const mockStore = configureMockStore(middlewares)
const store = mockStore({
  codes: { codes: { chapter: [], heading: [], subheading: [] } },
})

export function mountWithProvider(node) {
  return mount(
    <MuiThemeProvider>
      <Provider store={store}>{node}</Provider>
    </MuiThemeProvider>
  )
}
