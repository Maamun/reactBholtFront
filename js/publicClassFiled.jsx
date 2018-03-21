import React, { Component } from 'react'
import ShowCard from './ShowCard'
import preload from '../data.json'

class Search extends Component {
   constructor(props) {
      super(props)
      this.state = {
         searchTerm: 'Search for a bug'
      }
   }
   handleSearchTermChange(event) {
      this.setState({
         searchTerm: event.target.value
      })
   }
   /*
   // by getting rid of the constructor and using the public class fields, 
   we can get rid of the bind "...by not creating the handleClick method 
   on the prototype and putting it on the instance."
   1- first way to bind the right context is to bind the hander inside 
   the constructor:
   class Search extends Component {
   constructor(props) {
      super(props)
      this.state = {
         searchTerm: 'Search for a bug'
      }
      // like this 
      this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
   }
   2 - second way is to use the public class field like this : 
   

   class Search extends Component {
   // the contructor looks like the default construcot so we get rid of it  
      this.state = {
         searchTerm: 'Search for a bug'
   }
this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
}

3- we can do a little bit better by not creating the handler on the prototype and just having it on yhe instnace 
class Search extends Component {
      this.state = {
         searchTerm: 'Search for a bug'
   }
// like this :
handleSearchTermChange = function(event) {
      this.setState({
         searchTerm: event.target.value
      })
}.bind(this) <----- we bind it here
4 - get rid of bind by using the lexical this that arrow functions give is

class Search extends Component {
      this.state = {
         searchTerm: 'Search for a bug'
   }
handleSearchTermChange = (event) => {
      this.setState({
         searchTerm: event.target.value
      })
}

   */
   render() {
      return (
         <div className="search">
            <header>
               <h1>React V3</h1>
               <input
                  /* bad way is to bind the context inside the props like this : 
                  onChange={this.handleSearchTermChange.bind(this)}
                  */
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
