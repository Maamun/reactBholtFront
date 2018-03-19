import React from 'react'
import { string } from 'prop-types'
const ShowCard = props => (
   <div className="show-card">
      <img src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Card`} />
      <div>
         <h2>{props.title}</h2>
         <h3>{props.year}</h3>
         <p>{props.description}</p>
         <p>{props.foo}</p>

      </div>
   </div>
)
ShowCard.defaultProps = {
   foo: 'stuff'
}
ShowCard.propTypes = {
   poster: string.isRequired,
   title: string.isRequired,
   year: string.isRequired,
   description: string.isRequired,
   foo: string.isRequired
}
export default ShowCard
