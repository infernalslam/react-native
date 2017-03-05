import React from 'react'
import Home from './components/Home'

import { Router, Scene } from 'react-native-router-flux'

class App extends React.Component {
  render () {
    return (
      <Router style={{paddingTop: 64}}>
        <Scene key='root'>
          <Scene key='home' component={Home} title='Home' />
        </Scene>
      </Router>
    )
  }
}

export default App
