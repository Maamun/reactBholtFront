import React from 'react'
import { render } from 'react-dom'
const ce = React.createElement

const MyTitle = function(props) {
   return ce('div', null, ce('h1', { style: { color: props.color } }, props.title))
}

const MyFirstComponent = function() {
   return ce(
      'div',
      { id: 'my-first-component' },
      ce(MyTitle, { title: 'Game of Thrones', color: 'FUCHSIA' }),
      ce(MyTitle, { title: 'Breaking Bad', color: 'LIGHTCORAL' }),
      ce(MyTitle, { title: 'Lost', color: 'MEDIUMSPRINGGREEN' }),
      ce(MyTitle, { title: 'Silicon Valley', color: 'MEDIUMSLATEBLUE' })
   )
}

render(ce(MyFirstComponent), document.getElementById('app'))
