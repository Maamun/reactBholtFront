import React from 'react'
import { render } from 'react-dom'

const app = document.querySelector('#app')

const App = () => (
   <div className="app">
      <div className="landing">
         <h1>svideo</h1>
         <input type="text" placeholder="search" />
         <a>or Browse All</a>
      </div>
   </div>
)

render(<App />, app)
