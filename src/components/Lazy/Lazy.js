import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Lazy extends PureComponent {
  static propTypes = {
    getComponent: PropTypes.func.isRequired,
    loadingComponent: PropTypes.node,
  }

  static defaultProps = {
    loadingComponent: null,
  }

  state = {
    loading: false,
    component: null,
  }

  componentWillMount() {
    this.loadComponent(this.props.getComponent)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.getComponent !== nextProps.getComponent) {
      this.loadComponent(nextProps.getComponent)
    }
  }

  loadComponent = getComponent => {
    let resolved = false

    setTimeout(() => {
      if (!resolved) {
        this.setState({ loading: true })
      }
    })

    getComponent().then(module => {
      resolved = true

      this.setState({
        loading: false,
        component: module.default,
      })
    })
  }

  render() {
    const { loadingComponent, ...props } = this.props

    delete props.getComponent

    if (this.state.loading) {
      return loadingComponent
    }

    if (this.state.component) {
      return <this.state.component {...props} />
    }

    return null
  }
}
