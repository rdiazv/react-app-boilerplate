import { React, mount } from 'helpers/test-helper'
import App from 'components/App'

describe('App', () => {
  it('should render', () => {
    const component = mount(<App />)

    expect(component).toMatchSnapshot()
  })
})
