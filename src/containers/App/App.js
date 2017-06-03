import React from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import LazyRoute from 'components/LazyRoute'
import './App.css'

const App = () =>
  <BrowserRouter>
    <div className="App">
      <h1 className="App__title">react-app-boilerplate</h1>

      <div className="App__navigation">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="App__contents">
        <Switch>
          <LazyRoute
            exact
            path="/"
            getComponent={() =>
              import('containers/Home' /* webpackChunkName: "Home" */)
            }
          />
          <LazyRoute
            path="/about"
            getComponent={() =>
              import('containers/About' /* webpackChunkName: "About" */)
            }
          />
        </Switch>
      </div>
    </div>
  </BrowserRouter>

export default App
