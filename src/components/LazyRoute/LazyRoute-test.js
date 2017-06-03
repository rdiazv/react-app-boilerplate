import { React, mount } from 'helpers/test-helper'
import LazyRoute from 'components/LazyRoute'

describe('LazyRoute', () => {
  it('should render', () => {
    expect(() =>
      mount(
        <LazyRoute
          getComponent={() => new Promise(() => {})}
        />
      )
    ).not.toThrow()
  })
})
