import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './landing'
import Search from './Search'
const app = document.querySelector('#app')
const FourOhFour = () => <h1>404</h1>
const App = () => (
   <BrowserRouter>
      <div className="app">
         <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={Search} />
            <Route path="path" component={FourOhFour} />
         </Switch>
      </div>
   </BrowserRouter>
)
render(<App />, app)
