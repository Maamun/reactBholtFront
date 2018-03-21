import React, { Component } from 'react'
import ShowCard from './ShowCard'
import preload from '../data.json'

class Search extends Component {
   state = {
      searchTerm: ''
   }

   handleSearchTermChange = event => {
      this.setState({
         searchTerm: event.target.value
      })
   }
   render() {
      return (
         <div className="search">
            <header>
               <h1>React V3</h1>
               <input
                  onChange={this.handleSearchTermChange}
                  value={this.state.searchTerm}
                  type="text"
                  placeholder="Search"
               />
            </header>
            <div>
               {preload.shows
                  .filter(show =>
                     `${show.title} ${show.description}`
                        .toUpperCase()
                        .includes(this.state.searchTerm.toUpperCase())
                  )
                  .map(show => <ShowCard key={show.imbdID} {...show} />)}
            </div>
         </div>
      )
   }
}

export default Search
