import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Lazy from 'components/Lazy'

export default class LazyRoute extends PureComponent {
  static propTypes = {
    getComponent: PropTypes.func.isRequired,
  }

  render() {
    const { getComponent, ...other } = this.props

    return (
      <Route
        {...other}
        render={props =>
          <Lazy
            {...props}
            getComponent={getComponent}
          />
        }
      />
    )
  }
}
