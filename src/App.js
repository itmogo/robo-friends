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
// this enables robots to be assessed using this.state.robots



class App extends Component{
 constructor(){
 	super()
 	this.state={
 		robots: [], // what to use api 
 		searchfield: ' '
 	}
 }

 // what to api
 // lifecycle of component
 	componentDidMount(){
		// console.log(check);
		//api fetch
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users => this.setState({robots: users}));	
		// .then(users => {});	 // loading so wait	
	}


//now we create an event - onsearchchange function to respond to search input 
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
		// adding a loading if statement in case there is a delay
		if(this.state.robots.length === 0){
			return <h1>Loading so wait...</h1>
		} else {

				return (

				<div className='tc'>
					<h1 className='f1' > RoboFriends </h1>
					<SearchBox   searchChange={this.onSearchChange} />
					
					<CardList robots={filteredRobots} />
				</div>
			);
		}
	}
	
}

export default App;