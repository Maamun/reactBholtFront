import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

const color = '#666'
const Wrapper = styled.div`
width: 30%;
border: 5px solid ${color};
border-radius: 3px;
padding-right: 10px;
overflow: hidden;
`
const Img = styled.img`
width: 46%;
float: left;
margin-right: 10px;

`
const ShowCard = props => (
   <Wrapper>
      <Img src={`/public/img/posters/${props.poster}`} alt={`${props.title} Show Card`} />
      <div>
         <h2>{props.title}</h2>
         <h3>{props.year}</h3>
         <p>{props.description}</p>
         <p>{props.foo}</p>
         <p>Test for enzyme</p>
      </div>
   </Wrapper>
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
