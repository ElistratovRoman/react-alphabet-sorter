import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Demo from './Demo.js'

const render = () => ReactDOM.render(
  <AppContainer>
    <Demo/>
  </AppContainer>,
  document.getElementById('demo')
)

render(Demo)

if (module.hot) {
  module.hot.accept('./Demo.js', () => render(Demo))
}
