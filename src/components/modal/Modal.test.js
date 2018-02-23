import React from 'react'
import { shallow } from 'enzyme'
import expect from 'expect'

import Modal from './Modal'

describe('<Modal />', () => {
  const codes = {
    chapter: [
      { value: '01', description: 'desc01' },
      { value: '02', description: 'desc02' },
    ],
    heading: [
      { value: '01', description: 'desc01' },
      { value: '02', description: 'desc02' },
    ],
    subheading: [
      { value: '01', description: 'desc01' },
      { value: '02', description: 'desc02' },
    ],
  }

  it('renders without crashing', () => {
    shallow(
      <Modal open={true} codes={{}} onToggle={() => {}} onChange={() => {}} />
    )
  })

  it('renders three tabs', () => {
    const wrapper = shallow(
      <Modal open={true} codes={{}} onToggle={() => {}} onChange={() => {}} />
    )

    expect(wrapper.childAt(0).children()).toHaveLength(3)
  })

  it('renders the codes passed', () => {
    const wrapper = shallow(
      <Modal
        open={true}
        codes={codes}
        onToggle={() => {}}
        onChange={() => {}}
      />
    )

    expect(
      wrapper
        .childAt(0)
        .childAt(0)
        .children()
    ).toHaveLength(2)
  })

  it('only has the first tab enabled', () => {
    const wrapper = shallow(
      <Modal open={true} codes={{}} onToggle={() => {}} onChange={() => {}} />
    )

    expect(
      wrapper
        .childAt(0)
        .childAt(0)
        .prop('disabled')
    ).toBeFalsy()
    expect(
      wrapper
        .childAt(0)
        .childAt(1)
        .prop('disabled')
    ).toBeTruthy()
    expect(
      wrapper
        .childAt(0)
        .childAt(2)
        .prop('disabled')
    ).toBeTruthy()
  })

  it('enabled second tab when chapter is selected', () => {
    const wrapper = shallow(
      <Modal
        open={true}
        codes={codes}
        onToggle={() => {}}
        onChange={() => {}}
      />
    )

    wrapper
      .childAt(0)
      .childAt(0)
      .childAt(0)
      .simulate('click')

    expect(
      wrapper
        .childAt(0)
        .childAt(0)
        .prop('disabled')
    ).toBeFalsy()
    expect(
      wrapper
        .childAt(0)
        .childAt(1)
        .prop('disabled')
    ).toBeFalsy()
    expect(
      wrapper
        .childAt(0)
        .childAt(2)
        .prop('disabled')
    ).toBeTruthy()
  })

  it('enabled second tab when chapter is selected', () => {
    const wrapper = shallow(
      <Modal
        open={true}
        codes={codes}
        onToggle={() => {}}
        onChange={() => {}}
      />
    )

    wrapper
      .childAt(0)
      .childAt(0)
      .childAt(0)
      .simulate('click')
    wrapper
      .childAt(0)
      .childAt(1)
      .childAt(0)
      .simulate('click')

    expect(
      wrapper
        .childAt(0)
        .childAt(0)
        .prop('disabled')
    ).toBeFalsy()
    expect(
      wrapper
        .childAt(0)
        .childAt(1)
        .prop('disabled')
    ).toBeFalsy()
    expect(
      wrapper
        .childAt(0)
        .childAt(2)
        .prop('disabled')
    ).toBeFalsy()
  })
})
