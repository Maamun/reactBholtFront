import React from 'react'
import { shallow } from 'enzyme'
import Search from '../Search'
import ShowCard from '../ShowCard'
import preload from '../../data.json'

// console.log(process.env.NODE_ENV)

xtest('Search renders correctly', () => {
   const component = shallow(<Search />)
   expect(component).toMatchSnapshot()
})
test('Search should render correct amount of shows ', () => {
   const component = shallow(<Search />)
   expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})
test('Search hould render correct amount of shows based on search term', () => {})
