import React, { useState } from 'react';
// import { SmurfContext } from '../contexts/SmurfContext';

function SmurfForm(props) {
  // const smurfer = useContext(SmurfContext);
  // const { addSmurf } = useContext(SmurfContext);
  const smurfa = {
    name: '', 
    age: '',
    height: ''
  }

  const [newSmurf, addNewSmurf] = useState(smurfa)
  // console.log(newSmurf)

  const handleInputChange = e => {
    addNewSmurf({ 
     ...newSmurf, 
     [e.target.name]: e.target.value 
    });
    console.log(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf, props.smurf);
  }
 

    return (
      <div className="smurfForm">
        <form onSubmit={handleSubmit}>
          <p>
            <input
              onChange={handleInputChange}
              placeholder="name"
              value={props.name}
              name="name"
              type='text'
            />
          </p>
          <p>
            <input
              onChange={handleInputChange}
              placeholder="age"
              value={props.age}
              name="age"
              type='text'
            />
          </p>
          <p>
            <input
              onChange={handleInputChange}
              placeholder="height"
              value={props.height}
              name="height"
              type='text'
            />
          </p>
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
}

export default SmurfForm;
