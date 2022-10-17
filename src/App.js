import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';


//defining a state - describe what our app is about
// state can change and affect our app -like 
// display the search input and renders the filtered result
// list of robots and search box

// to create a state 
//first we need an constructor function
// with a super () class holding the state
// this enbles robots to be assessed using this.state.robots



class App extends Component{
 constructor(){
 	super()
 	this.state={
 		robots: robots,
 		searchfield: ''
 	}
 }


//now we creat an event - onsearchchange function to respond to search input 
// this event is now linked to the searchbox component as below
// using this.onSearchChange because it is a class component
// then move to searchBox component and add as function
// remember that the event needs a target value
//
// anytime you create your own event function us arrow function method
// show below 

onSearchChange = (event) => {

	// to update state use setstate - so that seachfield is not
	// empty as show above

	this.setState({searchfield: event.target.value})



	

	// use console log message for test purposes only after delete
		// console.log(event.target.value);
		//console.log(filteredRobots);
}
	render(){
		// we need filteredrobots to be displayed
		const filteredRobots = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	} )

		return (

				<div className='tc'>
					<h1 className='f1' > RoboFriends </h1>
					<SearchBox   searchChange={this.onSearchChange} />
					
					<CardList robots={filteredRobots} />
				</div>
			);
	}
	
}

export default App;