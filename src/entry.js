import React from 'react'
import ReactDOM from 'react-dom'

const App = () =>
  <div>react-app-boilerplate</div>

ReactDOM.render(
  <App />,
  document.getElementById('app-root'),
)

if (module.hot) {
  module.hot.accept()
}
