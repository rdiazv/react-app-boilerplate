import React from 'react'
import { mount as _mount } from 'enzyme'
import PropTypes from 'prop-types'
import createHistory from 'history/createMemoryHistory'
import deepAssign from 'deep-assign'

export const mount = (node, options = {}) =>
  _mount(node, deepAssign({
    context: {
      router: {
        history: createHistory(),
      },
    },
    childContextTypes: {
      router: PropTypes.object,
    },
  }, options))

export {
  React,
}
