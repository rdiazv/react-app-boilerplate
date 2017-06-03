import React from 'react'
import { mount as _mount } from 'enzyme'
import PropTypes from 'prop-types'
import createHistory from 'history/createMemoryHistory'
import deepAssign from 'deep-assign'

const computeMatch = pathname => ({
  path: '/',
  url: '/',
  params: {},
  isExact: pathname === '/',
})

export const createRouter = options => {
  const history = createHistory(options)

  return {
    history,
    route: {
      location: history.location,
      match: computeMatch(history.location.pathname),
    },
  }
}

export const mount = (node, options = {}) =>
  _mount(node, deepAssign({
    context: {
      router: createRouter(),
    },
    childContextTypes: {
      router: PropTypes.object,
    },
  }, options))

export {
  React,
}
