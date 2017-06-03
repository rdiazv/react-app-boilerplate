import { React, mount } from 'helpers/test-helper'
import Lazy from 'components/Lazy'

const getComponent = props =>
  mount(
    <Lazy
      getComponent={() => new Promise(() => {})}
      {...props}
    />
  )

describe('Lazy', () => {
  describe('componentWillMount()', () => {
    it('should invoke loadComponent passing props.getComponent', () => {
      const callback = () => Promise.resolve({})
      const component = getComponent({
        getComponent: callback,
      })
      const instance = component.instance()

      instance.loadComponent = jest.fn()
      instance.componentWillMount()

      expect(instance.loadComponent).toHaveBeenCalledTimes(1)
      expect(instance.loadComponent).toHaveBeenCalledWith(callback)
    })
  })

  describe('componentWillReceiveProps(nextProps)', () => {
    describe('if props.getComponent changed', () => {
      it('should invoke loadComponent passing nextProps.getComponent', () => {
        const component = getComponent()
        const instance = component.instance()
        const callback = jest.fn()

        instance.loadComponent = jest.fn()
        component.setProps({
          getComponent: callback,
        })

        expect(instance.loadComponent).toHaveBeenCalledTimes(1)
        expect(instance.loadComponent).toHaveBeenCalledWith(callback)
      })
    })

    describe('if props.getComponent do not change', () => {
      it('should not invoke loadComponent', () => {
        const callback = () => Promise.resolve({})
        const component = getComponent({
          getComponent: callback,
        })
        const instance = component.instance()

        instance.loadComponent = jest.fn()
        component.setProps({
          getComponent: callback,
        })

        expect(instance.loadComponent).not.toHaveBeenCalled()
      })
    })
  })

  describe('loadComponent(getComponent)', () => {
    it('should invoke getComponent', () => {
      const component = getComponent()
      const instance = component.instance()
      const callback = jest.fn(() => new Promise(() => {}))

      instance.loadComponent(callback)

      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('should assign the module default export to state.component', () => {
      const component = getComponent()
      const instance = component.instance()
      const promise = new Promise(resolve => {
        resolve({ default: 'div' })
        expect(component).toHaveState('component', 'div')
      })

      instance.loadComponent(() => promise)

      return promise
    })

    it('should set state.loading while the promise is resolving', () => {
      const component = getComponent()
      const instance = component.instance()
      const promise = new Promise(resolve => {
        setTimeout(() => resolve({ default: 'div' }), 1)
        expect(component).toHaveState('loading', false)
      })

      instance.loadComponent(() => promise)

      setTimeout(() => {
        expect(component).toHaveState('loading', true)
      })

      return promise
    })
  })

  describe('if state.loading', () => {
    it('should render props.loadingComponent', () => {
      const component = getComponent({
        loadingComponent: <div>LOADING</div>,
      })

      component.setState({ loading: true })

      expect(component).toMatchSnapshot()
    })
  })

  describe('if not state.loading and state.component', () => {
    it('should render state.component passing all extra props', () => {
      const component = getComponent({
        extra1: 'someExtraProp1',
        extra2: 'someExtraProp2',
      })

      const SomeComponent = () => <div />

      component.setState({
        loading: false,
        component: SomeComponent,
      })

      expect(component).toMatchSnapshot()
    })
  })

  describe('if not state.loading and not state.component', () => {
    it('should render nothing', () => {
      const component = getComponent()

      component.setState({
        loading: false,
        component: null,
      })

      expect(component).toMatchSnapshot()
    })
  })
})
