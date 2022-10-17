// import React from 'react';
// import Card from './Card';

// // import robots as a props
// //because card is being imported

// const CardList = ( {robots} ) =>{

// 	//creating a loop using the map function
// 	// this works on one cardComponent

// 			const cardComponent = robots.map((user, i) => {

// 				// use key id to track use card 
// 				// it helps to track which card is deleted

// 				return < 
// 				Card  
// 				key={i} 
// 				id={robots[i].id} 
// 				name={robots[i].name} 
// 			    email={robots[i].email} 

// 			    />
// 			})
// 				//return the cardComponent function

// 			return (

// 					<div>
// 						{cardComponent}		 
// 				    </div>
// 				);
// 	}

// 		export default CardList;



// simplifying the code above
import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

			return (// this is the main card return
					// remember to rap returns in div tags
				<div>
					{
						robots.map((user, i) => {
							return ( // this is loop return of cards

								<Card
								key={i}
								id={robots[i].id}
								name={robots[i].name}
								email={robots[i].email}
								/>
								);
						}	)
					}

				</div>
			);	
		}

export default CardList;
