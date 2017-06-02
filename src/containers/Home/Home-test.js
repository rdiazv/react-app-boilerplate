import { React, mount } from 'helpers/test-helper'
import Home from 'containers/Home'

describe('Home', () => {
  it('should render', () => {
    const component = mount(<Home />)

    expect(component).toMatchSnapshot()
  })
})
