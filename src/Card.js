import React from 'react';

const Card = ({name, email, id}) => {// destruction

	//using destruction
	// const { name, email, id } = props;	
	
	return (

		<div className='tc bg-light-green dib br3 pas3 ma3 grow bw2 shadow-5'>
			<img alt='robots' 
			     src={`https://robohash.org/${id}?100x100`} 
				 
				 />
			<div>
			
				<h2> {name} </h2>
				 <p>{email}</p>

			</div>
		</div>
	);
}

export default Card;

