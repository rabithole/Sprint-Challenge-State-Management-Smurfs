import React from 'react';

const Smurf = props => {
	return (
		<div className="smurf">
			<h2>{props.name}</h2>
      		<h3>{props.height} tall</h3>
     		<h3>{props.age} smurf years old</h3>
		</div>
	);
};

export default Smurf;
