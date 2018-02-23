import React from 'react'
import expect from 'expect'
import { mountWithProvider } from 'tests/helpers'
import Paper from 'material-ui/Paper'

import Main from './Main'
import { Modal } from 'components'

describe('<Main />', () => {
  it('renders without crashing', () => {
    mountWithProvider(<Main />)
  })

  it('renders the code', () => {
    const wrapper = mountWithProvider(<Main />)

    expect(
      wrapper
        .find(Paper)
        .childAt(0)
        .childAt(0)
        .text()
    ).toBe('00 - 00 - 00')
  })

  it('renders the modal', () => {
    const wrapper = mountWithProvider(<Main />)

    expect(wrapper.find(Modal))
  })
})
