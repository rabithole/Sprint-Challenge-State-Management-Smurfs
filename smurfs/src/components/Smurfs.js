import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

// Components
import Smurf from './Smurf';

const Smurfs = () => {
	const { smurf } = useContext(SmurfContext);
	console.log(smurf[0]);
	return (
		<div className="smurf-container">
			{smurf.map(item => (
				<Smurf
					name={item.name}
	                id={item.id}
	                age={item.age}
	                height={item.height}
	                key={item.id}
				/>
			))}
		</div>
	);
};

export default Smurfs;
