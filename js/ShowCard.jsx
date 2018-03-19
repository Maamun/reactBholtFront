import React from 'react'

const ShowCard = props => (
   <div className="show-card">
      <img src={`/public/img/posters/${props.show.poster}`} alt={`${props.show.title} Show Card`} />
      <div>
         <h2>{props.show.title}</h2>
         <h3>{props.show.year}</h3>
         <p>{props.show.description}</p>

      </div>
   </div>
)

export default ShowCard
