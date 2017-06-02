import { React, mount } from 'helpers/test-helper'
import About from 'containers/About'

describe('About', () => {
  it('should render', () => {
    const component = mount(<About />)

    expect(component).toMatchSnapshot()
  })
})
