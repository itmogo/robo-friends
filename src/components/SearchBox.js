import React from 'react';

// add searchChange event function created in App component
// then add the event in the search input field as onchange

const SearchBox = ({searchfield, searchChange}) => {
	return (

		// returns input search for robots


		<div className='pa2'>

					<input 

					className='pa3 ba b--green bg-lighttest-blue'
					
					type='search' 

					placeholder='search robots' 

					onChange={searchChange}


					/>

		</div>

	);
}


export default SearchBox;