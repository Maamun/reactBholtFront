import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'
import Landing from './landing'
const app = document.querySelector('#app')

const App = () => (
   <HashRouter>
      <div className="app">
         <Route exact path="/" component={Landing} />
      </div>
   </HashRouter>
)

render(<App />, app)
