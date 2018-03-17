import React from 'react'
import { render } from 'react-dom'
const app = document.querySelector('#app')

const MyTitle = function(props) {
   const style = { color: props.color }

   return (
      /*  Pre-babel 
       React.createElement('h1', null, props.title)
       
       */

      //Post-babel
      <h1 style={style}>{props.title}</h1>
   )
}

const MyFirstComponent = function() {
   return (
      <div id="my-first-component">
         <MyTitle title="Game of Thrones" color="FUCHSIA" />
         <MyTitle title="Breaking Bad" color="LIGHTCORAL" />

         <MyTitle title="Lost" color="MEDIUMSPRINGGREEN" />

         <MyTitle title="Silicon Valley" color="MEDIUMSLATEBLUE" />

         {/* ce(MyTitle, { title: 'Silicon Valley', color: 'MEDIUMSLATEBLUE' }) 
         without JSX
         */}
      </div>
   )
}

render(<MyFirstComponent />, app)
