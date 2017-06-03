import { React, mount } from 'helpers/test-helper'
import LazyRoute from 'components/LazyRoute'

describe('LazyRoute', () => {
  it('should render', () => {
    const component = mount(
      <LazyRoute
        getComponent={() => new Promise(() => {})}
      />
    )

    expect(component).toMatchSnapshot()
  })
})
