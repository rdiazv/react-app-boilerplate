import React from 'react'
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import Home from 'containers/Home'
import About from 'containers/About'
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
          <Route
            component={Home}
            exact
            path="/"
          />
          <Route
            component={About}
            path="/about"
          />
        </Switch>
      </div>
    </div>
  </BrowserRouter>

export default App
