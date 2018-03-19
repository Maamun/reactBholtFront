import React from 'react'
import { shape, string } from 'prop-types'
const ShowCard = props => (
   <div className="show-card">
      <img src={`/public/img/posters/${props.show.poster}`} alt={`${props.show.title} Show Card`} />
      <div>
         <h2>{props.show.title}</h2>
         <h3>{props.show.year}</h3>
         <p>{props.show.description}</p>
         <p>{props.show.foo}</p>

      </div>
   </div>
)
ShowCard.defaultProps = {
   foo: 'stuff'
}
ShowCard.propTypes = {
   show: shape({
      poster: string.isRequired,
      title: string.isRequired,
      year: string.isRequired,
      description: string.isRequired
   }).isRequired,
   foo: string.isRequired
}
export default ShowCard
