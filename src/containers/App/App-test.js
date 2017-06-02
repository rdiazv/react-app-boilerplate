import { React, mount } from 'helpers/test-helper'
import App from 'containers/App'

describe('App', () => {
  it('should render', () => {
    const component = mount(<App />)

    expect(component).toMatchSnapshot()
  })
})
