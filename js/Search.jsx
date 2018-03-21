import React, { Component } from 'react'
import ShowCard from './ShowCard'
import preload from '../data.json'

class Search extends Component {
   constructor(props) {
      super(props)
      this.state = {
         searchTerm: 'Search for a bug'
      }
      this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
   }
   handleSearchTermChange(event) {
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
               {preload.shows.map(show => <ShowCard key={show.imbdID} {...show} />)}
            </div>
         </div>
      )
   }
}

export default Search
